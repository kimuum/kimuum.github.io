/* **************** *
  || version : 2차 || 
 * **************** */
var $document = $(document);

// 디바이스 확인 //
function checkMobile() {
  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  if(varUA.indexOf('android') > -1) {
      //안드로이드
      return "android";
  } else if( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
      //IOS
      return "ios";
  } else {
      //아이폰, 안드로이드 외
      return "other";
  } 
}

var tabbable = "button:not([disabled]), input:not([type='hidden']):not([disabled]):not([readonly]), select:not([disabled]), iframe:not([disabled]), textarea:not([disabled]):not([readonly]), [href]:not([disabled]), [tabindex]:not([tabindex='-1']):not([disabled])";
// [VOS2차] 결함 ID 1122410, 1122191, 1122624, 1122468, 1122150 수정 - 시작 //
var focusArray = tabbable.split(','); // focus 가능 요소들에 대한 정의를 배열로 변환 한다. //
var contentArea, footerContainer, headerContainer, pageTitleContainer, headerTrigger, fixedContainer, footerTrigger;
// [VOS2차] 결함 ID 1122410, 1122191, 1122624, 1122468, 1122150 수정 - 끝 //

$(document).ready(function () {
  //======================= 유튜브 영상 비율 =======================//
  $('.skip').before('<div class="blankFocus" tabindex="0"></div>');
  $(window).on('load', function() {
    setTimeout(function() {
      if($('.videoBox').find('.youtube').length > 0) {
        $('.videoBox').find('.youtube').each(function() {
          var $player = $(this);
          var thisWidth = $player.outerWidth();
          var command = 'pauseVideo'; // play = playVideo, pause = pauseVideo, stop = stopVideo
          
          $player[0].contentWindow.postMessage('{"event":"command","func":"' + command + '","args":""}', '*');

          if($player.closest('.mainVisual').length > 0) {
            var thisHeight = thisWidth * 0.44;
          }
          else {
            var thisHeight = (thisWidth * 9) / 16;
          }
          $player.css({ 'height' : thisHeight });
        });
      }
      // [VOS2차] 결함 ID : 1122038, 1122662, 1122775, 1122892, 1123154 수정 : 페이지 로드 시 첫 번째 요소 포커스 - 시작 //
      catchTheFocus();
      // [VOS2차] 결함 ID : 1122038, 1122662, 1122775, 1122892, 1123154 수정 : 페이지 로드 시 첫 번째 요소 포커스 - 끝 //
    }, 100);

    // [VOS2차] 결함 ID 1122410, 1122191, 1122624, 1122468, 1122150 수정 - 시작 //
    // [VOS2차] 결함 ID 1122468 재등록 사항 수정 - 시작 //
    setTimeout(function() {
      contentContainer = document.querySelector('.contentContainer');
      footerContainer = document.querySelector('.footerContainer');
      headerContainer = document.querySelector('.headerContainer');
      pageTitleContainer = document.querySelector('.pageTitleContainer'); // 브레드크럼을 선택한다. //
      fixedContainer = document.querySelector('.fixedFooterContainer');
      if(pageTitleContainer) {
        headerTrigger = headerContainer.offsetHeight + pageTitleContainer.offsetHeight;
      }
      if(fixedContainer) {
        footerTrigger = fixedContainer.getBoundingClientRect().top;
      }

      if(contentContainer && footerContainer)  {
        var contentFocusable = contentContainer.querySelectorAll(tabbable);
        var footerFocusable = footerContainer.querySelectorAll(tabbable);
        
        for(contentElement of contentFocusable) {
          // focus 이벤트 리스너 //

          $(contentElement).on('focus', function(e) {
          // contentElement.addEventListener('focus', function(e) {
            var target = e.target;
            var top = target.getBoundingClientRect().top;
            var thisCoord = getCoords(target);
            var thisHeight = target.offsetHeight;
            var windowWidth = screen.width;
            var windowHeight = screen.height;
            var destination = (windowHeight / 2) - 150;
            
            if((windowWidth > 1024 && top < headerTrigger) || (windowWidth <= 1024 && top < 44)) {
              // window.scroll(0, thisCoord.top - destination);
            }
          });
        }
  
        for(footerElement of footerFocusable) {
          footerElement.addEventListener('focus', function(e) {
            var target = e.target;
            var thisCoord = getCoords(target);
            var thisHeight = target.offsetHeight;
            var windowHeight = screen.height;

            if(fixedContainer && top + thisHeight > footerTrigger) {
              // window.scroll(0, thisCoord.top - ((windowHeight - thisHeight) / 2));
            }
          });
        }
      }
    }, 100);
    // [VOS2차] 결함 ID 1122468 재등록 사항 수정 - 끝 //
    // [VOS2차] 결함 ID 1122410, 1122191, 1122624, 1122468, 1122150 수정 - 끝 //
  }).on('resize', function() {
    if($('.videoBox').find('.youtube').length > 0) {
      $('.videoBox').find('.youtube').each(function() {
        var $this = $(this);
        var thisWidth = $this.outerWidth();

        if($this.closest('.mainVisual').length > 0) {
          var thisHeight = thisWidth * 0.44;
        }
        else {
          var thisHeight = (thisWidth * 9) / 16;
        }
        $this.css({ 'height' : thisHeight });
      });
    }
  }).resize();

  //======================= 웹접근성 =======================//

  // 모든 팝업에 tabindex=0 추가, 비동기식으로 변경//
  $(document).find('.popupContainer').attr('tabindex', '0');

  tabControl('.tabButton');
  accordionControl(
    '.accordionBtn',
    '.accordionContent',
    '.accordionArea',
    '정보 열기',
    '정보 닫기',
    '.summaryContent',
    '.summaryArea'
  ); //요금제/부가서비스 > 일반 요금제아코디언
  accordionControl(
    '.basicBtn',
    '.basicInfoContent',
    '.feeBasic',
    '요금제 기본 정보 열기',
    '요금제 기본 정보 닫기',
    '.productPlanDetailList',
    '.detailArea'
  ); //요금제 상세
  accordionControl(
    '.msgBtn',
    '.feeMsgContent',
    '.feeMessage',
    '요금제 제공 안내 정보 열기',
    '요금제 제공 안내 정보 닫기',
    '.productPlanDetailList',
    '.detailArea'
  ); //요금제 제공 안내 상세
  accordionControl(
    '.limitBtn',
    '.feeLimitContent',
    '.feeLimit',
    '음성통화 및 메세지 서비스 사용제한 조건 정보 열기',
    '음성통화 및 메세지 서비스 사용제한 조건 정보 닫기',
    '.productPlanDetailList',
    '.detailArea'
  ); //요금제 상세
  accordionControl(
    '.shareBtn',
    '.shareContent',
    '.shareContainer',
    '공유하기 열기',
    '공유하기 닫기'
  ); //이벤트 상세 공유하기 버튼
  accordionControl(
    '.supportBtn',
    '.supportContent',
    '.supportArea',
    '답변 열기',
    '답변 닫기'
  ); //고객지원 공지사항,FAQ
  accordionControl(
    '.extraBtn',
    '.extraContent',
    '.extraArea',
    '정보 열기',
    '정보 닫기'
  ); //상품 부가서비스
  accordionControl(
    '.optionToggleBtn',
    '.optionGroup',
    '.optionArea',
    '옵션 열기',
    '옵션 닫기'
  ); //상품 필터
  videoAccordion('.videosubBtn', '.videosubContent', '.videosubArea'); //마이알뜰폰 소개, 서비스>소개, 서비스>알뜰폰 사업, 고객지원>이용가이드

  dropdownControl('.dropdownBtn');
  breadcrumbDrop('.breadcrumbBtn');
  summaryControl(".summaryBtn");

  var $wrap = $document.find(".wrap");
  var $header = $wrap.find(".headerContainer");
  var $footer = $wrap.find(".footerContainer");
  var position = $(window).scrollTop();

  $document.off("mouseenter", ".gnb > li > .depth01");
  $document.off("mouseleave", ".gnbContainer");
  $document.off("focus", ".gnbContainer a");
  $document.off('focusout', ".gnb > li:last-child > .subMenu > li:last-child");
  $document.off('focusout', ".gnbBtmMenuTitle .iconBgSetting");
  $document.off("click", ".gnb > li > .moDepth01");
  $document.off("click", ".subMenu .openDepth03");
  $document.off("click", ".btnMenuOpen");
  $document.off("click", ".btnMenuClose");
  
  // Depth 1 Menu MouseEnter //
  $document.on("mouseenter", ".gnb > li > .depth01", function (e) {
    //$header 대상이 없었다면 다시 가져오기 //
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }

    if(!$header.hasClass("mobile")) {
      $header.addClass("hover");
    }
  });
  // Depth 1 Menu Mouseleave //
  $document.on("mouseleave", ".gnbContainer", function () {
    //$header 대상이 없었다면 다시 가져오기 //
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }

    if(!$header.hasClass("mobile")) {
      $header.removeClass("hover");
      $header.removeClass("focus");
    }
  });

  // [VOS2차] 결함 ID 1122023 수정 : 버튼도 포커스 대상에 포함 //
  $document.on("focus", ".gnbContainer a, .gnbContainer button", function () {
    //$header 대상이 없었다면 다시 가져오기 //
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }
    
    if(!$header.hasClass("mobile")) {
      $header.addClass("focus");
    }
  });

  // GNB Menu 마지막 링크 focusout //
  $document.on('focusout', ".gnbBtmMenu a:last-child", function () {
    //$header 대상이 없었다면 다시 가져오기 //
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }

    $(this).addClass('tag');
    if(!$header.hasClass("mobile")) {
      $header.removeClass("focus");
    }
  });
  
  $document.on('focusout', ".gnbBtmMenuTitle .iconBgSetting", function () {
    //$header 대상이 없었다면 다시 가져오기 //
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }
  });

  $document.on("click", ".gnb > li > .moDepth01", function () {
    if($header.length == 0) {
      $header = $document.find(".wrap").find(".headerContainer");
    }

    if($header.hasClass("mobile")) {
      var $depth = $(this).closest(".gnb > li");

      if ($depth.hasClass("active")) {
        $(this).attr('aria-expanded', 'false');
        $depth.removeClass("active");
      } else {
        $(this).attr('aria-expanded', 'true');
        $depth.addClass("active").siblings().removeClass("active");
      }
      return false;
    }
  });
  
  $document.on("click", ".subMenu .openDepth03", function () {
    var $depth = $(this).parent("li");

    if($depth.hasClass('active') ) {
      $('.gnbBottom.pcType').removeAttr('style');
      $(this).attr('aria-expanded', 'false');
      $depth.removeClass('active');
    } else {
      $('.subMenu .openDepth03').attr('aria-expanded', 'false');
      $('.subMenu > li').removeClass("active");
      $('.gnbBottom.pcType').removeAttr('style');

      $(this).attr('aria-expanded', 'true');
      $depth.addClass('active');
    }

    if( $(this).parents('.subMenu').height() > 460) {//[2차] 20221006 마이알뜰폰 홈 메뉴 추가
      $('.gnbBottom.pcType').css({height: '73rem'}); //[2차] 20221006 마이알뜰폰 홈 메뉴 추가
    }
  });

  // Mobile GNB 이벤트 open
  $document.on("click", ".btnMenuOpen" ,function(){
    var $wrap = $document.find(".wrap"); //20230307 dev 추가
    var $mobileContainer = $('.mobileContainer');
    var menuHeight = $(window).height() - $('.header').height();

    $wrap.addClass("moMenuOpen");
    $document.find("body").css({
      position: "fixed",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    });

    $mobileContainer.css('height', menuHeight);

    setTimeout(function() {
      if($mobileContainer.find('.myInfoSummary ').hasClass('beforeLogin')) {
        $mobileContainer.find(tabbable).first().focus();
      }
      else {
        $mobileContainer.find('.myInfoSummary').find('.subTitleRight').find(tabbable).first().focus();
      }
      
    }, 0);

    if ($wrap.hasClass(".moMenuOpen")) {
      $wrap.removeClass("moMenuOpen");
    };
  });
  // Mobile GNB 이벤트 close
  $document.on("click", ".btnMenuClose" ,function() {
    var $wrap = $document.find(".wrap"); //20230307 dev 추가
    $wrap.removeClass("moMenuOpen");
    $document.find("body").removeAttr('style');
    $('.mobileContainer').removeAttr('style');

    setTimeout(function() {
      $wrap.find('.btnMenuOpen').focus();
    }, 0);
  });
  // [VOS2차] 결함 ID 1122230 추가 - 시작
  $document.on("click", ".btnMenuOpen" ,function() {
    setTimeout(function() {
      $wrap.find('.btnMenuClose').focus();
    }, 0);
  });
  // [VOS2차] 결함 ID 1122230 추가 - 끝

  // [운영] 20230308 부가서비스 개선 : 팝업 닫을 시 탭 초기화 - 시작
  $document.on("click", ".btnClose" ,function() {
    var $popupContainer = $(this).closest('.popupContainer');
    var $popupInnerTabList = $popupContainer.find('.tabList');

    $popupContainer.find('*').scrollTop(0);//스크롤 top으로 올리기 

    $popupInnerTabList.each(function(){
      var $popupInnerButton = $(this).find('.tabButton').eq(0);//첫번째 탭

      if($popupInnerButton.attr('aria-selected') == 'false') {
        var buttonControls = $popupInnerButton.attr('aria-controls');//eq 0 연결 탭내용

        setTimeout(function() {
          $popupInnerButton.siblings().attr('aria-selected', 'false');//eq 0 외 초기화
          $popupInnerButton.attr('aria-selected', 'true');//eq 0 선택 상태 변경
          $('#' + buttonControls).addClass('show').siblings().removeClass('show');//eq 연결 0 탭내용 외 초기화
        }, 400);
      }
    });
  });
  // [운영] 20230308 부가서비스 개선 : 팝업 닫을 시 탭 초기화 - 끝
});

// 전페이지 공통 js
function commonEvent() {}

// 메인 js
function mainEvent() {}
// KMVNO-3999 탑배너 고도화로 구소스 삭제

// info Summary
function summaryControl(button) {
  var $this = $document.find(button);
  $(document).off("click", button);
  $(document).on("click", button, function(){
    var $container = $(this).closest(".infoSummaryBottom");
    var $content = $container.find(".summaryBottom");

    if ($container.hasClass("active")) {
      $container.removeClass("active");
      $(this).attr("aria-expanded", "false");
      $(this).find('span').text('상세 요금 정보 보기');
    } else {
      $container.addClass("active");
      $(this).attr("aria-expanded", "true");
      $(this).find('span').text('상세 요금 정보 닫기');
    }
  });
}
function summaryReset() {
  if ($document.find(".infoSummaryBottom").hasClass("active")) {
    $document.find(".infoSummaryBottom").removeClass("active");
    $document.find(".infoSummaryBottom").find(".summaryBtn").attr("aria-expanded", "false");
    $document.find(".summaryBottom").attr("tabindex", -1);
  }
}
//------------ end of header --------------//

//------------ sub common --------------//
// tab accessibility
function tabControl(button) {
  var $btn = $document.find(button);
  var $contentArea = $document.find(button).parents('.contentArea');
  var selectedText = null;
  
  // 기본 노출 탭내용 초기 값
  var initBtn = $(button + '[aria-selected="true"]').attr('aria-controls');
  $('#'+initBtn).addClass('show');

  $btn.on('click', function(){
    
    var tabCon = $(this).attr('aria-controls');

    // 초기화
    $(this).siblings().attr("aria-selected", "false");
    $document.find("#" + tabCon).siblings().removeClass('show');

    // show
    $(this).attr('aria-selected', 'true');
    $document.find('#' + tabCon).addClass('show');
    // return false;
  
    if( $contentArea.find('.summaryContent').length > 0) {
      
      reloadMasonry('.summaryContent', '.summaryArea');
    }

    // DR-2023-34353 20230711 주석처리
    // (1112631 1차 vos : 탭 선택 시 url이 다르게 출력 되어 각 페이지별 타이틀이 달라야 했던 결함, 20230711 동일 현상 확인 안 됨)
    // if($('.wrap').hasClass('policiesAndTerms')){
    //   selectedText = $(this).text();
    //   document.title = selectedText + ' | KT 마이알뜰폰';
    // }
    // DR-2023-34353
  });

}

// accordion accessibility
function accordionControl(button, content, wrap, openText, closeText, masonryCon, masonryItem) {
  var $btn = $document.find(button);
  var $contentArea = $document.find(button).parents('.contentArea');

  if( $contentArea.find(masonryCon).length > 0) {
    
    reloadMasonry(masonryCon, masonryItem);
  }
  // 상태에 대한 초기 셋팅
  if( $btn.attr("aria-expanded") == 'false' ) {
    $btn.find('span').text(openText);
    
  } else if ( $btn.attr("aria-expanded") == 'true' ) {
    $btn.find('span').text(closeText);
    
  }
  $(document).off("click", button);
  $(document).on("click", button, function(){
    var $content = $(this).parent().siblings(content);
    var $wrap = $(this).closest(wrap);
    if ($wrap.hasClass("active")) {
      $wrap.removeClass("active");
      $(this).attr("aria-expanded", "false");
      if($(this).find('span')) {
        $(this).find('span').text(openText);
      }
      // $content.attr("tabindex", -1);
    } else {
      $wrap.addClass("active");
      $(this).attr("aria-expanded", "true");
      if($(this).find('span')) {
        $(this).find('span').text(closeText);
      }
      // $content.attr("tabindex", 0);
    }

    if( $contentArea.find(masonryCon).length > 0) {
      reloadMasonry(masonryCon, masonryItem);
    }
  })
}

// accordion accessibility
function videoAccordion(button, panel, wrap) {
  var $btn = $document.find(button);

  if (!$btn.attr('aria-expanded') == 0) {
    $btn.find('span').text('자막 펼치기');
  } else {
    $btn.find('span').text('자막 숨기기');
  }
  $(document).on('click', button, function () {
    var $panel = $(this).closest(wrap).find(panel);
    var $wrap = $(this).closest(wrap);
    if ($wrap.hasClass('active')) {
      $wrap.removeClass('active');
      $(this).attr('aria-expanded', 'false');
      $panel.attr("tabindex", -1);
      $(this).find('span').text('자막 펼치기');
    } else {
      $wrap.addClass('active');
      $(this).attr('aria-expanded', 'true');
      $(panel).attr("tabindex", 0);
      $(this).find('span').text('자막 숨기기');
    }
  });
}


function reloadMasonry(masonryCon, masonryItem) {
  $document.find(masonryCon).masonry({
    itemSelector: masonryItem,
    columnWidth: masonryItem,
    percentPosition: true,
  });
}

// breadcrumbDrop
function breadcrumbDrop(button) {
  $document.find(button).on("click", function () {
    var $button = $(this);
    var $container = $button.parents(".breadcrumbDrop");
    var $wrap = $button.parents(".breadcrumb");
    var $list = $wrap.find(".breadcrumbDropList li");
    var listLength = $list.length;

    // click
    if ($container.hasClass("active")) {
      $container.removeClass("active");
      $button.attr("aria-expanded", "false");
    } else {
      breadcrumbDropReset();
      $container.addClass("active");
      $button.attr("aria-expanded", "true");
    }
    
    // out
    $list.eq(listLength - 1).find('a').on('focusout', function(){
      
      breadcrumbDropReset();
    });
    $('.breadcrumbDropList').on("mouseleave", function(){
      
      breadcrumbDropReset();
    });
  });
}

function breadcrumbDropReset(){
  $document.find('.breadcrumbDrop').removeClass("active");
  $document.find('.breadcrumbBtn').attr("aria-expanded", "false");
}
// [VOS2차] 결함 ID 1122584, 1123248 드롭다운 초점 오류 수정, 20230316 - 시작 //
// Dropdown Accessibility //
function dropdownControl(button) {
  var $btn = $document.find(button);
  var thisClassName = button;
  var $wrap = $btn.closest(".dropdownArea");

  // 드롭다운 최상위 Wrapper 가 disabled 클래스를 가지고 있는 경우 기능을 비활성화 합니다. //
  // if ($wrap.hasClass("disabled")) {
  //   return false;
  // }
 
  // 드롭다운 내부에 회선 설정 버튼이 있는 경우 keydown 이벤트를 부여합니다. //
  $wrap.find('.dropSetting').off("keydown", dropSettingControl);
  if($wrap.find('.dropSetting').length > 0) {
    $wrap.find('.dropSetting').on('keydown', dropSettingControl);
 
    function dropSettingControl(e) {
      var $this = $(this);
      var $wrap = $this.parents(".dropdownArea"); // Dropdown 최상위 Wrapper
      var $option = $wrap.find(".dropdownList"); // Dropdown Option List
      if (!e.shiftKey && e.keyCode == "9") {
       
        $wrap.removeClass("active");
        $option.slideUp(100);
        $this.attr("aria-expanded", "false");//20230316
      }
    }
  }
 
  /*
  Dropdown 내의 button prameter 로 지정된 버튼 click 이벤트 입니다.
  클릭 시 옵션 리스트가 오픈됩니다.
  */
  $(document).off("click", button, dropdownAreaClick);
  $(document).off("keydown", button, dropdownAreaKeydown);
  $(document).on("click", button, dropdownAreaClick).on("keydown", button, dropdownAreaKeydown);
 
  function dropdownAreaClick(e) {
    var $wrap = $(this).parents(".dropdownArea"); // Dropdown 최상위 Wrapper
    var $content = $wrap.find(".dropdownList"); // Dropdown Option List
 
    // Dropdown이 활성화 상태인 경우 비활성화 시킵니다. //
    if ($wrap.hasClass("active")) {
      // 옵션에 부여된 이벤트를 off 시킵니다. //
      dropdownOptionControl($content, false);
      $content.slideUp(100, function() {
        $wrap.removeClass("active");
        $(this).attr("aria-expanded", "false");
        $content.attr('tabindex', -1);
      });
    }
    // Dropdown이 비활성화 상태인 경우 활성화 시킵니다. //
    else {
      // 모든 드롭다운을 접는다 //
      $(document).find('.dropdownArea').find('.dropdownList').slideUp(100, function() {
        $(document).find('.dropdownArea').removeClass('active');
        $(document).find('.dropdownArea').find('.dropdownBtn').attr("aria-expanded", "false");
      });
 
      // 선택한 드롭다운 활성화 //
      $(this).attr("aria-expanded", "true");
      $content.removeAttr('tabindex');
      $content.slideDown(100, function() {
        $wrap.addClass("active");
      });
      // $content.find("li").find('button[aria-selected="true"]').focus();
 
      // 옵션에 부여된 이벤트를 on 시킵니다. //
      dropdownOptionControl($content, true);
    }
    
    // 이벤트 전파를 막습니다. //
    e.preventDefault();
    // e.stopImmediatePropagation();
  }

  function dropdownAreaKeydown(e) {
    var $wrap = $(this).parents(".dropdownArea"); // Dropdown 최상위 Wrapper
    var $content = $wrap.find(".dropdownList"); // Dropdown Option List
 
    // KeyDown - ESC //
    if (e.code == 'Escape' || e.code == 'Esc' || e.keyCode == 27) {
      e.preventDefault();
      e.stopImmediatePropagation();
 
      $wrap.removeClass("active");
 
      // 옵션에 부여된 이벤트를 off 시킵니다. //
      dropdownOptionControl($content, false);
      $content.slideUp(100);
      $(this).attr("aria-expanded", "false");
    }
    // KeyDown - Space bar or Enter //

    else if (e.code =='Enter' || e.keyCode == "13" || e.code == 'Space' || e.keyCode == "32") {
     
    }
    else if(e.code == 'ArrowDown' || e.keyCode == '40') {
      $content.find('li').eq(0).find('button').focus();
 
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    else if(e.code == 'Tab' || e.keyCode == '9') {
      if(!e.shiftKey) {
       
        if($wrap.hasClass('active')) {
          $content.find('li').eq(0).find('button').focus();
 
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
      else {
        $wrap.removeClass("active");
        $content.slideUp(100);
        $(this).attr("aria-expanded", "false");
      }
    }
  }
 
  $(document).off("click", "html", dropdownHtmlControl);
  $(document).on("click", "html", dropdownHtmlControl);
  function dropdownHtmlControl(e) {
    let target = e.target;
    let parent = target.closest(thisClassName);
  
    if(!parent || parent.length > 0) {
      dropdownOptionControl($wrap.find(".dropdownList"), false);
      $wrap.find(".dropdownList").slideUp(100, function() {
        $wrap.removeClass("active");
      });
    }
  }
}
  
// Dropdown option에 이벤트를 부여하는 함수 입니다. //
function dropdownOptionControl(option, state) {
  var $option = option;
  
  if (!state) {
    $option.find('li').find('button').off("click", dropdownOptionClick);
    $option.find('li').find('button').off("keydown", dropdownOptionKeydown);
  
    return false;
  }
  
  // Option의 각 버튼에 이벤트를 부여합니다. //
  $option.find("li").find("button").on("click", dropdownOptionClick).on("keydown", dropdownOptionKeydown);
  
  function dropdownOptionClick(e) {
    var $this = $(this);
    var $wrap = $this.parents(".dropdownArea"); // Dropdown 최상위 Wrapper
    var $option = $wrap.find(".dropdownList"); // Dropdown Option List
    var $btn = $wrap.find('.dropdownBtn');
    var text = $this.text();
 
    if($option.find('.phoneLine').length >= 1) {
      var img = $this.find('.imgWrap').find('img').attr('src');
      var product = $this.find('.labelGroup').find('.product').text();
      var phone = $this.find('.labelGroup').find('.phone').text();
      var colorLabel = $this.find('.colorLabel');
 
      $wrap.find(".titleLabel").find('.imgWrap').find('img').attr('src', img);
      $wrap.find(".titleLabel").find('.product').text(product);
      $wrap.find(".titleLabel").find('.phone').text(phone);
 
      // 대표 번호 라벨 리셋
      $wrap.find(".titleLabel").find('.colorLabel').remove();
      // 대표번호 라벨 있는 옵션 선택 시 추가
      if ( colorLabel.length > 0 ) {
        $('<span class="colorLabel">대표번호</span>').prependTo($wrap.find(".titleLabel"));
      }
    }
    else {
      // 선택한 옵션 값을 드롭다운에 출력합니다.
      $wrap.find('.titleLabel').find('span').text(text);
    }
  
    $option.find("li").find('button[title="선택됨"]').removeAttr("title");
    $this.attr("title", '선택됨');
    
    // 현재 초점 요소를 초점 선택 해제함 //
    document.activeElement.blur();
  
    $option.slideUp(100, function() {
      $btn.attr('aria-expanded', false);
      $wrap.removeClass("active");
      // 드롭다운 요소로 초점 이동 //
      $btn.focus();
    });
  }

  function dropdownOptionKeydown(e) {
    var $this = $(this); // 현재 클릭한 옵션 버튼
    var $list = $this.closest("li"); // 버튼을 감싸고 있는 li 태그
    var $wrap = $this.parents(".dropdownArea"); // Dropdown 최상위 Wrapper
    var $option = $wrap.find(".dropdownList"); // Dropdown Option List
    var index = $option.find("li").index($list); // 선택한 옵션의 index
    var listLength = $option.find("li").length; // 옵션 리스트의 length
    var text = $this.text();
  
    // KeyDown - ESC //
    if (e.keyCode == "27") {
      $option.slideUp(100, function() {
        $wrap.find(".dropdownBtn").focus();
        $wrap.removeClass("active");
      });
  
      e.stopImmediatePropagation();
    }
    // KeyDown - Space bar or Enter //
    else if (e.code =='Enter' || e.keyCode == "13" || e.code == 'Space' || e.keyCode == "32") {
    }
    // KeyDown - Home //
    else if (e.code =='Home' || e.keyCode == "36") {
      $option.find("li").first().find("button").focus();
  
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // KeyDown - End //
    else if (e.code =='End' || e.keyCode == "35") {
      $option.find("li").last().find("button").focus();
      
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // KeyDown - Up //
    else if ((e.shiftKey && e.keyCode == "9") || e.keyCode == "38") {


      if (index > 0) {
        $option.find("li").eq(index - 1).find("button").focus();
      }
      else {
        if((e.shiftKey && e.keyCode == "9") || e.keyCode == '38') {
          $wrap.find('.dropdownBtn').focus();
        }
      }
  
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // KeyDown - Down //
    else if (e.keyCode == "9" || e.keyCode == "40") {
      if (index < listLength - 1) {
        $option.find("li").eq(index + 1).find("button").focus();
        // ind;
      }
      else {
        if(e.keyCode == "9") {
          $wrap.find('.dropSetting').focus();
        }
      }
  
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}
// [VOS2차] 결함 ID 1122584, 1123248 드롭다운 초점 오류 수정, 20230316 - 끝 //

// [VOS2차] 결함 ID 1122024, 1122026 수정 - 시작 //
function togglePopup(toggler, id) {
  var $this = $document.find("#" + toggler);
  var $popup = $document.find("#" + id);
  var $tabbable = $popup.find(
    "button:not([disabled]), input:not([type='hidden']):not([disabled]), select:not([disabled]), iframe:not([disabled]), textarea:not([disabled]), [href]:not([disabled]), [tabindex]:not([tabindex='-1']):not([disabled])"
  );

  // var firstTab = $tabbable.first();
  var popup = document.querySelector(`#${id}`);
  var firstTab = popup.querySelector("button:not([disabled]), input:not([type='hidden']):not([disabled]), select:not([disabled]), iframe:not([disabled]), textarea:not([disabled]), [href]:not([disabled]), [tabindex]:not([tabindex='-1']):not([disabled])");
  var lastTab = $tabbable.last();

  // ESC 키를 입력한 경우 해당 팝업을 닫습니다. //
  $(window).off("keydown");
  $(window).on("keydown", function (e) {
    if (e.keyCode == 27) {
      // $this.focus();
      // $popup.removeClass('show');
      // $(window).off('keydown');
      // $('html').off('click');

      closePopup();
    }
  });

  // 팝업이 열려 있는 경우 닫습니다. //
  if ($popup.hasClass("show")) {
    // $this.attr('aria-expanded', false); [VOS2차] 결함 ID 1122072 삭제

    // [VOS2차] 결함 ID 1122420 수정 - 시작 //
    if($popup.hasClass('periodContainer')) {
      $this.attr('aria-expanded', false);
    }
    // [VOS2차] 결함 ID 1122420 수정 - 끝 //
    closePopup();
    $this.focus();
  }
  // 팝업이 닫혀 있는 경우 엽니다. //
  else {
    // $this.attr('aria-expanded', true); [VOS2차] 결함 ID 1122072 삭제
    $popup.addClass("show");
    
    // [VOS2차] 결함 ID 1122420 수정 - 시작 //
    if($popup.hasClass('periodContainer')) {
      $this.attr('aria-expanded', true);
    }
    // [VOS2차] 결함 ID 1122420 수정 - 끝 //
    // 팝업 내에 탭으로 이동할 수 있는 요소가 있는지 확인 합니다. //
    if ($tabbable.length > 0) {
      // 탭으로 이동할 요소가 있다면 첫 번째 요소를 포커스 적용 합니다. //
      
      setTimeout(function() {
        firstTab.focus();
      }, 50);

      // 포커스 된 첫 번째 요소에 요소에 어떤 키가 입력되는지 확인 합니다. //
      $(firstTab).off("keydown");
      $(firstTab).on("keydown", function (e) {
        // Shift + Tab을 입력하여 탭을 반대로 이동할 경우 //
        if ($(this).is(':focus') && e.shiftKey && (e.keyCode || e.which) === 9) {
          // 이벤트 전파를 막고 마지막 요소로 포커스를 이동합니다. //
          e.preventDefault();
          lastTab.focus();
        }
      });

      // 포커스 된 마지막 요소에 요소에 어떤 키가 입력되는지 확인 합니다. //
      lastTab.off("keydown");
      lastTab.on("keydown", function (e) {
        var $this = $(this);
        // Tab을 입력하여 탭을 이동할 경우 //
        if (!e.shiftKey && (e.keyCode || e.which) === 9) {
          // 이벤트 전파를 막고 첫 번째 요소로 포커스를 이동합니다. //
          e.preventDefault();
          $(firstTab).focus();
        }
      });
    }
  }

  // 지역 함수 - 현재 오픈한 팝업 닫기 //
  function closePopup() {
    $this.focus();
    $(window).off("keydown");
    $document.find("html").off("click");
    setTimeout(function () {
      $popup.removeClass("show");
    }, 100);
  }

  return false;
}
// [VOS2차] 결함 ID 1122024, 1122026 수정 - 끝 //

// button 클릭 시 활성화 클래스 추가 - 다중 선택
function btnActive(button, activeClass) {
  var $button = $document.find(button);
  $(document).on('click', button, function(){
    if( $(this).hasClass(activeClass) ) {
      $(this).removeClass(activeClass);
      $button.removeAttr('title');
    } else {
      $(this).attr('title', '선택 됨');
      $(this).addClass(activeClass);
    }
  })
}
// button 클릭 시 활성화 클래스 추가 - 단일 선택
function btnSingleActive(button, activeClass) {
  var $button = $document.find(button);
  $(document).on('click', button, function(){
    $button.removeClass(activeClass);
    $button.removeAttr('title');
    $(this).addClass(activeClass);
    $(this).attr('title', '선택 됨');
  })
}

//------------ end of sub common --------------//
// 하단 영역 고정 모바일용
function bottomFiexdControl(button, container, area, falseText, trueText) {// [VOS2차] 결함ID 1123028 수정
  $(document).on("click", button, function () {
    var $content = $(this).siblings(area);
    var $wrap = $(this).parents(container);
    if ($wrap.hasClass("active")) {
      $wrap.removeClass("active");
      $(this).attr("aria-expanded", "false");
      $content.attr("tabindex", -1);
      $(button).find('span').text(falseText);// [VOS2차] 결함ID 1123028 수정
    } else {
      $wrap.addClass("active");
      $(this).attr("aria-expanded", "true");
      $content.attr("tabindex", 0);
      $(button).find('span').text(trueText);// [VOS2차] 결함ID 1123028 수정
    }
  });
}

function enabledShowingFocus(swiper) {
  if(Array.isArray(swiper)) {
    for(var i = 0; i < swiper.length; i++) {
      setFocusElement(swiper[i]);
    }
  }
  else {
    setFocusElement(swiper);
  }

  function setFocusElement(swiper) {
    var activeIndex = swiper.activeIndex;
    var snapIndex = swiper.snapIndex;
    var slidesPerView = Math.floor(swiper.params.slidesPerView);
    var $swiper = $(swiper.el);

    // [VOS2차] 결함 ID 1122394 수정 : bullet 형식 pagination 활성화 버튼에 title="선택됨" 속성 추가 - 시작 //
    var swiperParams = swiper.params;
    var pagination = swiper.pagination;
    
    // 페이지네이션 존재함 //
    if(pagination && pagination.el) {
      // Pagination이 bullet 형식인지 확인함 //
      if(swiperParams.pagination.type == 'bullets') {
        // 모든 bullet의 title 속성 삭제 //
        for(var i = 0; i < pagination.bullets.length; i++) {
          pagination.bullets[i].removeAttribute('title');
        }
        // 활성화 bullet에 title="선택됨" 속성 추가 //
        $('.swiper-pagination-bullet-active').attr('title', '선택됨');
      }
    }

    if(swiper.slides && swiper.slides.length > 0) {
      for(var i = 0; i < swiper.slides.length; i++) {
        var $slide = $(swiper.slides[i]);

        if(i >= snapIndex && i < snapIndex + slidesPerView) {
          $slide.find(tabbable).removeAttr('tabindex');
          $slide.find('*').attr('aria-hidden', false);
        }
        else {
          $slide.find(tabbable).attr('tabindex', -1);
          $slide.find('*').attr('aria-hidden', true);
        }
      }
    }
  }
}

function focusSlide(swiper) {

}

function focusLink(closeButtonID, btnID) {
  $(document).on('click', closeButtonID, function(){
    $(btnID).focus().addClass('focusA');
  });
  $(document).on('focusout', btnID, function(){
    $(btnID).removeClass('focusA');
  });
}

// 간편/일반 로그인
function loginTabControl(button) {
  var $btn = $document.find(button);
  
  // 기본 노출 탭내용 초기 값
  var initBtn = $(button + '[aria-selected="true"]').attr('aria-controls');
  $('#'+initBtn).addClass('show');

  $(document).on('click', button, function(){

    var tabCon = $(this).attr('aria-controls');

    // 초기화
    $(this).siblings().attr("aria-selected", "false");
    $document.find("#" + tabCon).siblings().removeClass('show');

    // show
    $(this).attr('aria-selected', 'true');
    $document.find('#' + tabCon).addClass('show');
  });
}

// [VOS2차] 결함 ID : 1122038, 1122662, 1122775, 1122892, 1123154 수정 : 페이지 로드 시 첫 번째 요소 포커스 - 시작 //
function catchTheFocus() {
  var os = checkMobile();
  var blankFocus = document.querySelector('.blankFocus');
  var skip = document.querySelector('.skip a');
  var body = document.querySelector('body');
  var activeElement = document.activeElement;

  // Mobile //
  if(os == 'ios' || os == 'android') {
    blankFocus.focus(function(e) {
      e.target.remove();
    });
    activeElement = document.activeElement;
  }
  // PC //
  else {
    if(blankFocus) {
      blankFocus.addEventListener('blur', (e) => {
        var target = e.target;
        target.remove();
      });
      blankFocus.focus();
      activeElement = document.activeElement;
      

      if(activeElement != body) {
        blankFocus.focus();
      }
    }
  }
}

function getCoords(element) {
  let box = element.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
// [VOS2차] 결함 ID : 1122038, 1122662, 1122775, 1122892, 1123154 수정 : 페이지 로드 시 첫 번째 요소 포커스 - 끝 //