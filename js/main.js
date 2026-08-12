const carousel = document.querySelector('.hero-carousel');

if (carousel) {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const previousButton = carousel.querySelector('.carousel-arrow--left');
  const nextButton = carousel.querySelector('.carousel-arrow--right');
  let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));

  if (activeIndex < 0) {
    activeIndex = 0;
    slides[0]?.classList.add('is-active');
  }

  const showSlide = (nextIndex) => {
    slides[activeIndex].classList.remove('is-active');
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides[activeIndex].classList.add('is-active');
  };

  previousButton?.addEventListener('click', () => showSlide(activeIndex - 1));
  nextButton?.addEventListener('click', () => showSlide(activeIndex + 1));
}
