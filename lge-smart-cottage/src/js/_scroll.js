document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  const headerCont = document.querySelector('.header-container');
  const topButton = document.getElementById('top');
  wrapper.addEventListener('scroll', function (e) {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 0) {
      if (headerCont) {
        headerCont.classList.add('scroll-fixed');
      }
      if (topButton) {
        topButton.style.opacity = 1;
        topButton.style.pointerEvents = 'all';
      }
    } else {
      if (headerCont) {
        headerCont.classList.remove('scroll-fixed');
      }
      if (topButton) {
        topButton.style.opacity = 0;
        topButton.style.pointerEvents = 'none';
      }
    }
  });

  if (topButton) {
    topButton.addEventListener('click', function (e) {
      wrapper.scrollTop = 0;
    });
  }
});
