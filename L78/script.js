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





document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  if (!aboutSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("animate");
        observer.unobserve(aboutSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutSection);
});






document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".proyectos-wrapper");
  const title = document.querySelector(".Proyectos-title");
  const values = document.querySelector(".values-section");

  if (!wrapper || !title || !values) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add("animate");
        values.classList.add("animate");
        observer.unobserve(wrapper);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(wrapper);
});








document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const aboutSection = document.querySelector(".about-section");

  if (!counters.length || !aboutSection) return;

  const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    const duration = 2000;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      counter.textContent = value.toLocaleString("es-AR");

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString("es-AR");
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCounter(counter));
        observer.unobserve(aboutSection);
      }
    });
  }, { threshold: 0.4 });

  observer.observe(aboutSection);
});








