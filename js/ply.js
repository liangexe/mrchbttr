const carousel = document.querySelector(".ply-carousel");
const slides = document.querySelectorAll(".ply-slide");
const totalSlides = slides.length;
let currentIndex = 0;

document.querySelector(".ply-btn.btnLeft").addEventListener("click", () => {
    currentIndex--;
    rotateCarousel();
    if (currentAud) {
        currentAud.pause();
        currentAud.currentTime = 0;
    }
});

document.querySelector(".ply-btn.btnRight").addEventListener("click", () => {
    currentIndex++;
    rotateCarousel();
    if (currentAud) {
        currentAud.pause();
        currentAud.currentTime = 0;
    }
});

function rotateCarousel() {
    const angle = (360 / totalSlides) * currentIndex;
    carousel.style.transform = `rotateY(-${angle}deg)`;
}

const audios = document.querySelectorAll('.ply-audio');
const images = document.querySelectorAll('.ply-th');
let currentAud = null;

audios.forEach((audio) => {
    audio.volume = 0.3;
});

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        if (currentAud) {

            if (currentAud === audios[index]) {
                currentAud.pause();
                currentAud.currentTime = 0;
                currentAud = null;
            } else {
                currentAud.pause();
                currentAud.currentTime = 0;
                currentAud = audios[index];
                currentAud.play();
            }
        } else {
            currentAud = audios[index];
            currentAud.play();
        }
    });
});