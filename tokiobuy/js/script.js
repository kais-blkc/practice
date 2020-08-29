addEventListener('DOMContentLoaded', () => {
	// Модальное окно
	let modal = document.querySelector('#myModal');
	let span = document.querySelectorAll('.close')[0];

	document.addEventListener("click", (event) => {
		if (event.target.closest('.product-body')) {
			modal.style.opacity = "1";
			modal.style.visibility = "visible";
			document.body.style.overflow = "hidden";
		} else if (event.target.closest('.burger')) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	});

	span.onclick = () => {
		modal.style.opacity = "0";
		modal.style.visibility = "hidden";
	}

	window.onclick = (event) => {
		if (event.target == modal) {
			modal.style.opacity = "0";
			modal.style.visibility = "hidden";
		}
	}



	// Боковое меню
	let close = document.querySelector('.burger-menu');
	let burger = document.querySelector('.burger-click');
	let link = document.querySelectorAll('.header-link');
	let black = document.querySelector('.black');

	// Открытие меню
	burger.onclick = () => {
		close.classList.add('open');
		black.style.opacity = '1';
		black.style.visibility = 'visible';
	};

	// document.onclick = (event) => {
	// 	if (event.target.closest('.burger')) {
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		document.body.style.overflow = "auto";
	// 	}
	// };

	// Закрытие меню
	close.onclick = () => {
		close.classList.remove('open');
		black.style.opacity = '0';
		black.style.visibility = 'hidden';
	};
	
	document.addEventListener('click', (event) => {
		// console.log(event.target.className);
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
