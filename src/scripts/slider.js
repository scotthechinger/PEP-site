// Stage slider: tabs, arrows, keyboard and swipe
(function () {
  var root = document.querySelector('[data-slider]'); if (!root) return;
  var tabs = Array.prototype.slice.call(root.querySelectorAll('.slider-tabs .tab'));
  var track = root.querySelector('.slides-track');
  var slides = Array.prototype.slice.call(track.children);
  var prev = root.querySelector('[data-prev]'), next = root.querySelector('[data-next]'), nextLabel = root.querySelector('[data-next-label]');
  var labels = tabs.map(function (t) { return t.textContent.trim(); });
  var i = 0;
  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    track.style.transform = 'translateX(' + (-100 * i) + '%)';
    fit();
    tabs.forEach(function (t, k) { t.classList.toggle('is-active', k === i); t.setAttribute('aria-selected', k === i ? 'true' : 'false'); t.tabIndex = k === i ? 0 : -1; });
    slides.forEach(function (s, k) { s.setAttribute('aria-hidden', k === i ? 'false' : 'true'); s.querySelectorAll('a').forEach(function (a) { a.tabIndex = k === i ? 0 : -1; }); });
    prev.disabled = i === 0; next.disabled = i === slides.length - 1;
    if (!next.disabled) nextLabel.textContent = labels[i + 1].replace(/^(\d\d): .*/, 'Stage $1');
  }
  // Slides stack vertically on tablet/mobile, so the viewport follows the active slide's height instead of the tallest one
  var viewport = root.querySelector('.slides');
  function fit() { viewport.style.height = slides[i].offsetHeight + 'px'; }
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  tabs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });
  prev.addEventListener('click', function () { go(i - 1); });
  next.addEventListener('click', function () { go(i + 1); });
  root.querySelector('.slider-tabs').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { go(i + 1); tabs[i].focus(); }
    if (e.key === 'ArrowLeft') { go(i - 1); tabs[i].focus(); }
  });
  var x0 = null;
  track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1); x0 = null; });
  go(0);
})();
