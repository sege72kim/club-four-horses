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
  nextSlide_2();
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
      slide_step = document.createElement("div");
      slide_step.className = "slide_step";
      slidesContainer.appendChild(slide_step);
    }

    slide_step.appendChild(element.cloneNode(true));
  });

  const totalSlides_step = document.querySelectorAll(".slide_step").length;
  const dotsContainer = document.querySelector(".slider-dots");
  for (let i = 0; i < totalSlides_step; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("data-slide", i);
    dotsContainer.appendChild(dot);
  }
}

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

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide_step].classList.add("active");

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

document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = parseInt(this.getAttribute("data-slide"));
    updateSlide(slideIndex);
  });
});

document.querySelectorAll(".dot")[0].classList.add("active");

document.querySelector(".prev_step").classList.add("disabled");

const slideItems = document.querySelectorAll(".slide_item");

const slides2 = document.querySelector(".slides_2");

slideItems.forEach((item) => {
  const newSlide = document.createElement("div");
  newSlide.classList.add("slide_2");
  newSlide.appendChild(item.cloneNode(true));
  slides2.appendChild(newSlide);
});

// 3213213123
function scrollToSection_2(sectionId_2) {
  const section_2 = document.getElementById(sectionId_2);
  section_2.scrollIntoView({ behavior: "smooth" });
}
let currentIndex_2 = 0;

function showSlide_2(index_2) {
  const slides_2 = document.querySelector(".slides_2");
  const totalSlides_2 = document.querySelectorAll(".slide_2").length;

  if (index_2 >= totalSlides_2) {
    currentIndex_2 = 0;
  } else if (index_2 < 0) {
    currentIndex_2 = totalSlides_2 - 1;
  } else {
    currentIndex_2 = index_2;
  }

  slides_2.style.transform = `translateX(-${currentIndex_2 * 100}%)`;

  document.getElementById("currentSlide_2").textContent = currentIndex_2 + 1;
  document.getElementById("totalSlides_2").textContent = totalSlides_2;
}

function nextSlide_2() {
  showSlide_2(currentIndex_2 + 1);
}

function prevSlide_2() {
  showSlide_2(currentIndex_2 - 1);
}

showSlide_2(currentIndex_2);
