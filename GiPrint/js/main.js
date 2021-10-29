const $body = qs('body');
const $burger = qs('.burger');
const $menu = qs('.mob-menu');
const $menuContent = qs('.mob-menu-content');

$burger.addEventListener('click', () => {
  // console.log($menu);
  $burger.classList.toggle('active');
  $body.classList.toggle('active');
  $menu.classList.toggle('active');
  $menuContent.classList.toggle('active');
});


function qs(el, all) {
  if(all) return document.querySelectorAll(el);
  return document.querySelector(el);
}
