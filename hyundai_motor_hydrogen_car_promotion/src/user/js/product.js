document.addEventListener('DOMContentLoaded', function () {
  let tl;
  let scrollTriggers = [];

  function init() {
    // gsap.registerPlugin(ScrollTrigger);
    tl = gsap.timeline();

    let target = document.querySelectorAll('.section-technology .parts-desc-middle');
    let target2 = document.querySelectorAll('.section-high-efficiency .parts-desc-middle');

    if(target) {
      target.forEach((element, i) => {
        const trigger = {
          trigger: element,
          pin: true,
          // markers: true,
          start: `${mathPos(element)} center`,
          end: "+=1000 center",
          scrub: 0,
        };
        const scrollTrigger = gsap.to(element, { scrollTrigger: trigger }); // Create ScrollTrigger
        scrollTriggers.push(scrollTrigger);
        tl.from(element, { scrollTrigger: { y: 0 } });
      });
    }

    if(target2) {
      target2.forEach((element, i) => {
        const trigger = {
          trigger: element,
          pin: true,
          // markers: true,
          start: `${mathPos(element)} center`,
          end: "+=1000 center",
          scrub: 0,
        };
        const scrollTrigger = gsap.to(element, { scrollTrigger: trigger }); // Create ScrollTrigger
        scrollTriggers.push(scrollTrigger);
        tl.from(element, { scrollTrigger: { y: 0 } });
      });
    }

    function mathPos(element) {
      const prodcutCont = document.querySelector('.product-content-container');
      const documentHeight = document.documentElement.clientHeight;
      const eleHeight = element.clientHeight;
      const abs = documentHeight - eleHeight;
      let startPos = null;

      if(window.innerWidth <= 768) {
        if(Math.sign(abs) > 0) {
          if(prodcutCont.className.indexOf('truck') > -1 && element.closest('.parts-desc-container').className.indexOf('align-reverse') > -1) {
            startPos = eleHeight/2 + Math.abs(abs)/2 - document.querySelector('.top-navigation-container').clientHeight + (eleHeight - element.querySelector('.parts-desc-box-right').clientHeight - 20);
          } else {
            startPos = eleHeight/2 + Math.abs(abs)/2 - document.querySelector('.top-navigation-container').clientHeight;
          }
        } else {
          if(prodcutCont.className.indexOf('truck') > -1 && element.closest('.parts-desc-container').className.indexOf('align-reverse') > -1) {
            startPos = eleHeight/2 - Math.abs(abs)/2 - document.querySelector('.top-navigation-container').clientHeight + (eleHeight - element.querySelector('.parts-desc-box-right').clientHeight - 20);
          } else {
            startPos = eleHeight/2 - Math.abs(abs)/2 - document.querySelector('.top-navigation-container').clientHeight;
          }
        }
      } else {
        startPos = "center";
      }

      return startPos;
    }
  }

  function updateScrollTrigger() {
    // Kill all existing ScrollTriggers
    scrollTriggers.forEach(scrollTrigger => {
      if (scrollTrigger.scrollTrigger) {
        scrollTrigger.scrollTrigger.kill();
      }
    });
    tl.clear();

    init();
  }

  init();

  // Add a listener for the window resize event
  window.addEventListener("resize", updateScrollTrigger);
});



$(document).ready(function () {
  /**
   * comment  : PIP - highlight block 순차적으로 fade in
   * @property  :
   */
  const visualSlideUpEleArry = ['.content-visual-title-box', '.content-visual-desc-box', '.content-visual-button-box .btn-download', '.content-visual-button-box .btn-send-email'];

  for (var i = 0; i < visualSlideUpEleArry.length; i++) {
    const slideRightEle = document.querySelector(visualSlideUpEleArry[i]);
    let visualSlideUp = gsap.timeline({
      // ease: 'Power4.easeOut',
    });
    visualSlideUp.from(slideRightEle, { y: 100, opacity: 0, duration: 1, delay: 0.5, ease: 'Power4.easeOut', });
  }

  /**
   * comment  : PIP - universe_fuel_cell Specifications tab
   * @property  :
   */

  $('.spec-tab').on('click', function(){
    const $this = $(this);
    const idx = $this.index();
    if(!$this.hasClass('active')) {
      $('.spec-tab').removeClass('active');
      $('.spec-container').removeClass('active');
      $this.addClass('active');
      $('.spec-container').eq(idx).addClass('active');
    }
  });

  /**
   * comment  : PIP - sub page title 클릭시 상단으로 스크롤링
   * @property  :
   */
  $('.sub-page-title').on('click', function(){
    if($('html, body').scrollTop() > 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 500);
    }
  });

  /**
   * comment  : PIP - Send Email element toggle
   * @property  :
   */

  function parallaxRefresh() {
    $('.section-visual-box .background').each(function () {
      const $this = $(this);
      $this.parallax('refresh');
    });
  }
  
  $('.btn-send-email').on('click', function () {
    $('.send-email-box').toggleClass('active');
    $('html, body').animate({
      scrollTop: $('.send-email-box').offset().top - $('.header-center-inner.depth_02').outerHeight(),
    }, 500);
    parallaxRefresh();
  });

  $('.send-email-inner .btn-close').on('click', function () {
    $('.send-email-box').removeClass('active');
    parallaxRefresh();
  });

  /**
   * comment  : PIP - parallax Interaction
   * @property  :
   */

  $('.content-visual-image-box').each(function () {
    const $this = $(this);
    const imgPath = $this.attr('data-image-src');
    const alt = $this.attr('data-alt');
    $this.parallax({
      imageSrc: imgPath,
      alt: alt
    });
  });

  $('.section-visual-box .background').each(function () {
    const $this = $(this);
    const imgPath = $this.attr('data-image-src');
    $this.parallax({
      imageSrc: imgPath,
      speed : 0.75,
    });
  });

  if($('.parts-desc-image-default-box .deco-image').length > 0) {
    $('.parts-desc-image-default-box .deco-image').parallax({
      bleed: 0,
      imageSrc : $('.parts-desc-image-default-box .deco-image').attr('data-image-src')
    });
  }

  /**
   * comment  : PIP - 비디오 재생
   * @property  :
   */

  const videoElements = $('.video-box');
  const videos = videoElements.find('video');
  const videoProgressLine = videoElements.find('.video-progress-line');
  const videoPlayBtn = videoElements.find('.btn-play');
  const videoPauseBtn = videoElements.find('.btn-pause');
  let currentPlayVideoIdx = 0;

  videoPlayBtn.on('click', function () {
    const $this = $(this);
    $this.closest('.video-box').find('video').eq(currentPlayVideoIdx)[0].play();
    $this.closest('.video-box').find('video').eq(currentPlayVideoIdx).addClass('active');
    $this.hide();
    $this.next().show();
  });

  videoPauseBtn.on('click', function () {
    const $this = $(this);
    $this.closest('.video-box').find('video').eq(currentPlayVideoIdx)[0].pause();
    videoPauseBtn.hide();
    $this.hide();
    $this.prev().show();
  });

  videos.each(function () {
    const $this = $(this);
    const thisVideo = $this[0];
    const videoText = $this.closest('.video-box').find('.video-progress-text');

    let lineWidth = 0;

    thisVideo.addEventListener('timeupdate', function () {
      let totalDuration = thisVideo.duration;
      let currentTime = thisVideo.currentTime;
      lineWidth = (currentTime / totalDuration) * 100;

      videoElements
        .find('.video-progress-line')
        .eq(currentPlayVideoIdx)
        .find('.video-progress-inner-line')
        .css('width', lineWidth + '%');
      if (lineWidth === 100) {
        currentPlayVideoIdx++;
        videos.eq([currentPlayVideoIdx - 1])[0].pause();

        if (currentPlayVideoIdx !== 0 && currentPlayVideoIdx < videos.length) {
          videos.eq([currentPlayVideoIdx - 1]).removeClass('active');
          videoProgressLine.eq([currentPlayVideoIdx - 1]).removeClass('active');
          videoText.eq([currentPlayVideoIdx - 1]).removeClass('active');
          videos.eq([currentPlayVideoIdx]).addClass('active');
          videoProgressLine.eq([currentPlayVideoIdx]).addClass('active');
          videoText.eq([currentPlayVideoIdx]).addClass('active');
          videos.eq([currentPlayVideoIdx])[0].play();
        } else if (currentPlayVideoIdx === videos.length) {
          videos.removeClass('active');
          videoProgressLine.removeClass('active');
          videoText.removeClass('active');
          videoElements.find('.video-progress-line').find('.video-progress-inner-line').css('width', '0%');
          videoPauseBtn.hide();
          videoPlayBtn.show();
          videos.eq(0).addClass('active');
          videoProgressLine.eq(0).addClass('active');
          videoText.eq(0).addClass('active');
          currentPlayVideoIdx = 0;
        }
      }
    });
  });

  /**
   * comment  : PIP - tab
   * @property  :
   */

  const tabBtns = document.querySelectorAll('.tab-button-box');
  const tabConts = document.querySelectorAll('.tab-content');

  tabBtns.forEach((tabBtn, idx) => {
    const tab = tabBtn.querySelectorAll('.tab');
    const tabContentDiv = tabConts[idx].querySelectorAll('.tab-content > div');
    let currentIdx = 0;
    if(tabBtn.className.indexOf('faq-tab-button-box') === -1) {
      tab[currentIdx].classList.add('active');
      tabContentDiv[currentIdx].classList.add('active');
    }

    tab.forEach((tabBtn, idx) => {
      tabBtn.addEventListener('click', (e) => {
        tab[currentIdx].classList.remove('active');
        tabContentDiv[currentIdx].classList.remove('active');

        currentIdx = idx;

        tab[currentIdx].classList.add('active');
        tabContentDiv[currentIdx].classList.add('active');
      });
    });
  });

  /**
   * comment  : PIP - gallery
   * @property  :
   */

  const detailSwiperSlide = $('.detail-image-list');
  let idx = 0;
  var groupedItems = [{}];

  // 리스트 아이템을 순회하며 그룹화
  detailSwiperSlide.each(function() {
    const galleryBlock = $(this).parents('.gallery-block');
    const galleryBlockIdx = galleryBlock.index();
  
    const group = $(this).data('group');
    if (!groupedItems[galleryBlockIdx]) {
      groupedItems[galleryBlockIdx] = {};
    }
    if (!groupedItems[galleryBlockIdx][group]) {
      groupedItems[galleryBlockIdx][group] = [];
    }
    groupedItems[galleryBlockIdx][group].push($(this));
  });

  detailSwiperSlide.on('click', function () {
    const $this = $(this);
    const thisGalleryBlock = $(this).parents('.gallery-block');
    const thisGalleryBlockIdx = thisGalleryBlock.index();
    const blockCont = $this.closest('.gallery-block');
    const groupData = $this.data('group');
    blockCont.find('.overlay-detail-image-list-box').removeClass('active');
    blockCont.find('.detail-image-list').removeClass('active');
    blockCont.find('.overlay-detail-content').removeClass('active');
    
    idx = groupData.split('group')[1];
    let groupIdx = 0;

    if(groupedItems[thisGalleryBlockIdx][groupData]) {
      for(var i = 0; i < groupedItems[thisGalleryBlockIdx][groupData].length; i++) {
        if(groupedItems[thisGalleryBlockIdx][groupData][i][0] === $this[0]) {
          groupIdx = i;
        }
      }
    }
    
    if (!$this.hasClass('active')) {
      $this.addClass('active');
      blockCont.find('.overlay-container').addClass('active');
      blockCont.find('.overlay-detail-content').eq(idx).addClass('active');
      blockCont.find('.overlay-detail-image-list-box').eq(idx).addClass('active');
      galleryDetailSwiper2[thisGalleryBlockIdx][idx].slideTo(groupIdx);

      if(galleryDetailSwiper2[thisGalleryBlockIdx][idx].slides.length === 1) {
        blockCont.find('.overlay-container').addClass('one');
      } else {
        blockCont.find('.overlay-container').removeClass('one');
      }
    }
  });

  $('.gallery-block .dot').on('click', function () {
    const $this = $(this);
    const thisGalleryBlock = $(this).parents('.gallery-block');
    const thisGalleryBlockIdx = thisGalleryBlock.index();
    const blockCont = $this.closest('.gallery-block');
    const groupData = $this.data('group');
    idx = groupData.split('group')[1];
    let groupIdx = 0;

    if(groupedItems[thisGalleryBlockIdx][groupData]) {
      for(var i = 0; i < groupedItems[thisGalleryBlockIdx][groupData].length; i++) {
        if(groupedItems[thisGalleryBlockIdx][groupData][i][0] === $this[0]) {
          groupIdx = i;
        }
      }
    }

    const el = groupedItems[thisGalleryBlockIdx][groupData][0][0];
    const index = [...el.parentElement.children].indexOf(el);

    blockCont.find('.overlay-container').addClass('active');
    blockCont.find('.overlay-detail-content').eq(idx).addClass('active');
    blockCont.find('.overlay-detail-image-list-box').eq(idx).addClass('active');
    groupedItems[thisGalleryBlockIdx][groupData][0][0].classList.add('active');

    galleryDetailSwiper2[thisGalleryBlockIdx][idx].slideTo(groupIdx);
    galleryDetailSwiper[thisGalleryBlockIdx][0].slideTo(idx);

    if(groupedItems[thisGalleryBlockIdx][groupData].length === 1) {
      blockCont.find('.overlay-container').addClass('one');
    } else {
      blockCont.find('.overlay-container').removeClass('one');
    }

  });

  $('.gallery-block .overlay-controller .btn-close').on('click', function () {
    const $this = $(this);
    const blockCont = $this.closest('.gallery-block');
    blockCont.find('.overlay-container').removeClass('active');
    blockCont.find('.overlay-detail-content').removeClass('active');
    blockCont.find('.overlay-detail-image-list-box').removeClass('active');
    blockCont.find('.detail-image-list').removeClass('active');
  });


  $('html').on('click', function(e){
    const $this = $(e.target);
    if($this.parents('.gallery-block').length < 1 && !$this.hasClass('gallery-block')){   
      const blockCont = $('.gallery-block');
      blockCont.find('.overlay-container').removeClass('active');
      blockCont.find('.overlay-detail-content').removeClass('active');
      blockCont.find('.overlay-detail-image-list-box').removeClass('active');
      blockCont.find('.detail-image-list').removeClass('active');
    }
  });

  /**
   * comment  : PIP - swiper
   * @property  :
   */

  // swiper - Highlights
  var highlightSwiper = new Swiper('.tractor .highlights-block-container', {
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: false,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    breakpoints: {
      769: {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },

      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    },
  });

  // swiper - safety
  
  $('.safety-block-info-box').on('click', function () {
    const $this = $(this);
    const idx = $this.index();
    const thisWrapper = $this.closest('.safety-block-info-box-wrapper');
    const thisCont = $this.closest('.safety-block-container');
    const thisContIdx = thisCont.index();
    const thisChild = $this.find('.safety-block-info-desc-box');
    const thisChildHeight = thisChild.find('.safety-block-info-desc').outerHeight();

    if(!$this.hasClass('active')) {
      thisWrapper.find('.safety-block-info-box').not(':eq(' + idx + ')').removeClass('active');
      thisWrapper.find('.safety-block-info-box').not(':eq(' + idx + ')').find('.safety-block-info-desc-box').removeAttr('style');
      thisCont.find('.safety-block-image-box-wrapper').find('.safety-block-image-box').not(':eq(' + idx + ')').removeClass('active');
      $this.addClass('active');
      
      if(thisChild.find('p').text().length === 0) {
        thisChild.find('.safety-block-info-desc').css('paddingTop', 0);
      } else {
        thisChild.css('height', thisChildHeight);
      }

      thisCont.find('.safety-block-image-box-wrapper').find('.safety-block-image-box').eq(idx).addClass('active');
    }
  });


  // swiper - Technology
  let technologySwiper = [];
  $('.parts-desc-select-list-box').each(function(){
    const $this = $(this)[0];
    var technologySwiperItem = new Swiper($this, {
      slidesPerView: 1,
      spaceBetween: 10,
      touchRatio: 0,
      autoHeight: false,
      breakpoints: {
        1025: {
          autoHeight: false,
        },
      }
    });

    technologySwiper.push(technologySwiperItem);
  });

  let technologyImageSwiper = [];
  $('.parts-desc-image-box').each(function(){
    const $this = $(this)[0];
    var technologyImageSwiperItem = new Swiper($this, {
      effect: "fade",
      speed: 0,
      slidesPerView: "auto",
      touchRatio: 0,
      fadeEffect: {
        crossFade: true
      },
    });

    technologyImageSwiper.push(technologyImageSwiperItem);
  });

  let defaultImageSwiper = [];
  if($('.default-image-swiper-box').length !== 0) {
    $('.default-image-swiper-box').each(function(){
      const $this = $(this)[0];
      var defaultImageSwiperItem = new Swiper($this, {
        effect: "fade",
        speed: 0,
        slidesPerView: 1,
        touchRatio: 0,
      });
  
      defaultImageSwiper.push(defaultImageSwiperItem);
    });
  }


  $('.parts-desc-container').each(function () {
    let swiperCurrentIdx = 0;
    let progressBar = 0;
    let interval;
    let scrollSet = true;

    let autoPlay = true;

    const $this = $(this);
    let contIdx = $this.index();
    const progressLine = $this.find('.parts-desc-select-list-progress-line');
    const length = $this.find('.parts-desc-select-list').length;
    const overlayEle = $this.find('.parts-desc-image-box');

    if(overlayEle.length === 0) {
      autoPlay = false;
    }

    if($this.parents('.pin-spacer').length > 0) {
      contIdx = $this.parents('.pin-spacer').index();
    }

    jQuery(window).scroll(function () {
      if (jQuery(document).scrollTop() > $this.offset().top - $(window).height() / 2 && jQuery(document).scrollTop() < $this.offset().top + $this.outerHeight()) {
        if (scrollSet) {
          scrollSet = false;
          if(autoPlay) {
            $this.find('.btn-play').removeClass('active');
            $this.find('.btn-pause').addClass('active');
            $this.find('.parts-desc-image-box').find('.image-box.swiper-slide-active').addClass('active');
            if($this.find('.parts-desc-image-box').find('.image-box.active').hasClass('pause')) {
              $this.find('.parts-desc-image-box').find('.image-box.active').removeClass('pause');
            }
            interval = setInterval(function () {
              if (progressBar <= 100) {
                progressLine.eq(swiperCurrentIdx).find('.parts-desc-select-list-progress-inner-line').css('width', progressBar + '%');
                progressBar++;
                $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('active');
                $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('before-hide');

                if(swiperCurrentIdx === 0) {
                  progressLine.not(':eq(' + swiperCurrentIdx + ')').find('.parts-desc-select-list-progress-inner-line').css('width', '0%');
                }
              } else {
                progressBar = 0;
                if (swiperCurrentIdx === length - 1) {
                  // $this.find('.btn-play').addClass('active');
                  // $this.find('.btn-pause').removeClass('active');
                  // $this.find('.parts-desc-image-box').find('.image-box.active').addClass('pause');
                  swiperCurrentIdx = 0;
                  // clearInterval(interval);
                  technologySwiper[contIdx].slideTo(0);
                  if(technologyImageSwiper[contIdx]) {
                    technologyImageSwiper[contIdx].slideTo(0);
                  }
                  $this.find('.parts-desc-image-box').find('.image-box').eq(0).addClass('active');
                  $this.find('.image-list').removeClass('active');
                  $this.find('.image-list').eq(0).addClass('active');
                  progressLine.find('.parts-desc-select-list-progress-inner-line').css('width', '0%');
                } else {
                  technologySwiper[contIdx].slideTo(swiperCurrentIdx + 1);
                  if(technologyImageSwiper[contIdx]) {
                    technologyImageSwiper[contIdx].slideTo(swiperCurrentIdx + 1);
                  }
                  $this.find('.parts-desc-image-box').find('.image-box').eq(swiperCurrentIdx + 1).addClass('active');
                  $this.find('.image-list').removeClass('active');
                  $this
                    .find('.image-list')
                    .eq(swiperCurrentIdx + 1)
                    .addClass('active');
                  swiperCurrentIdx++;
                }
              }
            }, 50);
          }
        }
      } else {
        if(autoPlay) {
          $this.find('.btn-play').addClass('active');
          $this.find('.btn-pause').removeClass('active');
          $this.find('.parts-desc-image-box').find('.image-box.active').addClass('pause');
          clearInterval(interval);
        }
        scrollSet = true;
      }
    });

    $this.find('.image-list').on('click', function () {
      const target = $(this);

      if(!target.hasClass('active')) {
        $this.find('.image-list').removeClass('active');
        target.addClass('active');
        swiperCurrentIdx = target.index();
        technologySwiper[contIdx].slideTo(swiperCurrentIdx);
        if(technologyImageSwiper[contIdx]) {
          technologyImageSwiper[contIdx].slideTo(swiperCurrentIdx);
        }

        if(defaultImageSwiper.length > 0) {
          $this.find('.default-init-image-box').hide();
          defaultImageSwiper[contIdx].slideTo(swiperCurrentIdx);
        }

        $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('active');
        $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('pause');
        
        if(autoPlay) {
          progressBar = 0;
          clearInterval(interval);
          $this.find('.btn-play').removeClass('active');
          $this.find('.btn-pause').addClass('active');
          $this.find('.parts-desc-image-box').find('.image-box.swiper-slide-active').addClass('active');
          $this.find('.parts-desc-image-box').find('.image-box.swiper-slide-active').addClass('before-hide');
          progressLine.find('.parts-desc-select-list-progress-inner-line').css('width', '0%');

          for(var i = 0; i < swiperCurrentIdx; i++) {
            progressLine.eq(i).find('.parts-desc-select-list-progress-inner-line').css('width', '100%');
          }

          interval = setInterval(function () {
            if (progressBar <= 100) {
              progressLine.eq(swiperCurrentIdx).find('.parts-desc-select-list-progress-inner-line').css('width', progressBar + '%');
              progressBar++;
              $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('active');
              $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('before-hide');
            } else {
              
              if (swiperCurrentIdx === length - 1) {
                swiperCurrentIdx = -1;
              }

              progressBar = 101;
              clearInterval(interval);
              $this.find('.btn-play').addClass('active');
              $this.find('.btn-pause').removeClass('active');
            }
          }, 50);
        }
      }
    });

    $this.find('.btn-play').on('click', function () {
      const target = $(this);
      target.removeClass('active');
      $this.find('.btn-pause').addClass('active');
      $this.closest('.parts-desc-container').find('.image-box.active').removeClass('pause');
      clearInterval(interval);
      interval = setInterval(function () {
        if (progressBar <= 100) {
          if(progressBar === 0 && swiperCurrentIdx === 0) {
            technologySwiper[contIdx].slideTo(0);
            if(technologyImageSwiper[contIdx]) {
              technologyImageSwiper[contIdx].slideTo(0);
            }
            $this.find('.parts-desc-image-box').find('.image-box').eq(0).addClass('active');
            $this.find('.image-list').removeClass('active');
            $this.find('.image-list').eq(0).addClass('active');
            progressLine.find('.parts-desc-select-list-progress-inner-line').css('width', '0%');
          }
          progressLine.eq(swiperCurrentIdx).find('.parts-desc-select-list-progress-inner-line').css('width', progressBar + '%');
          progressBar++;
          $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('active');
          $this.find('.parts-desc-image-box').find('.image-box').not(':eq(' + swiperCurrentIdx + ')').removeClass('before-hide');
        } else {
          progressBar = 0;
          if (swiperCurrentIdx === length - 1) {
            // $this.find('.btn-play').addClass('active');
            // $this.find('.btn-pause').removeClass('active');
            // $this.find('.parts-desc-image-box').find('.image-box.active').addClass('pause');
            swiperCurrentIdx = 0;
            // clearInterval(interval);
            technologySwiper[contIdx].slideTo(0);
            if(technologyImageSwiper[contIdx]) {
              technologyImageSwiper[contIdx].slideTo(0);
            }
            $this.find('.parts-desc-image-box').find('.image-box').eq(0).addClass('active');
            $this.find('.image-list').removeClass('active');
            $this.find('.image-list').eq(0).addClass('active');
            progressLine.find('.parts-desc-select-list-progress-inner-line').css('width', '0%');
          } else {
            technologySwiper[contIdx].slideTo(swiperCurrentIdx + 1);
            if(technologyImageSwiper[contIdx]) {
              technologyImageSwiper[contIdx].slideTo(swiperCurrentIdx + 1);
            }
            $this.find('.parts-desc-image-box').find('.image-box').eq(swiperCurrentIdx + 1).addClass('active');
            $this.find('.image-list').removeClass('active');
            $this
              .find('.image-list')
              .eq(swiperCurrentIdx + 1)
              .addClass('active');
            swiperCurrentIdx++;
          }
        }
      }, 50);
    });

    $this.find('.btn-pause').on('click', function () {
      const target = $(this);
      clearInterval(interval);
      target.removeClass('active');
      $this.find('.btn-play').addClass('active');
      $this.closest('.parts-desc-container').find('.parts-desc-image-box').find('.image-box.active').addClass('pause');
    });
  });

  // swiper - Gallery
  let galleryDetailSwiper = [[], [], []];
  $('.detail-image-container').each(function () {
    const thisGalleryBlock = $(this).parents('.gallery-block');
    const thisGalleryBlockIdx = thisGalleryBlock.index();
    let type = thisGalleryBlock.attr('class');
    
    var galleryDetailSwiperList = new Swiper($(this)[0], {
      slidesPerView: 3,
      spaceBetween: 2,
      navigation: {
        prevEl: '.btn-detail-image-prev-' + type.split(' ')[1],
        nextEl: '.btn-detail-image-next-' + type.split(' ')[1],
      },
      breakpoints: {
        1023: {
          slidesPerView: 4,
          spaceBetween: 4,
        },
      },
    });

    galleryDetailSwiper[thisGalleryBlockIdx].push(galleryDetailSwiperList);
  });

  // swiper - Gallery Overlay
  let galleryDetailSwiper2 = [[], [], []];
  $('.overlay-detail-image-list-box').each(function () {
    const thisGalleryBlock = $(this).parents('.gallery-block');
    const thisGalleryBlockIdx = thisGalleryBlock.index();
    var galleryDetailSwiper2List = new Swiper($(this)[0], {
      slidesPerView: 1,
      navigation: {
        prevEl: '.overlay-controller .btn-prev',
        nextEl: '.overlay-controller .btn-next',
      },
      pagination: {
        el: '.count-box.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {},
      on: {
        slideChange: function () {
          const currentEle = galleryDetailSwiper2[thisGalleryBlockIdx][idx].slides[galleryDetailSwiper2[thisGalleryBlockIdx][idx].realIndex].closest('.overlay-detail-image-list-box');
          const currentGroupName = currentEle.getAttribute('data-group');
          const thisGallerCont = currentEle.closest('.gallery-block-content-box');
          const el = groupedItems[thisGalleryBlockIdx][currentGroupName][galleryDetailSwiper2[thisGalleryBlockIdx][idx].realIndex][0];
          const index = [...el.parentElement.children].indexOf(el);
          thisGalleryBlock[0].querySelectorAll('.detail-image-list').forEach((section, i) => {
            section.classList.remove('active');          
          });
  
          groupedItems[thisGalleryBlockIdx][currentGroupName][galleryDetailSwiper2[thisGalleryBlockIdx][idx].realIndex][0].classList.add('active');
          galleryDetailSwiper[thisGalleryBlockIdx][0].slideTo(index);
        },
      },
    });
    galleryDetailSwiper2[thisGalleryBlockIdx].push(galleryDetailSwiper2List);
  });

  // swiper - Gallery Overlay Content
  var galleryContentSwiper = new Swiper('.overlay-detail-content-box', {
    slidesPerView: 1,
    touchRatio: 0,
    breakpoints: {},
  });

  //swiper bototm - product-thumb
  var productBottomSwiper = new Swiper('.product-thumb-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      prevEl: '.product-thumb-swiper .swiper-button-prev',
      nextEl: '.product-thumb-swiper .swiper-button-next',
    },
    pagination: {
      el: '.product-thumb-swiper .swiper-pagination',
    },
  });



  /**
   * comment  : PIP - spec menu anchor
   * @property  :
   */
  const anchorMenuEl = document.querySelectorAll('.anchor-menu a[href^="#"]');
  const parentLi = document.querySelectorAll('.anchor-menu li');
  let offset = 0;

  if(document.querySelector('.header-container')) {
    offset = document.querySelector('.header-container').clientHeight;
  }

  anchorMenuEl.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetContent = document.querySelector(this.getAttribute('href'));
      e.preventDefault();

      if (targetContent) {
        const targetPosition = targetContent.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth',
        });
      }
    });
  });
});

window.onload = function(){
  setTimeout(function () {

  /**
   * comment  : PIP - 숫자 카운팅 Interaction
   * @property  :
   */

  const counterMotionEleArry = ['.product-info-block .block-data', '.counter-value .counter'];

  for (var i = 0; i < counterMotionEleArry.length; i++) {
    const counterMotionEles = document.querySelectorAll(counterMotionEleArry[i]);
    counterMotionEles.forEach(function (counterMotionEle) {
      counterMotion(counterMotionEle);
    });
  }

  /**
   * comment  : PIP - slide left Interaction
   * @property  :
   */

  const slideLeftEleArry = ['.highlights-text-block-box', '.safety-block-container.align-normal', '.resources-content-title'];

  for (var i = 0; i < slideLeftEleArry.length; i++) {
    const slideLeftEle = document.querySelectorAll(slideLeftEleArry[i]);
    slideLeft(slideLeftEle);
  }

  /**
   * comment  : PIP - slide right Interaction
   * @property  :
   */

  const slideRightEleArry = ['.safety-block-container.align-reverse'];

  for (var i = 0; i < slideRightEleArry.length; i++) {
    const slideRightEle = document.querySelectorAll(slideRightEleArry[i]);
    slideRight(slideRightEle);
  }

  /**
   * comment  : PIP - highlight block 순차적으로 fade in
   * @property  :
   */

  if (document.querySelector('.highlights-block-container')) {
    var highlightsBlockFadeIn = gsap.timeline({
      scrollTrigger: {
        trigger: '.highlights-block-container',
        start: '-=20% center',
        end: 'center center',
        // markers: true,
        ease: 'Power4.easeOut',
        duration: 0.25,
      },
    });
    highlightsBlockFadeIn.fromTo('.highlights-block-container .highlights-block', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.15 });
  }

  /**
   * comment  : PIP - faq block 순차적으로 fade in
   * @property  :
   */

  if (document.querySelector('.prodcut-faq-lists')) {
    var highlightsBlockFadeIn = gsap.timeline({
      scrollTrigger: {
        trigger: '.prodcut-faq-lists',
        start: '-=20% center',
        end: 'center center',
        // markers: true,
        ease: 'Power4.easeOut',
        duration: 0.25,
      },
    });
    highlightsBlockFadeIn.fromTo('.prodcut-faq-lists .product-faq-block', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.15 });
  }

  /**
   * comment  : PIP - faq block 순차적으로 fade in
   * @property  :
   */

  if (document.querySelector('.resources-lists')) {
    var highlightsBlockFadeIn = gsap.timeline({
      scrollTrigger: {
        trigger: '.resources-lists',
        start: '-=20% center',
        end: 'center center',
        // markers: true,
        ease: 'Power4.easeOut',
        duration: 0.25,
      },
    });
    highlightsBlockFadeIn.fromTo('.resources-lists .resources-block', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.15 });
  }
  }, 10);


  /**
   * comment  : PIP - masonry
   * @property  :
   */

  $('.gallery-collect-middle').css('opacity', 1);


  setTimeout(function () {
    let option = {
      horizontalOrder: true,
      gutter: 30,
    };

    if (window.innerWidth <= 768) {
      option = {
        horizontalOrder: false,
        gutter: 10,
      };
    }

    masonryCtrl('.gallery-collect-box', '.gallery-collect-item', option);
    $(window)
      .on('resize', function () {
        let option = {
          horizontalOrder: true,
          gutter: 30,
        };

        if (window.innerWidth <= 768) {
          option = {
            horizontalOrder: false,
            gutter: 10,
          };
        }
        masonryCtrl('.gallery-collect-box', '.gallery-collect-item', option);
      })
      .resize();

      setTimeout(function () {
        const galleryCollectBox = document.querySelector('.gallery-collect-box');
        if(galleryCollectBox) {
          const item_1 = galleryCollectBox.querySelector('.gallery-collect-item.right1');
          const item_2 = galleryCollectBox.querySelector('.gallery-collect-item.bottom');
          const item_3 = galleryCollectBox.querySelector('.gallery-collect-item.left1');
          const item_4 = galleryCollectBox.querySelector('.gallery-collect-item.right2');
          const item_5 = galleryCollectBox.querySelector('.gallery-collect-item.top');
          const item_6 = galleryCollectBox.querySelector('.gallery-collect-item.left2');
          if(item_1) {
            slideRight(item_1);
          }
          if(item_2) {
            slideDown(item_2);
          }
          if(item_3) {
            slideLeft(item_3);
          }
          if(item_4) {
            slideRight(item_4);
          }
          if(item_5) {
            slideUp(item_5);
          }
          if(item_6) {
            slideLeft(item_6);
          }
        }
      }, 100);
  }, 0);
}


