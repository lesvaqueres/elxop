// El Xop — flip-book reader. Pages turn over the left (binding) edge with one CSS transform;
// only the current page and its neighbours are shown, so it stays light on phones.
// Turn with the buttons, the arrow keys, a swipe, or a tap on the right / left half of the page.
(function () {
  var book = document.querySelector(".fb-book");
  if (!book) return;
  var pages = Array.prototype.slice.call(book.querySelectorAll(".fb-page"));
  var stage = document.querySelector(".fb-stage");
  var prev = document.querySelector(".fb-prev");
  var next = document.querySelector(".fb-next");
  var zoom = document.querySelector(".fb-zoom");
  var at = document.querySelector(".fb-at");
  var links = Array.prototype.slice.call(document.querySelectorAll(".fb-list [data-go]"));
  var n = pages.length, cur = 0, busy = false;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- fit text: shrink a label/title only if a longer translation would overflow its box ----
  function fit(el) {
    el.style.fontSize = "";
    var guard = 0;
    if (el.hasAttribute("data-fit-block")) {
      while (el.scrollHeight > el.clientHeight + 1 && guard++ < 40) shrink(el);
    } else {
      while ((el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1 && (el.classList.contains("fb-title") || el.classList.contains("fb-vlabel"))) && guard++ < 40) shrink(el);
    }
  }
  function shrink(el) {
    var fs = parseFloat(getComputedStyle(el).fontSize);
    el.style.fontSize = (fs * 0.95) + "px";
  }
  function fitPage(p) {
    if (!p || p.hidden) return;
    p.querySelectorAll("[data-fit], [data-fit-block]").forEach(fit);
  }
  function fitVisible() { pages.forEach(function (p) { if (!p.hidden) fitPage(p); }); }

  // ---- show a page ----
  function layout() {
    pages.forEach(function (p, i) {
      var near = Math.abs(i - cur) <= 1;
      p.hidden = !near;
      // start loading the pictures two pages ahead/behind, so a page never turns over blank
      if (Math.abs(i - cur) <= 2) p.querySelectorAll("img[loading=lazy]").forEach(function (img) { img.loading = "eager"; });
      p.classList.toggle("is-turned", i < cur);
      p.classList.toggle("is-current", i === cur);
      p.classList.toggle("is-under", i > cur);
      p.setAttribute("aria-hidden", String(i !== cur));
      p.inert = i !== cur;
    });
    prev.disabled = cur === 0;
    next.disabled = cur === n - 1;
    book.classList.toggle("at-end", cur === n - 1);
    at.textContent = cur + 1;
    links.forEach(function (a, i) { if (i === cur) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
    fitVisible();
  }

  function go(to, fromUser) {
    to = Math.max(0, Math.min(n - 1, to));
    if (to === cur || busy) return;
    var forward = to > cur;
    // jumping several pages: only the last page turn is animated
    var moving = forward ? pages[to - 1] : pages[to];
    // make sure both pages involved are drawn before the turn starts
    pages[to].hidden = false; moving.hidden = false;
    fitPage(pages[to]);
    if (reduce) { cur = to; layout(); return done(fromUser); }
    busy = true;
    moving.classList.add("is-moving");
    // pages between are put in place without animation
    pages.forEach(function (p, i) {
      if (p === moving || p === pages[to]) return;
      p.style.transition = "none";
    });
    void moving.offsetWidth;
    if (forward) moving.classList.add("is-turned"); else moving.classList.remove("is-turned");
    var finish = function () {
      moving.removeEventListener("transitionend", finish);
      clearTimeout(timer);
      moving.classList.remove("is-moving");
      pages.forEach(function (p) { p.style.transition = ""; });
      cur = to; busy = false; layout(); done(fromUser);
    };
    var timer = setTimeout(finish, 900);
    moving.addEventListener("transitionend", finish);
  }
  function done(fromUser) {
    if (fromUser !== false) history.replaceState(null, "", "#p" + (cur + 1));
  }

  prev.addEventListener("click", function () { go(cur - 1); });
  next.addEventListener("click", function () { go(cur + 1); });
  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault(); go(Number(a.dataset.go));
      stage.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.target.closest("input, textarea, select") || e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { go(cur + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { go(cur - 1); }
    else if (e.key === "Home") { go(0); }
    else if (e.key === "End") { go(n - 1); }
  });

  // tap / click: right half = next, left half = previous (not while zoomed or selecting text)
  // swipe: horizontal drag of 40px or more
  var sx = null, sy = null, moved = false;
  book.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; moved = false; });
  book.addEventListener("pointermove", function (e) { if (sx !== null && Math.abs(e.clientX - sx) > 8) moved = true; });
  book.addEventListener("pointerup", function (e) {
    if (sx === null || stage.classList.contains("is-zoomed")) { sx = null; return; }
    var dx = e.clientX - sx, dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) { go(dx < 0 ? cur + 1 : cur - 1); return; }
    if (moved || String(window.getSelection())) return;
    var r = book.getBoundingClientRect();
    go(e.clientX - r.left > r.width / 2 ? cur + 1 : cur - 1);
  });

  // zoom for small screens: page twice as wide, panned inside the frame
  zoom.addEventListener("click", function () {
    var on = zoom.getAttribute("aria-pressed") !== "true";
    zoom.setAttribute("aria-pressed", String(on));
    stage.classList.toggle("is-zoomed", on);
    fitVisible();
  });

  // re-fit text after the language changes (main.js swaps the words in place)
  if ("MutationObserver" in window) {
    var pending = false;
    new MutationObserver(function () {
      if (pending) return; pending = true;
      requestAnimationFrame(function () { pending = false; fitVisible(); });
    }).observe(book, { subtree: true, childList: true, characterData: true });
  }
  window.addEventListener("resize", function () { requestAnimationFrame(fitVisible); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitVisible);

  var start = /^#p(\d+)$/.exec(location.hash);
  cur = start ? Math.max(0, Math.min(n - 1, Number(start[1]) - 1)) : 0;
  layout();
})();
