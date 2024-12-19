// external js: isotope.pkgd.js
document.addEventListener('DOMContentLoaded', function (event) {
  const swiperOption = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    runCallbacksOnInit: true,
    observer: true,
    grid: {
      rows: 3,
      fill: 'column',
    },
    spaceBetween: 16, // Add 16px of space between slides
    navigation: {
      nextEl: '.facility-block-swiper-button-next',
      prevEl: '.facility-block-swiper-button-prev',
      clickable: true,
    },
    pagination: {
      el: '.facility-block-swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    breakpoints: {
      // when window width is >= 1025px
      1025: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
    },
  };

  var isotopeSwiper = new Swiper('.facility-block-container', {
    ...swiperOption,
  });

  const items = document.querySelectorAll('.element-item');
  let listArry = [];

  items.forEach(function (item) {
    listArry.push(item);
  });

  // Filtering
  var filterButtons = document.querySelectorAll('.isotope-button');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var group = button.getAttribute('data-group');
      console.log(group);

      filterButtons.forEach(function (filterButton) {
        filterButton.classList.remove('active');
      });

      button.classList.add('active');

      var newSlides = listArry
        .filter(function (list) {
          return group === 'all' || list.getAttribute('data-groups').includes(group);
        })
        .map(function (list) {
          return list.outerHTML;
        });

      isotopeSwiper.removeAllSlides(); // 이전 슬라이드 제거
      isotopeSwiper.appendSlide(newSlides); // 새로운 슬라이드 추가
      isotopeSwiper.update();
      isotopeSwiper.slideTo(0); // 첫 번째 슬라이드로 이동
    });
  });
});
