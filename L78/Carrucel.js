document.querySelectorAll('.carousel').forEach(carousel => {
    
    const track = carousel.querySelector('.track');
    let images = carousel.querySelectorAll('.track img');

    const btnNext = carousel.querySelector('.next');
    const btnPrev = carousel.querySelector('.prev');

    let index = 1; 
    let size = images[0].clientWidth;

    // Clonar primera y última
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    firstClone.id = "first-clone";
    lastClone.id = "last-clone";

    track.appendChild(firstClone);
    track.insertBefore(lastClone, images[0]);

    // Actualizar lista
    images = carousel.querySelectorAll('.track img');

    // Posicionar en la primera real
    track.style.transform = `translateX(-${size * index}px)`;


    // Resize
    window.addEventListener('resize', () => {
        size = images[0].clientWidth;
        track.style.transition = "none";
        track.style.transform = `translateX(-${size * index}px)`;
    });


    const move = () => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${size * index}px)`;
    };


    btnNext.addEventListener('click', () => {
        index++;
        move();
    });

    btnPrev.addEventListener('click', () => {
        index--;
        move();
    });


    track.addEventListener('transitionend', () => {

        if (images[index].id === "first-clone") {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-${size * index}px)`;
        }

        if (images[index].id === "last-clone") {
            track.style.transition = "none";
            index = images.length - 2;
            track.style.transform = `translateX(-${size * index}px)`;
        }
    });

});
