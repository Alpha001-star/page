const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking the × inside menu
navLinks.addEventListener('click', (e) => {
  if (e.target === navLinks || e.target.textContent === '×') {
    navLinks.classList.remove('active');
  }
});
