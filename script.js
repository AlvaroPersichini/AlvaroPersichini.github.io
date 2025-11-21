function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const btn = document.getElementById('hamburger');
  const body = document.body;


  menuOverlay.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('no-scroll');
}


document.getElementById('menuOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    toggleMenu();
  }
});


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.classList.contains('active')) {
      toggleMenu();
    }
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".animarTexto");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textos.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.3}s`;
          el.classList.add("show");
        });
        textos.forEach(el => observer.unobserve(el));
      }
    });
  }, { threshold: 0.3 });
  textos.forEach(texto => observer.observe(texto));
});
