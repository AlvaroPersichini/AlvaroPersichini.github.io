// script.js
// Archivo listo para agregar funciones futuras.
// Añadimos una pequeña animación al hacer scroll.

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".manual-section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(section);
});
