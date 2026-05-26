(function () {
  var grid = document.getElementById('project-grid');

  // ── Filter logic (home page only) ──
  if (grid) {
    var filterLinks = document.querySelectorAll('.header-nav a[data-filter]');
    var allCards = document.querySelectorAll('.project-card');

    function setFilter(filter) {
      filterLinks.forEach(function (l) {
        if (l.dataset.filter === filter) l.classList.add('active');
        else l.classList.remove('active');
      });
      allCards.forEach(function (card) {
        card.style.display =
          filter === 'all' || card.dataset.category === filter ? '' : 'none';
      });
    }

    filterLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        setFilter(link.dataset.filter);
      });
    });

    var params = new URLSearchParams(window.location.search);
    setFilter(params.get('filter') || 'all');
  }

  // ── Modal logic ──
  var overlays = document.querySelectorAll('.modal-overlay');

  function openModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Card clicks open modals
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.dataset.modal);
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var modal = document.getElementById(btn.dataset.modal);
      if (modal) closeModal(modal);
    });
  });

  // Click overlay to close
  overlays.forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Escape key closes any open modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      overlays.forEach(function (o) {
        if (o.classList.contains('open')) closeModal(o);
      });
    }
  });

  // ── Before / After slider (compare blocks) ──
  function initCompare(slider) {
    var wrapper = slider.querySelector('.compare-wrapper');
    var after = slider.querySelector('.compare-after');
    var before = slider.querySelector('.compare-before');
    if (!wrapper || !after) return;

    function setPos(x) {
      var rect = wrapper.getBoundingClientRect();
      var pct = ((x - rect.left) / rect.width) * 100;
      if (pct < 0) pct = 0;
      if (pct > 100) pct = 100;
      after.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
      wrapper.style.setProperty('--pos', pct + '%');
    }

    function onDown(e) {
      e.preventDefault();
      var startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      setPos(startX);

      function onMove(ev) {
        ev.preventDefault();
        var x = ev.type === 'touchmove' ? ev.touches[0].clientX : ev.clientX;
        setPos(x);
      }

      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onUp);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('touchend', onUp);
    }

    wrapper.addEventListener('mousedown', onDown);
    wrapper.addEventListener('touchstart', onDown, { passive: true });

    // Also move on click
    wrapper.addEventListener('click', function (e) {
      setPos(e.clientX);
    });
  }

  document.querySelectorAll('.compare-block').forEach(initCompare);
})();
