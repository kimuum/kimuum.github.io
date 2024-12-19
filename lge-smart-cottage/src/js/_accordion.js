document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  const lnb = document.querySelector('.lnb-container');

  if (lnb) {
    setLnb();
    wrapper.addEventListener('scroll', setLnb);

    window.addEventListener('scroll', setLnb);
  }

  const accordionLists = document.querySelectorAll('.accordion-list');
  accordionLists.forEach((accordionList) => {
    const accordionTop = accordionList.querySelector('.accordion-list-top');
    accordionTop.addEventListener('click', function () {
      if (accordionList.classList.contains('active')) {
        accordionList.classList.remove('active');
      } else {
        accordionList.classList.add('active');
      }
      accordionLists.forEach((everyList) => {
        if (accordionList !== everyList) {
          everyList.classList.remove('active');
        }
      });
    });
    if (lnb) {
      accordionList.addEventListener('transitionend', setLnb);
    }
  });

  function setLnb() {
    const lnbHeight = lnb.clientHeight;
    const footerTop = document.querySelector('.footer-container').offsetTop;
    const calc = footerTop - lnbHeight;
    let headerHeight = document.querySelector('.header-container').offsetHeight;
    let pos = wrapper.scrollTop + headerHeight;
    let windowWidth = window.window.innerWidth;

    if (windowWidth > 1023) {
      if (pos < calc) {
        lnb.classList.add('fixed');
      } else {
        lnb.classList.remove('fixed');
      }
    } else {
      lnb.classList.remove('fixed');
    }
  }
});
