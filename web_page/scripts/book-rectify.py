"""Find the white book page in a photo and warp it flat to an A4-shaped image (step 1 of the
book pipeline; scripts/book-images.py is step 2). Needs Python 3 + OpenCV (see book-images.py).

usage: book-rectify.py in.jpg out.jpg [debug.jpg] [manual corners]
  in.jpg must already be upright: convert the HEIC with scripts/heic-to-jpg.swift first.
  manual corners (when a photo fills the page edge to edge and detection fails): "x,y,x,y,x,y,x,y"
  for top-left, top-right, bottom-right, bottom-left, measured on a 1050 px wide preview.
  They are recorded per page as "corners" in src/data/books/pages/<book>.json."""
import sys, cv2, numpy as np
src = cv2.imread(sys.argv[1]); H, W = src.shape[:2]
k = 1000 / W; small = cv2.resize(src, None, fx=k, fy=k)
g = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY).astype(np.float32)
mu = cv2.blur(g, (21, 21)); sd = np.sqrt(np.maximum(cv2.blur(g * g, (21, 21)) - mu * mu, 0))
hsv = cv2.cvtColor(small, cv2.COLOR_BGR2HSV)
# paper: bright, grey-white and smooth; the tablecloth is stripy (high local contrast)
mask = ((mu > 150) & (sd < 9) & (hsv[..., 1] < 50)).astype(np.uint8) * 255
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((15, 15), np.uint8))
n, lab, st, _ = cv2.connectedComponentsWithStats(mask)
area = st[:, cv2.CC_STAT_AREA]; big = 1 + np.argmax(area[1:])
# join every sizeable paper region that sits in the same columns as the biggest one
bx0, bx1 = st[big, 0], st[big, 0] + st[big, 2]
keep = [i for i in range(1, n) if area[i] > 0.04 * area[big]]  # all sizeable paper pieces (photos can split the sheet)
comp = np.isin(lab, keep).astype(np.uint8) * 255
# fill holes (pictures on the page)
cnts, _ = cv2.findContours(comp, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
hull = cv2.convexHull(np.vstack(cnts))
# corners: simplify the paper outline to 4 points (falls back to the tightest rotated rectangle)
peri = cv2.arcLength(hull, True); poly = None
for eps in np.linspace(0.01, 0.12, 23):
    ap = cv2.approxPolyDP(hull, eps * peri, True)
    if len(ap) == 4 and cv2.contourArea(ap) > 0.93 * cv2.contourArea(hull) and cv2.isContourConvex(ap):
        poly = ap.reshape(4, 2).astype(np.float32); break
if poly is None:
    poly = cv2.boxPoints(cv2.minAreaRect(hull)).astype(np.float32)
s_ = poly.sum(1); d_ = poly[:, 0] - poly[:, 1]
tl, br = poly[np.argmin(s_)], poly[np.argmax(s_)]
tr, bl = poly[np.argmax(d_)], poly[np.argmin(d_)]
quad = np.array([tl, tr, br, bl]) / k
if len(sys.argv) > 4:  # manual corners, in preview (1050 px wide) coordinates: tl tr br bl
    q = [float(v) for v in sys.argv[4].split(',')]
    quad = np.array(q, np.float32).reshape(4, 2) * (W / 1050)  # preview is 1050 px wide
OW, OH = 2480, 3508  # A4 at 300 dpi
wq = (np.linalg.norm(quad[1] - quad[0]) + np.linalg.norm(quad[2] - quad[3])) / 2
hq = (np.linalg.norm(quad[3] - quad[0]) + np.linalg.norm(quad[2] - quad[1])) / 2
if wq > hq:  # landscape sheet
    OW, OH = OH, OW
M = cv2.getPerspectiveTransform(quad.astype(np.float32), np.float32([[0, 0], [OW, 0], [OW, OH], [0, OH]]))
out = cv2.warpPerspective(src, M, (OW, OH), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
cv2.imwrite(sys.argv[2], out, [cv2.IMWRITE_JPEG_QUALITY, 95])
if len(sys.argv) > 3:
    dbg = small.copy(); cv2.polylines(dbg, [(quad * k).astype(np.int32)], True, (0, 0, 255), 3)
    cv2.imwrite(sys.argv[3], dbg)
print(sys.argv[1].split('/')[-1], np.round(quad).astype(int).tolist())
