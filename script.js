const cards = document.querySelectorAll('.service-card');

const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealCards);
revealCards();
