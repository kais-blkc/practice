document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close-btn');
  const headerNavbar = document.querySelector('header .navbar');

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
  } catch(err) {}

  // Modals
  try {
    const modal = document.querySelector('.modal');
    const modalItems = document.querySelectorAll('.modal-items > div');
    const modalBtns = document.querySelectorAll('*[data-modal]');

    modalBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();

        const curDataModal = btn.dataset.modal
        switch (curDataModal) {
          case '.modal__market-pp':
            openModal(curDataModal)
            moreMarketPP(
              btn.closest('.popular-projects__item'),
              document.querySelector(curDataModal)
            )
            break;
        }
      })
    })

    modal.addEventListener('click', e => {
      if (e.target.className.includes('close-modal') || e.target.className.includes('modal')) {
        closeModal();
      }
    })
  } catch (err) {}


  /* Fucntions =========== */
  // modal
  function openModal(curItem) {
    modalItems.forEach(item => item.classList.remove('active'))
    document.querySelector(curItem).classList.add('active') 
    modal.classList.add('active')
    document.body.style.overflowY = 'hidden'
  }
  
  function closeModal() {
      document.body.style.overflowY = 'auto'
      modal.classList.remove('active')
  }
  
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
      console.log(e.target.className);

      if (e.target.className === 'ff-team__item-more') {
        const fftDesc = e.target.closest('.ff-team__item').querySelector('.ff-team__item-desc');
        const fftMore = e.target.closest('.ff-team__item').querySelector('.ff-team__item-more');

        fftDesc.classList.toggle('active');
        fftDesc.style.maxHeight = fftDesc.scrollHeight + 20 + 'px';
        if (fftDesc.className.includes('active')) {
          fftMore.innerHTML = 'Свернуть';
        } else {
          fftMore.innerHTML = 'Моя история';
        }

      }

    });
  } catch (err) {}
})

