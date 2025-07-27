document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const sidebar = document.querySelector('.mobile-sidebar');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  toggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
});