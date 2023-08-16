const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && currentSlideIndex > 0) {
    currentSlideIndex--;
  } else if (event.key === 'ArrowDown' && currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  }

  updateSlideDisplay();
});

function updateSlideDisplay() {
  slides.forEach((slide, index) => {
    const offset = (index - currentSlideIndex) * 100;
    slide.style.transform = `translateY(${offset}%)`;
  });
}
