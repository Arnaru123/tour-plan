var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button_next",
    prevEl: ".reviews-slider__button_prev",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
});
