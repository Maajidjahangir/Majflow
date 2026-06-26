// ── Navbar scroll ────────────────────────────────────
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  const stt = document.getElementById('stt');
  
  if(window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  if(window.scrollY > 400) {
    stt.style.display = 'block';
  } else {
    stt.style.display = 'none';
  }
});

// ── Scroll animations (Reveal) ───────────────────────
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
  observer.observe(el);
});

// ── Pipeline animation ───────────────────────────────
let activeStep = 0;
const pipeSteps = document.querySelectorAll('.pipe-step');

if(pipeSteps.length > 0) {
    setInterval(() => {
        pipeSteps.forEach((s, i) => s.classList.toggle('active', i === activeStep));
        activeStep = (activeStep + 1) % pipeSteps.length;
    }, 1800);
}

// ── Form Handling ────────────────────────────────────
function handleSubmit() {
  showToast('🎉 Request sent! Maajid will reach out within 2 hours.');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3800);
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ── Mobile Menu ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
}

function closeMob() {
    mobileMenu.style.display = 'none';
}
