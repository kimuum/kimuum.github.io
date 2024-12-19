/* **************** *
|| version : 2차 - 20230926 웹접근성 관련 수정 || 
* **************** */
var $document = $(document);

$(document).ready(function(){
  tabControl('.tabButton');
  lnbToggleMenu('.menuBtn');
});

// lnb click 
function lnbToggleMenu(button){
  $document.find(button).on('click', function(){
    var $menuBtn = $(this);
    var $list = $menuBtn.parents('li');

    if( $list.hasClass('active') ) {
      $list.removeClass('active');
    } else {
      $list.addClass('active').siblings().removeClass('active');
    }
  });
}

// 팝업제어, 팝업 내 tabkey 이동제어
function togglePopup(toggler, id) {
  var $this = $document.find('#' + toggler);
  var $popup = $document.find('#' + id);
  
  // 팝업이 열려 있는 경우 닫습니다. //
  if($popup.hasClass('show')) {
    closePopup();
  }
  // 팝업이 닫혀 있는 경우 엽니다. //
  else {
    $popup.addClass('show');
  }

  // 지역 함수 - 현재 오픈한 팝업 닫기 //
  function closePopup() {
    setTimeout(function() { $popup.removeClass('show'); }, 100);
  }
  
  return false;
}

// tab accessibility
function tabControl(button) {
  var $btn = $document.find(button);
  var $initTabID = $('.tabButton[aria-selected="true"]').attr('aria-controls');

  $('.tabButton[aria-selected="true"]').addClass('active');
  $('#' + $initTabID).addClass('show');

  $btn.on('click', function(){
    var tabCon = $(this).attr('aria-controls');

    // 초기화
    $(this).siblings().attr("aria-selected", "false").removeClass('active');
    $document.find("#" + tabCon).siblings().removeClass('show');

    // show
    $(this).attr('aria-selected', 'true').addClass('active')
    $document.find('#' + tabCon).addClass('show');
    // return false;
  });
}