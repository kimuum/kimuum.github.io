/*
Datepicker는 bootstrap-datepicker를 사용하여 구현했습니다.
Option과 Method, Event는 아래 링크에서 확인할 수 있습니다.
(https://bootstrap-datepicker.readthedocs.io/en/latest/index.html)
*/
var $document = $(document);

$(document).ready(function() {

  // if($('#datepicker-start-data').length > 0 && $('#datepicker-end-data').length > 0) {
  //   getMultiDatePicker('start', '#datepicker-start-data', '#datepicker-end-data', 'yyyy-mm-dd');
  //   getMultiDatePicker('end', '#datepicker-start-data', '#datepicker-end-data', 'yyyy-mm-dd');
  // }

  if($document.find('#datepicker-start-period-data').length > 0 && $('#datepicker-end-period-data').length > 0) {
    getMultiDatePicker('start', '#datepicker-start-period-data', '#datepicker-end-period-data', 'yyyy-mm-dd');
    getMultiDatePicker('end', '#datepicker-start-period-data', '#datepicker-end-period-data', 'yyyy-mm-dd');
  }

  // =============== Month를 선택하는 Datepicker without button =============== //

  if($document.find('#datepicker-start-data').length > 0) {
    getDatepicker('#datepicker-start-data', 'calendar');
  }

  // =============== Month를 선택하는 Datepicker =============== //

  if($document.find('#datepicker-usage-data').length > 0) {
    getDatepicker('#datepicker-usage-data', 'month');
  }

  if($document.find('#datepicker-usage-data-customize').length > 0) {
    getDatepicker('#datepicker-usage-data-customize', 'month', true);
  }

  if($document.find('#datepicker-usage-data-large').length > 0) {
    getDatepicker('#datepicker-usage-data-large', 'month');
  }

  // Month를 선택하는 Datepicker의 값이 바뀌면 선택한 값을 버튼 내부 텍스트에 입력합니다. // 


  // =============== Date를 선택하는 Datepicker =============== //

  if($document.find('#datepicker-select-date').length > 0) {
    getDatepicker('#datepicker-select-date', 'calendar');
  }
  
  if($document.find('#datepicker-select-date-large').length > 0) {
    getDatepicker('#datepicker-select-date-large', 'calendar');
  }

  // =============== 현재 달을 기준으로 기간을 선택하는 Popup =============== //

  // 기간 선택 팝업 출력 버튼의 초기 값을 현재 달로 설정합니다. //
  $document.find('.btnOpenPeriod').each(function() {
    
    var $this = $(this);
    var month = 1;
    var getDate = getPeriod(month, false);

    $this.text(getDate);
  });

  if($document.find('#datepicker-select-period').length > 0) {
    getDatepicker('#datepicker-select-period', 'period');
  }

  if($document.find('#datepicker-select-period-large').length > 0) {
    getDatepicker('#datepicker-select-period-large', 'period');
  }
  
  /*
  Datepicker가 적용된 input 필드의 다음에 배치된 버튼을 클릭하면
  해당 input 필드가 포커스 됩니다.
  */
});

function popupDirection($datepicker) {
  var $parent = $datepicker.closest('.fieldDatepicker');
  var $popup = $parent.find('.datepicker-dropdown');
  var $window = $(window);

  var popupTop = $popup.offset().top;
  var popupHeight = $popup.outerHeight();

  var scrollTop = $document.scrollTop();
  var windowHeight = $window.outerHeight();

  // 팝업이 윈도우 하단을 벗어난 경우
  if(popupTop + popupHeight > scrollTop + windowHeight) {
    if(!$parent.hasClass('top')) {
      $parent.addClass('top');
    }
  }
}

// Date Format 변경 함수 //
function fommattedtDate(rawDate, separator, first, range, time) {
  var date = rawDate;
  var currentYear = date.getFullYear();    // 선택한 날짜에 대한 년도 (4 disit)

  // 선택한 날짜에 대한 월 (0 to 11) //
  if(time == 'old') {
    var currentMonth = date.getMonth() - 1;
  }
  else if(time == 'future') {
    var currentMonth = date.getMonth() + 1;
  }
  else {
    var currentMonth = date.getMonth();
  }
  
  var currentDay = date.getDate();         // // 선택한 날짜에 대한 년도 (1 to 31)
  var getDate;

  if(first == 'first') {
    getDate = new Date(currentYear, currentMonth, 1);
  }
  else if(first == 'last') {
    getDate = new Date(currentYear, currentMonth + 1, 0);
  }
  else {
    getDate = new Date(currentYear, currentMonth, currentDay);
  }
  
  var getYear = getDate.getFullYear();
  var getMonth = getDate.getMonth() + 1 < 10 ? '0' + (getDate.getMonth() + 1) : getDate.getMonth() + 1;
  var getDay = getDate.getDate() < 10 ? '0' + getDate.getDate() : getDate.getDate();

  if(range == 'year') return getYear;
  else if(range == 'month') return getYear + separator + getMonth;
  else if(range == 'day' || !range) return getYear + separator + getMonth + separator + getDay;
}

// 기간 선택 함수 //
function getPeriod(month, first) {
  var currentDate = new Date();

  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  if(first) {
    var firstDate = fommattedtDate(currentDate, '.', 'first', 'day');
    var endRawDate = new Date(currentYear, currentMonth + (month -1), currentDay);
    var endDate = fommattedtDate(endRawDate, '.', 'last', 'day');
  }
  else {
    var firstRawDate = new Date(currentYear, currentMonth - (month -1), currentDay);
    var firstDate = fommattedtDate(firstRawDate, '.', 'first', 'day');
    var endDate = fommattedtDate(currentDate, '.', 'last', 'day');
  }

  return  (currentMonth + 1) + '월 (' + firstDate + ' ~ ' + endDate + ')';
}

// [dev추가]
function getPeriodMonth(month, first) {
	var currentDate = new Date();

	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth();
	var currentDay = currentDate.getDate();

	var firstRawDate = new Date(currentYear, month-1, currentDay);
	var firstDate = fommattedtDate(firstRawDate, '.', 'first', 'day');
	var endDate = fommattedtDate(firstRawDate, '.', 'last', 'day');

	return (month) + '월 (' + firstDate + ' ~ ' + endDate + ')';
}

// Datepicker 적용함수 //
// 파라미터(id:적용할 ID, '방')
function getDatepicker(id, type, customize, defaultPeriod) {
  // 타입이 month 일 경우 월 선택 팝업이 출력되도록 설정한다  //
  if(type == 'month' || type == 'monthSimple') {
    var minViewMode = 1;
    var maxViewMode = 2;
  }
  // 타입이 calendar 일 경우 달력이 출력되도록 설정한다 //
  else if(type == 'calendar') {
    var minViewMode = 0;
    var maxViewMode = 2;
  }

  // aria-expanded 속성이 없을 경우 false 로 초기화 //
  var $btnOpen = $document.find(id).find('.singleDatePicker').next('.btnOpen');
  var ariaExpanded = $btnOpen.attr('aria-expanded');

  if(!ariaExpanded) {
    $btnOpen.attr('aria-expanded', false);
  }

  // 타입이 month or calendar 일 경우 //
  if(type == 'month' || type == 'calendar' || type == 'monthSimple') {
    $document.find(id).find('.singleDatePicker').datepicker({
      container: id + ' .datePickerArea',
      language: 'ko',             // 언어 설정
      format: 'yyyy.mm.dd',       // 출력될 날짜 형식
      autoclose: false,           // 입력 시 달력이 자동으로 닫힘
      assumeNearbyYear: true,     // 년도를 두 자릿 수로 입력 가능 (eg. 1997 : 97, 2002 : 02)
      todayHighlight: true,       // 오늘 날짜를 다른 색으로 표시함
      minViewMode: minViewMode,   // 선택할 수 있는 최소 단계를 월까지로 제한함
      maxViewMode: maxViewMode,    // 선택할 수 있는 최대 단계를 년도까지로 제한함
      // showOnFocus: false,
    });

    // 버튼으로 Datepicker를 오픈 할 경우 //
    if($document.find(id).find('.singleDatePicker').next('.btnOpen').length > 0) {
  
      // $document.find(id).find('.singleDatePicker').next('.btnOpen').off('click');
      $btnOpen.on('click', function() {
        var $this = $(this);
        
        if(type == 'month' || type == 'monthSimple') {
          $this.attr('aria-expanded', true);
          $document.find(id).find('.singleDatePicker').datepicker('show');
        }
        else if(type == 'calendar' || type == 'period') {
          $this.attr('aria-expanded', true);
          $this.prev('.singleDatePicker').focus();    
        }
      });
    }

    $document.find(id).find('.singleDatePicker').datepicker().on('hide', function(e) {
      $(this).closest('.datePickerArea').find('.btnOpen').focus();
    });

    // 입력한 날짜가 변경된 경우 //
    // $document.find(id).find('.singleDatePicker').datepicker().off('changeDate').off('show').off('hide');
    $document.find(id).find('.singleDatePicker').datepicker().on('changeDate', function(e) {
      var formattedDate = '';
      if(type == 'month') {
        // 현재 선택한 Month (1월 : 0, 2월 : 1 ...) //
        var currentYear = e.date.getFullYear();
        var currentDate = e.date.getMonth() + 1;

        var formattedFirstDate = fommattedtDate(e.date, '.', 'first', 'day', 'old');   // 선택한 달의 첫 날
        var fommatedLastDate = fommattedtDate(e.date, '.', 'last', 'day', 'old');      // 선택한 달의 마지막 날

        if(customize) {
          // 버튼 내부에 선택한 달의 첫 날과 마지막 날을 조합하여 입력합니다. //
          formattedDate = '(' + formattedFirstDate + ' ~ ' + fommatedLastDate + ' 이용)';
        }
        else {
          formattedDate = currentDate + '월 (' + formattedFirstDate + ' ~ ' + fommatedLastDate + ')';
        }
      }
      else if(type == 'monthSimple') {// 소액결제 내역
        var currentYear = e.date.getFullYear();
        var currentDate = e.date.getMonth() + 1;

        if(currentDate < 10) {
          formattedDate = currentYear + '.0' + currentDate;
        } else {
          formattedDate = currentYear + '.' + currentDate;
        }
      }
      else if(type == 'calendar') {
        var currentYear = e.date.getFullYear();     // 현재 선택한 Year (yyyy) //
        // 현재 선택한 날짜. 날짜가 한 자리 수일 경우 날짜 앞에 0을 추가해줍니다. //
        var currentMonth = e.date.getMonth() + 1 < 10 ? '0' + (e.date.getMonth() + 1) : e.date.getMonth() + 1;
        // 현재 선택한 날짜. 날짜가 한 자리 수일 경우 날짜 앞에 0을 추가해줍니다. //
        var currentDay = e.date.getDate() < 10 ? '0' + e.date.getDate() : e.date.getDate();          

        // 버튼 내부에 선택한 달의 첫 날과 마지막 날을 조합하여 입력합니다. //
        formattedDate = e.format(0, 'yyyy.mm.dd');
      }

      $(e.currentTarget).next('.btnOpen').text(formattedDate);
      $(e.currentTarget).next('.btnOpen').attr('aria-expanded', false);
      if(customize) {
        $(e.currentTarget).next('.btnOpen').prepend('<span class="currentDate">' + currentYear + '.' + currentDate + '</span>');
        // $(e.currentTarget).next('.btnOpen').append('<span class="colorLabel">납부 예정</span>');
      }

    }).on('show', function(e) {
      var $this = $(this);

      // 팝업이 출력될 방향을 결정합니다. // 팝업이 화면 하단을 벗어날 경우 위쪽으로 출력되도록 합니다. //
      popupDirection($this);
    }).on('hide', function(e) {
      var $this = $(this);
      var $parent = $this.closest('.fieldDatepicker');

      if($parent.hasClass('top')) {
        $parent.removeClass('top')
      }
    });

    // 버튼에 입력할 날짜를 현재 달로 설정합니다 // 
    $(id).find('.singleDatePicker').datepicker('setDate', new Date());
  }
  // 타입이 period 일 경우 // [dev 수정]
  else if(type == 'period' || type == 'periodMonth') {
    $(id).find('.periodContainer').append('<div class="button-box"><button type="button" class="btn-close-calendar">닫기</button></div>');

    if(defaultPeriod && defaultPeriod > 0) {
      var $btnPeriod = $document.find(id).find('.periodContainer').find('.periodArea').children('button');
      var $parent = $btnPeriod.closest('.datePickerArea');
      var month = $btnPeriod.eq(defaultPeriod - 1).attr('month');
      var monthUsed = $btnPeriod.eq(defaultPeriod - 1).attr('monthUsed');
  
      if(type == 'period') {
        var getDate = getPeriod(month, false);
      } else {
        var getDate = getPeriodMonth(month, false);
      }

      $document.find(id).find('.periodContainer').find('.btnPeriod').removeAttr('title');
      $btnPeriod.eq(defaultPeriod - 1).attr('title', '선택됨');
  
      $parent.find('.btnOpenPeriod').text(getDate);
      $parent.find('.btnOpenPeriodUsed').text(monthUsed);
      $parent.find('.btnOpenPeriod').attr('aria-expanded', false);
    }

    $document.find(id).find('.periodContainer').find('.btn-close-calendar').on('click', function(e) {
      // [VOS2차] 결함 ID 1122420 수정 //
      $document.find(id).find('.periodContainer').removeClass('show').siblings('.btnOpen').attr('aria-expanded', false);
      // [VOS2차] 결함 ID 1122076 수정 : 닫기 버튼 클릭하여 닫았을 때 팝업 제공 전 버튼으로 포커스 이동 //
      $document.find(id).find('.periodContainer').removeClass('show').siblings('.btnOpen').focus();
    });

    // $document.find(id).find('.periodContainer').find('.btnPeriod').off('click');
    $document.find(id).find('.periodContainer').find('.btnPeriod').on('click', function(e) {
      var $this = $(this);
      var $parent = $this.closest('.datePickerArea');
      var month = $this.attr('month');
      var monthUsed = $this.attr('monthUsed');
  
      if(type == 'period') {
        var getDate = getPeriod(month, false);
      } else {
        var getDate = getPeriodMonth(month, false);
      }

      $document.find(id).find('.periodContainer').find('.btnPeriod').removeAttr('title');
      $this.attr('title', '선택됨');
  
      $parent.find('.btnOpenPeriod').text(getDate);
      $parent.find('.btnOpenPeriodUsed').text(monthUsed);
      $parent.find('.btnOpenPeriod').attr('aria-expanded', false);

      $this.parents('.periodContainer').removeClass('show').siblings('.btnOpen').focus();
    });
    
    $document.find(id).find('.periodContainer').on('keydown', function(e) {
      var $this = $(this);
      var $option = $this.find('.btnPeriod:focus');
      var index = $this.find('.btnPeriod').index($option);
      var listLength = $this.find('.btnPeriod').length;

      if (e.keyCode == "27") {
        $this.removeClass('show').siblings('.btnOpen').focus();
        // aria-expanded 속성을 false로 설정한다. //
        $this.removeClass('show').siblings('.btnOpen').attr('aria-expanded', false);

        e.preventDefault();
        e.stopImmediatePropagation();
      }
      else if (e.keyCode == "13" || e.keyCode == "32") {
        // e.preventDefault();
        // e.stopImmediatePropagation();
      }
      // KeyDown - Home //
      else if (e.keyCode == "36") {
        $this.find('.btnPeriod').first().focus();
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      // KeyDown - End //
      else if (e.keyCode == "35") {
        $this.find('.btnPeriod').last().focus();
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      // KeyDown - Up //
      else if (e.keyCode == "38") {
        if (index > 0) {
          $this.find('.btnPeriod').eq(index - 1).focus();
        }

        e.preventDefault();
        e.stopImmediatePropagation();
      }
      // KeyDown - Down //
      else if (e.keyCode == "40") {
        if (index < listLength - 1) {
          $this.find('.btnPeriod').eq(index + 1).focus();
        }

        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  }
}

// 시작일과 종료일을 입력하는 Datepicker //
// 시작일과 종료일 필드를 각각 적용합니다. //
// getMultiDatePicker('start', '#datepicker-start-period-data', '#datepicker-end-period-data', 'yyyy-mm-dd');
function getMultiDatePicker(type, start_id, end_id, format) {
  if(type == 'start') {
    var id = start_id;
  }
  else if(type == 'end') {
    var id = end_id;
  }

  $document.find(id).find('.singleDatePicker').datepicker({
    container: id + ' .datePickerArea',
    language: 'ko',             // 언어 설정
    format: format,       // 출력될 날짜 형식
    autoclose: false,           // 입력 시 달력이 자동으로 닫힘
    assumeNearbyYear: true,     // 년도를 두 자릿 수로 입력 가능 (eg. 1997 : 97, 2002 : 02)
    todayHighlight: true,        // 오늘 날짜를 다른 색으로 표시함
    minViewMode: 0,   // 선택할 수 있는 최소 단계를 날짜까지로 제한함
    maxViewMode: 2    // 선택할 수 있는 최대 단계를 월까지로 제한함
  });

  // 버튼으로 Datepicker를 오픈 할 경우 //
  if($document.find(id).find('.singleDatePicker').next('.btnOpen').length > 0) {
    var today = new Date();
    var btnText = $(id).find('.singleDatePicker').next('.btnOpen').text();

    if(btnText == '' || btnText == null) {
      $document.find(id).find('.singleDatePicker').next('.btnOpen').text(fommattedtDate(today, '-'));
    }

    // $document.find(id).find('.singleDatePicker').next('.btnOpen').off('click');
    $document.find(id).find('.singleDatePicker').next('.btnOpen').on('click', function() {
      var $this = $(this);
      $this.prev('.singleDatePicker').focus();
    });
  }
  
  // $document.find(id).find('.singleDatePicker').datepicker().off('changeDate').off('show').off('hide');
  $document.find(id).find('.singleDatePicker').datepicker().on('changeDate', function(e) {
    var currentDate = $(this).val();

    if(type == 'start') {
      var relatedDate = $(end_id).find('.singleDatePicker').val();
    }
    else if(type == 'end') {
      var relatedDate = $(start_id).find('.singleDatePicker').val();
    }

   // 입력한 시작일이 종료일 보다 이후 날짜일 경우 경고메세지를 출력하고, 입력 값을 초기화 합니다. //
    if(currentDate && relatedDate) {
      if(type == 'start' && currentDate > relatedDate) {
        // togglePopup(id.replace('#', ''), 'popup-wrong-start-date')
        
        // $(this).datepicker('setDate', null);
      }
      else if(type == 'end' && currentDate < relatedDate) {
        // togglePopup(id.replace('#', ''), 'popup-wrong-end-date')
        
        // $(this).datepicker('setDate', null);
      }
      else {
        if($document.find(id).find('.singleDatePicker').next('.btnOpen').length > 0) {
          $document.find(id).find('.singleDatePicker').next('.btnOpen').text(currentDate);
        }
      }
    }
    else {
      if($document.find(id).find('.singleDatePicker').next('.btnOpen').length > 0) {
        $document.find(id).find('.singleDatePicker').next('.btnOpen').text(currentDate);
      }
    }

  }).on('show', function(e) {
    var $this = $(this);

    // 팝업이 출력될 방향을 결정합니다. // 팝업이 화면 하단을 벗어날 경우 위쪽으로 출력되도록 합니다. //
    popupDirection($this);
  }).on('hide', function(e) {
    var $this = $(this);
    var $parent = $this.closest('.fieldDatepicker');

    if($parent.hasClass('top')) {
      $parent.removeClass('top')
    }
  });

  // $(id).find('.singleDatePicker').datepicker('setDate', new Date());
}
