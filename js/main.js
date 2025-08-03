document.addEventListener('DOMContentLoaded', () => {
  const toggle    = document.querySelector('.mobile-nav-toggle');
  const sidebar   = document.querySelector('.mobile-sidebar');
  const overlay   = document.querySelector('.overlay');
  const closeBtn  = document.querySelector('.close-btn');
  const header    = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  if (!toggle || !sidebar || !overlay || !closeBtn) return;

  // Funciones de apertura/cierre
  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  // Eventos de menú
  toggle.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  // Mostrar/ocultar header al hacer scroll
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 100) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
    lastScrollY = currentY;
  });

  // IntersectionObserver para scroll in/out
  const scrollItems = document.querySelectorAll('.animate-on-scroll, .grid-categorias .item');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Si está más del 25% visible, entra
      if (entry.intersectionRatio >= 0.25) {
        entry.target.classList.add('in-view');
      }
      // Sólo cuando salga por completo (ratio=0), limpia.
      else if (entry.intersectionRatio === 0) {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    root: null,
    threshold: [0, 0.25, 1],
    rootMargin: '0px 0px -10% 0px'
  });

  // Observa cada elemento
  scrollItems.forEach(el => scrollObserver.observe(el));
});