// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Portrait parallax — the photo scrolls slower than the rest of the page so
  // it appears to drift. Desktop only; mobile shows it static.
  var section = document.querySelector('.portrait-reveal');
  var bg = section && section.querySelector('.portrait-bg');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (bg && !reduce) {
    var ticking = false;
    var update = function () {
      ticking = false;
      if (window.innerWidth <= 768) { bg.style.transform = ''; return; } // static on mobile
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 as the section enters from the bottom, 1 as it leaves the top
      var p = (vh - rect.top) / (vh + rect.height);
      p = Math.max(0, Math.min(1, p));
      // drift ±30% of the section height — a pronounced lag so the photo
      // clearly scrolls slower than the rest of the page
      var shift = (p - 0.5) * 0.90 * rect.height;
      bg.style.transform = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }
});
