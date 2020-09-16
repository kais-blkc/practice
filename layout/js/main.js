document.addEventListener('DOMContentLoaded', function(e) {
	
	let burgerBlock = document.querySelector('#burger-block');
	let substrate = document.querySelector('#substrate');
	let burgerMenu = document.querySelector('#burger-menu');
	let burgerClose = document.querySelector('#burger-close');

	burgerBlock.addEventListener('click', function(e) {
		substrate.style.opacity = '1';
		substrate.style.visibility = 'visible';
		burgerMenu.style.right = '0'
	});

	burgerClose.addEventListener('click', function(e) {
		substrate.style.opacity = '0';
		substrate.style.visibility = 'hidden';
		burgerMenu.style.right = '-50%'
	});

});
