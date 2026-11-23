"""Cut, straighten and clean the pictures of a scanned book for the flip-book reader.

Optional asset-prep tool (the site build itself needs only Node). Needs Python 3 with
OpenCV + NumPy:   python3 -m venv .venv && .venv/bin/pip install opencv-python-headless numpy

usage:  .venv/bin/python scripts/book-images.py <book>          e.g.  mirador
        (reads src/data/books/pages/<book>.json and the flattened page photos)

Steps for every page:
  1. the page photo is already flattened to an A4 sheet (flat/<id>.jpg, made by rectify)
Steps for every picture on the page (items with "type": "pic"):
  2. crop its rough box (+ a margin), paint out printed labels / lines listed in "inpaint"
  3. snap to the real picture edge ("refine"), level any slight rotation
  4. shape: rect (straight crop), ellipse (fitted oval, see-through outside), free (traced outline)
  5. clean: remove noise and dust specks, lift the plastic-sleeve haze, gentle sharpening
  6. save <name>.webp (max 1600 px) and <name>-sm.webp (800 px) in
     public/assets/images/library/<slug>/, and the final boxes in <book>.pics.json
"""
import json, os, sys
import cv2
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
book = sys.argv[1]
flat_dir = sys.argv[2] if len(sys.argv) > 2 else None
_js = os.path.join(ROOT, 'src', 'data', 'books', 'pages', book + '.js')
if os.path.exists(_js):  # layouts written as JS are read through Node
    import subprocess
    spec = json.loads(subprocess.check_output(['node', '-e', 'process.stdout.write(JSON.stringify(require(process.argv[1])))', _js]))
else:
    spec = json.load(open(os.path.join(ROOT, 'src', 'data', 'books', 'pages', book + '.json')))
ONLY = os.environ.get('BOOK_ONLY')  # optional: comma-separated page ids to redo
OUT = os.path.join(ROOT, 'public', 'assets', 'images', 'library', spec['slug'])
os.makedirs(OUT, exist_ok=True)
DEBUG = os.environ.get('BOOK_DEBUG')  # folder for before/after previews


def px(box, W, H):
    return [int(round(box[0] * W / 100)), int(round(box[1] * H / 100)), int(round(box[2] * W / 100)), int(round(box[3] * H / 100))]


def paint_out(page, rules, W, H):
    """Inpaint printed labels and guide lines (they are re-set as live text / SVG on the web page)."""
    gray = cv2.cvtColor(page, cv2.COLOR_BGR2GRAY)
    hsv = cv2.cvtColor(page, cv2.COLOR_BGR2HSV)
    mask = np.zeros(gray.shape, np.uint8)
    for r in rules or []:
        if isinstance(r, list):
            r = {'box': r, 'mode': 'dark'}
        area = np.zeros_like(mask)
        if 'box' in r:
            x0, y0, x1, y1 = px(r['box'], W, H)
            area[y0:y1, x0:x1] = 255
        else:
            (ax, ay), (bx, by) = r['line']
            cv2.line(area, (int(ax * W / 100), int(ay * H / 100)), (int(bx * W / 100), int(by * H / 100)), 255, 22)
        mode = r.get('mode', 'dark')
        if mode == 'dark':
            # printed lettering: near-black, thin strokes (mosaic cracks are lighter)
            bh = cv2.morphologyEx(gray, cv2.MORPH_BLACKHAT, np.ones((17, 17), np.uint8))
            sel = (gray < 85) & (bh > 35)
        elif mode == 'light':
            sel = gray > 150
        else:  # yellow guide lines
            sel = (hsv[..., 0] > 12) & (hsv[..., 0] < 38) & (hsv[..., 1] > 70) & (hsv[..., 2] > 110)
        mask |= (area > 0) & sel
    if not mask.any():
        return page
    mask = cv2.dilate(mask.astype(np.uint8) * 255, np.ones((3, 3), np.uint8), iterations=3)
    return patch_fill(page, mask)


def patch_fill(page, mask):
    """Fill each masked blob with real texture from right beside it (seamless clone), so
    mosaic and photos keep their grain instead of getting a smooth blur."""
    out = cv2.inpaint(page, mask, 5, cv2.INPAINT_TELEA)
    H, W = mask.shape
    blobs = cv2.dilate(mask, np.ones((25, 25), np.uint8))  # letters of one word -> one blob
    n, lab, st, _ = cv2.connectedComponentsWithStats(blobs)
    for i in range(1, n):
        x, y, w, h = st[i, :4]
        m = ((lab[y:y + h, x:x + w] == i) & (mask[y:y + h, x:x + w] > 0)).astype(np.uint8) * 255
        m = cv2.dilate(m, np.ones((5, 5), np.uint8))
        best = None
        for dx, dy in ((0, -(h + 8)), (0, h + 8), (-(w + 8), 0), (w + 8, 0)):
            sx, sy = x + dx, y + dy
            if sx < 0 or sy < 0 or sx + w > W or sy + h > H:
                continue
            overlap = (mask[sy:sy + h, sx:sx + w] > 0).mean()
            if best is None or overlap < best[0]:
                best = (overlap, sx, sy)
        if best is None or best[0] > 0.05 or w < 8 or h < 8:
            continue
        _, sx, sy = best
        src = out.copy(); src[y:y + h, x:x + w] = out[sy:sy + h, sx:sx + w]
        full = np.zeros(mask.shape, np.uint8); full[y:y + h, x:x + w] = m
        try:
            out = cv2.seamlessClone(src, out, full, (x + w // 2, y + h // 2), cv2.NORMAL_CLONE)
        except cv2.error:
            pass
    return out


def paper_colour(page):
    g = cv2.cvtColor(page, cv2.COLOR_BGR2GRAY)
    sel = g > np.percentile(g, 70)
    return np.median(page[sel], axis=0)


def figure_mask(crop, paper):
    diff = np.abs(crop.astype(np.int16) - paper.astype(np.int16)).max(axis=2)
    g = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY).astype(np.int16)
    m = ((diff > 34) | (g < paper.mean() - 30)).astype(np.uint8) * 255
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((15, 15), np.uint8))
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((9, 9), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(m)
    if n < 2:
        return None
    big = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA])
    comp = (lab == big).astype(np.uint8) * 255
    cnts, _ = cv2.findContours(comp, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    filled = np.zeros_like(comp)
    cv2.drawContours(filled, cnts, -1, 255, -1)
    return filled


def clean(img):
    """Denoise, remove specks, lift sleeve haze, mild sharpening — without inventing detail."""
    den = cv2.fastNlMeansDenoisingColored(img, None, 5, 5, 7, 21)
    # dust specks: tiny spots that differ strongly from their neighbourhood
    med = cv2.medianBlur(den, 5)
    spot = np.abs(den.astype(np.int16) - med.astype(np.int16)).max(axis=2) > 42
    spot = cv2.morphologyEx(spot.astype(np.uint8), cv2.MORPH_OPEN, np.ones((1, 1), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(spot)
    small = np.isin(lab, [i for i in range(1, n) if st[i, cv2.CC_STAT_AREA] < 30])
    den[small] = med[small]
    # haze: stretch each channel between its 0.4th and 99.6th percentile, but never more than 1.35x
    out = den.astype(np.float32)
    for c in range(3):
        lo, hi = np.percentile(out[..., c], [0.4, 99.6])
        gain = min(255.0 / max(hi - lo, 1), 1.35)
        out[..., c] = (out[..., c] - lo) * gain + lo * (1 - gain) * 0.35
    out = np.clip(out, 0, 255)
    blur = cv2.GaussianBlur(out, (0, 0), 1.6)
    out = np.clip(out * 1.45 - blur * 0.45, 0, 255)
    return out.astype(np.uint8)


def save(img, alpha, name):
    rgba = img if alpha is None else np.dstack([img, alpha])
    sizes = {}
    for suffix, width in (('', 1600), ('-sm', 800)):
        k = min(1.0, width / rgba.shape[1])
        im = cv2.resize(rgba, None, fx=k, fy=k, interpolation=cv2.INTER_AREA) if k < 1 else rgba
        cv2.imwrite(os.path.join(OUT, f'{name}{suffix}.webp'), im, [cv2.IMWRITE_WEBP_QUALITY, 84])
        sizes[suffix or 'full'] = [im.shape[1], im.shape[0]]
    return sizes


_old = os.path.join(ROOT, 'src', 'data', 'books', 'pages', book + '.pics.json')
result = json.load(open(_old)) if ONLY and os.path.exists(_old) else {}
for page_spec in spec['pages']:
    pid = page_spec['id']
    if ONLY and pid not in ONLY.split(','):
        continue
    page = cv2.imread(os.path.join(flat_dir, pid + '.jpg'))
    H, W = page.shape[:2]
    paper = paper_colour(page)
    rules = [r for it in page_spec['items'] if it['type'] == 'pic' for r in it.get('inpaint', [])]
    page = paint_out(page, rules, W, H)
    for it in page_spec['items']:
        if it['type'] != 'pic':
            continue
        pad = int(0.015 * W)
        x0, y0, x1, y1 = px(it['box'], W, H)
        X0, Y0, X1, Y1 = max(0, x0 - pad), max(0, y0 - pad), min(W, x1 + pad), min(H, y1 + pad)
        crop = page[Y0:Y1, X0:X1].copy()
        alpha = None
        shape = it.get('shape', 'rect')
        m = figure_mask(crop, paper) if it.get('refine', True) else None
        if m is not None and shape == 'rect':
            # rows / columns that are mostly picture; thin labels next to it never reach 55 %
            rows = (m > 0).mean(axis=1) > 0.55
            ys = np.flatnonzero(rows)
            if len(ys):
                run = max(np.split(ys, np.flatnonzero(np.diff(ys) > 3) + 1), key=len)
                by0, by1 = run[0], run[-1] + 1
                cols = (m[by0:by1] > 0).mean(axis=0) > 0.55
                xs = np.flatnonzero(cols)
                runx = max(np.split(xs, np.flatnonzero(np.diff(xs) > 3) + 1), key=len)
                bx0, bx1 = runx[0], runx[-1] + 1
                t = int(0.004 * max(bx1 - bx0, by1 - by0)) + 3   # trim the printed edge fringe
                bx0, by0, bx1, by1 = bx0 + t, by0 + t, bx1 - t, by1 - t
                crop = crop[by0:by1, bx0:bx1]
                x0, y0, x1, y1 = X0 + bx0, Y0 + by0, X0 + bx1, Y0 + by1
        elif m is not None:
            cnts, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
            c = max(cnts, key=cv2.contourArea)
            a = np.zeros(m.shape, np.uint8)
            if shape == 'ellipse':
                el = cv2.fitEllipse(c)
                el = (el[0], (el[1][0] * 0.982, el[1][1] * 0.982), el[2])  # stay just inside the printed rim
                cv2.ellipse(a, el, 255, -1, cv2.LINE_AA)
            else:
                a = cv2.erode(m, np.ones((3, 3), np.uint8))
            a = cv2.GaussianBlur(a, (0, 0), 1.2)
            bx, by, bw, bh = cv2.boundingRect(a)
            crop, alpha = crop[by:by + bh, bx:bx + bw], a[by:by + bh, bx:bx + bw]
            x0, y0, x1, y1 = X0 + bx, Y0 + by, X0 + bx + bw, Y0 + by + bh
        else:
            crop = page[y0:y1, x0:x1].copy()
        img = clean(crop)
        if it.get('degray'):  # fade out a grey watermark behind coloured/black line drawings
            g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY); sat = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)[..., 1]
            near_ink = cv2.dilate((g < 80).astype(np.uint8), np.ones((5, 5), np.uint8)) > 0
            wm = (sat < 40) & (g > 95) & ~near_ink
            img[wm] = np.maximum(img[wm], 235)
        if it.get('blend') == 'multiply':  # drawings on paper: make the paper pure white so it takes the page colour
            g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            wp = np.percentile(g, 85)
            img = np.clip(img.astype(np.float32) * (255.0 / max(wp, 1)), 0, 255).astype(np.uint8)
        sizes = save(img, alpha, it['name'])
        result[it['name']] = {
            'page': pid,
            'box': [round(float(100 * x0 / W), 2), round(float(100 * y0 / H), 2), round(float(100 * x1 / W), 2), round(float(100 * y1 / H), 2)],
            'size': sizes['full'], 'sm': sizes['-sm'], 'alpha': alpha is not None,
        }
        if DEBUG:
            os.makedirs(DEBUG, exist_ok=True)
            cv2.imwrite(os.path.join(DEBUG, f'{pid}-{it["name"]}-before.jpg'), page[Y0:Y1, X0:X1])
        print(pid, it['name'], result[it['name']]['box'], sizes['full'], 'alpha' if alpha is not None else '')

json.dump(result, open(os.path.join(ROOT, 'src', 'data', 'books', 'pages', book + '.pics.json'), 'w'), indent=1)
