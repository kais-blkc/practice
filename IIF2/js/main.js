document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close-btn');
  const headerNavbar = document.querySelector('header .navbar');

  try {
    burger.addEventListener('click', e => {
      headerNavbar.classList.add('active');
      document.body.style.overflowY = 'hidden';
    })
  
    headerNavbar.addEventListener('click', e => {
      if (e.target.className.includes('navbar ') || e.target.className.includes('close-btn')) {
        headerNavbar.classList.remove('active');
        document.body.style.overflowY = 'auto';
      }
    })
  } catch (error) {}

  // Sliders
  try {
    const confsPastEventsSlider = new Swiper('.confs-past-events__slider', {
      spaceBetween: 30,
      navigation: {
        nextEl: '.confs-past-events__slider .swiper-button-next',
        prevEl: '.confs-past-events__slider .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
      }
    });
    const weReviewsList = new Swiper('.we-reviews__list', {
      spaceBetween: 30,
      navigation: {
        nextEl: '.we-reviews__list .swiper-button-next',
        prevEl: '.we-reviews__list .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      }
    });
    const weOurCasesSlider = new Swiper('.we-our-cases__slider', {
      spaceBetween: 50,
      navigation: {
        nextEl: '.we-our-cases__slider .swiper-button-next',
        prevEl: '.we-our-cases__slider .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      }
    });
    const confsMeetingsUpcomingSlider = new Swiper('.confs-meetings__slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.confs-meetings__slider .swiper-button-next',
        prevEl: '.confs-meetings__slider .swiper-button-prev',
      }
    });
    const hWhatYieldSlider = new Swiper('.h-what-yield__slider', {
      spaceBetween: 30,
      autoHeight: true,
      navigation: {
        nextEl: '.h-what-yield__slider .swiper-button-next',
        prevEl: '.h-what-yield__slider .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
      }
    });
    const partnersSlider = new Swiper('.partners__list', {
      preloadImages: false,
      // loop: true,
      autoplay: {
        delay: 1700,
      },
      speed: 1000,
      // navigation: {
      //   nextEl: '.h-what-yield__slider .swiper-button-next',
      //   prevEl: '.h-what-yield__slider .swiper-button-prev',
      // },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        996: {
          slidesPerView: 4,
        }
      }
    });
  } catch(err) {}

  // Market popular projects
  function moreMarketPP(item, modal) {
    const curImg = item.querySelector('.img img').src
    const curTitle = item.querySelector('.title').innerHTML
    const curDesc = item.querySelector('.desc').innerHTML
  
    modal.querySelector('.img img').src = curImg
    modal.querySelector('.title').innerHTML = curTitle
    modal.querySelector('.desc').innerHTML = curDesc
  
  }

  // ff team
  try {
    const fftItem = document.querySelector('.ff-team__list');

    fftItem.addEventListener('click', function(e) {

      if (e.target.className === 'ff-team__item-more') {
        const fftItems = document.querySelectorAll('.ff-team__item');
        const fftDescs = document.querySelectorAll('.ff-team__item .ff-team__item-desc');
        const fftDesc = e.target.closest('.ff-team__item').querySelector('.ff-team__item-desc');
        const fftMore = e.target.closest('.ff-team__item').querySelector('.ff-team__item-more');

        fftDescs.forEach(el => {
          if (el.closest('.ff-team__item') != e.target.closest('.ff-team__item')) {
            el.classList.remove('active')
          }
        });
        fftDesc.classList.toggle('active');
        fftDesc.style.maxHeight = fftDesc.scrollHeight + 20 + 'px';
        
        fftItems.forEach(el => {
          const elDesc = el.querySelector('.ff-team__item-desc')
          if (elDesc.className.includes('active')) {
            el.querySelector('.ff-team__item-more').innerHTML = 'Свернуть';
          } else {
            el.querySelector('.ff-team__item-more').innerHTML = 'Моя история';
          }
        });

      }

    });
  } catch (err) {}

  // Autopaly video
  try {
    document.querySelector('.video-bg video').play();
  } catch (err) {}

  // New modals
  const newModalBtn = document.querySelectorAll('*[data-modal-btn]');
  const newModalItems = document.querySelectorAll('*[data-modal-item]');
  
  newModalBtn.forEach(btn => {
    btn.addEventListener('click', e => {

      newModalItems.forEach(item => {
        if (btn.dataset.modalBtn === item.dataset.modalItem) {
          item.classList.add('active');
        }
      })

    })
  })

  newModalItems.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.className.includes('modal ') || e.target.className.includes('modal-close-btn')) {
        item.classList.remove('active');
      }
    })
  });

})

