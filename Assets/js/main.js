document.addEventListener('DOMContentLoaded', () => {
  // CurUrl set
  const curUrl = document.querySelector('.cur-url');
  curUrl.innerText = location.host + location.pathname;

  // Window btns
  const btnFullScreen = document.querySelector('.window-btns .full-screen');

  btnFullScreen.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  });

});
