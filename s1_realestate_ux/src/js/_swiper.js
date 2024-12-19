document.addEventListener('DOMContentLoaded', function () {
  /*
   ** comment : Web Main 공지사항 swiper
   */

  const mainNoticeBannerSwiper = new Swiper('.banner-content-box', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  /*
   ** comment : swiper
   */
  let dateSwiperArry = [];
  const dateBoxs = document.querySelectorAll('.date-swiper-box');
  for (let i = 0; i < dateBoxs.length; i++) {
    var dateSwiper = new Swiper('.date-swiper-box-' + [i + 1], {
      loop: false,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next-' + [i + 1],
        prevEl: '.swiper-button-prev-' + [i + 1],
        // clickable: true,
      },
    });
    dateSwiperArry.push(dateSwiper);
  }

  if (dateSwiperArry.length > 0) {
    for (let i = 0; i < dateSwiperArry.length; i++) {
      dateSwiperArry[0].on('slideChange', function () {
        situationSwiperArry[i].slideTo(dateSwiperArry[i].realIndex);
      });
    }
  }

  let situationSwiperArry = [];
  const situationDetails = document.querySelectorAll('.situation-detail-container');
  for (let i = 0; i < situationDetails.length; i++) {
    var situationSwiper = new Swiper('.situation-detail-container-' + [i + 1], {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      touchRatio: 0,
    });

    situationSwiperArry.push(situationSwiper);
  }

  window.addEventListener('resize', (event) => {
    if (situationSwiper) {
      situationSwiper.update();
    }
  });

  /*
   ** comment : accordion
   */
  const accordionItems = document.querySelectorAll('.accordion-item');

  for (const accordionItem of accordionItems) {
    const btnCollapse = accordionItem.querySelector('.btn-collapse');

    if (btnCollapse) {
      btnCollapse.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const item = target.closest('.accordion-item');
        const situationCont = target.closest('.situation-detail-container');
        // 자신을 제외한 다른 아이템 닫기
        accordionItems.forEach(function (list) {
          if (item !== list) {
            list.classList.remove('active');
          }
        });

        if (item.className.indexOf('active') > -1) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }

        if (situationCont) {
          situationSwiper.update();
        }
      });
    }
  }

  const windowWidth = window.innerWidth;

  if (windowWidth < 1024) {
    var fieldFormSwiper = new Swiper('.field-form.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 8,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      breakpoints: {
        1023: {
          touchRatio: 0,
          spaceBetween: 0,
        },
      },
    });
  }
});
