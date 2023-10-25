const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev.button');
const nextButton = document.getElementById('next.button');

let currentSlide = 0;

function showSlide(slideIndex) {
    carouselSlides.forEach(slide => slide.style.display = 'none');
    carouselSlides[slideIndex].style.display = 'block';

}

function nextSlide(slideIndex) {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide); 

const saludar = document.getElementById('saludar');
const modoOscuro = document.getElementById('modoOscuro');

saludar.addEventListener('click', function(){
    alert('Hola Usuario')
});

modoOscuro.addEventListener('click', function(){
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
    }else {
        document.body.style.backgroundColor = 'black';
    }
});

