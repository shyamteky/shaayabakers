let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);