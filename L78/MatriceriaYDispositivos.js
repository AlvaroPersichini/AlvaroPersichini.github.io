document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");
    const lightboxTitle = document.querySelector(".lightbox-title");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    let currentImages = [];

    document.querySelectorAll(".main-image").forEach(img => {
        img.addEventListener("click", () => {
            currentImages = JSON.parse(img.dataset.images);
            currentIndex = 0;
            lightboxTitle.textContent = img.dataset.title || "";
            showImage();
            lightbox.style.display = "flex";
        });
    });

    function showImage() {
        const item = currentImages[currentIndex];
        lightboxImg.src = item.src;
        lightboxText.textContent = item.text;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showImage();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showImage();
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });



    /* Animación sección presentación */
    const wrapper = document.querySelector('.presentacion-wrapper');
    if (wrapper) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    wrapper.classList.add('animate');
                    observer.disconnect();
                }
            });
        });
        observer.observe(wrapper);
    }

});



function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const btn = document.getElementById('hamburger');
    const body = document.body;
    menuOverlay.classList.toggle('active');
    btn.classList.toggle('active');
    body.classList.toggle('no-scroll');
}






