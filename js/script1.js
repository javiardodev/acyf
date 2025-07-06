// Ejemplo: Carrusel de testimonios (puedes usar Swiper.js o implementación básica)
document.addEventListener('DOMContentLoaded', () => {
  // Animación al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.benefit-card, .service-card');
    elements.forEach(el => {
      const elPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (elPosition < screenPosition) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  // Efecto inicial para las cards
  const cards = document.querySelectorAll('.benefit-card, .service-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ejecutar al cargar
});