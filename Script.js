const revealTargets = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach((el) => io.observe(el));

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thanks! Your inquiry was sent successfully.';
  e.target.reset();
});

const nav = document.getElementById('topNav');
window.addEventListener('scroll', () => {
  nav.style.transform = `translateY(${Math.min(window.scrollY * 0.03, 8)}px)`;
});
