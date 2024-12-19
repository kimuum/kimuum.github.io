// [1차] VOS 1112775 수정 20221020 //시작//
$(document).ready(function () {
  var $skip = $(".skip");
  var $logo = $("h1.logo");

  // 본문바로가기 시 최상단으로 스크롤 이동
  $skip.find("a, button").eq(0).on("click", function (e) {
    $("html, body").stop().animate({scrollTop: 0,},100);
  });

  // skip이 있을 경우 실행
  if (!$skip.length == 0) {
    $skip.find("a").each(function (e) {
      var $this = $(this);
      if (!$this.attr("role")) {
        $this.attr("role", "button");
      }
    });

    if (!$logo.find("a").attr("role")) {
      $logo.find("a").attr("role", "button");
    }

    $(window).on("resize", function () {
      $logo.on("focus", function () {
        $skip.find("a").blur();
      });

      $("#contentContainer").removeAttr("id").removeAttr("tabindex"); //id reset attr

      // ======================== GNB ======================== //
      if ($(window).width() > 1024) {
        //PC
        $("#gnbContainer").removeAttr("id").removeAttr("tabindex"); //id reset attr
        $skip.find("a").removeAttr("style"); //skip mobile - gnb,footer none Reset
        
        // ID 체크
        if ($(".gnbContainer").find(".gnb").attr("id") && $(".gnbContainer").find(".gnb").attr("id") != "") {
          // id가 있는 경우
          var attrID = $(".gnbContainer").find(".gnb").attr("id");
          $skip.find("a").eq(1).attr("href", "#" + attrID); //change href
          $("#" + attrID).attr("tabindex", "-1");
        } else {
          // id가 없는 경우
          $(".gnbContainer").find(".gnb").attr("id", "gnbContainer").attr("tabindex", "-1"); //add attr
        }
      } else {
        //Mobile
        $skip.find("a").hide().eq(0).show(); // skip mobile - gnb,footer none
      }

      // ======================== Contents Container ======================== //
      if ($(".wrap").hasClass("homeSearchResult")) {
        // ====== 통합검색 ====== //
        if ($(window).width() > 1024) {
          //PC
          skipSync($(".homeSearchResult").find(".contentContainer"), 0);
        } else {
          //Mobile
          skipSync($(".homeSearchResult").find(".contentArea"), 0);
        }
      } 
      else if ($(".headerArea").find("> .myInfoSummary").length > 0) {
        // ====== 메인 ====== //
        skipSync($(".headerArea > .myInfoSummary"), 0);
      }
      // <!-- [K-WAX] 20221117 숨김 --> 
      // else if ($(".wrap").find(".contentContainer .subTitleContainer").length > 0) {
      //   // ====== 마이알뜰폰 회선 정보 영역 ====== // 회선영역이 없는 경우 detail 조건과 etc 조건
      //   skipSync($(".contentContainer .subTitleContainer"), 0);
      // } 
      // else if ($(".wrap").find(".eventSwiper").length > 0) {
      //   // ====== 이벤트 목록 - 슬라이드 ====== //
      //   skipSync($(".eventSwiper"), 0);
      // } 
      // else if ($(".wrap").find(".contentContainer .searchContainer").length > 0) {
      //   // ====== 검색바 영역 - FAQ, 공지사항, 종료된 이벤트 ====== //
      //   skipSync($(".contentContainer .searchContainer"));
      // } 
      // else if ($(".wrap").hasClass("detail")) {
      //   // ====== 상세 페이지 ====== //
      //   if ($(".wrap").find(".contentArea").length > 0) {
      //     skipSync($(".wrap").find(".contentArea"), 0);
      //   } else {
      //     $("main").attr("id", "contentContainer").attr("tabindex", "-1"); //add attr
      //   }
      // } 
      // else if ($(".wrap").hasClass("serviceFriends")) {
      //   // ====== 마이알뜰폰 프렌즈 ====== //
      //   skipSync($(".serviceFriends").find(".contentInner"), 0);
      // } 
      // <!-- //[K-WAX] 20221117 숨김 -->
      else {
        // ====== ETC ====== //
        // 본문 0개 이상
        if ($(".contentContainer").length > 0) {
          skipSync($(".contentContainer"), 0);
        } else {
          skipSync($("main"), 0);
        }
      }
    }).resize();
    
    /*
    바로가기 버튼과 바로가기 ID의 동기화를 위한 함수
    parameter
    - $container : id를 가지고 있어야 할 대상
    - skip : 본문 바로가기 버튼 순서(0 : 본문 바로가기, 1: 주메뉴 바로가기, 2: 푸터 바로가기))
    */
    function skipSync($container, skip) {
      // ID 체크
      if ($container.attr("id") && $container.attr("id") != "") {
        // id가 있는 경우
        var attrID = $container.attr("id");
        $skip.find("a").eq(skip).attr("href", "#" + attrID); //change href
        $("#" + attrID).attr("tabindex", "-1");
      } else {
        // id가 없는 경우
        $container.attr("id", "contentContainer").attr("tabindex", "-1"); //add attr
      }
    }
  }
});
// [1차] VOS 1112775 수정 20221020 //끝//
