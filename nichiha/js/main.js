// JQUERY CODE
$('document').ready(() => {
  // VARS
  const burger = $('#burger');
  const CloseBtn = $('#close-btn');
  const mobMenu = $('#mob-menu');

  
  // BURGER
  burger.on('click', () => {
    mobMenu.addClass('active');
  });
  CloseBtn.on('click', () => {
    mobMenu.removeClass('active');
  });

  // BEFORE & AFTER
  if (qs('section.panel-examples')) {
    $(".images").twentytwenty({
      no_overlay: true
    });
  }


  // SLIDERS ==========
  // video slider
  $('.index-hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  });

  $('.video-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          // variableWidth: true,
          centerMode: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          // arrows: false,
          // variableWidth: true,
          centerMode: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.houses-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.similar-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.product-news_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.prev-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

});


// WOW
new WOW().init();


// CIRCLE PROGRESS BAR - CARE
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
let flag = true
if (qs('.care-list')) {
  window.addEventListener('scroll', () => {
    if (flag && qs('.care-list').getBoundingClientRect().top < 500) {
      addedCares();
      flag = false;
    }
  });
}

function addedCares() {
  const caresObj = {
    cares: [careItem_1, careItem_2, careItem_3, careItem_4, careItem_5, careItem_6],
    animate: [0.2, 0.4, 0.5, 0.7, 0.9, 1.0]
  }

  for (let i = 0; i < 6; i++) {

    var bar = new ProgressBar.Circle(caresObj.cares[i], {
      color: '',
      strokeWidth: 10,
      trailWidth: 10,
      trailColor: '#fff',
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#83CA4D', width: 10 },
      to: { color: '#83CA4D', width: 10 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 6);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    bar.text.style.fontFamily = '"Garamond", Helvetica, sans-serif';
    bar.text.style.fontSize = '5rem';
    bar.text.style.color = '#83CA4D'
    bar.animate(caresObj.animate[i]);  // Number from 0.0 to 1.0
  }
}


// JS CODE (Просто я хз как это реализовать на jquery, поэтому написал на чистом js)
tab('#title-list-projects', '#projects-wrapper-projects > .project-list');
tab('#title-list-new', '#projects-wrapper-new > .project-list');
tab('#title-list_product-prev', '#wrapper_product-prev > .project-list');

function tab(titleWrap, items) {

  if (!qs(titleWrap)) {
    return
  }

  const $titles = qs(`${titleWrap} > li`, true);
  titleWrap = qs(titleWrap);
  items = qs(items, true);

  addDataset($titles);
  addDataset(items);

  titleWrap.addEventListener('click', e => {
    const target = e.target;

    if (target.dataset.number) {

      $titles.forEach(title => {
        title.classList.remove('active');
      });
      target.classList.add('active');

      items.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.number == target.dataset.number) {
          item.classList.add('active');
        }
      });
      
    }
  }); // titleWrap
} // tab

function addDataset(arr) {
  let i = 1;
  arr.forEach(item => {
    item.dataset.number = i++;
  });
}

function qs(el, all) {
  if (all) return document.querySelectorAll(el);
  return document.querySelector(el);
}
