$(document).ready(function() {
	// s: scroll function
	// scroll 변수 선언
	var scroll = $(window).scrollTop(), winW = $(window).width(), winH = $(window).height(), winM = 767;
	// page-fuelcell - fuelcell_subheader & .page-fuelcell:before
	var fuelcell_subheader_btm = winH * 0.5;
	// fuelcell_sc3
	var fuelcell_sc3_top = $('.fuelcell_sc3').offset().top - winH, fuelcell_sc3_btm = fuelcell_sc3_top + $('.fuelcell_sc3').height();

	function scrollTransition(){
		// scroll 변수 업데이트
		scroll = $(window).scrollTop();
		winW = $(window).width();
		winH = $(window).height();

		// page-fuelcell - fuelcell_subheader & .page-fuelcell:before - 인트로 배경색 전환 분기 설정
		if (winW > winM) fuelcell_subheader_btm = winH * 0.5;
		else fuelcell_subheader_btm = winH * 0.8;
		if (scroll < fuelcell_subheader_btm) $('.page-fuelcell').removeClass('introOff');
		else $('.page-fuelcell').addClass('introOff');
		
		// fuelcell_sc3
		fuelcell_sc3_top = $('.fuelcell_sc3').offset().top - winH;
		if (winW > winM) fuelcell_sc3_btm = $('.fuelcell_sc3').offset().top + winH*1;
		else fuelcell_sc3_btm = $('.fuelcell_sc3').offset().top + winH*.75;
		// fuelcell_sc3 고정 모드
		if (scroll < fuelcell_sc3_top) $('.fuelcell_sc3').removeClass('fixed');
		else $('.fuelcell_sc3').addClass('fixed');
		if (scroll < fuelcell_sc3_btm) $('.fuelcell_sc3').removeClass('ended');
		else $('.fuelcell_sc3').addClass('ended');
	}
	scrollTransition();
	$(window).on('scroll resize', function(){
		scrollTransition();
	});
	// e: scroll function
	// scroll bar event - 시퀀스 자동 스크롤 중 스크롤바로 이동시 발생하는 문제로 인해 분기 추가(onscroll는 fuelcell_seq.js파일의 자동 스크롤에서 사용)
	$(window).mousedown(function() {
		$('.fuelcell_seq').addClass('onscroll');
	}).mouseup(function() {
		$('.fuelcell_seq').removeClass('onscroll');
	});


	$('.fuelcell_sc4_list').hover(function () {
		var video = $(this).find('video');
		video.fadeIn(500);
		video[0].play();
		},
		function() {
			var video = $(this).find('video');
			video.fadeOut(500, function(){
				video[0].pause();
				video[0].currentTime = 0;
			});
		}
	);
});
