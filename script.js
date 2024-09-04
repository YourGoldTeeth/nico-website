let currentSlide = 0; // Initial slide index

function changeSlide(n) {
  const slides = document.getElementsByClassName("carousel-item");
  currentSlide += n; // Increment or decrement slide index

  // Wrap around the slides if the end is reached
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Update the transform property to show the current slide
  const carouselImages = document.querySelector(".carousel-images");
  carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}
