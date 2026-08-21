// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Portrait parallax — the photo scrolls slower than the page. Offset maps
  // directly to scroll position (no easing, so it never wobbles), updated once
  // per frame via rAF and GPU-composited. Desktop only; mobile shows it static.
  var section = document.querySelector('.portrait-reveal');
  var bg = section && section.querySelector('.portrait-bg');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (bg && !reduce) {
    var FACTOR = 0.8;   // drift strength: total travel = FACTOR × section height
    var ticking = false;
    var update = function () {
      ticking = false;
      if (window.innerWidth <= 768) { bg.style.transform = ''; return; } // static on mobile
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var p = (vh - rect.top) / (vh + rect.height); // 0 entering bottom → 1 leaving top
      p = Math.max(0, Math.min(1, p));
      var shift = (p - 0.5) * FACTOR * rect.height;
      bg.style.transform = 'translate3d(0,' + shift.toFixed(2) + 'px,0)';
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }
});
