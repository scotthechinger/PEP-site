// Stat cards: numbers count up on first view; click, Enter or Space flips to the source
(function () {
  var cards = document.querySelectorAll('.stat-card'); if (!cards.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    var target = +el.getAttribute('data-value'), pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = pre + target + suf; return; }
    var t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur); p = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * p) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = pre + '0' + suf;
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !seen) { seen = true; document.querySelectorAll('[data-count]').forEach(countUp); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(cards[0]);
  }
  cards.forEach(function (c) {
    function flip() { var on = c.classList.toggle('is-flipped'); c.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    c.addEventListener('click', function (e) { if (e.target.closest('a')) return; flip(); });
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
  });
})();
