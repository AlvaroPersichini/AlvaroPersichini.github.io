// document.addEventListener("DOMContentLoaded", function () {
//     const lightbox = document.getElementById("lightbox");
//     const lightboxImg = document.getElementById("lightbox-img");
//     const lightboxText = document.getElementById("lightbox-text");
//     const closeBtn = document.querySelector(".close");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");

//     let currentIndex = 0;
//     let currentImages = [];

//     document.querySelectorAll(".main-image").forEach(img => {
//         img.addEventListener("click", () => {
//             currentImages = JSON.parse(img.dataset.images);
//             currentIndex = 0;
//             showImage();
//             lightbox.style.display = "flex";
//         });
//     });

//     function showImage() {
//         const item = currentImages[currentIndex];
//         lightboxImg.src = item.src;
//         lightboxText.textContent = item.text;
//     }

//     prevBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
//         showImage();
//     });

//     nextBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % currentImages.length;
//         showImage();
//     });

//     closeBtn.addEventListener("click", () => {
//         lightbox.style.display = "none";
//     });

//     lightbox.addEventListener("click", e => {
//         if (e.target === lightbox) {
//             lightbox.style.display = "none";
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");
    const lightboxTitle = document.querySelector(".lightbox-title"); // NUEVO: referencia al título
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    let currentImages = [];

    document.querySelectorAll(".main-image").forEach(img => {
        img.addEventListener("click", () => {
            currentImages = JSON.parse(img.dataset.images);
            currentIndex = 0;

            // Actualizar título dinámico según la imagen principal
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
});






