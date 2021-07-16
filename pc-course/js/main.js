const burger = document.querySelector('.burger')

burger.addEventListener('click', e => {
  toggleClass('active', ['.burger', '.header-mob', '.header-mob .menu',], true)
})


function toggleClass(className, els=[], querySelector=false) {
  els.forEach(el => {
    const $el = !querySelector ? el : document.querySelector(el);
    $el.classList.toggle(className)
  })
}
