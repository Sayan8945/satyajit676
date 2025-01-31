var swiper = new Swiper(".mySwipers", {
    slidesPerView: 6,
    spaceBetween: 20,
    // autoplay:{
    //     delay:2500,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });