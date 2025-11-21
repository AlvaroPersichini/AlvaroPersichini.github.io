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




// document.addEventListener("DOMContentLoaded", () => {

//   const texto = document.querySelector(".animarTexto");

//   const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { texto.classList.add("show"); } }); }, { threshold: 0.3 });

//   observer.observe(texto);

// });


// document.addEventListener("DOMContentLoaded", () => {

//   // Seleccionás TODOS los elementos que querés animar
//   const textos = document.querySelectorAll(".animarTexto");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show"); // se aplica al elemento observado
//       }
//     });
//   }, { threshold: 0.3 });

//   // Observás cada uno individualmente
//   textos.forEach(texto => observer.observe(texto));

// });


document.addEventListener("DOMContentLoaded", () => {

  const textos = document.querySelectorAll(".animarTexto");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Asignar delay basado en el orden de los elementos
        textos.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.3}s`; // 0.3s entre cada elemento
          el.classList.add("show");
        });
        // Una vez animados, ya no los observamos
        textos.forEach(el => observer.unobserve(el));
      }
    });
  }, { threshold: 0.3 });

  textos.forEach(texto => observer.observe(texto));

});
