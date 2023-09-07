const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 10,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 12,
      spaceBetween: 30,
    },
  },
});

