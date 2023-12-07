var swiper = new Swiper(".mySwiper", {
  slidesPerView: 10,
  spaceBetween: 7,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
    1366: {
      slidesPerView: 10,
    },
  },
});

var swiper2 = new Swiper(".tabSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //     0: {
  //         slidesPerView: 1.5,
  //     },
  //     480: {
  //         slidesPerView: 3,
  //     },
  //     992: {
  //         slidesPerView: 3.5,
  //     },
  //     1366: {
  //         slidesPerView: 7,
  //     },
  // },
});

var swiper3 = new Swiper(".topSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 3,
    },
  },
});
var swiper4 = new Swiper(".latestSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 3,
    },
  },
});
var swiper5 = new Swiper(".vSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 3,
    },
  },
});