window.onload = function(){
	// Set variables - 변수 선언
	var scrollYPos = window.pageYOffset;
	var winW = window.innerWidth, winH = window.innerHeight, winM = 767; // window width and height, mobile junction
	var fuelcell = document.getElementById('fuelcell');
	var fuelcellHeight = fuelcell.offsetHeight;
	var fuelcellPosTop = fuelcell.offsetTop;
	var fuelcellPosBtm = fuelcellPosTop + fuelcellHeight - winH;
	// 멈추는 구간에 사용되는 변수 - 모바일 분기가 필요한 부분은 하단 변수 값 업데이트에서 설정
	var fuelcellPosPauseSc1ConTop = fuelcellPosTop + winH*1; // Sc1Con - HTWO 연료전지 시스템
	var fuelcellPosPauseSc1ConBtm = fuelcellPosPauseSc1ConTop + winH*0.5;
	var fuelcellPosPauseSc2TitTop = fuelcellPosPauseSc1ConBtm + winH*5; // Sc2Tit - 우수한 연료 효율
	var fuelcellPosPauseSc2TitBtm = fuelcellPosPauseSc2TitTop + winH*1;
	var fuelcellPosPauseSc2ConTop = fuelcellPosPauseSc2TitBtm + winH*2; // Sc2Con - 연료전지 스택
	var fuelcellPosPauseSc2ConHig = winH*3; // 중간 컨텐츠 계산을 위해 추가
	var fuelcellPosPauseSc2ConBtm = fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig;
	var fuelcellPosPauseSc3TitTop = fuelcellPosPauseSc2ConBtm + winH; // Sc3Tit - '기술력에 가격경쟁력을 더하다' 전 검은씬
	var fuelcellPosPauseSc3TitBtm = fuelcellPosPauseSc3TitTop + winH*0.5;
	var fuelcellPosPauseSc3ConTop = fuelcellPosPauseSc3TitBtm + winH*1.5; // Sc3Con - 기술력에 가격경쟁력을 더하다
	// 캔버스에 사용되는 변수
	var fuelcellCanvas1 = document.getElementById('fuelcellCanvas1');
	var fuelcellCanvas1ctx = fuelcellCanvas1.getContext('2d');
	var fuelcellSeqImg = new Image();
	// 시퀀스 계산에 사용되는 변수 - 모바일 분기가 필요한 부분은 하단 변수 값 업데이트에서 설정
	const fuelcellSeqNumMaxPC = 801, fuelcellSeqNumMaxMO = 907;
	var fuelcellSeqNumEndPC = fuelcellSeqNumMaxPC, fuelcellSeqNumEndMO = fuelcellSeqNumMaxMO;
		if (fuelcellSeqNumMaxPC % 3 == 2) fuelcellSeqNumEndPC -= 1;
		else if (fuelcellSeqNumMaxPC % 3 == 0) fuelcellSeqNumEndPC -= 2;
		if (fuelcellSeqNumMaxMO % 3 == 2) fuelcellSeqNumEndMO -= 1;
		else if (fuelcellSeqNumMaxMO % 3 == 0) fuelcellSeqNumEndMO -= 2;
	var fuelcellSeqNum = 0, // calculated value
		fuelcellSeqNumMin = 1, // minimum value
		fuelcellSeqNumPauseSc1Con = 76, // Sc1Con
		fuelcellSeqNumPauseSc2Tit = 313, // Sc2Tit
		fuelcellSeqNumPauseSc2Con = 385, // Sc2Con
		fuelcellSeqNumPauseSc2ConEnd = 472, // Sc2ConEnd
		fuelcellSeqNumPauseSc3Tit = 566, // Sc3Tit
		fuelcellSeqNumMax = fuelcellSeqNumMaxPC; // maximum value
	const seqVer = 9;
	const autoScrDrt = 10;
	// Preload image - 시퀀스 이미지 로드(시퀀스 이미지의 1/3만큼 사용하고 있습니다 e.g. 1,4,7,11...)
	function preloadPC() {
		if (!$('.fuelcell_seq_preload').hasClass('preloadPC')) {
			for (var img_preload_i = 1; img_preload_i < fuelcellSeqNumMaxPC; img_preload_i++) {
				if (img_preload_i % 3 == 1)  $('<img/>')[0].src = '/img/technology_fuelcell/fuelcell_seq/technology_fuelcell_' + img_preload_i + '.png?v='+seqVer;
			}
			$('.fuelcell_seq_preload').addClass('preloadPC');
		}
	}
	function preloadMO() {
		if (!$('.fuelcell_seq_preload').hasClass('preloadMO')) {
			for (var img_preload_i = 1; img_preload_i < fuelcellSeqNumMaxMO; img_preload_i++) {
				if (img_preload_i % 3 == 1)  $('<img/>')[0].src = '/img/technology_fuelcell/fuelcell_seq_mo/technology_fuelcell_' + img_preload_i + '.png?v='+seqVer;
			}
			$('.fuelcell_seq_preload').addClass('preloadMO');
		}
	}
	if (winW > winM) preloadPC();
	else preloadMO();
	window.addEventListener('resize', function(e) {
		winW = window.innerWidth;
		if (winW > winM) preloadPC();
		else preloadMO();
	});

	// s: Scroll Lock
	function fuelcellCanvas1ScrLock() {
		// Update variable
		scrollYPos = window.pageYOffset;
		winW = window.innerWidth;
		winH = window.innerHeight;
		fuelcellPosTop = fuelcell.offsetTop;
		fuelcellHeight = fuelcell.offsetHeight;
		fuelcellPosBtm = fuelcellPosTop + fuelcellHeight - winH;

		// fuelcell_seq_canvas_wrap - mode - 캔버스 영역 fixed ended 모드
		if (scrollYPos < fuelcellPosTop) $('.fuelcell_seq_canvas_wrap').removeClass('fixed ended');
		else if (scrollYPos >= fuelcellPosTop && scrollYPos < fuelcellPosBtm) $('.fuelcell_seq_canvas_wrap').removeClass('ended').addClass('fixed');
		else $('.fuelcell_seq_canvas_wrap').removeClass('fixed').addClass('ended');
		// fuelcell_seq_canvas_wrap - opacity - 캔버스 영역 opacity 계산(for 시퀀스 영역과 다음 영역 간의 연결)
		if (scrollYPos < (fuelcellPosBtm - winH*0.2)) $('.fuelcell_seq_canvas_wrap').css({'opacity':1});
		else if (scrollYPos >= (fuelcellPosBtm - winH*0.2) && scrollYPos < fuelcellPosBtm) $('.fuelcell_seq_canvas_wrap').css({'opacity':1 + (scrollYPos-(fuelcellPosBtm - winH*0.2))/(winH*0.2)*(-1)}); // (winH*0.2) = (fuelcellPosBtm - (fuelcellPosBtm - winH*0.2)) and (-1) = (0 - 1)
		else $('.fuelcell_seq_canvas_wrap').css({'opacity':0});
		// off_con3_bg - 마지막 콘텐츠 사라지는 구간 설정
		if (winW <= winM && scrollYPos >= (fuelcellPosBtm - winH*0.2)) $('.fuelcell_seq_con_wrap').addClass('off_con3_bg');
		else $('.fuelcell_seq_con_wrap').removeClass('off_con3_bg');
		// fuelcell_sc3_bg - 자동차 배경 트랜지션
		if (scrollYPos < fuelcellPosBtm) $('.fuelcell_sc3_bg').removeClass('bgOn');
		else $('.fuelcell_sc3_bg').addClass('bgOn');
	}
	// Execute a function
	fuelcellCanvas1ScrLock();
	window.addEventListener('scroll', function(e) {
		fuelcellCanvas1ScrLock();
	});
	window.addEventListener('resize', function(e) {
		fuelcellCanvas1ScrLock();
	});
	// e: Scroll Lock

	// Detect mouse and keyboard for Sequence auto scroll - 사용자의 상하 액션 감지(for 자동스크롤)
	var user_mode_E, user_mode_delta = 0, user_mode = '';
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		winW = window.innerWidth;
		if (winW > winM) {
			user_mode_E = e.originalEvent;
			user_mode_delta = 0;
			if (user_mode_E.detail) user_mode_delta = user_mode_E.detail * -40;
			else user_mode_delta = user_mode_E.wheelDelta;
			if (user_mode_delta > 0) user_mode = 'up';
			else user_mode = 'down';
		} else {
			user_mode = '';
		}
	});
	$(document).keydown(function(event) {
		winW = window.innerWidth;
		if (winW > winM) {
			// ↑ and PageUp and Home
			if (event.keyCode == 38 || event.which == 38 || event.keyCode == 33 || event.which == 33 || event.keyCode == 36 || event.which == 36) user_mode = 'up';
			else user_mode = '';
			// ↓ and PageDown and End
			if (event.keyCode == 40 || event.which == 40 || event.keyCode == 34 || event.which == 34 || event.keyCode == 35 || event.which == 35) user_mode = 'down';
			else user_mode = '';
		} else {
			user_mode = '';
		}
	});
	// s: Sequence
	function fuelcellSeqShow() {
		// Update variable - 변수 값 업데이트
		scrollYPos = window.pageYOffset;
		winW = window.innerWidth;
		winH = window.innerHeight;
		// 멈추는 구간에 사용되는 변수 - 모바일 분기 존재
		fuelcellPosPauseSc1ConTop = fuelcellPosTop + winH*1; // Sc1Con
		if (winW > winM) fuelcellPosPauseSc1ConBtm = fuelcellPosPauseSc1ConTop + winH*0.5;
		else fuelcellPosPauseSc1ConBtm = fuelcellPosPauseSc1ConTop + $('.con1_mo').height();
		if (winW > winM) fuelcellPosPauseSc2TitTop = fuelcellPosPauseSc1ConBtm + winH*5; // Sc2Tit
		else fuelcellPosPauseSc2TitTop = fuelcellPosPauseSc1ConBtm + $('.con2_mo').height() + winH*2;
		if (winW > winM) fuelcellPosPauseSc2TitBtm = fuelcellPosPauseSc2TitTop + winH*1;
		else fuelcellPosPauseSc2TitBtm = fuelcellPosPauseSc2TitTop + $('.sc2_tit_mo').height() + winH*1;
		fuelcellPosPauseSc2ConTop = fuelcellPosPauseSc2TitBtm + winH*2; // Sc2Con
		fuelcellPosPauseSc2ConHig = winH*3;
		fuelcellPosPauseSc2ConBtm = fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig;
		if (winW > winM) fuelcellPosPauseSc3TitTop = fuelcellPosPauseSc2ConBtm + winH; // Sc3Tit
		else fuelcellPosPauseSc3TitTop = fuelcellPosPauseSc2ConBtm + winH*4;
		if (winW > winM) fuelcellPosPauseSc3TitBtm = fuelcellPosPauseSc3TitTop + winH*0.5;
		else fuelcellPosPauseSc3TitBtm = fuelcellPosPauseSc3TitTop + $('.con3_mo').height() + winH*0.4;
		fuelcellPosPauseSc3ConTop = fuelcellPosPauseSc3TitBtm + winH*1.5; // Sc3Con

		// 시퀀스 계산에 사용되는 변수 - 모바일 분기가 필요한 경우 업데이트
		if (winW > winM) fuelcellSeqNumPauseSc2Tit = 313; // Sc2Tit
		else fuelcellSeqNumPauseSc2Tit = 295;
		if (winW > winM) fuelcellSeqNumPauseSc3Tit = 566; // Sc3Tit
		else fuelcellSeqNumPauseSc3Tit = 793;

		// Set sequence max number depending on window width - 피씨와 모바일의 시퀀스 길이가 다른 경우 시퀀스 최댓값 설정
		if (winW > winM) {
			fuelcellSeqNumMax = fuelcellSeqNumMaxPC;
		} else {
			fuelcellSeqNumMax = fuelcellSeqNumMaxMO;
		}

		// Calc sequence number - 스크롤에 따른 시퀀스 값 계산
			// if (scrollYPos < fuelcellPosTop) fuelcellSeqNum = fuelcellSeqNumMin; // 최솟값
			// else fuelcellSeqNum = fuelcellSeqNumMax; // 최댓값
			// 중간값 계산 시 멈춰야 하는 시퀀스 번호 사이사이를 잘 연결하면 됩니다.
				// else if (scrollYPos >= fuelcellPosPause이전Top && scrollYPos < fuelcellPosPause이전Btm) fuelcellSeqNum = 이전 멈춘 값;
				// else if (scrollYPos >= fuelcellPosPause이전Btm && scrollYPos < fuelcellPosPause멈출Top) fuelcellSeqNum = 이전 멈춘 값 + Math.floor((scrollYPos - fuelcellPosPause이전Btm) / (fuelcellPosPause멈출Top - fuelcellPosPause이전Btm) * (멈출 값-이전 멈춘 값));
				// else if (scrollYPos >= fuelcellPosPause멈출Top && scrollYPos < fuelcellPosPause멈출Btm) fuelcellSeqNum = 멈출 값;
		if (winW > winM) {
			if (scrollYPos < fuelcellPosTop) fuelcellSeqNum = fuelcellSeqNumMin;
			else if (scrollYPos >= fuelcellPosTop && scrollYPos < fuelcellPosPauseSc1ConTop) fuelcellSeqNum = fuelcellSeqNumMin + Math.floor((scrollYPos - fuelcellPosTop) / (fuelcellPosPauseSc1ConTop - fuelcellPosTop) * (fuelcellSeqNumPauseSc1Con-fuelcellSeqNumMin));
			else if (scrollYPos >= fuelcellPosPauseSc1ConTop && scrollYPos < fuelcellPosPauseSc1ConBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc1Con;
			else if (scrollYPos >= fuelcellPosPauseSc1ConBtm && scrollYPos < fuelcellPosPauseSc2TitTop) fuelcellSeqNum = fuelcellSeqNumPauseSc1Con + Math.floor((scrollYPos - fuelcellPosPauseSc1ConBtm) / (fuelcellPosPauseSc2TitTop - fuelcellPosPauseSc1ConBtm) * (fuelcellSeqNumPauseSc2Tit-fuelcellSeqNumPauseSc1Con));
			else if (scrollYPos >= fuelcellPosPauseSc2TitTop && scrollYPos < fuelcellPosPauseSc2TitBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc2Tit;
			else if (scrollYPos >= fuelcellPosPauseSc2TitBtm && scrollYPos < fuelcellPosPauseSc2ConTop) fuelcellSeqNum = fuelcellSeqNumPauseSc2Tit + Math.floor((scrollYPos - fuelcellPosPauseSc2TitBtm) / (fuelcellPosPauseSc2ConTop - fuelcellPosPauseSc2TitBtm) * (fuelcellSeqNumPauseSc2Con-fuelcellSeqNumPauseSc2Tit));
			else if (scrollYPos >= fuelcellPosPauseSc2ConTop && scrollYPos < fuelcellPosPauseSc2ConBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc2Con;
			else if (scrollYPos >= fuelcellPosPauseSc2ConBtm && scrollYPos < fuelcellPosPauseSc3TitTop) fuelcellSeqNum = fuelcellSeqNumPauseSc2ConEnd + Math.floor((scrollYPos - fuelcellPosPauseSc2ConBtm) / (fuelcellPosPauseSc3TitTop - fuelcellPosPauseSc2ConBtm) * (fuelcellSeqNumPauseSc3Tit-fuelcellSeqNumPauseSc2ConEnd));
			else if (scrollYPos >= fuelcellPosPauseSc3TitTop && scrollYPos < fuelcellPosPauseSc3TitBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc3Tit;
			else if (scrollYPos >= fuelcellPosPauseSc3TitBtm && scrollYPos < fuelcellPosPauseSc3ConTop) fuelcellSeqNum = fuelcellSeqNumPauseSc3Tit + Math.floor((scrollYPos - fuelcellPosPauseSc3TitBtm) / (fuelcellPosPauseSc3ConTop - fuelcellPosPauseSc3TitBtm) * (fuelcellSeqNumMax-fuelcellSeqNumPauseSc3Tit));
			else fuelcellSeqNum = fuelcellSeqNumMax;
		} else {
			if (scrollYPos < fuelcellPosTop) fuelcellSeqNum = fuelcellSeqNumMin;
			else if (scrollYPos >= fuelcellPosTop && scrollYPos < fuelcellPosPauseSc1ConTop) fuelcellSeqNum = fuelcellSeqNumMin + Math.floor((scrollYPos - fuelcellPosTop) / (fuelcellPosPauseSc1ConTop - fuelcellPosTop) * (fuelcellSeqNumPauseSc1Con-fuelcellSeqNumMin));
			else if (scrollYPos >= fuelcellPosPauseSc1ConTop && scrollYPos < fuelcellPosPauseSc1ConBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc1Con;
			else if (scrollYPos >= fuelcellPosPauseSc1ConBtm && scrollYPos < fuelcellPosPauseSc2TitTop) fuelcellSeqNum = fuelcellSeqNumPauseSc1Con + Math.floor((scrollYPos - fuelcellPosPauseSc1ConBtm) / (fuelcellPosPauseSc2TitTop - fuelcellPosPauseSc1ConBtm) * (fuelcellSeqNumPauseSc2Tit-fuelcellSeqNumPauseSc1Con));
			else if (scrollYPos >= fuelcellPosPauseSc2TitTop && scrollYPos < fuelcellPosPauseSc2TitBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc2Tit;
			else if (scrollYPos >= fuelcellPosPauseSc2TitBtm && scrollYPos < fuelcellPosPauseSc3TitTop) fuelcellSeqNum = fuelcellSeqNumPauseSc2Tit + Math.floor((scrollYPos - fuelcellPosPauseSc2TitBtm) / (fuelcellPosPauseSc3TitTop - fuelcellPosPauseSc2TitBtm) * (fuelcellSeqNumPauseSc3Tit-fuelcellSeqNumPauseSc2Tit));
			else if (scrollYPos >= fuelcellPosPauseSc3TitTop && scrollYPos < fuelcellPosPauseSc3TitBtm) fuelcellSeqNum = fuelcellSeqNumPauseSc3Tit;
			else if (scrollYPos >= fuelcellPosPauseSc3TitBtm && scrollYPos < fuelcellPosPauseSc3ConTop) fuelcellSeqNum = fuelcellSeqNumPauseSc3Tit + Math.floor((scrollYPos - fuelcellPosPauseSc3TitBtm) / (fuelcellPosPauseSc3ConTop - fuelcellPosPauseSc3TitBtm) * (fuelcellSeqNumMax-fuelcellSeqNumPauseSc3Tit));
			else fuelcellSeqNum = fuelcellSeqNumMax;
		}

		// Cut fuelcellSeqNum in half - 시퀀스 이미지를 1/3만큼 사용(e.g. 1,4,7,11...)
		if (fuelcellSeqNum % 3 == 2) fuelcellSeqNum -= 1;
		else if (fuelcellSeqNum % 3 == 0) fuelcellSeqNum -= 2;

		// Check fuelcellSeqNum
		//console.log(fuelcellSeqNum);

		// Set sequence image depending on window width - 이미지 URL 업데이트
		if (winW > winM) {
			fuelcellSeqImg.src = "/img/technology_fuelcell/fuelcell_seq/technology_fuelcell_" + fuelcellSeqNum + ".png?v="  + seqVer;
		} else {
			fuelcellSeqImg.src = "/img/technology_fuelcell/fuelcell_seq_mo/technology_fuelcell_" + fuelcellSeqNum + ".png?v="  + seqVer;
		}
		// When PC and mobile sequences are not separated
		//fuelcellSeqImg.src = "./img/technology_fuelcell/fuelcell_seq/technology_fuelcell_" + fuelcellSeqNum + ".png?v="  + seqVer;
		
		// Auto sequence - 자동 스크롤 설정
		if (winW > winM && !$('.fuelcell_seq').hasClass('onscroll')) {
			// scene - intro
			if (fuelcellSeqNum > 3 && fuelcellSeqNum < 45 && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+30}, autoScrDrt, 'linear');
			if (fuelcellSeqNum > 3 && fuelcellSeqNum < 45 && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-30}, autoScrDrt, 'linear');
			// scene - move space
			if (fuelcellSeqNum > 83 && fuelcellSeqNum < 163 && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+50}, autoScrDrt, 'linear');
			if (fuelcellSeqNum > 83 && fuelcellSeqNum < 163 && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-50}, autoScrDrt, 'linear');
			// scene - Clean
			if (fuelcellSeqNum > 177 && fuelcellSeqNum < 293 && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+50}, autoScrDrt, 'linear');
			if (fuelcellSeqNum > 177 && fuelcellSeqNum < 293 && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-50}, autoScrDrt, 'linear');
			// scene - engine
			if (scrollYPos > fuelcellPosPauseSc2TitBtm && fuelcellSeqNum < 385 && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+50}, autoScrDrt, 'linear');
			if (scrollYPos > fuelcellPosPauseSc2TitBtm && fuelcellSeqNum < 385 && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-50}, autoScrDrt, 'linear');
			// scene - engine → Affordable
			if (fuelcellSeqNum > 472 && fuelcellSeqNum < 661 && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+20}, autoScrDrt, 'linear');
			if (fuelcellSeqNum > 472 && fuelcellSeqNum < 661 && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-20}, autoScrDrt, 'linear');
			// scene - Affordable
			if (fuelcellSeqNum > 690 && fuelcellSeqNum < fuelcellSeqNumEndPC && user_mode == 'down') $("html, body").stop(true,false).animate({scrollTop: scrollYPos+20}, autoScrDrt, 'linear');
			if (fuelcellSeqNum > 690 && fuelcellSeqNum < fuelcellSeqNumEndPC && user_mode == 'up') $("html, body").stop(true,false).animate({scrollTop: scrollYPos-20},autoScrDrt, 'linear');
		}

		// Set contents - 콘텐츠 타이밍 설정
		// con1
		if (fuelcellSeqNum < 65) $('.fuelcell_seq_canvas_inner').removeClass('on_con1 off_con1');
		else if (fuelcellSeqNum >= 65 && fuelcellSeqNum < 83) $('.fuelcell_seq_canvas_inner').removeClass('off_con1').addClass('on_con1');
		else $('.fuelcell_seq_canvas_inner').removeClass('on_con1').addClass('off_con1');
		// con2
		if (fuelcellSeqNum < 161) $('.fuelcell_seq_canvas_inner').removeClass('on_con2 off_con2');
		else if (fuelcellSeqNum >= 161 && fuelcellSeqNum < 285) $('.fuelcell_seq_canvas_inner').removeClass('off_con2').addClass('on_con2');
		else $('.fuelcell_seq_canvas_inner').removeClass('on_con2').addClass('off_con2');
		// sc2_tit
		if (scrollYPos < fuelcellPosPauseSc2TitTop) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_tit off_sc2_tit');
		else if (scrollYPos >= fuelcellPosPauseSc2TitTop && scrollYPos < fuelcellPosPauseSc2TitBtm) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_tit').addClass('on_sc2_tit');
		else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_tit').addClass('off_sc2_tit');
		// sc2_con_bg_wrap
		if (scrollYPos < fuelcellPosPauseSc2ConTop) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con_bg off_sc2_con_bg');
		else if (scrollYPos >= fuelcellPosPauseSc2ConTop && scrollYPos < fuelcellPosPauseSc2ConBtm) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_con_bg').addClass('on_sc2_con_bg');
		else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con_bg').addClass('off_sc2_con_bg');
		// sc2_con
		if (winW > winM) {
			// sc2_con1
			if (scrollYPos < fuelcellPosPauseSc2ConTop) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con1 off_sc2_con1');
			else if (scrollYPos >= fuelcellPosPauseSc2ConTop && scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.25) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_con1').addClass('on_sc2_con1');
			else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con1').addClass('off_sc2_con1');
			// sc2_con2
			if (scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.25) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con2 off_sc2_con2');
			else if (scrollYPos >= fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.25 && scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.5) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_con2').addClass('on_sc2_con2');
			else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con2').addClass('off_sc2_con2');
			// sc2_con3
			if (scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.5) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con3 off_sc2_con3');
			else if (scrollYPos >= fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.5 && scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.75) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_con3').addClass('on_sc2_con3');
			else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con3').addClass('off_sc2_con3');
			// sc2_con4
			if (scrollYPos < fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.75) $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con4 off_sc2_con4');
			else if (scrollYPos >= fuelcellPosPauseSc2ConTop + fuelcellPosPauseSc2ConHig*0.75 && scrollYPos < fuelcellPosPauseSc2ConBtm) $('.fuelcell_seq_canvas_inner').removeClass('off_sc2_con4').addClass('on_sc2_con4');
			else $('.fuelcell_seq_canvas_inner').removeClass('on_sc2_con4').addClass('off_sc2_con4');
		} else {
			// sc2_con1
			if (fuelcellSeqNum < 400) $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con1 off_sc2_con1');
			else if (fuelcellSeqNum >= 400 && fuelcellSeqNum < 442) $('.fuelcell_seq_con_wrap.onM').removeClass('off_sc2_con1').addClass('on_sc2_con1');
			else $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con1').addClass('off_sc2_con1');
			// sc2_con2
			if (fuelcellSeqNum < 463) $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con2 off_sc2_con2');
			else if (fuelcellSeqNum >= 463 && fuelcellSeqNum < 502) $('.fuelcell_seq_con_wrap.onM').removeClass('off_sc2_con2').addClass('on_sc2_con2');
			else $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con2').addClass('off_sc2_con2');
			// sc2_con3
			if (fuelcellSeqNum < 520) $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con3 off_sc2_con3');
			else if (fuelcellSeqNum >= 520 && fuelcellSeqNum < 562) $('.fuelcell_seq_con_wrap.onM').removeClass('off_sc2_con3').addClass('on_sc2_con3');
			else $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con3').addClass('off_sc2_con3');
			// sc2_con4
			if (fuelcellSeqNum < 583) $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con4 off_sc2_con4');
			else if (fuelcellSeqNum >= 583 && fuelcellSeqNum < 622) $('.fuelcell_seq_con_wrap.onM').removeClass('off_sc2_con4').addClass('on_sc2_con4');
			else $('.fuelcell_seq_con_wrap.onM').removeClass('on_sc2_con4').addClass('off_sc2_con4');
		}
		// con3_bg & con3
		if (winW > winM) {
			if (fuelcellSeqNum < 661) $('.fuelcell_seq_canvas_inner').removeClass('on_con3_bg on_con3');
			else $('.fuelcell_seq_canvas_inner').addClass('on_con3_bg on_con3');
		} else {
			if (fuelcellSeqNum < 907) $('.fuelcell_seq_con_wrap.onM').removeClass('on_con3_bg');
			else $('.fuelcell_seq_con_wrap.onM').addClass('on_con3_bg');
		}

		// Set dim - Mobile - 모바일 딤 타이밍
		if ((winW <= winM) && 
			(fuelcellSeqNum >= 76 && fuelcellSeqNum < 109) || 
			(fuelcellSeqNum >= 238 && fuelcellSeqNum < 295)) $('.fuelcell_seq').addClass('dimOn');
		else $('.fuelcell_seq').removeClass('dimOn');
	}
	// Execute a function
	fuelcellSeqShow();
	window.addEventListener('scroll', function(e) {
		fuelcellSeqShow();
	});
	window.addEventListener('resize', function(e) {
		fuelcellSeqShow();
	});
	// Draw on canvas after image is changed - 이미지 로드시 캔버스에 그리기
	fuelcellSeqImg.addEventListener('load' ,function(e) {
		// Set canvas size depending on window width - 피씨와 모바일 캔버스 사이즈 변경
		if (winW > winM) {
			fuelcellCanvas1.width = 1920;
			fuelcellCanvas1.height = 1080;
		} else {
			fuelcellCanvas1.width = 720;
			fuelcellCanvas1.height = 1080;
		}

		// Drawing an image on canvas - 이미지 그리기
		fuelcellCanvas1ctx.clearRect(0, 0, fuelcellCanvas1ctx.canvas.width, fuelcellCanvas1ctx.canvas.height);
		fuelcellCanvas1ctx.drawImage(fuelcellSeqImg, 0, 0);
		/*
		// When PC and mobile sequences are separated - 이미지 크롭으로 사용 시
		if (winW > winM) fuelcellCanvas1ctx.drawImage(fuelcellSeqImg, 0, 0);
		else fuelcellCanvas1ctx.drawImage(fuelcellSeqImg, (720-1920)*.25, 0);
		*/
	});
	// e: Sequence
}
