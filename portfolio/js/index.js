
new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,

    pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	    dynamicBullets: true,
	  }
});
