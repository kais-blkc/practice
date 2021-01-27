const $burger = qs('.burger');
const $burgerBtn = qs('.burger-btn');
const $burgerWrapper = qs('.burger-wrapper');
const $burgerMenu = qs('.burger-menu');

// Burger menu =====
$burgerBtn.addEventListener('click', (e) => {
  $burgerWrapper.classList.toggle('active');
  $burgerMenu.classList.toggle('active');
  $burger.classList.toggle('active');
  qs('body').classList.toggle('active');
})

// Menu page =====
if ( qs('.product-list') ) {
  const $modal = qs('#myModal');
  const $nav = qs('.navigation');
  const $itemList = qs('.product-list');
  const headerHeight = qs('header').offsetHeight

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= headerHeight) {
      $nav.classList.add('fixed');
    } else {
      $nav.classList.remove('fixed');
    }
  })

  // Open modal
  $itemList.addEventListener('click', e => {
    if (e.target.closest('.product-body')) {
      qs('body').classList.add('active');
      $modal.classList.add('active');
    }
  })

  // close modal
  $modal.addEventListener('click', e => {
    if (e.target.className == 'modal active' || e.target.className == 'close') {
      qs('body').classList.remove('active');
      $modal.classList.remove('active');
    }
  })
}

$(document).ready(function() {
    $('.navigation > ul').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});


// Functions =====s
function qs(el, all) {
  if(all) return document.querySelectorAll(el);
  return document.querySelector(el);
}
