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
          el.style.transitionDelay = `${i * 0.5}s`;
          el.classList.add("show");
        });
        textos.forEach(el => observer.unobserve(el));
      }
    });
  }, { threshold: 0.3 });
  textos.forEach(texto => observer.observe(texto));
});




document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".li-academic");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.4 });
  items.forEach(item => observer.observe(item));
});






const track = document.querySelector('.slider-track');
const images = Array.from(track.children);

images.forEach(img => {
  track.appendChild(img.cloneNode(true));
});

let index = 0;
const tiempoQuieto = 3100;   // 2.5s (tiempo que la imagen queda quieta)
const tiempoSlide = 1500;    // 0.8s (tiempo que tarda en desplazarse)

function mover() {
  index++;

  track.style.transition = `transform ${tiempoSlide}ms ease-in-out`;
  track.style.transform = `translateX(-${index * 100}vw)`;


  if (index === images.length) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;
    }, tiempoSlide);
  }

  setTimeout(mover, tiempoQuieto + tiempoSlide);
}

// Arranca
setTimeout(mover, tiempoQuieto);






