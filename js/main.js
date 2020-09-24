var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button",
    prevEl: ".slider-button",
  },
});
