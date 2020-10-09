$(document).ready(function () {
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

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  // Обработка форм
  $(".valid-form").each(function () {
    $(this).validate({
      errorClass: "error",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name must have more than 2 symbol",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone",
        },
      },
    });
  });
  AOS.init();

  const map = document.querySelector(".hotel__map");
  let enableMap = false;
  window.addEventListener("mouseover", () => {
    if (!enableMap) {
      enableMap = true;
      map.insertAdjacentHTML(
        "afterBegin",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5414446132622!2d98.29703101525264!3d7.838257708655827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1600870483920!5m2!1sru!2sru" width="350" height="213" style="border:0; " allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
      );
    }
  });
});
