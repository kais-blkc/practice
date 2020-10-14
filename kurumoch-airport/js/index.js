document.addEventListener('DOMContentLoaded', function (e) {
  
  /* burger */
  qs('#burger-btn').addEventListener('click', () => {
    [qs('#burger-btn'), qs('#burger')].forEach(item => item.classList.toggle('active'));
  });
  
  /* scroll */
  window.addEventListener('scroll', () => {
    let menu = [qs('#container-menu'), qs('#logo')];
    let height = qs('#description').clientHeight + qs('#container-menu').clientHeight;
    
    if (window.pageYOffset > height) {
      menu.forEach(item => item.classList.add('scroll'))
    } else {
      menu.forEach(item => item.classList.remove('scroll'))
    }
  });
  

  function qs(el) {
    elem = document.querySelector(el);
    return elem;
  }
});
