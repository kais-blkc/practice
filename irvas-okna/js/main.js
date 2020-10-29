
$(document).ready(function() {

	// Functions
	$('body').on("click", function(e) {
		// Tabs
		if (e.target.closest('.balconies-item')) {
			tab(e, '.balconies-item', '.cold-warm');
		}
		if (e.target.closest('.fishing-item-title')) {
			tab(e, '.fishing-item-title', '.fishing-item');
		}

		// Modal
		if(e.target.closest('#modal')) {
			// console.log(e.target);
			$('.modal').addClass('active');
		}
		// $('.modal').on("click", function() {
		// 	if (e.target == this) $('.modal').removeClass('active');
		// });
		if(e.target.closest('.close-modal')) {
			$('.modal').removeClass('active');
		}
	});

	// Burger func
	$('#burger-btn').on("click", function() {
		$('#burger-btn').toggleClass('burger-btn_active');
		$('#menu-nav').toggleClass('menu-nav_active');
		$('body').toggleClass('menu-nav_active');
	});


	// Links
	$(document).on("click", function(e) {
		if (e.target.closest('a:not(#active)')) {
			e.preventDefault();
		}
	});


	// Phone number
	$(".phone").mask(" +7 (999) 999-99-99");


	// Tabs
	function tab(event='', tabClassName, tabPlaneClassName) {
		let item = event.target.closest(tabClassName)
		$(tabClassName).removeClass('active');
		$(item).addClass('active');
		let href = $(item).attr('href');
		// console.log(href);
		$(tabPlaneClassName).removeClass('active').removeClass('in');
		$(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('in')
		}, 200);
		return false;
	}


	// Timer
	let deadline = new Date('2020-11-18T00:00:00').getTime();

	let timerFunc = setInterval(function() {
		let now = new Date().getTime();
		let distance = deadline - now;

		// Высчитываем время для дней, часов, минут и секунд
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Выдаем результат на сайте
		let timer = document.querySelector('#timer');
		timer.querySelector('#days').innerHTML = days < 10 ? '0' + days : days;
		timer.querySelector('#hours').innerHTML = hours < 10 ? '0' + hours : hours;
		timer.querySelector('#minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
		timer.querySelector('#seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

		// Если таймер истек
		if (distance < 0) {
			clearInterval(timerFunc);
			document.querySelector('#timer').innerHTML = "Время истекло";
		}

	}, 1000);

}); //DOMCONTENT
