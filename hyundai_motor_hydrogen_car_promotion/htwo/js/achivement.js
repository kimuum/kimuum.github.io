// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $('.header').outerHeight(); // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// 동작을 구현
function hasScrolled() {
    // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
    var st = $(this).scrollTop();
    
    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    
    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('body').addClass('header-hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('body').removeClass('header-hide');
        }
    }
    
    // lastScrollTop 에 현재 스크롤위치를 지정한다.
    lastScrollTop = st;
}

/* 추가로 웹페이지의 스크롤을 내렸을때를 감지해 코드를 실행시키는 함수입니다.
$(window).scroll(function(){ 
   if($(window).scrollTop() == $(document).height() - $(window).height()){ 
      // 실행할 함수
   } 
});

*/

/*
$(function(){
    var $header = $('.header'); //헤더를 변수에 넣기
    var $trigger = $('.tab'); //색상이 변할 부분
    var $window = $(window);
    var triggerOffsetTop = $trigger.offset().top;//색상 변할 부분의 top값 구하기
    console.log(triggerOffsetTop);

    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        triggerOffsetTop = $trigger.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= triggerOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('hide', scrolled); //클래스 토글
    });
});
*/

/*

$(function() {
	$.fn.Scrolling = function(obj, tar) {
		var _this = this;
		$(window).scroll(function(e) {
			$(window).scrollTop() >= obj ? _this.addClass("fixed") : _this.removeClass("fixed");
		});
	};
 
	$("#test1").Scrolling($("#test1").offset().top, ($(".aa").height() - $("#test1").height()));
	$("#test2").Scrolling($("#test2").offset().top, ($(".bb").height() - $("#test2").height()));
});


var isVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('#tester'))&&!isVisible) {
        alert("Visible!!!");
        isVisible=true;
    }
});

function checkTabmenuTop( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        target = $('.tab'),
        y = target.offset().top,
        elementHeight = target.height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

*/
