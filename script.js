function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const body = document.body;
  
  menuOverlay.classList.toggle('active');
  body.classList.toggle('no-scroll');
  }

// Cerrar menú al hacer clic fuera del contenido
document.getElementById('menuOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    toggleMenu();
  }
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.classList.contains('active')) {
      toggleMenu();
    }
  }
});

