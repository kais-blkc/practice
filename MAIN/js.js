const docHeight = document.documentElement.offsetHeight;
const main = document.querySelector('.main');

function setMainHeight() {
	main.style.height = docHeight - 50 + 'px';
}

setMainHeight();

console.log(docHeight);
console.log(main);