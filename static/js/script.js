document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Dismiss messages
  document.querySelectorAll('.message').forEach((msg) => {
    const btn = msg.querySelector('.message-close');
    if (btn) {
      btn.addEventListener('click', () => {
        msg.style.transition = 'opacity .15s ease, height .2s ease, margin .15s ease';
        msg.style.opacity = '0';
        msg.style.height = '0';
        msg.style.margin = '0';
        setTimeout(() => msg.remove(), 250);
      });
    }
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
