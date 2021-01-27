// Slider
let mySwiper = new Swiper('.swiper-promo', {

  loop: false,
  cssMode: true,
  autoplay: {
    delay: 3000,
    disableOnIteration: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

})
