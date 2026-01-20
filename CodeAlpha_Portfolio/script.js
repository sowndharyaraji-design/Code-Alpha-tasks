/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ================= STICKY NAVBAR ================= */
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 50);
});

/* ================= ACTIVE NAV LINK ================= */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ================= CONTACT FORM ================= */
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Message sent successfully!');
    form.reset();
  });
}

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(
  '.about-container, .skills-container, .projects-container, .education-card, .contact-container'
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();



