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

function iniciar() {
  var elemento = document.getElementById("obtener");
  elemento.addEventListener("click", obtenerUbicacion);
}

function obtenerUbicacion() {
  var geoconfig = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  };
  navigator.geolocation.getCurrentPosition(mostrar, mostrarError, geoconfig);
}

function mostrar(posicion) {
  var ubicacion = document.getElementById("ubicacion");
  var datos = "";
  datos += "Latitud: " + posicion.coords.latitude + "<br>";
  datos += "Longitud: " + posicion.coords.longitude + "<br>";
  datos += "Exactitud: " + posicion.coords.accuracy + "mts.<br>";
  ubicacion.innerHTML = datos;
}

function mostrarError(error) {

  alert("Error: " + error.code + " " + error.message);
}



window.addEventListener("load", iniciar);

