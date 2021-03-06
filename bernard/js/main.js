$(document).ready(() => {

  // Mob menu
  const navMob = $('.nav-mob')
  const burger = $('.burger')
  const burgerBtn = burger.find('.burger-btn')

  burger.on('click', (e) => {
    burgerBtn.toggleClass('active')
    navMob.toggleClass('active')
    $('body').toggleClass('active')
  })


  // Header
  const header = $('header')
  const headerCon = $('header .header__container')

  // -scroll
  function scrollHeader() {
    if ($(this).scrollTop() > 110) {
      headerCon.css({'padding': '10px 0'})
      $('body').css({'padding-top': '80px'})
      $(window).off('scroll', scrollHeader)
    }
  }
  $(window).on('scroll', scrollHeader)

  // -links
  header.on('click', (e) => {
    if (e.target.href && e.target.href[e.target.href.length - 1] === '#') {
      e.preventDefault()
    }
  })



  // Tabs
  const title = '.countries-titles > li'
  const item = '.countries-items__item'

  $('.countries').each(function() {
    let ths = $(this);

    ths.find(item).not(':first').hide();
    
    ths.find(title).click(function() {
      ths.find(title).removeClass('active').eq($(this).index()).addClass('active');
      ths.find(item).hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });


  // Form textarea
  const textarea = $('.submit-enquiry textarea')
  const numLetterHas = $('.submit-enquiry .num-letter .has')

  textarea.on('input', function() {
    numLetterHas.text(textarea.val().length)
    textarea.val(textarea.val().substring(0, 449))
  })

})
