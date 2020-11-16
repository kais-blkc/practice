$(document).ready(() => {
  
  // let mobMenu = $('.header_menu-mobile');
	// let mobMenuList = $('.header_menu-mobile-list');
	
  // mobMenu.click(() => {
  //   mobMenu.toggleClass('active');
  //   mobMenuList.toggleClass('active');
	// });
	
	
	let mobMenu = $('[data-menu="mobile"]');
	
	mobMenu.click(() => {
		const mobMenuList = mobMenu.find('[data-menu="mobile-list"]');

    mobMenu.toggleClass('active');
    mobMenuList.toggleClass('active');
  });


  // Slider
  $('.slider').slick({
		arrows: true,
		// dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		// speed: 300,
		infinite: false,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
				}
      },
      {
				breakpoint: 800,
				settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
				}
			},
			{
				breakpoint: 455,
				settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
				}
			},
		],
		mobileFirst: false,
	});

});



