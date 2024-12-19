document.addEventListener('DOMContentLoaded', function () {
  const modelImageSwiper = new Swiper('.model-image-box > .swiper', {
    speed: 0,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    touchRatio: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const compareSwiper = new Swiper('.compare-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
        allowTouchMove: false,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
      },
    },
  });

  const linkSwiper = new Swiper('.link-wrap.use-tablet .link-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    speed: 500,
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
});
