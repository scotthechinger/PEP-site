// "Our track record" slider: prev/next loop, tab label follows the slide, thumbnails preview what's next.
(function () {
  var root = document.querySelector('[data-wins]'); if (!root) return;
  var track = root.querySelector('.wins-track');
  var slides = Array.prototype.slice.call(track.children);
  var thumbs = Array.prototype.slice.call(root.querySelectorAll('.wins-thumb'));
  var col = root.querySelector('.wins-thumbs');
  var tag = root.querySelector('[data-wins-tag]');
  var n = slides.length, i = 0;
  var viewport = root.querySelector('.wins-slides');
  window.addEventListener('resize', function () { viewport.style.height = slides[i].offsetHeight + 'px'; });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { viewport.style.height = slides[i].offsetHeight + 'px'; });
  function go(k) {
    i = (k + n) % n;
    track.style.transform = 'translateX(' + (-100 * i) + '%)';
    viewport.style.height = slides[i].offsetHeight + 'px';
    slides.forEach(function (s, j) { s.setAttribute('aria-hidden', j === i ? 'false' : 'true'); s.querySelectorAll('a').forEach(function (a) { a.tabIndex = j === i ? 0 : -1; }); });
    tag.textContent = slides[i].getAttribute('data-tag');
    // Thumbnails: the upcoming slides, in order, nearest at the bottom
    var order = []; for (var d = n - 1; d >= 1; d--) order.push(thumbs[(i + d) % n]);
    order.forEach(function (t) { col.appendChild(t); });
  }
  root.querySelector('[data-wins-prev]').addEventListener('click', function () { go(i - 1); });
  root.querySelector('[data-wins-next]').addEventListener('click', function () { go(i + 1); });
  var x0 = null;
  track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1); x0 = null; });
  go(0);
})();
