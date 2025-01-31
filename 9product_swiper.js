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
  
  let bookNow=document.querySelector('.book');
// let from_to=document.querySelector('.bb');

showDate(()=>{
    const selectedDate = document.getElementById("datePicker").value;
    document.getElementById("displayDate").innerHTML = selectedDate;}) 

bookNow.addEventListener('click',()=>{
    alert('Booking feature coming soon!');
    
})

