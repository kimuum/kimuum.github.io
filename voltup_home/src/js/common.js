$(function () {
  $(window).bind({
    resize: function () {
      fontResize();
      privacyContentHeight();
      noticeContentRestHeight();
    },
  });

  fontResize();

  function fontResize() {
    var tabletSize = 1440;
    var mobileSize = 1024;
    var size = 10;

    if ($(window).outerWidth() <= 360) {
      size = ($(window).outerWidth() * 10) / 360;
    } else {
      size = 10;
    }

    $('html').css('fontSize', size);
    $('body').css('fontSize', size);
  }

  // GNB 관련
  var $wrapper = $('.wrapper');
  var $header = $('.header');
  var headerHeight = $header.outerHeight();

  $(window).scroll(function () {
    // 메인페이지 헤더에 light-theme 클래스 토글
    var windowScrollTop = $(window).scrollTop();
    if (!$('.wrapper').hasClass('announce')) {
      if (windowScrollTop > headerHeight) {
        $header.addClass('light-theme');
      } else {
        $header.removeClass('light-theme');
      }
    }
  });

  // 모바일 헤더
  var $burgerMenu = $('.btn-menu-open');
  $burgerMenu.on('click', function () {
    if ($wrapper.hasClass('open')) {
      $wrapper.removeClass('open');
      $('body').removeClass('scroll-lock');
    } else {
      $wrapper.addClass('open');
      $('body').addClass('scroll-lock');
    }
  });

  // 섹션 스크롤
  var $sectionBtn = $('.section-button-box').find('.btn-section');
  var $sectionCont = $('.section-container');
  $sectionBtn.on('click', function () {
    var idx = $(this).index();
    var $section = $sectionCont.eq(idx);
    var sectionTop = $section.offset().top - headerHeight;
    $('html').animate(
      {
        scrollTop: sectionTop,
      },
      500,
    );
  });

  // 섹션 탭
  var $sectionTabBtn = $('.tab-button-box').find('.btn-tab');
  $sectionTabBtn.on('click', function () {
    // active 클래스 토글
    $sectionTabBtn.removeClass('active');
    $(this).addClass('active');
    // 해당 컨텐츠 show
    var idx = $(this).index();
    var $section = $sectionCont.eq(idx);
    $sectionCont.removeClass('show');
    $('.btn-category').removeClass('active');
    $('.notice-content-container').removeClass('show');
    $section.addClass('show');
    $section.find('.btn-category').eq(0).addClass('active');
    $section.find('.notice-content-container').eq(0).addClass('show');
  });

  // 공지사항 아코디언
  var $noticeBox = $('.notice-list');
  var $noticeTitle = $noticeBox.find('.title-box');
  $noticeTitle.on('click', function () {
    var $this = $(this);
    var $parent = $this.closest($noticeBox);
    var $contentBox = $parent.find($('.content-box'));
    var contentBoxHeight = $contentBox.find('.text-container').outerHeight();
    var idx = $parent.index();
    // 초기화
    var $grandparent = $this.parents('.notice-list-container');
    $grandparent
      .find($noticeBox)
      .not(':eq(' + idx + ')')
      .removeClass('active');
    $grandparent
      .find($noticeBox)
      .not(':eq(' + idx + ')')
      .find($('.content-box'))
      .css({
        height: '0',
      });

    // 펼침/접힘 및 active 클래스 토글
    if ($parent.hasClass('active')) {
      $parent.removeClass('active');
      $contentBox.css({
        height: '0',
      });
    } else {
      $parent.addClass('active');
      $contentBox.css({
        height: contentBoxHeight,
      });
      $contentBox.height(contentBoxHeight);
    }
  });
  function noticeContentRestHeight() {
    var $noticeBox = $('.notice-list');
    var $contentBox = $noticeBox.find($('.content-box'));
    if ($noticeBox.hasClass('active')) {
      $noticeBox.removeClass('active');
      $contentBox.css({
        height: '0',
      });
    }
  }
  // 팝업 관련
  var $popup = $('.popup-container');
  var $detailBtn = $('.btn-detail');
  var $footerPopupBtn = $('.btn-footer-popup');
  var $closePopupBtn = $('.btn-icon-close');
  var $dim = $('.dim');

  // 푸터 팝업 show 클래스 토글
  $footerPopupBtn.on('click', function () {
    var $thisPopup = $(this).closest($('.footer-list')).find($popup);
    $thisPopup.addClass('show');
    $('body').addClass('scroll-lock');
  });

  // 팝업 show 클래스 토글
  // $detailBtn.on('click', function () {
  //   var $thisPopup = $(this).closest($('.product-detail-box')).find($popup);
  //   $thisPopup.addClass('show');
  //   $('body').addClass('scroll-lock');
  // });

  // 닫기 버튼 클릭 시 팝업 닫힘
  $closePopupBtn.on('click', function () {
    var $popupCont = $(this).closest($popup);
    $popupCont.removeClass('show');
    $('body').removeClass('scroll-lock');
    inquiryFormReset($(this));
  });
  // 팝업 외 영역 클릭 시 팝업 닫힘
  $dim.on('click', function () {
    $(this).closest($popup).removeClass('show');
    $('body').removeClass('scroll-lock');
    inquiryFormReset($(this));
  });

  // 설치 신청 팝업 아코디언
  var $privacyLabel = $('.privacy-label-box');
  var $privacyContainer = $('.privacy-container');
  $privacyLabel.on('click', function () {
    var $this = $(this);
    var $parent = $this.closest($privacyContainer);
    var $thisContent = $parent.find('.privacy-content-box');
    var thisContentHeight = $parent.find('.privacy-content').outerHeight();
    if ($this.hasClass('active')) {
      $this.removeClass('active');
      $thisContent.css({
        height: 0,
      });
      setTimeout(function () {
        $thisContent.css({
          marginTop: 0,
        });
      }, 300);
    } else {
      $this.addClass('active');
      $thisContent.css({
        height: thisContentHeight,
        marginTop: '1rem',
      });
    }
  });

  function privacyContentHeight() {
    var $content = $('.privacy-container');
    if ($content.length > 0) {
      $content.each(function () {
        var $this = $(this);
        var $contentLabel = $this.find('.privacy-label-box');
        var $contentBox = $this.find('.privacy-content-box');
        var contentBoxHeight = $contentBox.find('.privacy-content').outerHeight();
        if ($contentLabel.hasClass('active')) {
          $contentBox.css({
            height: contentBoxHeight,
          });
        }
      });
    }
  }

  // Floating Button
  var $supportBtn = $('.support-link-box');
  var $topBtn = $('.btn-top');

  $topBtn.on('click', function () {
    $('html').animate(
      {
        scrollTop: '0',
      },
      500,
    );
  });

  // 충전기 설치 신청하기
  // 동의합니다 작성시 신청 버튼 활성화
  var value0 = null; // 개인정보 수집 동의(필수)
  var value1 = null; // 개인정보 제3자 제공(필수)
  var value2 = null; // 이름
  var value3 = null; // 전화번호

  $('.require')
    .find('input')
    .on('keyup', function () {
      var $this = $(this);
      var attr = $this.attr('id');

      if (attr == 'agree2') {
        value1 = $this.val();
      } else if (attr == 'name') {
        value2 = $this.val();
      } else if (attr == 'phone') {
        value3 = $this.val();
      } else if (attr == 'agree1') {
        value0 = $this.val();
      }

      if (value0 != null && value1 != null && value2 != null && value3 != null) {
        if (value0 == '동의합니다' && value1 == '동의합니다' && value2.length > 1 && value3.length >= 8) {
          $('.button-success').removeAttr('disabled');
        } else {
          $('.button-success').attr('disabled', 'disabled');
        }
      }
    });

  $('.btn-inquiry, .show-inquiry-popup, .btn-support').on('click', function () {
    $('.inquiry-popup').addClass('show');
    $('.gform .form-elements').removeAttr('style');
    $('.gform .thankyou_message').css('display', 'none');
    $('body').addClass('scroll-lock');
  });

  function inquiryFormReset(target) {
    value0 = null;
    value1 = null;
    value2 = null;
    value3 = null;

    var $popupCont = target.parents('.popup-container');
    if ($popupCont.hasClass('inquiry-popup')) {
      $('.gform').find('input').val('');
      $('.gform').find('textarea').val('');
      $('.inquiry-button-box .button-success').attr('disabled', 'disabled');
    }
  }

  // 볼트업 요금제 팝업
  $('.plan-block').on('click', function () {
    var $this = $(this);
    var $myPopup = $this.parents('.plan-block-box').find('.popup-container');
    if ($myPopup.hasClass('show')) {
      $myPopup.removeClass('show');
      $('body').removeClass('scroll-lock');
    } else {
      $myPopup.addClass('show');
      $('body').addClass('scroll-lock');
    }
  });
});

function productPopup(target) {
  $(target).find('.popup-container').addClass('show');
  $('body').addClass('scroll-lock');
}
