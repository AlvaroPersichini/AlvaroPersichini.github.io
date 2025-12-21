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







document.addEventListener("DOMContentLoaded", () => {

  const triggers = document.querySelectorAll(".main-image");
  const lightbox = document.getElementById("lightbox");

  if (!triggers.length || !lightbox) return;

  const img = document.getElementById("lightbox-img");
  const text = document.getElementById("lightbox-text");
  const title = document.querySelector(".lightbox-title");

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const close = document.querySelector(".close");

  let images = [];
  let index = 0;

 

  const video = document.getElementById("lightbox-video");


 


  function render() {
    const item = images[index];
    img.style.display = "none";
    video.style.display = "none";
    video.pause();
    if (item.type === "video") {
      video.src = item.src;
      video.style.display = "block";
    } else {
      img.src = item.src;
      img.style.display = "block";
    }
    text.textContent = item.text || "";
  }




  triggers.forEach(el => {
    el.addEventListener("click", () => {
      images = JSON.parse(el.dataset.images);
      index = 0;

      title.textContent = el.dataset.title || "";
      render();

      lightbox.classList.add("show");
      document.body.classList.add("no-scroll");
    });
  });

  prev.addEventListener("click", e => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    render();
  });

  next.addEventListener("click", e => {
    e.stopPropagation();
    index = (index + 1) % images.length;
    render();
  });

  close.addEventListener("click", () => {
    lightbox.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.classList.contains("show")) {
      lightbox.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  });

});