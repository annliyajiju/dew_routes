const whatsappNumber = '919400703539'; // Replace with the actual WhatsApp number
const whatsappButtons = document.querySelectorAll('[data-whatsapp-text]');

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

whatsappButtons.forEach((button) => {
  const message = button.dataset.whatsappText || 'Hello, I’m interested in Dew Routes.';
  button.href = buildWhatsAppLink(message);
});

const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // scrolling up
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
