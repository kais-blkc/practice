$(document).ready(function() {

  /* Popup and Navbar script ================== */
  // Header navbar child els
  const navBarEls = $('.header-navbar > ul > li')
  const navBarSubMenus = $('.header-navbar > ul > li ul > li')

  $('body').on('click', function(e) {
    if (!e.target.closest('.header-navbar') || !e.target.closest('ul')) {
      navBarEls.removeClass('active')
    }
  })
  
  navElsFunction(navBarEls)
  navElsFunction(navBarSubMenus)

  function navElsFunction(menu) {
    menu.each(function(key, el) {
      const elq = $(el)
      if (elq.children('ul').length) {
        elq.addClass('has-children')

        elq.on('click', () => {
          navBarEls.not(this).removeClass('active')
          elq.toggleClass('active')
        })
      }
    })
  } 

  // Select cities
  try {
    const popup = $('.popup-menu');
    popup.addClass('has-children')
    popup.find('button').on('click', () => {$(popup).toggleClass('active')})  
  } catch(err) {
    console.log('Not important err: ' + Err);
  }


  /* Burger ================== */
  const mobMenu = $('.header-desctop');
  $('#burger').on('click', () => {
    mobMenu.addClass('active')
  })
  $('#close-burger').on('click', () => {
    mobMenu.removeClass('active')
  })


  // Sliders
  const heroSliderMain = new Swiper('.hero-slider', {
    delay: 3,
    autoplay: true,
    autoHeight: true,
    pagination: {
      el: '.hero-slider .swiper-pagination',
      clickable: true
    },
  })
  const ourSpecsSlider = new Swiper('.our-specs__slider', {
    slidesPerView: "auto",
    autoLayout: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.our-specs__slider .swiper-button-next',
      prevEl: '.our-specs__slider .swiper-button-prev',
    },
  })
  const constructExampleSlider = new Swiper('.construct-examples__slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: 'fade',
    pagination: {
      el: ".construct-examples__slider .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.construct-examples__slider .construct-examples__item-navigations .swiper-button-next',
      prevEl: '.construct-examples__slider .construct-examples__item-navigations .swiper-button-prev',
    },
  })
  const constructExamplesItemLeftSlider = new Swiper('.construct-examples__item-left-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: 'coverflow',
    navigation: {
      nextEl: '.construct-examples__item-left-slider  .swiper-button-next',
      prevEl: '.construct-examples__item-left-slider  .swiper-button-prev',
    },
  })
  const howBuildSlider = new Swiper('.how-build__slider', {
    slidesPerView: 1,
    effect: 'fade',
    pagination: {
      el: '.how-build__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let number;
        switch (index) {
          case 0:
            number = 'Первый этап';
            break;
          case 1:
            number = 'Второй этап';
            break;
          case 2:
            number = 'Третий этап';
            break;
          case 3:
            number = 'Четвертый этап';
            break;
          case 4:
            number = 'Пятый этап';
            break;
          case 5:
            number = 'Шестой этап';
            break;
        
          default:
            break;
        }
        return `<div class="stages-list__item ${className}">${number}</div>`;
      },
    },
    navigation: {
      nextEl: '.how-build__slider  .swiper-button-next',
      prevEl: '.how-build__slider  .swiper-button-prev',
    },
  })
  const buildCreditSlider = new Swiper('.build-credit__list-slider', {
    spaceBetween: 30,
    navigation: {
      nextEl: '.build-credit__list-slider  .swiper-button-next',
      prevEl: '.build-credit__list-slider  .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      }
    }
  })
  const promotionsSlider = new Swiper('.promotions-list', {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.promotions-list  .swiper-button-next',
      prevEl: '.promotions-list  .swiper-button-prev',
    }
  })
  const ourPartnersSlider = new Swiper('.our-partners__list', {
    slidesPerView: 'auto',
    spaceBetween: 30,
  })
  const homeQuoteSlider = new Swiper('.home-quote__slider', {
    effect: 'slide',
    slidesPerView: 1,
    cssMode: true,
    navigation: {
      nextEl: '.home-quote__slider .swiper-button-next',
      prevEl: '.home-quote__slider .swiper-button-prev',
    },
    pagination: {
      el: '.home-quote__slider .swiper-pagination',
      type: 'progressbar'
    }
  })
  const helpfulHintsSlider = new Swiper('.helpful-hints__slider', {
    effect: 'slide',
    slidesPerView: 1,
    cssMode: true,
    navigation: {
      nextEl: '.helpful-hints__slider .swiper-button-next',
      prevEl: '.helpful-hints__slider .swiper-button-prev',
    }
  })
  const ppHeroSlider = new Swiper('.pp-hero__slider', {
    delay: 3,
    autoplay: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.pp-hero__slider .swiper-pagination',
      clickable: true,
    }
  })
  const singleHeroSlider2 = new Swiper('.small-img__slider', {
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.small-img__slider .swiper-button-next',
      prevEl: '.small-img__slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
      slidesPerView: 2,
      },
      767: {
      slidesPerView: 3,
      },
    }
  })
  const singleHeroSlider1 = new Swiper('.big-img__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    thumbs: {
      swiper: singleHeroSlider2,
    },
  })
  const singleFeaturesSlider = new Swiper('.sf__slider', {
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.sf__slider .swiper-button-next',
      prevEl: '.sf__slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
      slidesPerView: 1,
      },
      767: {
      slidesPerView: 2,
      },
      1020: {
      slidesPerView: 4,
      },
    }
  })
  
  // Sliders count
  customSliderPagination(howBuildSlider);
  customSliderPagination(constructExampleSlider);
  customSliderPagination(homeQuoteSlider);
  customSliderPagination(buildCreditSlider);
  customSliderPagination(promotionsSlider);

  function customSliderPagination(sliders, all, cur) {
    try {
      if (Array.isArray(sliders)) {
        sliders.forEach(sl => {
          doPagintaion(sl)
        })
      } else {
        doPagintaion(sliders)
      }
    } catch(err) {}
    

    function doPagintaion(slider) {
      const allSlides = slider.slides.length;
      const allSlidesHTML = slider.$el.find('.ce__item-navigations .all');
      const curSlideHTML = slider.$el.find('.ce__item-navigations .cur');
  
      allSlidesHTML.text(allSlides);
      curSlideHTML.text(slider.realIndex+1);
  
      slider.on('slideChange',  function() {
        curSlideHTML.text(slider.realIndex+1);
      });
    } 

  }


  
// QA accordion
try {

  const qaList = $('.qa-list__item')
  const qaListAnswrs = $('.qa-list__item .qa-list__item-answer')

  if (qaList.length) {
    $(qaList[0]).toggleClass('active')
    $(qaListAnswrs[0]).css('max-height', qaListAnswrs[0].scrollHeight + 30)
  
    qaList.on('click', function() {
      const curAnswer = $(this).find('.qa-list__item-answer')
      const $this = $(this)
  
      qaListAnswrs.css('max-height', 0)
      qaList.not($this).removeClass('active')
  
      $this.toggleClass('active')
      curAnswer.css('max-height', curAnswer[0].scrollHeight + 30)
    })
  }

  // Ranges
  // rangeName, rangeFromInput, rangeToInput, minVal, maxVal, fromVal, toVal
  const range1 = createDoubleRange({
    rangeName: '#construction-cost',
    rangeFromInput: '.construction-cost__from-input',
    rangeToInput: '.construction-cost__to-input',
    minVal: 0,
    maxVal: 1000,
    fromVal: 200,
    toVal: 500,
  })

  const range2 = createDoubleRange({
    rangeName: '#area-sq',
    rangeFromInput: '.area-sq__from-input',
    rangeToInput: '.area-sq__to-input',
    minVal: 0,
    maxVal: 500,
    fromVal: 120,
    toVal: 240,
  })

  function createDoubleRange(datas) {
    const range = $(datas.rangeName);
    const fromInput= $(datas.rangeFromInput)
    const toInput= $(datas.rangeToInput)
    let min = datas.minVal
    let max = datas.maxVal
    let from = datas.fromVal
    let to = datas.toVal

    const instance = range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      from: from,
      to: to,
      skin: "round",
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
    }).data('ionRangeSlider');

    fromInput.on("change", function() {
      let val = $(this).prop("value");

      console.log(val);

      if (val < min) val = min;
      else if (val > to) val = to;

      instance.update({from: val});
      $(this).prop("value", val);
    });

    toInput.on("change", function() {
      let val = $(this).prop("value");

      if (val < from) val = from;
      else if (val > max) val = max;

      instance.update({to: val});
      $(this).prop("value", val);
    });


    function updateInputs(data) {
      from = data.from
      to = data.to

      fromInput.prop('value', from)
      toInput.prop('value', to)
    }

    return instance
  }

} catch(err) {}


// Sidebar / Filter
try { 
  const ppCatalogLeft = $('.pp-catalog__left')

  $('.sidebar-reset').on('click', function(e) {
    e.preventDefault()
    $('.sidebar')[0].reset()
    range1.update({from: 0, to: 10000})
    range2.update({from: 0, to: 10000})
  })

  $('.show-filter').on('click', function() {
    ppCatalogLeft.addClass('active')
    $('body').css('overflow-y', 'hidden')

    ppCatalogLeft.on('click', closeFilter)
    $('.close-filter').on('click', closeFilter)
  })

  function closeFilter(e) {
    if (e.target.className.includes('pp-catalog__left') || e.target.className.includes('close-filter')) {
        $(this).removeClass('active')
        $('body').css('overflow-y', 'auto')
      }
  }

} catch(err) {}

// Sidebar / Filter
try {
  const sidebarItems = $('.sidebar-items')
  const sidebarMoreBtn = $('.sidebar-more')

  sidebarMoreBtn.on('click', function() {
    sidebarItems.css('max-height', sidebarItems[0].scrollHeight + 20)
    sidebarItems.toggleClass('more')
    $('.sidebar .sidebar-more').toggleClass('active')
  })
} catch (err) {}


// Single tabs
try {
  $('.single-tabs__wrapper').each(function() {
    let ths = $(this);
    ths.find('.st-contents__item').not(':first').hide();
    ths.find('.st-tabs__item').click(function() {
      ths.find('.st-tabs__item').removeClass('active').eq($(this).data('index')).addClass('active');
      ths.find('.st-contents__item').hide().eq($(this).data('index')).fadeIn()
    }).eq(0).addClass('active');
  });
} catch(err) {}


// Single table items
try {
  const tbItems = $('.table-body .tb__item.arrow-down')
  const tbItemsSub = $('.table-body .tb__item.arrow-down .tb__subitem-desc')

  tbItems.on('click', function() {
    const $this = $(this)
    const $thisSub = $(this).find('.tb__subitem-desc')

    tbItemsSub.css('max-height', 0)
    tbItems.not($this).removeClass('active')

    $this.toggleClass('active')
    $thisSub.css('max-height', $this[0].scrollHeight + 30)
  })
} catch (err) {}


// Fixed btns
try {
  const fxBtns = $('.fixed-links')
  const toggleFxBtns = $('#toggleFxBtns')
  toggleFxBtns.on('click', function() {
    fxBtns.toggleClass('active')
    $(this).toggleClass('active')
  })
  
} catch (err) {}


// Modals
try {
  const modal = $('.modal')
  const modalBtn = $('*[data-modal]')

  modalBtn.on('click', function(e) {
    e.preventDefault();
    const $body = $('body')
    modal.className = '.modal'

    switch (this.dataset.modal) {
      case 'request-quote':
        modal.addClass('active request-quote-open')
        $body.css('overflow-y', 'hidden')
        break;
      case 'request-call':
        modal.addClass('active request-call-open')
        $body.css('overflow-y', 'hidden')
        break;
      case 'ask-question':
        modal.addClass('active ask-question-open')
        $body.css('overflow-y', 'hidden')
        break;
      case 'video-cons':
        modal.addClass('active video-cons-open')
        $body.css('overflow-y', 'hidden')
        break;
      case 'socs':
        modal.addClass('active socs-open')
        $body.css('overflow-y', 'hidden')
        break;
    
      default:
        e.preventDefault()
        break;
    }

    modal.on('click', e => {
      const curClassName = e.target.className

      if (curClassName.includes('modal ') || e.target.closest('.close-modal-btn')) {
        modal[0].className = 'modal'
        $body.css('overflow-y', 'auto')

      } 
    })
      
  })


} catch (err) {}

// Catalog tabs
try {
  const moreTabsBtn = $('.catalog-tabs__item[data-more-tabs-btn]');
  const tabs = $('.catalog-tabs[data-more-tabs]');
  const tabsCount = window.innerWidth > 767 ? tabs[0].dataset.tabsCounts : tabs[0].dataset.tabsCountsMob;
  const tabsItems = tabs.find('.catalog-tabs__item');
  let tabsShowMore = false;
  
  // hide tabs
  if (tabs.children().length > tabsCount) {
    moreTabsBtn.addClass('active');

    tabsItems.each((index, el) => {
      if (index > tabsCount && index != tabsItems.length - 1) {
        $(el).addClass('none')
      }
    })
  }

  moreTabsBtn.on('click', function() {
    tabsShowMore = !tabsShowMore
    tabs[0].dataset.moreTabs = tabsShowMore
  })
} catch(err) {}


// Go section / Scroll to section
try {
  const goBtns = $('*[data-go-sec]')

  goBtns.on('click', function(e) {
    e.preventDefault()
    const goSecTop = $(this.dataset.goSec)

    if (goSecTop.length) {
      $('html').scrollTop(goSecTop.offset().top)
    }
  })
} catch (err) {}

// document ready end
})
