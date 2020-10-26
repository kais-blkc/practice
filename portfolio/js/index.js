
new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,

    navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

    pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	    dynamicBullets: true,
	  }
});
