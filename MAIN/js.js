const fullHeight = document.documentElement.offsetHeight;
const winHeight = document.documentElement.clientHeight;
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');

function setHeightMain() {
	if (winHeight > fullHeight) {
		main.style.height = winHeight - (header.offsetHeight + footer.offsetHeight) + 'px';
		console.log(footer.offsetHeight + ' footer height');
		console.log(header.offsetHeight + ' header height');
	} 
	if (fullHeight > winHeight){
		main.style.height = fullHeight - 50 + 'px';
		console.log(fullHeight);
	}
}

setHeightMain();

// setMainFullHeight();
// setMainWinHeight();

// console.log(winHeight);
// console.log(fullHeight);
// console.log(headerHeight.offsetHeight);
// console.log(max);
