// Scroll menu: pink hamburger appears once the header scrolls away; it (and the mobile header button) opens the menu panel
(function () {
  var body = document.body, burger = document.querySelector('.burger'), toggle = document.querySelector('.menu-toggle');
  var panel = document.getElementById('site-menu'), scrim = document.querySelector('.menu-scrim'), header = document.querySelector('.site-header');
  var opener = null;
  function setOpen(open, from) {
    body.classList.toggle('menu-open', open);
    [burger, toggle].forEach(function (b) { if (!b) return; b.setAttribute('aria-expanded', open ? 'true' : 'false'); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    if (open) { opener = from || burger; setTimeout(function () { var c = panel.querySelector('.menu-close'); if (c) c.focus({ preventScroll: true }); }, 300); }
    else { onScroll(); if (opener) opener.focus({ preventScroll: true }); }
  }
  function isOpen() { return body.classList.contains('menu-open'); }
  burger.addEventListener('click', function () { setOpen(!isOpen(), burger); });
  if (toggle) toggle.addEventListener('click', function () { setOpen(!isOpen(), toggle); });
  scrim.addEventListener('click', function () { setOpen(false); });
  panel.querySelector('.menu-close').addEventListener('click', function () { setOpen(false); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { setOpen(false); return; }
    if (e.key === 'Tab') {
      var f = Array.prototype.slice.call(panel.querySelectorAll('a, button')).filter(function (el) { return el.offsetParent !== null; });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  function onScroll() {
    if (isOpen()) return;
    var past = header.getBoundingClientRect().bottom < 0;
    burger.classList.toggle('is-shown', past);
    burger.tabIndex = past ? 0 : -1;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
