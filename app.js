const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});

document.querySelectorAll('.filter-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach((item) => item.classList.toggle('is-active', item === chip));
    document.querySelectorAll('.news-card').forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
    });
  });
});

const newsletterForm = document.querySelector('.newsletter-form');
const formNote = document.querySelector('.form-note');
newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(newsletterForm).get('email');
  if (!email) return;
  formNote.textContent = 'Pronto! A próxima carta chega em breve.';
  formNote.style.color = '#315f50';
  newsletterForm.reset();
});

const searchButton = document.querySelector('.search-button');
searchButton?.addEventListener('click', () => {
  const query = window.prompt('O que você quer descobrir hoje?');
  if (query?.trim()) {
    window.alert(`Em breve: resultados para “${query.trim()}”.`);
  }
});
