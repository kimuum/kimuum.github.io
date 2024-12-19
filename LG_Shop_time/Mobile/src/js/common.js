document.addEventListener("DOMContentLoaded", function() {
  // IOS , ANDROID CHECKED
  checkDevice();

  // 드롭다운
  const dropdownArea = document.querySelectorAll('.dropdown-area');

  if(dropdownArea) {
    dropdownArea.forEach(function(item) {
      item.addEventListener('click', dropdownOpen)
    });
  }

  function dropdownOpen(event) {
    const currentTarget = event.currentTarget; // 이벤트가 발생한 대상
    if(currentTarget.classList.contains('active')){
      currentTarget.classList.remove('active');
      currentTarget.parentNode.setAttribute('aria-expanded', 'false');
    } else {
      currentTarget.classList.add('active');
      currentTarget.parentNode.setAttribute('aria-expanded', 'true');
    }
  }

  
  //인풋 입력 시 x버튼 노출
  const input = document.querySelectorAll('input')

  if(input) {
    input.forEach(function(item) {
      item.addEventListener('keyup', showBtnClear)
    });
  }

  function showBtnClear(event) {
    const currentTarget = event.currentTarget;
    if(currentTarget.value.length > 0) {
      currentTarget.nextElementSibling.style.display = 'block';
    } else {
      currentTarget.nextElementSibling.style.display = 'none';
    }
  }

  //인풋 x버튼 클릭 시 value삭제
  const btnClear = document.querySelectorAll('.btn-icon-clear')

  if(btnClear) {
    btnClear.forEach(function(item) {
      item.addEventListener('click', clickBtnClear)
    });
  }

  function clickBtnClear(event) {
    const currentTarget = event.currentTarget;
    if(currentTarget.previousElementSibling.value.length > 0) {
      currentTarget.previousElementSibling.value = "";
      currentTarget.style.display = "none";
    }
  }

  // drag & trash
  let start_x, end_x;
  const btnTrash = document.querySelectorAll(".drag-area");
  const BTN_SHOW_CLASS = 'show-trash';
  btnTrash.forEach(function(e) {
    e.addEventListener('touchstart', touch_start);
    e.addEventListener('touchend', touch_end);
  });
  function touch_start(event) {
    start_x = event.touches[0].pageX
  }
  function touch_end(event) {
    end_x = event.changedTouches[0].pageX;
    if (start_x > end_x) {
      event.currentTarget.classList.add(BTN_SHOW_CLASS);
    } else {
      event.currentTarget.classList.remove(BTN_SHOW_CLASS);
    }
  }

  // 상품 영역 아코디언
  const productAccordion = document.querySelector('.product-accordion-container');
  const btnAccordion = document.querySelector('.btn-icon-unfold');

  if(productAccordion) {
    btnAccordion.addEventListener('click', productExpand);
  }

  function productExpand() {
    if(productAccordion.classList.contains('active')) {
      productAccordion.classList.remove('active');
      btnAccordion.setAttribute('aria-expanded', 'false')
    } else {
      productAccordion.classList.add('active');
      btnAccordion.setAttribute('aria-expanded', 'true')
    }
  }
});

// 상품 슬라이드
function productSwiper(swiper) {
  var thisSwiper = swiper;

  if( $(thisSwiper).length > 0 ) {
    var thisSwiperSlides = thisSwiper + ' .swiper-slide, .swiper-slide *';
    var thisSwiperActiveSlide = thisSwiper + ' .swiper-slide-active, .swiper-slide-active *';
    var thisSwiperController = thisSwiper + ' .swiper-controller';
    var thisSwiperPagenation = thisSwiper + ' .swiper-pagination';
    var thisSwiperBtnPrev = thisSwiper + ' .swiper-btn-next';
    var thisSwiperBtnNext = thisSwiper + ' .swiper-btn-prev';

    var productSwiper = new Swiper(thisSwiper, {
      a11y: {
        prevSlideMessage: 'See Previous',
        nextSlideMessage: 'See next',
        slideLabelMessage : 'This is the {{index}} of {{slidesLength}} product photos'
      },
      pagination: {
        el: thisSwiperPagenation,
        type: "fraction",
      },
      navigation: {
        nextEl: thisSwiperBtnPrev,
        prevEl: thisSwiperBtnNext,
      },
      on: {
        init: function (productSwiper) {
          $(thisSwiperSlides).attr('aria-hidden','true');
          $(thisSwiperActiveSlide).attr('aria-hidden','false');
          $(thisSwiperController).find('button').on('click', function(){
            if($(this).attr('disabled') ) {
              $(this).removeAttr('disabled').focus();
            }
          });
        },
        slideChange : function(productSwiper) {
          $(thisSwiperSlides).attr('aria-hidden','true');
          setTimeout(function(){
            $(thisSwiperActiveSlide).attr('aria-hidden','false');
          }, 0);
        },
      }
    });
  }
}

// IOS , ANDROID CHECKED
function checkDevice(){
  var checkUI = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  var wrapper = document.querySelector(".wrapper");
  if ( checkUI.indexOf('android') > -1) {
      wrapper.classList.add('android');

      return "android";
  } else if ( checkUI.indexOf("iphone") > -1||checkUI.indexOf("ipad") > -1||checkUI.indexOf("ipod") > -1 ) {
      wrapper.classList.add('iphone');

      return "ios";
  } else {
      return "other";
  }
  
}

// 상품명 더보기 
document.addEventListener('DOMContentLoaded', () => {
  const btnMore = document.querySelectorAll('.text-more');

  function contentExpand(e) {
    const target = e.target;
    const closeParent = target.closest('.title');
    const isExpanded = closeParent.classList.toggle('expand');
    
    target.setAttribute('aria-expanded', isExpanded);
    target.textContent = isExpanded ? "-" : "More";
    target.setAttribute('aria-label', isExpanded ? "상품명 접기" : "상품명 더 보기");
  }

  btnMore.forEach((element) => {
    element.addEventListener('click', contentExpand);
  });

  // 상품명의 높이에 따라 더보기 버튼 노출
  function textHeightCount() {
    const pdTitle = document.querySelectorAll('.title');
  
    pdTitle.forEach((e)=> {
      const titleText = e.querySelector('.title-text');
      
      if (titleText) {
        const titleTextHeight = titleText.scrollHeight;
        if(titleTextHeight > 40) {
          const moreBtn = titleText.closest('.title').querySelector('.text-more')
          moreBtn.classList.add('show')
        } else {
          const moreBtn = titleText.closest('.title').querySelector('.text-more')
          moreBtn.classList.remove('show')
        }
      } 
    })
  }
  textHeightCount();
  window.addEventListener("resize", textHeightCount)
});