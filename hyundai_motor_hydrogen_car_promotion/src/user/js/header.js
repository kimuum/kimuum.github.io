$(document).ready(function () {
  let load = false;
  let device = 'pc';
  let resizeTimer = null;
  let windowWidth = $(window).outerWidth();

  if (windowWidth > 1023) {
    device = 'pc';
  } else {
    device = 'mobile';
  }

  if(!load) {
    if (device === 'pc') {
      headerGnbPc();
    } else {
      headerGnbMo();
    }
    load = true;
  }

  $('.go-to-top-box').on('click', function(){
    if($('html, body').scrollTop() > 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 500);
    }
  });

  $('.btn-tnb-search').on('click', function(){
    const box = $(this).closest('.search-box');
    if(box.hasClass('active')) {
      box.removeClass('active');
    } else {
      box.addClass('active');
    }
  });

  $('.btn-search-open').on('click', function(){
    const $this = $(this);
    const parentBox = $this.parents('.header-container');
    const searchCont = $('.header-search-container');
    const searchContHeight = searchCont.find('.header-search-area').outerHeight();
    if(parentBox.hasClass('active')) {
      parentBox.removeClass('active');
      searchCont.css('height', 0);
    } else {
      parentBox.addClass('active');
      searchCont.css('height', searchContHeight);
    }
  });

  $('.btn-search-close').on('click', function(){
    $('.header-container').removeClass('active');
    $('.header-search-container').css('height', 0);
  });

  $('html').on('click', function(e){
    if(!e.target.closest('.search-box')){
      $('.header-container').find('.search-box').removeClass('active');
    }
  });

  $('.language-container .language-button').on('click', function () {
    var $container = $(this).parents('.language-container');
    $container.toggleClass('show');
  });

  $('.gnb-container').find('.depth01').on('click', function () {
    const $this = $(this);
    var checkedSubMenu = $(this).closest('.main-menu-wrap').find('.sub-menu-wrap');

    if (checkedSubMenu.length > 0) {
      if ($(this).closest('.main-menu-wrap').hasClass('mo-sub-opened')) {
        $(this).closest('.main-menu-wrap').removeClass('mo-sub-opened');
      } else {
        $('.main-menu-wrap').removeClass('mo-sub-opened');
        $(this).closest('.main-menu-wrap').addClass('mo-sub-opened');
      }

      // $('.gnb-container').css('height', $('.gnb-container').find('.gnb-menu-area').outerHeight());
    }
  });

  $(window).resize(function () {
    let currentDevice = device;
    load = false
    windowWidth = $(window).outerWidth();

    if (windowWidth > 1023) {
      device = 'pc';
    } else {
      device = 'mobile';
    }

    if(currentDevice != device) {
      if (windowWidth > 1023) {
        $('.gnb-container').removeAttr('style');
        $('.wrapper').removeClass('overflow');
        $('.header-search-container').removeAttr('style');
        $('.header-container').removeClass('active');
      } else {
        $('.main-menu-wrap').removeClass('mo-sub-opened');
      }

      if(!load) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (device === 'pc') {
            headerGnbPc();
            $('.gnb-menu-area').removeAttr('style');
          } else {
            headerGnbMo();
          }
          load = true;
        }, 100);
      }
    }
  });
});

var bodyOffset = jQuery('body').offset();
jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > bodyOffset.top) {
    jQuery('header').addClass('scroll');
    jQuery('html').addClass('scroll');
  } else {
    jQuery('header').removeClass('scroll');
    jQuery('html').removeClass('scroll');
  }
});

// 언어 선택 pc


// 메뉴 pc
function headerGnbPc() {
  const windowWidth = $(window).outerWidth();
  if (windowWidth > 1023) {
    var $headerContainer = $('body').find('.header-container');
    var $gnbContainer = $('body').find('.gnb-container');
    var $depth01 = $gnbContainer.find('.depth01');
    var $gnbCloseBtn = $headerContainer.find('.btn-gnb-close');

    //mo event reset
    $headerContainer.removeClass('mo-gnb-opened');

    if ($gnbContainer.length > 0) {
      $($depth01).on('mouseenter', function () {
        $headerContainer.addClass('gnb-opened');
      });
      $($headerContainer).on('mouseleave', function () {
        $headerContainer.removeClass('gnb-opened');
      });
      $($gnbCloseBtn).on('click', function () {
        $headerContainer.removeClass('gnb-opened');
      });
    }
  }
}

// 메뉴 Mo
function headerGnbMo() {
  const windowWidth = $(window).outerWidth();
  if (windowWidth <= 1023) {
    var $wrapper = $('body').find('.wrapper');
    var $headerContainer = $('body').find('.header-container');
    var $gnbContainer = $('body').find('.gnb-container');
    var $depth01 = $gnbContainer.find('.depth01');
    var $subDepthContainer = $gnbContainer.find('.main-menu-wrap');
    var $gnbCloseBtn = $headerContainer.find('.btn-gnb-close');
    var $gnbOpenBtn = $headerContainer.find('.btn-gnb-open');
    var $gnbMoDim = $('body').find('.mo-gnb-dim');
    //pc event reset
    $headerContainer.removeClass('gnb-opened');
    $depth01.off('mouseenter');
    $headerContainer.off('mouseleave');
    $gnbCloseBtn.off('click');

    $gnbOpenBtn.on('click', function () {
      $headerContainer.addClass('mo-gnb-opened');
      $gnbContainer.css('height', $gnbContainer.find('.gnb-menu-area').css('height' , '100vh'));
      $wrapper.addClass('overflow');
    });

    $gnbCloseBtn.on('click', function () {
      $headerContainer.removeClass('mo-gnb-opened');
      $gnbContainer.removeAttr('style');
      $wrapper.removeClass('overflow');
      $subDepthContainer.removeClass('mo-sub-opened');
    });

    $gnbMoDim.on('click', function () {
      $headerContainer.removeClass('mo-gnb-opened');
      $gnbContainer.removeAttr('style');
      $wrapper.removeClass('overflow');
      $subDepthContainer.removeClass('mo-sub-opened');
    });
  }
}
