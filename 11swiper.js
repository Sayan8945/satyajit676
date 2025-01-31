var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  autoplay:{
    delay:2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});                                