function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const btn = document.getElementById('hamburger');
  const body = document.body;


  menuOverlay.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

// Cerrar menú al hacer clic fuera del contenido
document.getElementById('menuOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    toggleMenu();
  }
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.classList.contains('active')) {
      toggleMenu();
    }
  }
});



// animaciones.js ////
/////////////////////////////////////////////////////////////////////
// Evita que el navegador mueva el scroll al recargar
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-anim]');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo se anima una vez
      }
    });
  }, {
    threshold: 0.1 // se activa cuando el 10% del elemento es visible
  });

  animatedElements.forEach(el => observer.observe(el));
});
/////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".li-academic");

  // alterna dirección de entrada
  items.forEach((item, index) => {
    if (index % 2 === 0) item.classList.add("from-left");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});

/////////////////////////////////////////////////////





