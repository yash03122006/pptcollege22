let currentSlide = 0;

const slides = document.querySelectorAll('.slide');

function navigateSlides(direction) {
    slides[currentSlide].style.display = "none";
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";
}

// Initialize the first slide as visible
slides[currentSlide].style.display = "block";
