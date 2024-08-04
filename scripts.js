function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.getElementById("currentSlide").textContent = (currentIndex + 1) * 3;
  document.getElementById("totalSlides").textContent = 6;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
setInterval(() => {
  nextSlide();
}, 4000);
showSlide(currentIndex);

function initializeSlider() {
  const stepElements = document.querySelectorAll(
    ".step_blocks_container .step"
  );
  const slidesContainer = document.querySelector(".slides_step");

  let slide_step = document.createElement("div");
  slide_step.className = "slide_step";
  slidesContainer.appendChild(slide_step);

  stepElements.forEach((element, index) => {
    if (index === 2 || index === 5 || index === 6 || index === 3) {
      // Start new slide at step 3 and 5
      slide_step = document.createElement("div");
      slide_step.className = "slide_step";
      slidesContainer.appendChild(slide_step);
    }

    // Append each step element to the current slide
    slide_step.appendChild(element.cloneNode(true));
  });

  // Create dots for each slide
  const totalSlides_step = document.querySelectorAll(".slide_step").length;
  const dotsContainer = document.querySelector(".slider-dots");
  for (let i = 0; i < totalSlides_step; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("data-slide", i);
    dotsContainer.appendChild(dot);
  }
}

// Инициализация слайдера
initializeSlider();

let currentSlide_step = 0;

function updateSlide(index) {
  const slides_step = document.querySelector(".slides_step");
  const totalSlides_step = document.querySelectorAll(".slide_step").length;
  if (index >= totalSlides_step) {
    currentSlide_step = 0;
  } else if (index < 0) {
    currentSlide_step = totalSlides_step - 1;
  } else {
    currentSlide_step = index;
  }
  slides_step.style.transform = `translateX(-${currentSlide_step * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide_step].classList.add("active");

  // Disable/Enable navigation buttons
  document
    .querySelector(".prev_step")
    .classList.toggle("disabled", currentSlide_step === 0);
  document
    .querySelector(".next_step")
    .classList.toggle("disabled", currentSlide_step === totalSlides_step - 1);
}

function nextSlide_step() {
  updateSlide(currentSlide_step + 1);
}

function prevSlide_step() {
  updateSlide(currentSlide_step - 1);
}

// Add click event to dots for navigation
document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = parseInt(this.getAttribute("data-slide"));
    updateSlide(slideIndex);
  });
});

// Initialize first dot as active
document.querySelectorAll(".dot")[0].classList.add("active");

// Set initial button states
document.querySelector(".prev_step").classList.add("disabled");

document.addEventListener("DOMContentLoaded", () => {
  const sourceDiv = document.getElementById("members_buttons");
  const destinationDiv = document.getElementById("members_buttons_2");
  destinationDiv.innerHTML = sourceDiv.innerHTML;
});
