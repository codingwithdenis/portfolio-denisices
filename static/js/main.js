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
})();
