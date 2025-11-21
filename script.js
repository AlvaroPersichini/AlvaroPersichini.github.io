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



const hamburger = document.getElementById("hamburger-btn");
const menu = document.querySelector(".menu-overlay");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});




