var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    },
  },
});

function isDesktop() {
  return window.innerWidth >= 768;
}

const cardImages = document.querySelectorAll(".card-image");

cardImages.forEach((cardImage) => {
  cardImage.addEventListener("mouseenter", (event) => {
    if (!isDesktop()) return;

    const swiperSlide = event.target.closest(".swiper-slide");
    swiperSlide.style.zIndex = "10";

    const rightSibling = swiperSlide.nextElementSibling;
    if (rightSibling) {
      rightSibling.style.transform = "translateX(50px)";
      rightSibling.style.transition = "transform 0.3s ease";
    }
  });

  cardImage.addEventListener("mouseleave", (event) => {
    if (!isDesktop()) return;

    const swiperSlide = event.target.closest(".swiper-slide");
    swiperSlide.style.zIndex = "";

    const rightSibling = swiperSlide.nextElementSibling;
    if (rightSibling) {
      rightSibling.style.transform = "";
      rightSibling.style.transition = "transform 0.3s ease";
    }
  });
});
