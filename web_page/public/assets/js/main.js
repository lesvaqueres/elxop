// El Xop — language switch.
// English lives in the markup; Catalan and Spanish sit beside it as data-ca / data-es,
// so every sentence can be edited in one place.
(function () {
  var root = document.documentElement;

  // what this device can afford: no extra motion with reduced-motion, Save-Data,
  // little memory or few CPU cores (old computers and phones)
  var conn = navigator.connection || {};
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lite = !!conn.saveData || /(^|-)2g$/.test(conn.effectiveType || "") ||
    (navigator.deviceMemory && navigator.deviceMemory < 2) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
  if (lite) root.classList.add("lite");
  var fancy = !lite && !reduceMotion;

  // looping page-head videos (.head-video): they ship with preload="none" and only the poster shows.
  // They play by themselves only when motion is welcome and data is not being saved, and pause while
  // scrolled out of view so they cost nothing there. The button beside each one (.head-video-toggle)
  // pauses it, or starts it on devices that asked for less motion (e.g. Windows "Show animations" off).
  var videos = Array.prototype.slice.call(document.querySelectorAll("video.head-video"));
  videos.forEach(function (v) {
    var btn = v.nextElementSibling && v.nextElementSibling.classList.contains("head-video-toggle") ? v.nextElementSibling : null;
    var wanted = fancy; // should it be playing (when in view)?
    var visible = true;
    var sync = function () { if (btn) btn.setAttribute("aria-pressed", wanted ? "false" : "true"); };
    var run = function () {
      if (wanted && visible) {
        v.muted = true; v.preload = "auto";
        var p = v.play(); if (p && p.catch) p.catch(function () { wanted = false; sync(); });
      } else v.pause();
    };
    if (btn) {
      btn.hidden = false;
      btn.addEventListener("click", function () { wanted = !wanted; sync(); run(); });
    }
    sync();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { visible = e.isIntersecting; run(); });
      }).observe(v);
    } else run();
  });

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  var texts = Array.prototype.slice.call(document.querySelectorAll("[data-ca], [data-es]"));
  texts.forEach(function (el) { el.dataset.en = el.innerHTML; });
  var labels = Array.prototype.slice.call(document.querySelectorAll("[data-ca-aria], [data-es-aria]"));
  labels.forEach(function (el) { el.dataset.enAria = el.getAttribute("aria-label"); });
  var alts = Array.prototype.slice.call(document.querySelectorAll("[data-ca-alt], [data-es-alt]"));
  alts.forEach(function (el) { el.dataset.enAlt = el.getAttribute("alt"); });

  // language dropdown
  var langBox = document.querySelector(".lang");
  var langToggle = document.querySelector(".lang-toggle");
  var langCurrent = document.querySelector(".lang-current");
  function setLangMenu(open) {
    if (!langToggle) return;
    langToggle.setAttribute("aria-expanded", String(open));
    langBox.classList.toggle("open", open);
  }
  if (langToggle) langToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setLangMenu(langToggle.getAttribute("aria-expanded") !== "true");
  });
  document.addEventListener("click", function (e) {
    if (langBox && !langBox.contains(e.target)) setLangMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && langBox && langBox.classList.contains("open")) { setLangMenu(false); langToggle.focus(); }
  });

  var stopTyping = function () {};
  function setLang(lang) {
    stopTyping();
    root.lang = lang;
    texts.forEach(function (el) {
      var t = el.dataset[lang];
      el.innerHTML = t != null ? t : el.dataset.en;
    });
    labels.forEach(function (el) {
      el.setAttribute("aria-label", el.dataset[lang + "Aria"] || el.dataset.enAria);
    });
    alts.forEach(function (el) {
      el.setAttribute("alt", el.dataset[lang + "Alt"] || el.dataset.enAlt);
    });
    document.querySelectorAll("[data-lang-set]").forEach(function (b) {
      var on = b.dataset.langSet === lang;
      b.setAttribute("aria-pressed", String(on));
      if (on && langCurrent) {
        var flag = b.querySelector(".flag");
        langCurrent.innerHTML = (flag ? flag.outerHTML : "") + '<span class="lang-code">' + b.dataset.code + "</span>";
      }
    });
    if (typeof measureTitles === "function") measureTitles();
  }

  // Catalan, Spanish and English switch in place on the main pages; every other language is a
  // copy of the site in its own folder (public/<code>/, made by scripts/localize.js), so picking
  // one of those (or leaving one) opens the same page in that folder
  var INLINE = ["ca", "es", "en"];
  var FOLDERS = ["de", "fr", "it", "pl", "cs", "uk", "ru", "ja", "zh"];
  var pageLang = root.getAttribute("data-page-lang"); // set on the folder copies only
  var me = document.currentScript && document.currentScript.src;
  var siteRoot = me ? me.replace(/assets\/js\/main\.js(\?.*)?$/, "") : "";
  function langURL(lang) {
    var here = location.href.split("#")[0].split("?")[0];
    if (!siteRoot || here.indexOf(siteRoot) !== 0) return null;
    var rest = here.slice(siteRoot.length);
    if (pageLang && rest.indexOf(pageLang + "/") === 0) rest = rest.slice(pageLang.length + 1);
    if (rest === "" || rest.slice(-1) === "/") rest += "index.html";
    return siteRoot + (FOLDERS.indexOf(lang) >= 0 ? lang + "/" : "") + rest + location.hash;
  }
  function pickLang(lang) {
    var inPlace = INLINE.indexOf(lang) >= 0 && !pageLang;
    if (inPlace || lang === pageLang) { if (inPlace) setLang(lang); return true; }
    var url = langURL(lang);
    if (url) { location.href = url; return true; }
    return false;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang-set]");
    if (!b) return;
    store("elxop-lang-choice", b.dataset.langSet);
    setLangMenu(false);
    pickLang(b.dataset.langSet);
    if (langToggle) langToggle.focus();
  });

  // back-to-top button: shown once the visitor is past the first screen
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    var ticking = false;
    var check = function () {
      ticking = false;
      toTop.classList.toggle("show", window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(check); }
    }, { passive: true });
    check();
  }

  // menu: burger on small screens, dropdowns (L'entorn, Arxiu) everywhere
  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  var subs = Array.prototype.slice.call(document.querySelectorAll(".has-sub"));
  function setMenu(open) {
    if (!burger) return;
    burger.setAttribute("aria-expanded", String(open));
    header.classList.toggle("menu-open", open);
    document.documentElement.classList.toggle("no-scroll", open);
  }
  // open one dropdown (or none) and close the others
  function setSub(item, open) {
    subs.forEach(function (li) {
      var on = open && li === item;
      var btn = li.querySelector(".sub-toggle");
      if (btn) btn.setAttribute("aria-expanded", String(on));
      li.classList.toggle("sub-open", on);
    });
  }
  // arriving from another page with a #target (e.g. Contacte → index.html#contacte):
  // browsers can lose the jump while images and the map are still loading, so do it again once loaded
  if (location.hash.length > 1) {
    window.addEventListener("load", function () {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (!target) return;
      var y = target.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0);
      window.scrollTo({ top: y, behavior: "instant" });
    });
  }

  // close the phone menu when a link in it is followed (e.g. Contacte on the same page)
  var panel = document.querySelector(".nav-panel");
  if (panel) panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  if (burger) burger.addEventListener("click", function () {
    setMenu(burger.getAttribute("aria-expanded") !== "true");
  });
  // dropdowns open on hover (CSS); a click on the label does nothing. Only touch screens
  // with no hover and no burger (e.g. a tablet held sideways) open them with a tap.
  var noHover = window.matchMedia("(hover: none)");
  subs.forEach(function (li) {
    var btn = li.querySelector(".sub-toggle");
    if (btn) btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!noHover.matches) return;
      e.stopPropagation();
      setSub(li, !li.classList.contains("sub-open"));
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-sub") && window.matchMedia("(min-width: 961px)").matches) setSub(null, false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setSub(null, false); if (header && header.classList.contains("menu-open")) { setMenu(false); burger.focus(); } }
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });

  // museum page: tell each room how tall its sticky title is, so the sticky photo sits just below it
  var roomTitles = document.querySelectorAll(".museum-section > .section-title");
  var setTitleH = function (t) { t.parentNode.style.setProperty("--title-h", t.offsetHeight + "px"); };
  var measureTitles = function () { roomTitles.forEach(setTitleH); };
  if (roomTitles.length) {
    measureTitles();
    window.addEventListener("resize", measureTitles);
    window.addEventListener("load", measureTitles); // web fonts can change the title height
    if ("ResizeObserver" in window) {
      var titleObserver = new ResizeObserver(function (entries) {
        entries.forEach(function (en) { setTitleH(en.target); });
      });
      roomTitles.forEach(function (t) { titleObserver.observe(t); });
    }
  }

  // language on opening: the visitor's own pick from the menu if they made one, otherwise the
  // first of the browser's languages the site has (ca, es, en), otherwise Catalan
  function browserLang() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().slice(0, 2);
      if (INLINE.indexOf(code) >= 0 || FOLDERS.indexOf(code) >= 0) return code;
    }
    return "ca";
  }
  // a folder copy (e.g. uk/museu.html) always stays in its own language: it was opened on purpose.
  // A main page shows the visitor's language, opening its folder copy when it has one.
  if (!pageLang) {
    var saved = store("elxop-lang-choice");
    var want = INLINE.indexOf(saved) >= 0 || FOLDERS.indexOf(saved) >= 0 ? saved : browserLang();
    if (FOLDERS.indexOf(want) >= 0) {
      if (!pickLang(want)) setLang("en");
    } else setLang(want);
  }

  // footer map: Google is contacted only after the visitor presses "Show map"
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".map-show");
    if (!btn) return;
    var gate = btn.closest(".map-gate");
    var lang = root.lang === "ca" || root.lang === "es" ? root.lang : "";
    var frame = document.createElement("iframe");
    frame.src = gate.dataset.mapSrc;
    frame.title = (lang && gate.getAttribute("data-" + lang + "-map-title")) || gate.dataset.mapTitle;
    frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    gate.replaceWith(frame);
    frame.focus();
  });

  // photos fade in the first time they come into view
  if (fancy && "IntersectionObserver" in window) {
    var reveal = function (img) {
      if (img.complete) img.classList.add("is-in");
      else {
        var done = function () { img.classList.add("is-in"); };
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        reveal(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(document.querySelectorAll("main img, .site-footer img"), function (img) {
      // already painted on screen: leave it alone so nothing blinks
      if (img.complete && img.naturalWidth) {
        var r = img.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) return;
      }
      img.classList.add("fade-in");
      io.observe(img);
    });
  }

  // home page: "Benvinguts!" types itself out once, when it is visible
  var welcome = document.body.classList.contains("home") && document.querySelector(".nav-welcome span");
  if (welcome && !reduceMotion) {
    var timer = 0, started = false;
    var esc = function (t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
    stopTyping = function () {
      clearTimeout(timer);
      if (started && welcome.dataset.twFull != null) welcome.innerHTML = welcome.dataset.twFull;
    };
    var type = function () {
      if (started) return;
      started = true;
      var full = welcome.textContent, html = welcome.innerHTML, i = 0;
      welcome.dataset.twFull = html;
      var chars = Array.from(full);
      var step = function () {
        var typed = chars.slice(0, i).join(""), rest = chars.slice(i).join("");
        welcome.innerHTML = '<span class="visually-hidden">' + esc(full) + "</span>" +
          '<span aria-hidden="true"><span class="tw-typed">' + esc(typed) + '</span><span class="tw-rest">' + esc(rest) + "</span></span>";
        if (i < chars.length) { i++; timer = setTimeout(step, 70 + Math.random() * 90); }
        else timer = setTimeout(function () { welcome.innerHTML = html; delete welcome.dataset.twFull; }, 1800); // caret blinks a moment, then goes
      };
      timer = setTimeout(step, 350);
    };
    type();
  }
  // residency page navigation: underline the section you are reading, keep it visible in the bar on phones
  var rnav = document.querySelector(".res-nav");
  if (rnav) {
    var rlinks = Array.prototype.slice.call(rnav.querySelectorAll("a"));
    var rsecs = rlinks.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
    var rcur = null;
    var rmark = function () {
      var line = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 130) + 40, on = null;
      rsecs.forEach(function (sec, k) { if (sec && sec.getBoundingClientRect().top <= line) on = rlinks[k]; });
      if (on === rcur) return;
      rcur = on;
      rlinks.forEach(function (a) { if (a === on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      if (on) { var ul = on.closest("ul"), a1 = on.getBoundingClientRect(), b1 = ul.getBoundingClientRect(); if (a1.left < b1.left || a1.right > b1.right) ul.scrollTo({ left: ul.scrollLeft + a1.left - b1.left - 12 }); }
    };
    var rt = 0;
    window.addEventListener("scroll", function () { clearTimeout(rt); rt = setTimeout(rmark, 50); }, { passive: true });
    window.addEventListener("hashchange", function () { setTimeout(rmark, 60); });
    rnav.addEventListener("click", function () { setTimeout(rmark, 450); }); // after a jump, even if no scroll event comes
    rmark();
  }

  // residency page, "La casa i el seu entorn": tabs by space, each a sideways photo strip
  // (swipe on phones; thumbnails and arrows move it). Without this script every group shows in turn.
  var casa = document.querySelector(".res-casa");
  if (casa) {
    casa.classList.add("is-ready");
    var tabs = Array.prototype.slice.call(casa.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (on) panel.removeAttribute("data-hidden"); else panel.setAttribute("data-hidden", "");
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (e) {
        var k = { ArrowRight: 1, ArrowLeft: -1, Home: "first", End: "last" }[e.key];
        if (k == null) return;
        e.preventDefault();
        var j = k === "first" ? 0 : k === "last" ? tabs.length - 1 : (i + k + tabs.length) % tabs.length;
        select(tabs[j], true);
      });
    });
    Array.prototype.forEach.call(casa.querySelectorAll(".res-casa-panel"), function (panel) {
      var strip = panel.querySelector(".res-casa-strip");
      var slides = strip.children;
      var thumbs = Array.prototype.slice.call(panel.querySelectorAll(".res-casa-thumbs button"));
      var prev = panel.querySelector(".res-casa-prev"), next = panel.querySelector(".res-casa-next");
      var current = function () { return Math.round(strip.scrollLeft / (strip.clientWidth || 1)); };
      var go = function (i) {
        i = Math.max(0, Math.min(slides.length - 1, i));
        var left = slides[i].offsetLeft;
        strip.scrollTo({ left: left, behavior: reduceMotion ? "auto" : "smooth" });
        // photos that load just after a tab opens can cancel the glide: finish it if so
        clearTimeout(strip.goTimer);
        strip.goTimer = setTimeout(function () { if (Math.abs(strip.scrollLeft - left) > 2) strip.scrollTo({ left: left }); mark(); }, 700);
      };
      var mark = function () {
        var i = current();
        thumbs.forEach(function (b, k) { if (k === i) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current"); });
        var on = null;
        subs.forEach(function (b) { if (+b.dataset.go <= i) on = b; });
        subs.forEach(function (b) { if (b === on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current"); });
        var keep = function (el) { if (!el) return; var row = el.closest(".res-casa-thumbs, .res-casa-sub"); if (row.scrollWidth <= row.clientWidth) return; var a = el.getBoundingClientRect(), b = row.getBoundingClientRect(); row.scrollTo({ left: row.scrollLeft + a.left - b.left - (b.width - a.width) / 2 }); };
        keep(thumbs[i]); keep(on);
        prev.disabled = i <= 0;
        next.disabled = i >= slides.length - 1;
      };
      thumbs.forEach(function (b, k) { b.addEventListener("click", function () { go(k); }); });
      // apartments: "Apartament N" buttons jump to that apartment's first photo
      var subs = Array.prototype.slice.call(panel.querySelectorAll(".res-casa-sub button"));
      subs.forEach(function (b) { b.addEventListener("click", function () { go(+b.dataset.go); }); });
      prev.addEventListener("click", function () { go(current() - 1); });
      next.addEventListener("click", function () { go(current() + 1); });
      var settle = 0;
      strip.addEventListener("scroll", function () { clearTimeout(settle); settle = setTimeout(mark, 60); }, { passive: true });
      if (slides.length < 2) { prev.hidden = true; next.hidden = true; }
      panel.casaGo = function (i) { strip.scrollTo({ left: slides[i].offsetLeft }); mark(); };
      mark();
    });

    // full-screen viewer: click a photo to open it; arrows (buttons, keys or a swipe) go through that space's photos
    var box = casa.querySelector(".res-lightbox");
    if (box && typeof box.showModal === "function") {
      var boxImg = box.querySelector(".res-lightbox-img"), boxCap = box.querySelector(".res-lightbox-cap");
      var bPrev = box.querySelector(".res-lightbox-prev"), bNext = box.querySelector(".res-lightbox-next");
      var list = [], at = 0, owner = null;
      var show = function (i) {
        at = (i + list.length) % list.length;
        var img = list[at].querySelector("img"), badge = list[at].querySelector(".res-casa-badge");
        boxImg.src = img.currentSrc || img.src;
        boxImg.alt = img.alt;
        boxCap.textContent = (badge ? badge.textContent + " · " : "") + (at + 1) + " / " + list.length;
        bPrev.hidden = bNext.hidden = list.length < 2;
      };
      Array.prototype.forEach.call(casa.querySelectorAll(".res-casa-open"), function (btn) {
        btn.addEventListener("click", function () {
          owner = btn.closest(".res-casa-panel");
          list = Array.prototype.slice.call(owner.querySelectorAll(".res-casa-strip > li"));
          show(list.indexOf(btn.parentNode));
          box.showModal();
          document.documentElement.classList.add("res-lightbox-open");
        });
      });
      bPrev.addEventListener("click", function () { show(at - 1); });
      bNext.addEventListener("click", function () { show(at + 1); });
      box.querySelector(".res-lightbox-close").addEventListener("click", function () { box.close(); });
      box.addEventListener("click", function (e) { if (e.target === box) box.close(); }); // click outside the photo
      box.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); show(at - 1); }
        else if (e.key === "ArrowRight") { e.preventDefault(); show(at + 1); }
      });
      var x0 = null;
      box.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      box.addEventListener("touchend", function (e) {
        if (x0 == null) return;
        var dx = e.changedTouches[0].clientX - x0; x0 = null;
        if (Math.abs(dx) > 40) show(at + (dx < 0 ? 1 : -1));
      });
      box.addEventListener("close", function () {
        document.documentElement.classList.remove("res-lightbox-open");
        if (owner && owner.casaGo) owner.casaGo(at); // the gallery shows the photo you closed on
        var b = list[at] && list[at].querySelector(".res-casa-open");
        if (b) b.focus({ preventScroll: true });
      });
    }
  }

  // ---------- joc de l'horta: print the board (print styles in main.css) ----------
  var printBoard = document.querySelector(".joc-print");
  if (printBoard) {
    printBoard.hidden = false; // needs JavaScript, so it stays hidden without it
    printBoard.addEventListener("click", function () { window.print(); });
  }

  // ---------- full-size photo viewer (Surroundings and Museum pages: <dialog class="photo-viewer">) ----------
  // Every photo in the page's main content opens full size in the middle of the screen; the arrows
  // (buttons, arrow keys or a swipe) go through all the photos on the page. Close: the × button,
  // Esc, or a click outside the photo.
  (function () {
    var box = document.querySelector("dialog.photo-viewer");
    if (!box || typeof box.showModal !== "function") return;
    var main = document.querySelector("main");
    var photos = Array.prototype.filter.call(main.querySelectorAll("img"), function (img) {
      return !img.closest("a, button, dialog, .ig-card") && (+img.getAttribute("width") || 0) >= 200;
    });
    if (!photos.length) return;
    var boxImg = box.querySelector(".res-lightbox-img"), boxCap = box.querySelector(".res-lightbox-cap");
    var bPrev = box.querySelector(".res-lightbox-prev"), bNext = box.querySelector(".res-lightbox-next");
    var at = 0;

    // the largest file the browser can show: the widest srcset entry of the format it picked
    var fullSrc = function (img) {
      var cur = img.currentSrc || img.src, best = img.src, bestW = 0;
      var avif = /\.avif(\?|$)/.test(cur);
      var pic = img.parentNode && img.parentNode.tagName === "PICTURE" ? img.parentNode : null;
      var sets = [img.getAttribute("srcset") || ""];
      if (pic && avif) Array.prototype.forEach.call(pic.querySelectorAll("source[type='image/avif']"), function (s) { sets.unshift(s.getAttribute("srcset") || ""); });
      sets.forEach(function (set) {
        set.split(",").forEach(function (c) {
          var bits = c.trim().split(/\s+/), w = parseInt(bits[1], 10) || 0;
          if (bits[0] && w > bestW && (!avif || /\.avif/.test(bits[0]) || bestW === 0)) { best = bits[0]; bestW = w; }
        });
      });
      return bestW ? new URL(best, document.baseURI).href : img.src;
    };

    var show = function (i) {
      at = (i + photos.length) % photos.length;
      var img = photos[at];
      boxImg.src = fullSrc(img);
      boxImg.alt = img.alt;
      boxCap.textContent = (img.alt ? img.alt + " · " : "") + (at + 1) + " / " + photos.length;
      bPrev.hidden = bNext.hidden = photos.length < 2;
    };
    var open = function (img) {
      show(photos.indexOf(img));
      box.showModal();
      document.documentElement.classList.add("res-lightbox-open");
    };

    photos.forEach(function (img) {
      img.classList.add("can-enlarge");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-haspopup", "dialog");
      img.addEventListener("click", function () { open(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
      });
    });
    bPrev.addEventListener("click", function () { show(at - 1); });
    bNext.addEventListener("click", function () { show(at + 1); });
    box.querySelector(".res-lightbox-close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box || e.target.classList.contains("res-lightbox-fig")) box.close(); });
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); show(at - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); show(at + 1); }
    });
    var x0 = null;
    box.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40 && photos.length > 1) show(at + (dx < 0 ? 1 : -1));
    });
    box.addEventListener("close", function () {
      document.documentElement.classList.remove("res-lightbox-open");
      boxImg.removeAttribute("src");
      if (photos[at]) photos[at].focus({ preventScroll: true });
    });
  })();
})();
