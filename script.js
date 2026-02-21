function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const btn = document.getElementById('hamburger');
  document.body.classList.toggle('no-scroll');
  menuOverlay.classList.toggle('active');
  btn.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('animarTexto')) {
          const textos = document.querySelectorAll(".animarTexto");
          textos.forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.3}s`;
            el.classList.add("show");
          });
        } else {
          entry.target.classList.add("show");
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".animarTexto, .li-academic").forEach(el => observer.observe(el));
});