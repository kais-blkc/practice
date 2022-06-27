document.addEventListener('DOMContentLoaded', () => {
  

// Sliders
try {
  const whatSlider = new Swiper('.what-slider__slider', {
    navigation: {
      nextEl: '.what-slider__slider .swiper-button-next',
      prevEl: '.what-slider__slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        autoHeight: true,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 60,
      }
    }
  })
  
  const modulesSlider = new Swiper('.modules-slider', {
    navigation: {
      nextEl: '.modules-slider .swiper-button-next',
      prevEl: '.modules-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        autoHeight: true,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        autoHeight: true,
      }
    }
  })
  
  const csSlider = new Swiper('.cs-slider', {
    navigation: {
      nextEl: '.cs-slider .swiper-button-next',
      prevEl: '.cs-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 60,
      }
    }
  })
  
  
  const benefitsSlider = new Swiper('.benefits-slider', {
    navigation: {
      nextEl: '.benefits-slider .swiper-button-next',
      prevEl: '.benefits-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        autoHeight: true,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        autoHeight: true,
      }
    }
  })
  
  const videoSlider = new Swiper('.video-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.video-slider .swiper-button-next',
      prevEl: '.video-slider .swiper-button-prev',
    },
  })

  const csSliser = new Swiper('.cs-slider', {
    spaceBetween: 30,
    navigation: {
      nextEl: '.cs-slider .swiper-button-next',
      prevEl: '.cs-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      767: {
        slidesPerView: 'auto',
      }
    }
  })

  const crSliser = new Swiper('.cr-slider', {
    spaceBetween: 30,
    navigation: {
      nextEl: '.cr-slider .swiper-button-next',
      prevEl: '.cr-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      767: {
        slidesPerView: 'auto',
      }
    }
  })
} catch (err) {
  console.log('Error in sliders: ' + err);
}

// Cases of students - read more btn
try {
  const csSliderDiv = document.querySelector('.cs-slider');
  csSliderDiv.addEventListener('click', e => {
    if (e.target.className === 'more-btn') {
      const curConvBox = e.target.closest('.convex-block')
      curConvBox.classList.toggle('active')
    }
  })
} catch(err) {}

// WCI list img
try {
  if (window.innerWidth < 767) {
    const wcilistImg = document.querySelector('.cw-list img');
    wcilistImg.src = '../img/wcilist-mob.png'
  }
} catch (err) {}

});
