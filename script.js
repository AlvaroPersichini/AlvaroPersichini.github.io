// -------- ACADEMIC <li> ------------
const academicObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      academicObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.academic .feature-icons li').forEach(li => {
  academicObserver.observe(li);
});


// -------- PRESENTACION ------------
const presentacionItems = document.querySelectorAll('.presentacion .profesion, .presentacion .h2Profesion, .presentacion .pAbout');

const presentacionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      presentacionItems.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('reveal');
        }, i * 200);
      });
      presentacionObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

const presentacionContainer = document.querySelector('.presentacion');
if (presentacionContainer) {
  presentacionObserver.observe(presentacionContainer);
}
