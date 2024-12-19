document.addEventListener('DOMContentLoaded', function () {
  let windowWidth = window.window.innerWidth;
  const main = document.querySelector('main');
  const lnb = document.querySelector('.lnb-container');

  window.addEventListener('resize', function () {
    if (lnb && windowWidth > 1023) {
      lnb.removeAttribute('style');
    }
  });

  if (lnb && windowWidth <= 1023) {
    document.addEventListener('scroll', function () {
      var horizontalScroll = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      lnb.style.left = `-${horizontalScroll}px`;
    });
  }
});
