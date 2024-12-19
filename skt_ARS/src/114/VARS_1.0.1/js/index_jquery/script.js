
// 커스텀 셀렉트
$.fn.customSelect = function () {
	var csBody = [];
	var csOpenBtn = [];
	var csBtn = [];
	var csBodys = this;
	$('.wrapper').on('click', function (e) {
		if ($(this).hasClass('cs-open'))
		{
			$(this).removeClass('cs-open');
			csBodys.removeClass('active');
		} else {
			$(this).addClass('cs-open');
		}
	});
	return this.each(function (i) {
		csBody[i] = $(this);
		csOpenBtn[i] = csBody[i].find('.custom-sel-open');
		csBtn[i] = csBody[i].find('.custom-sel-btn');
		csOpenBtn[i].on('click', function (e) {
			e.preventDefault();
			csBody[i].removeClass('active');
			csBodys.removeClass('active');
			$(this).parent().addClass('active');
		});
		csBtn[i].on('click', function (e) {
			e.preventDefault();
			var num = $(this).find('.num').text();
			csBtn[i].removeClass('selected');
			$(this).addClass('selected');
			csBody[i].removeClass('active');
			csOpenBtn[i].find('.num').text(num);
		});
	})		
}

$.fn.customSelect02 = function () {
	var csBody = [];
	var csOpenBtn = [];
	var csBtn = [];
	var csBodys = this;
	$('.wrapper').on('click', function (e) {
		if ($(this).hasClass('cs-open'))
		{
			$(this).removeClass('cs-open');
			csBodys.removeClass('active');
		} else {
			$(this).addClass('cs-open');
		}
	});
	return this.each(function (i) {
		csBody[i] = $(this);
		csOpenBtn[i] = csBody[i].find('.custom-sel-open');
		csBtn[i] = csBody[i].find('.custom-sel-btn');
		csOpenBtn[i].on('click', function (e) {
			e.preventDefault();
			csBody[i].removeClass('active');
			csBodys.removeClass('active');
			$(this).parent().addClass('active');
		});
		csBtn[i].on('click', function (e) {
			e.preventDefault();
			var emailAddr = $(this).find('.txt').text();
			csBtn[i].removeClass('selected');
			$(this).addClass('selected');
			csBody[i].removeClass('active').addClass('selected');
			csOpenBtn[i].find('.txt').text(emailAddr);
		});
	})		
}

$.fn.customSelectDay = function () {
	var csBody = [];
	var csOpenBtn = [];
	var csBtn = [];
	var csBodys = this;
	$('.wrapper').on('click', function (e) {
		if ($(this).hasClass('cs-open'))
		{
			$(this).removeClass('cs-open');
			csBodys.removeClass('active');
		} else {
			$(this).addClass('cs-open');
		}
	});
	return this.each(function (i) {
		csBody[i] = $(this);
		csOpenBtn[i] = csBody[i].find('.custom-sel-day-open');
		csBtn[i] = csBody[i].find('.custom-sel-day-btn');
		csOpenBtn[i].on('click', function (e) {
			e.preventDefault();
			csBody[i].removeClass('active');
			csBodys.removeClass('active');
			$(this).parent().addClass('active');
		});
		csBtn[i].on('click', function (e) {
			e.preventDefault();
			var year = $(this).find('.year').text();
			var month = $(this).find('.month').text();
			csBtn[i].removeClass('selected');
			$(this).addClass('selected');
			csBody[i].removeClass('active');
			csOpenBtn[i].addClass('in');
			csOpenBtn[i].find('.year').text(year);
			csOpenBtn[i].find('.month').text(month);
			console.log(year, month);
		});
	})		
}
