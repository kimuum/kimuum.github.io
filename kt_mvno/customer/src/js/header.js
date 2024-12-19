$(document).ready(function() {
  // [VOS2차] 결함 ID 1121820 브래드크럼 관련 수정 - 시작
  var $wrap = $document.find(".wrap");
  var $header = $wrap.find(".headerContainer");
  var $footer = $wrap.find(".footerContainer");

  var $firstMenu = null;  // Depth 1 활성화 메뉴
  var $secondMemuArea = null; // Depth 2 메뉴 그룹
  var $secondMenu = null; // Depth 2 활성화 메뉴
  var $thirdMemuArea = null;  // Depth 3 메뉴 그룹
  var $thirdMenu = null;  // Depth 3 활성화 메뉴

  var windowWidth = $(window).outerWidth();
  var windowHeight = $(window).outerHeight();

  var activeFisrstMenuIdx = null; // 사용자가 선택한 Depth 1 메뉴 Index
  var activeSecondMenuIdx = null; // 사용자가 선택한 Depth 2 메뉴 Index
  var activeThirdMenuIdx = null; // 사용자가 선택한 Depth 3 메뉴 Index
  var firstMenuIdx = null;  // 현재 페이지의 Depth 1 활성화 메뉴 Index
  var secondMenuIdx = null;  // 현재 페이지의 Depth 2 활성화 메뉴 Index
  var thirdMenuIdx = null;  // 현재 페이지의 Depth 3 활성화 메뉴 Index
  var hasThirdMenu = false; // 현재 페이지가 Depth 3 메뉴 소유 여부 

  var $menuList = $('.mobileNav').find('.menuList');
  var $mobileMenu = $('.mobileMenu');
  var $secondMenuList = $mobileMenu.find('.mobileSubMenuList'); // Depth 2 메뉴 그룹들의 컨테이너

  if($mobileMenu.find('.mobileThirdMenuList').length > 0) {
    var $thirdMenuList = $mobileMenu.find('.mobileThirdMenuList'); // Depth 3 메뉴 그룹들의 컨테이너
  }
  else {
    var $thirdMenuList = null;
  }

  $(window).on('load', function() {
    $wrap = $document.find(".wrap");
    $header = $wrap.find(".headerContainer");
    $footer = $wrap.find(".footerContainer");

    setTimeout(function() {
      alignActiveMenu();
    }, 250);
  }).scroll(function () {
    // summaryReset(); //header summary closed

    var scroll = $(window).scrollTop();
    var headerH = $('.headerArea').outerHeight();

    // 스크롤 좌표가 헤더 영역을 벗어남 //
    if (scroll > headerH) {
      if($mobileMenu.hasClass('active')) {
        $mobileMenu.removeClass('active');
      }
      
      if(!$mobileMenu.hasClass('mobileNavActive')) {
        $wrap.addClass("mobileNavActive");
      }

      if(secondMenuIdx != activeSecondMenuIdx) {
        $secondMenuList.find('.mobileSubMenuArea.show').find('a.active').removeClass('active');
        $secondMenuList.find('.mobileSubMenuArea.show').find('li').eq(secondMenuIdx - 1).find('a').addClass('active');
      }
      if($thirdMenuList) {
        $thirdMenuList.find('.mobileThirdMenuArea.show').removeClass('show');
      }
    } else {
      if($wrap.hasClass('mobileNavActive')) {
        $wrap.removeClass("mobileNavActive");
      }
      $secondMenuList.removeAttr('style');

      if($secondMenuList.find('.mobileSubMenuArea.show').find('li').eq(secondMenuIdx - 1).find('a').hasClass('hasThirdMenu')) {
        $thirdMenuList.find('#thirdMenu_' + firstMenuIdx + '_' + secondMenuIdx).addClass('show');
      }
    }
  }).resize(function() {
    windowWidth = $(window).outerWidth();
    if(windowWidth > 1024) {
      if($header.hasClass("mobile")) {
        $header.removeClass("mobile");
        $wrap.removeClass("moMenuOpen");
        $document.find("body").removeAttr('style');
        $('.mobileContainer').removeAttr('style');
      }
      if($footer.hasClass("mobile")) {
        $footer.removeClass("mobile");
      }
      $('.wrap').removeClass("mobileNavOn");
    } else {
      if(!$header.hasClass("mobile")) {
        $header.addClass("mobile");
      }
      if(!$footer.hasClass("mobile")) {
        $footer.addClass("mobile");
      }
      $('.wrap').addClass("mobileNavOn");

      mobileNavControl();
    }
  }).resize();

  function mobileNavControl() {
    // 초기 값
    var initBtn = $('.menuList .menu' + '[aria-selected="true"]').attr('aria-controls');
    $('#' + initBtn).addClass('show');
    
    // 메뉴가 적을 경우 토글버튼 비활성화
    var wrpperWith = $('.mobileSubMenuList').width();
    // var itemWidth = $('#' + initBtn).find('.mobileSubMenu').width();

    // ===== 첫 번째 메뉴 클릭 이벤트 리스너 ===== //

    $(document).off("click", '.menuList .menu');
    $(document).on("click", '.menuList .menu', function() {
      // 초기 값
      var $this = $(this);
      var $parent = $this.closest('li');
      
      var thisIndex = $menuList.children('li').index($parent) + 1;
      $('.menuList .menu').removeClass('active').attr("aria-selected", "false");
      $('.mobileSubMenuArea').removeClass('show');

      // show
      var $tabCon = $this.attr('aria-controls');
      $this.addClass('active');
      $this.attr('aria-selected', 'true');
      $('#' + $tabCon).addClass('show');

      if( $('.mobileNavOn').hasClass('mobileNavActive') ) {
        $('.mobileSubMenuList').addClass('show');
      } else {
        $('.mobileSubMenuList').removeClass('show');
      }

      // 메뉴가 적을 경우 토글버튼 비활성화
      var itemWidth = $('#' + $tabCon).find('.mobileSubMenu').width();
      if( wrpperWith <= itemWidth ) {
        $('.btnShowAll').removeClass('disabled');
        $('.btnShowAll').removeAttr('disabled');
      } else {
        $('.btnShowAll').addClass('disabled');
        $('.btnShowAll').attr('disabled', '');
      }

      if(thisIndex != activeFisrstMenuIdx && $thirdMenuList) {
        $thirdMenuList.find('.mobileThirdMenuArea.show').removeClass('show');
      }

      activeFisrstMenuIdx = thisIndex;
    });
    
    $wrap = $document.find(".wrap");
    $header = $wrap.find(".headerContainer");
    $footer = $wrap.find(".footerContainer");

    // First //
    $firstMenu = $document.find('.mobileNav').find('.menuList').find('.menu.active');
    firstMenuIdx = $firstMenu.closest('li').index() + 1;
    $secondMemuArea = $document.find('.mobileNav').find('.mobileSubMenuList').find('.mobileSubMenuArea.show');

    // Get the Active Second menu index //
    var secondMenuClass = $secondMemuArea.attr('class');

    // [VOS2차] 결함 ID 1122233 수정 - 시작 //
    $secondMemuArea.find('li').find('a').removeAttr('title');
    if(secondMenuClass) {
      activeSecondMenuIdx = checkActiveClass(secondMenuClass);
      $secondMemuArea.find('li').eq(activeSecondMenuIdx - 1).find('a').addClass('active');
      $secondMemuArea.find('li').eq(activeSecondMenuIdx - 1).find('a').attr('title', '선택됨');
    }
    else {
      $secondMemuArea.find('li').eq(0).find('a').addClass('active');
      $secondMemuArea.find('li').eq(0).find('a').attr('title', '선택됨');
    }

    // Second //  
    $secondMenu = $secondMemuArea.find('a.active');
    secondMenuIdx = $secondMenu.closest('li').index() + 1;
    $thirdMemuArea = $document.find('.mobileNav').find('.mobileThirdMenuList').find('#thirdMenu_' + firstMenuIdx + '_' + secondMenuIdx);
    $thirdMemuArea.addClass('show');

    // Get the Active Third menu index //
    var thirdMenuClass = $thirdMemuArea.attr('class');
    // var thirdMenuActive

    $thirdMemuArea.find('li').find('a').removeAttr('title');
    if(thirdMenuClass) {
      activeThirdMenuIdx = checkActiveClass(thirdMenuClass);
      $thirdMemuArea.find('li').eq(activeThirdMenuIdx - 1).find('a').addClass('active');
      $thirdMemuArea.find('li').eq(activeThirdMenuIdx - 1).find('a').attr('title', '선택됨');
    }
    else {
      $thirdMemuArea.find('li').eq(0).find('a').addClass('active');
      $thirdMemuArea.find('li').eq(0).find('a').attr('title', '선택됨');
    }
    // [VOS2차] 결함 ID 1122233 수정 - 끝 //

    // Third //  
    $thirdMenu = null;
    thirdMenuIdx = null;

    // Get Current Title //
    var currentTitle = '';
    if($secondMenu.hasClass('hasThirdMenu')) {
      $thirdMenu = $thirdMemuArea.find('a.active');
      thirdIdx = $thirdMenu.closest('li').index() + 1;
      currentTitle = $thirdMenu.text();
      hasThirdMenu = true;
    }
    else {
      currentTitle = $secondMenu.text();
      hasThirdMenu = false;
    }

    $document.find('.mobileMenu').find('.currentPageTitle').find('.menuTitle').text(currentTitle); //[VOS2차] 결함ID 1122632 클래스로 변경

    alignActiveMenu();
  
    expandedControl(hasThirdMenu);

    // ===== 두 번째 메뉴 클릭 이벤트 리스너 ===== //

    $(document).off("click", '.mobileSubMenuList .mobileSubMenu a');
    $(document).on("click", '.mobileSubMenuList .mobileSubMenu a', function() {
      var $this = $(this);
      var $parent = $this.closest('.mobileSubMenuArea');
      
      // 두 번째 메뉴가 세 번째 메뉴를 갖고 있지 않은 경우 a 태그에 연결된 경로로 이동 //
      if(!$this.hasClass('hasThirdMenu')) {
        return true;
      }
      // 두 번째 메뉴가 세 번째 메뉴를 갖고 있는 경우 해당 되는 세 번째 메뉴를 오픈 //
      else {
        var myIdx = $parent.find('.mobileSubMenu').find('a').index(this) + 1;
        var parentIdx = $(document).find('.mobileSubMenuList').find('.mobileSubMenuArea').index($parent) + 1;

        $parent.find('.mobileSubMenu').find('a').removeClass('active');
        $parent.find('.mobileSubMenu').find('a').removeAttr('title');//[VOS] 1122233 - 20230322 수정

        $this.addClass('active');
        $this.attr('title', '선택됨');//[VOS] 1122233 - 20230322 수정

        if(!$document.find('.mobileThirdMenuList').find('#thirdMenu_' + parentIdx + '_' + myIdx).hasClass('show')) {
          $document.find('.mobileThirdMenuList').find('.mobileThirdMenuArea').removeClass('show');
          $document.find('.mobileThirdMenuList').find('#thirdMenu_' + parentIdx + '_' + myIdx).addClass('show');
          activeSecondMenuIdx = myIdx;
        }
        
        return false;
      }
    });
  }

  function checkActiveClass(classes) {
    var classArray = classes.split(' ');
    var hasActive = -1;

    for(var i = 0; i < classArray.length; i++) {
      if(classArray[i].search('active-') > -1) {
        hasActive = i;
        break;
      }
    }

    if(hasActive > -1) {
      return Number(classArray[hasActive].split('-')[1]);
    }
    else {
      return false;
    }
  }

  // mobile navi toggle button
  function expandedControl(has3rdMenu) {
    // 초기 값
    $('.mobileMenu .btnShowAll').attr('aria-expanded', 'false');
    $('.mobileMenu').removeClass('active');

    // ===== toggle 활성화 ===== //

    $(document).off("click", '.mobileMenu .btnShowAll');
    $(document).on("click", '.mobileMenu .btnShowAll', function(){
      var $mobileMenu = $('.mobileMenu');
      var $secondMenuList = $mobileMenu.find('.mobileSubMenuList');

      if(has3rdMenu) {
        var $thirdMenuList = $mobileMenu.find('.mobileThirdMenuList');
      }
      else {
        var $thirdMenuList = null;
      }

      // 모바일 하위 메뉴를 접는다. //
      if($mobileMenu.hasClass('active') ) {
        $(this).attr('aria-expanded', 'false');
        $mobileMenu.removeClass('active');

        // Depth 3 메뉴가 있음 //
        if(has3rdMenu) {
          if($wrap.hasClass('mobileNavActive')) {
            $thirdMenuList.removeAttr('style');
          }
        }

        alignActiveMenu();

      // 모바일 하위 메뉴를 펼친다. //
      } else {
        $(this).attr('aria-expanded', 'true');
        $mobileMenu.addClass('active');

        // Depth 3 메뉴가 있음 //
        if(has3rdMenu) {
          if($wrap.hasClass('mobileNavActive')) {            
            // 두 번째 메뉴 리스트 hide(), 세 번째 메뉴 리스트 show() //
            $secondMenuList.hide();
            $thirdMenuList.show();

            // Depth 3 메뉴 리스트 중 현재 페이지에 해당하는 메뉴가 show 클래스를 가지고 있지 않을 경우 추가해준다. //
            if(!$thirdMenuList.find('#thirdMenu_' + firstMenuIdx + '_' + secondMenuIdx).hasClass('show')) {
              $thirdMenuList.find('.mobileThirdMenuArea').removeClass('show');
              $thirdMenuList.find('#thirdMenu_' + firstMenuIdx + '_' + secondMenuIdx).addClass('show');
            }
          }
        }
        // Depth 3 메뉴가 없음 //
        else {
          $secondMenuList.show();
        }

        $(this).attr('aria-expanded', 'true');
        $mobileMenu.addClass('active');
      }
    });
  }

  function alignActiveMenu() {
    if($firstMenu && $firstMenu.length > 0) {
      var totalFirstWidth = 0;
      var firstLeft = $firstMenu.position().left;
      var firstWidth = $firstMenu.outerWidth();
      var firstBoxWidth = $menuList.width();

      for(var i = 0; i < firstMenuIdx - 1; i++) {
        if($menuList.find('li').eq(i).css('display') != 'none') {
          totalFirstWidth += $menuList.find('li').eq(i).outerWidth();
        }
      }

      if(firstLeft + firstWidth < 0 || firstLeft + firstWidth > firstBoxWidth) {
        $menuList.scrollLeft(totalFirstWidth);
        firstLeft = Math.floor($firstMenu.position().left);
      }
    }

    if($secondMenu && $secondMenu.length > 0) {
      var totalSecondWidth = 0;
      var secondtLeft = Math.floor($secondMenu.position().left);
      var secondWidth = Math.floor($secondMenu.outerWidth());
      var secondBoxWidth = Math.floor($secondMemuArea.width());

      for(var i = 0; i < secondMenuIdx - 1; i++) {
        if($secondMemuArea.find('li').eq(i).css('display') != 'none') {
          totalSecondWidth += $secondMemuArea.find('li').eq(i).outerWidth() + 4;
        }
      }

      if(secondtLeft + secondWidth < 0 || secondtLeft + secondWidth > secondBoxWidth) {
        $secondMemuArea.scrollLeft(totalSecondWidth - 60);
        secondtLeft = Math.floor($secondMenu.position().left);
      }
    }

    if($thirdMenu && $thirdMenu.length > 0) {
      var totalThirdWidth = 0;
      var thirdtLeft = $thirdMenu.offset().left;
      var thirdWidth = $thirdMenu.outerWidth();
      var thirdBoxWidth = $thirdMemuArea.width();

      for(var i = 0; i < thirdMenuIdx - 1; i++) {
        if($thirdMemuArea.find('li').eq(i).css('display') != 'none') {
          totalThirdWidth += $thirdMemuArea.find('li').eq(i).outerWidth();
        }
      }

      if(thirdtLeft + thirdWidth < 0 || thirdtLeft + thirdWidth > thirdBoxWidth) {
        $thirdMemuArea.scrollLeft(totalThirdWidth);
        thirdtLeft = Math.floor($thirdMenu.position().left);
      }
    }
  }

  // [VOS2차] 결함 ID 1121820 브래드크럼 관련 수정 - 끝
});

// DR-2023-55179 탑배너 고도화 추가 시작
// window.addEventListener('load', loadCheckTopBanner);
// window.removeEventListener('load', loadCheckTopBanner);

function loadCheckTopBanner() {
  const topBannerContainer = document.querySelector('.topBannerContainer');
  if( topBannerContainer ) {
    document.querySelector('.wrap').classList.add('openedTopBanner');// wrap.openedTopBanner
    TopBannerSwiper();// swiper
    const closeTopBanner = topBannerContainer.querySelector('.closeBanner');
    closeTopBanner.addEventListener('click', closeTopBannerHandler);
  }
}

// Top Banner Swiper 20230927 수정
function TopBannerSwiper() {
  const swiperId = '#topBannerSwiper';
  let options;

  // slide가 1 보다 작을 때 <> 숨김
  const swiperWrapper = document.querySelector(swiperId + ' .swiper-wrapper');
  const swiperSlideCount = swiperWrapper.childElementCount;
  if(swiperSlideCount <= 1) {
    document.querySelector(swiperId + ' .bannerbuttons').style.display = 'none';
  } else {
    options = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      touchRatio: 0,
      navigation: {
        nextEl: ".bannerBtnNext",
        prevEl: ".bannerBtnPrev",
      },
      on: {
        slideChange: function(e) {
          enabledShowingFocus(topBannerSwiper);
        },
        resize: function(e) {
          enabledShowingFocus(topBannerSwiper);
        }
      }       
    }
  }

  var topBannerSwiper = new Swiper(swiperId, options);
  enabledShowingFocus(topBannerSwiper);
}
// Top banner close
function closeTopBannerHandler() {
  const topBanner = this.parentNode;
  topBanner.remove();
  document.querySelector('.wrap').classList.remove('openedTopBanner');
  setTimeout(function() {
    document.querySelector('.header .logo a').focus();
  }, 400)
}
// DR-2023-55179 탑배너 고도화 추가 끝