addEventListener('DOMContentLoaded', () => {
	// Модальное окно
	



	// Боковое меню
	let close = document.querySelector('.burger-menu');
	let burger = document.querySelector('.burger-click');
	let link = document.querySelectorAll('.header-link');
	let black = document.querySelector('.black');
	// Открытие меню
	burger.addEventListener('click', () => {
		close.classList.add('open');
		black.style.opacity = '1';
		black.style.visibility = 'visible';
	});
	// Открытие меню
	close.addEventListener('click', () => {
		close.classList.remove('open');
		black.style.opacity = '0';
		black.style.visibility = 'hidden';
	});

	document.addEventListener('click', (event) => {
		console.log(event.target.className);
		if (event.target.className == 'black') {
			close.classList.remove('open');
			black.style.opacity = '0';
			black.style.visibility = 'hidden';
		}
	})


// Для нормальной высоты main
	let fullHeight = document.documentElement.offsetHeight;
	let winHeight = document.documentElement.clientHeight;
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
	let main = document.querySelector('main');

	function setHeightMain() {
		if (winHeight > fullHeight) {
			main.style.height = winHeight - (header.offsetHeight + footer.offsetHeight) + 50 + 'px';
		}

		// console.log('fullH: ' + fullHeight);
		// console.log('winH: ' + winHeight);
	}

	setHeightMain();


	// window.addEventListener('resize', () => {
	// 	setHeightMain();
	// });
});
