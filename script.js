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
