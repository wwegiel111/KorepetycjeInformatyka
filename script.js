// Menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const expanded = icon.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", (!expanded).toString());
}

// Active section highlight + back-to-top visibility
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const sections = [...document.querySelectorAll('section')];

function onScroll() {
  const fromTop = window.scrollY + 120;
  navLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const sec = document.getElementById(id);
    if (!sec) return;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (fromTop >= top && fromTop < bottom) link.classList.add('active');
    else link.classList.remove('active');
  });

  if (window.scrollY > 300) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
}
window.addEventListener('scroll', onScroll);
onScroll();

backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Simple auto slider for opinions
(function setupSlider(){
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const dotsWrap = document.querySelector('.slider-dots');
  if (!slides.length || !dotsWrap) return;

  let i = 0;
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Przejdź do slajdu ' + (idx+1));
    b.addEventListener('click', () => goTo(idx));
    dotsWrap.appendChild(b);
  });

  function goTo(idx) {
    i = idx % slides.length;
    slider.scrollTo({ left: slides[i].offsetLeft, behavior: 'smooth' });
    updateDots();
  }
  function updateDots(){
    const dots = dotsWrap.querySelectorAll('button');
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  // auto-rotate
  setInterval(() => goTo((i+1) % slides.length), 4000);
  goTo(0);
})();

// Subtle tilt effect on avatar
(function tiltAvatar(){
  const img = document.getElementById('pp');
  if (!img) return;
  const container = img.closest('.section__pic-container');
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    img.style.transform = `rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
  });
  container.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0) rotateY(0)';
  });
})();
