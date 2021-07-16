function qs(el, all=false) {
  if (all) {
   return document.querySelectorAll(el);
  }
  return document.querySelector(el)
}


const burgerBlock = qs('#burger-block')
const burger = qs('#burger')
const mobMenu = qs('#mob-menu')

burgerBlock.addEventListener('click', () => {
  burger.classList.toggle('active')
  mobMenu.classList.toggle('active')
  qs('body').classList.toggle('active')
})
