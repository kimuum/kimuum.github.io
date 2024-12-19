//=============================================
// wforcus.js 공통 스크립트
//=============================================


//----------------------------------------------------------------------
// 공용변수 설정
//----------------------------------------------------------------------

/**
 * ISS SERVLET URL
 */
var BASE_URL = "/SKTJSELL/WebMsg";

// 최초 로딩바 옵션 제거 처리.
$('.d-loading').removeClass('on');

// jAlert 기본세팅.
$.alerts.verticalOffset = 0;

//----------------------------------------------------------------------
// UI 제어
//----------------------------------------------------------------------

/**
 * Page 초기화
 */
function initUIComponents(pageTimeout) {
	/*
	$(document).bind("touchstart", function(event) {
    	stopPageTimeout();			// TIMER 종료
		setPageTimeout();			// TIMER 재활성화
		
    });
	$(document).bind("touchmove", function(event) {
    	stopPageTimeout();			// TIMER 종료
		setPageTimeout();			// TIMER 재활성화
		
    });
	$(document).bind("touchend", function(event) {
    	stopPageTimeout();			// TIMER 종료
		setPageTimeout();			// TIMER 재활성화
		
    });
	*/
	
	var osType_check = getUrlParameter("osType_check");
    if(osType_check == "2"){
		history.pushState(null, null, "");
		$(window).on("popstate",function(e){
			//history.go(1);
			//history.forward();
			history.pushState(null, null, "");
		});
		$(window).bind("hashchange",function(e){
			e.preventDefault();
			history.pushState(null, null, "");
		});
	
    }
	
	// 최초 page loading 처리.
	$(function(){
    	if (pageTimeout != null && pageTimeout) {
    		stopPageTimeout();			// TIMER 종료
    		setPageTimeout();			// TIMER 재활성화
    		
    	}
    	
    });
    
}

/**
 * 페이지 Timeout & 통화종료 
 */
// 페이지가 표시되고 아래에 명기된 시간(분)동안 입력이 없으면 통화종료 경고 표시 
var PAGE_TIMEOUT = 2.5;							// 2분 30초

var PAGE_TIMEOUT_TIMER_OBJ1  = null;		// 페이지 TIMER
var PAGE_TIMEOUT_TIMER_OBJ2 = null;		// 팝업 BOX TIMER

function setPageTimeout() {
	
	// 페이지 TIMEOUT 설정
	PAGE_TIMEOUT_TIMER_OBJ1 = setTimeout(function(){

		// 초기화
		// 팝업 BOX 제거.
		$('#popup').removeClass('show');
    $('#popup').remove();
		
		// 메시지
		var msg = '<p class="popup-alert-text">고객님의 안전한 서비스를 위해<br/>장시간 이용이 없어 통화를 종료합니다.<br/>계속 서비스를 이용하시겠습니까?</p>';
		
		// 메시지 박스 표시
		jConfirm(msg, "", function(btnBoolean){
			if(btnBoolean){											// true 이면
				stopPageTimeout();									// TIMER 종료
				setPageTimeout();									// TIMER 재활성화
				
			}else{														// false 이면
				sendRepPageData("agent", "D");					// CONNECT 종료 (ivr session release 처리는 'agent' 로 함)

				setTimeout(function(){
					changeoverPhone(false); 

				}, 1000);
				
			}
			
		});
		
		// 팝업 BOX TIMEOUT
		// 팝업 BOX가 표시되고 
		var MSG_TIMEOUT = 0.5;			// 30초 후
		
		// 팝업 BOX 가 Timeout 이 되면 자동으로 종료 처리
		PAGE_TIMEOUT_TIMER_OBJ2 = setTimeout(function(){

			// 팝업 BOX 제거.
			$('#popup').removeClass('show');
      $('#popup').remove();
			
			// 통화종료 전송
			sendRepPageData("agent", "D");						// CONNECT 종료 (ivr session release 처리는 'agent' 로 함)

			setTimeout(function(){
				changeoverPhone(false); 

			}, 0);
			
		}, MSG_TIMEOUT * 60 * 1000);			
		
	}, PAGE_TIMEOUT * 60 * 1000);
	
}

/**
 * 페이지 Timeout 종료
 */
function stopPageTimeout() {
	
	if (PAGE_TIMEOUT_TIMER_OBJ1 != null){
		// 일회성 timer 취소 (장시간 터치 EVENT가 없을때 발생하는 타이머)
		clearTimeout(PAGE_TIMEOUT_TIMER_OBJ1);
		PAGE_TIMEOUT_TIMER_OBJ1 = null;
	}
	if (PAGE_TIMEOUT_TIMER_OBJ2 != null){
		// 일회성 timer 취소 (팝업 BOX 호출 후 종료 시키는 타이머)
		clearTimeout(PAGE_TIMEOUT_TIMER_OBJ2);
		PAGE_TIMEOUT_TIMER_OBJ2 = null;
	}
	
}

/**
 * timeoutLimit를 세팅한 후 0초가 되면 callback을 실행한다.
 * timeoutLimit : 초
 * callback : callback function
 * obj : innerHTML 할 object.
 */
var errInterval;											// ERROR 처리용 interval
var errTimeout;											// ERROR 처리용 timeout(초)
function setTimer(timeoutLimit, callback, obj){
	errTimeout = timeoutLimit+1;
	
	errInterval = setInterval(
	// interval 수행 함수	
	function(){
		// timeout == 0 이면 break 후 callback 호출.
		if(errTimeout == 0){
			clearInterval(errInterval);
			callback(true);
			return;
		}
		
		// 1초 --
		errTimeout--;
		
		// obj 파라미터 있으면
		if(obj != null)
			obj.innerHTML = (errTimeout+" 초");
		
	}		
	, 1 * 1000);		// 1초 세팅.
	
	
}


//----------------------------------------------------------------------
// wforcus 용 스크립트
//----------------------------------------------------------------------

/**
 * 쿼리스트링에서 해당 파라미터의 값을 취득한다.
 * 
 * @param paramName 파라미터 명
 * @returns 파라미터 값
 */
function getUrlParameter(paramName) {

	var queryStr    = "";
	if (typeof(RESULT_PARAMS) == "undefined") {
		queryStr = location.search;
	
	} else {
		queryStr = RESULT_PARAMS;
	
	}

    var reqParamExp = new RegExp('(?:[\?&]|&amp;)' + paramName + '=([^&]+)', 'i');
    var match       = queryStr.match(reqParamExp) ;
    var value       = (match && match.length > 1) ? decodeURIComponent(match[1].replace(/[+]/g," ")) : '';

    if (value == null) {
        value = "";
    }
    
    return value;
    
}

/**
 * 메인메뉴 전송 (*)
 */
function sendGotoHome() {
	sendRepPageData("메인메뉴", "*");
	
}

/**
 * 상위메뉴 전송 (#)
 */
function sendGotoBack() {
	sendRepPageData("이전메뉴", "#");
	
}

/**
 * H/W button back (#)
 */
function btn_back() {
	var back_btn_type = document.getElementById('back_btn_type').value;
	
	// back_btn_type == '#' 이면
	if(back_btn_type != null && back_btn_type == '#'){
		sendRepPageData("BTN_BACK", back_btn_type);
		
	// 그 외 return
	}else{ 
		return;
	
	}
	
}

/**
 * H/W button back (#) disable control
 */
function btn_back_disable() {
	var back_btn_type = document.getElementById('back_btn_type').value;
	
	// back_btn_type == '#' 이면 back button enable
	if(back_btn_type != null && back_btn_type == '#'){
		return false;
	
	// 그 외 back button disable
	}else{ 
		return true;
	
	}
	
}

/**
 *	CON_REQ(최초접속) 서버로 전송 (테스트용)
 * 
 */
function sendConReq(){
    
	 var html = "<form name='transmit_form' id='transmit_form'></form>";

	//alert("ConReq param >> \n"+html);
	
	$("body").append(html);
	var form = $("#transmit_form").get(0);
	form.action 	 	= BASE_URL;
    form.method 	= "post";
    
    form.submit();
    
}

/**
 *	RE_CON_REQ(재접속) 서버로 전송 (테스트용)
 * 
 */
function sendReConReq(){
    
	// 세션키
    var transKey     = getUrlParameter("resTransKey");
    var callId       	= getUrlParameter("callId");
    var destination 	= getUrlParameter("destination");
    var publickey 	= getUrlParameter("publickey");
    
    // 페이지 접속 건수
    var pktAccessCount = 0;
    var tmpAccessCount = getUrlParameter("pktAccessCount");

    if (tmpAccessCount == null || tmpAccessCount == "") {
    	pktAccessCount = 1;
    
    } else {
    	try {
    		pktAccessCount = Number(tmpAccessCount) + 1;
    	} catch (e) {
    		pktAccessCount = 1;
    		
    	}
    	
    }
    
    $("#transmit_form").remove();
    
    var html = "<form name='transmit_form' id='transmit_form'>"
	      + "<input type='hidden' name='cmd'            	value='2'>"
	      + "<input type='hidden' name='pktType'        	value='1'>"
	      + "<input type='hidden' name='pktTransKey'    value='" + transKey       + "'>"
	      + "<input type='hidden' name='callId'    		value='" + callId    + "'>"
	      + "<input type='hidden' name='destination'    	value='" + destination    + "'>"
	      + "<input type='hidden' name='publickey'    	value='" + publickey    + "'>"
	      + "<input type='hidden' name='pktAccessCount' value='" + pktAccessCount + "'>"
	      + "</form>"
	      ;
	 
	//alert("ReConReq param >> \n"+html);
	
	$("body").append(html);
	var form = $("#transmit_form").get(0);
	form.action 	 	= BASE_URL;
    form.method 	= "post";
    
    form.submit();
    
}

/**
 * REPORT_PAGE_DATA(사용자 입력 요청 데이터)를 서버로 전송
 * 
 * @param buttonText 
 * @param jobId 작업ID
 * @param jobName 작업명
 */
//var btnClickStop = false;

function sendRepPageData(buttonText, jobId, jobName) 
{
	
    // 이중클릭 방지.
//	if(btnClickStop) return;
	
	// jobName == 'test' 일때 (QA 테스트용)
	if(jobName == "test"){
		return;
	
	// 테스트 아닐때.
	}else{
		if (jobId == null || jobId == '') {
			$("#menu").val("");
	        
		}else{
	        var id = (jobName == null || jobName == "") ? "menu" : jobName;
	        $("#" + id).val(jobId);
	        
	    }
	
	}
    
	// 세션키
    var transKey     = getUrlParameter("resTransKey");
    var callId       	= getUrlParameter("callId");
    var destination 	= getUrlParameter("destination");
    var publickey 	= getUrlParameter("publickey");
    
    var sPktDigitArr 	= new Array();
    var sPktDigits   	= "";
    var encryptedValues = "";
    
    // 속성 id 가 존재하고, 속성 iweb-data 가 존재하는 태그중에
    // iweb-data 의 값이 "in" 으로 시작하는 모든 태그를 취득
    // 서버로 넘긴다.
    var setObj = $("*[id][iweb-data^=in]");
    for(var i = 0; i < setObj.size(); i++) {
        var obj = $(setObj.get(i));
        var value = "";
        
        if (obj.attr("iweb-encrypt-type") == null || obj.attr("iweb-encrypt-type") == "") { // 암호화 대상이 아닌 필드
            if (obj.attr("iweb-data-type") == "currency") {
            	value = obj.val().replace(/[,]/g, "");
            } else {
            	value = obj.val();
            }
            
        } else { // 암호화 대상 필드
            if (obj.attr("iweb-encrypt-value") == null || obj.attr("iweb-encrypt-value") == "") { // 암호화 값이 없다면, 암호화 되지 않은 값을 설정
            	value = obj.attr("iweb-plain-value");
            	
            } else { // 암호화 값이 있다면, 더미값을 설정
            	value = obj.val();
            	
            	// 암호화 대상이고 암호화 값이 있다면 암호화 값 필드에 키, 값 페어를 설정
            	var encryptedId  = obj.attr("iweb-encrypt-type") + obj.attr("id");
            	var encryptedValue = obj.attr("iweb-encrypt-value");
            	if (encryptedValues == "") {
            		encryptedValues += encryptedId + "=" + encodeURIComponent(encryptedValue);	
            	} else {
            		encryptedValues += "|" + encryptedId + "=" + encodeURIComponent(encryptedValue);
            	}
            }        	
        }
        
        sPktDigits = obj.attr("id")  + "=" + encodeURIComponent(value);
        sPktDigitArr[i] = sPktDigits;
        
    }
    
    buttonText = buttonText.replace(/[ ]/g, "");
    
    sPktDigitArr[sPktDigitArr.length] = "IID_btntext=" + encodeURIComponent(buttonText);

    // 페이지 접속 건수
    var pktAccessCount = 0;
    var tmpAccessCount = getUrlParameter("pktAccessCount");

    if (tmpAccessCount == null || tmpAccessCount == "") {
    	pktAccessCount = 1;
    
    } else {
    	try {
    		pktAccessCount = Number(tmpAccessCount) + 1;
    	} catch (e) {
    		pktAccessCount = 1;
    		
    	}
    	
    }
    
    $("#transmit_form").remove();
    
    var html = "<form name='transmit_form' id='transmit_form'>"
    	      + "<input type='hidden' name='cmd'            	value='3'>"
    	      + "<input type='hidden' name='pktType'        	value='1'>"
    	      + "<input type='hidden' name='pktTransKey'    value='" + transKey       + "'>"
    	      + "<input type='hidden' name='callId'    		value='" + callId    + "'>"
    	      + "<input type='hidden' name='destination'    	value='" + destination    + "'>"
    	      + "<input type='hidden' name='publickey'    	value='" + publickey    + "'>"
    	      + "<input type='hidden' name='pktAccessCount' value='" + pktAccessCount + "'>"
    	      + "<input type='hidden' name='pktDigits'      	value='" + encodeURIComponent(sPktDigitArr) + "'>"
    	      + ((encryptedValues != "") ? "<input type='hidden' name='" + ENCRYPTED_FIELD_KEY + "' value='" + encodeURIComponent(encryptedValues) + "'>" : "")
    	      + "</form>"
    	      ;
    
    $("body").append(html);
    
    // 클릭 확인.
//    btnClickStop = true;
    // 
   
    var form = $("#transmit_form").get(0);
    form.action 	 	= BASE_URL;
    form.method 	= "post";

    form.submit();    	
        
}

/**
 * 통화종료 전송
 * 
 * @param msgBool 메시지 표시 여부
 */
function sendDisconnect(msgBool, buttonText) {

	if (typeof(buttonText) == "undefined") {
		buttonText = "접속종료";
	}
	
	if (msgBool) {
		jConfirm("통화를 종료하시겠습니까?", "", function(btnBoolean){
			if (btnBoolean) {
				
				sendDisSession(buttonText, "D");
				
			}
			
		});
		
	} else {
		
		sendDisSession(buttonText, "D");
		
	}
	
}

/**
 *	DisSession(세션종료 명령) 서버로 전송
 * 
 */
function sendDisSession(buttonText, jobId) {
    
	if (jobId == null || jobId == '') {
		$("#menu").val("");
        
	}else{
        $("#menu").val(jobId);
        
    }
    
	// 세션키
    var transKey    	= getUrlParameter("resTransKey");
    var callId       	= getUrlParameter("callId");
    var destination 	= getUrlParameter("destination");
    var publickey 	= getUrlParameter("publickey");
    
    // 페이지 접속 건수
    var pktAccessCount = 0;
    var tmpAccessCount = getUrlParameter("pktAccessCount");

    if (tmpAccessCount == null || tmpAccessCount == "") {
    	pktAccessCount = 1;
    
    } else {
    	try {
    		pktAccessCount = Number(tmpAccessCount) + 1;
    	} catch (e) {
    		pktAccessCount = 1;
    		
    	}
    	
    }
    
    $("#transmit_form").remove();
    
    var html = "<form name='transmit_form' id='transmit_form'>"
    	      + "<input type='hidden' name='cmd'            value='4'>"
    	      + "<input type='hidden' name='pktType'        value='1'>"
    	      + "<input type='hidden' name='pktTransKey'    value='" + transKey       + "'>"
    	      + "<input type='hidden' name='callId'    		value='" + callId    + "'>"
    	      + "<input type='hidden' name='destination'    	value='" + destination    + "'>"
    	      + "<input type='hidden' name='publickey'    	value='" + publickey    + "'>"
    	      + "<input type='hidden' name='pktAccessCount' value='" + pktAccessCount + "'>"
    	      + "</form>"
    	      ;
    
    //alert("DisSession param >> \n"+html);
    
    $("body").append(html);

    var form = $("#transmit_form").get(0);
    form.action 	 	= BASE_URL;
    form.method 	= "post";
    
    form.submit();    	
        
}


//----------------------------------------------------------------------
// 유틸리티
//----------------------------------------------------------------------

/**
 * 현재날짜(yyyy.mm.dd)를 세팅한다.
 * 
 * @param id 아이디
 */
function setCurrDate(id) {
	var d 		= new Date();
	var year  = d.getFullYear() + "";
	var month = (d.getMonth() + 1) + "";
	var day   = d.getDate() + "";
	
	if (month.length == 1) {
		month = "0" + month;
	}
	
	if (day.length == 1) {
		day = "0" + day;
	}
	
	var currDateStr = year + "." + month + "." + day;
	$("#" + id).val(currDateStr);

}

/**
 * from ~ to(현재일자) 날짜를 세팅한다. (day 만큼)
 * 
 * @param fromId 	시작날짜 아이디
 * @param toId 	종료날짜 아이디
 * @param day 		이전날짜 간격
 */
function setDateFromCurrentToDaysAgo(fromId, toId, day) {

	setCurrDate(toId);
	
	var d = new Date();
	d.setDate(d.getDate() - day);
	
	var year  = d.getFullYear() + "";
	var month = (d.getMonth() + 1) + "";
	var day   = d.getDate() + "";
	
	if (month.length == 1) {
		month = "0" + month;
	}
	
	if (day.length == 1) {
		day = "0" + day;
	}
	
	var currDateStr = year + "." + month + "." + day;
	$("#" + fromId).val(currDateStr);
	
}


/**
 * 문자 반복해서 문자열 만들기
 * 
 * @param targetChar, count
 * @returns string
 */
function fillString(targetChar, count) {
	var value = "";
	for(var i = 0; i < count; i++) {
		value += targetChar;
	}
	
	return value;
	
}

/**
 * 주민등록(사업자)번호 확인
 * 
 * @param id input id
 * @returns true/false
 */
function checkPersonBiznum(id) {
	var val = $("#" + id).val();
    
    val = val.replace(/-/g, "");
    
    if (val.length == 13) {
        return chkJuminNo(val);
    
    } else if (val.length == 10) {
        return chkBizNo(val);
    
    } else {
        return false;
    
    }

}

/**
 * 계좌번호 확인
 * @param id input id
 * @returns true/false
 */
function checkAccountNo(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (val.length != 2 && !(8 <= val.length && val.length <= 13)) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }

    return true;

}

/**
 * 계좌번호 확인(단축계좌 확인 제외)
 * 
 * @param id input id
 * @returns true/false
 */
function checkAccountNo2(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (!(8 <= val.length && val.length <= 13)) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }

    return true;

}

/**
 * 입금 계좌번호 확인
 * @param id input id
 * @returns true/false
 */
function checkRevAccountNo(id) {
    var val = $("#" + id).val();
    if (val.length == 0) {
        return false;
    }
    
    if (val.length != 2 && !(8 <= val.length && val.length <= 13)) {
        return false;
    }

    return true;

}

/**
 * 타행 계좌번호 확인
 * 
 * @param id input id
 * @returns true/false
 */
function checkAccountNoOthers(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (!(4 <= val.length && val.length <= 16)) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }

    return true;

}

/**
 * 입금 타행 계좌번호 확인
 * 
 * @param id input id
 * @returns true/false
 */
function checkRevAccountNoOthers(id) {
    var val = $("#" + id).val();
    if (val.length == 0) {
        return false;
    }
    
    if (!(4 <= val.length && val.length <= 16)) {
        return false;
    }

    return true;

}

/**
 * 대출 계좌번호 확인
 * @param id input id
 * @returns true/false
 */
function checkLoanAccountNo(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (val.length != 13 && val.length != 15) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }
    
    return true;

}

/**
 * 전체 카드번호 확인
 * @param id input id
 * @returns true/false
 */
function checkCardNoFull(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (val.length != 16) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }

    return true;

}

/**
 * 4자리 카드번호 확인
 * @param id input id
 * @returns true/false
 */
function checkCardNoPart(id) {
    var val = $("#" + id).val();
    val = val.replace(/-/g, "");

    if (val.length == 0) {
        return false;
    }
    
    if (val.length != 4) {
        return false;
    }
    
    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i).match(/[0-9]/g) == null) {
            return false;
        }
    }

    return true;

}

/**
 * 사업자번호 확인 
 * 
 * @param bizNo 사업자번호
 * @returns true/false
 */
function chkBizNo(bizNo) {
    bizNo = bizNo.replace(/-/g,'');
    if (bizNo.length != 10) {
    	return false;

    }
    
    var fmt = /^\d{10}/;
    
    if (!fmt.test(bizNo)) {
        return false;
    }
    
    return true;
    
}

/**
 * 개인 사업자번호 확인 
 * 
 * @param bizNo 사업자번호
 * @returns true - OK , false - NG
 */
function chkPersonalBizNo(bizNo) {
    
    bizNo = bizNo.replace(/-/g,'');  
    if (bizNo.length != 10) {
    	return false;
    }
    
    var fmt = /^\d{10}/;
    if (!fmt.test(bizNo)) {
        return false;
    }
    
    var tmp = Number(bizNo.substring(3, 5));
    if (80 <= tmp && tmp <= 89) {
    	return false;
    }
    
    return true;

}

/**
 * 주민번호 앞자리 확인 
 * 
 * @param bizNo 주민번호
 * @returns true - OK , false - NG
 */
function chkBirthDay(juminNo) { 
    
    juminNo = juminNo.replace(/-/g, "");

    // check juminNoNumber-type and sex_digit 
    fmt = /^\d{6}/;
    
    if (!fmt.test(juminNo)) {
        return false;
    }

    // check date-type
    birthYear  = (juminNo.charAt(6) <= "2") ? "19" : "20";
    birthYear += juminNo.substring(0, 2);
    birthMonth = juminNo.substring(2, 4) - 1;
    birthDate  = juminNo.substring(4, 6);
    birth = new Date(birthYear, birthMonth, birthDate);

    if ( birth.getYear() % 100 != juminNo.substr(0, 2) || birth.getMonth() != birthMonth || birth.getDate() != birthDate) {
        return false;
    }

    return true;

} 

/**
 * 주민번호 확인 
 * 
 * @param bizNo 주민번호
 * @returns true - OK , false - NG
 */
function chkJuminNo(juminNo) { 
    
    juminNo = juminNo.replace(/-/g, "");
    
    // check juminNoNumber-type and sex_digit 
    fmt = /^\d{6}[1234]\d{6}$/;
    
    if (!fmt.test(juminNo)) {
        return false;
    }

    // check date-type
    birthYear  = (juminNo.charAt(6) <= "2") ? "19" : "20";
    birthYear += juminNo.substring(0, 2);
    birthMonth = juminNo.substring(2, 4) - 1;
    birthDate  = juminNo.substring(4, 6);
    birth = new Date(birthYear, birthMonth, birthDate);
    
    if ( birth.getYear() % 100 != juminNo.substr(0, 2) || birth.getMonth() != birthMonth || birth.getDate() != birthDate) {
        return false;
    }

    // Check Sum code
    buf = new Array(13);
    for (var i = 0; i < 13; i++) {
        buf[i] = parseInt(juminNo.charAt(i));
    }

    multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
    for (i = 0, sum = 0; i < 12; i++) {
        sum += (buf[i] *= multipliers[i]);
    }

    if ((11 - (sum % 11)) % 10 != buf[12]) {
        return false;
    }

    return true;

} 

/**
 * 'YYYYMMDD' 형태의 날짜 확인
 * @param id input id
 * @returns true - OK , false - NG
 */
function chkDateYYYYMMDD(id) {

    var date = $("#" + id).val();
    date = date.replace(/-/g, "");
    
    if (date.length != 8) {
        return false;
    }
    
    if(!isDateFormat(date)) {
        return false;
    }

    var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var year  = Number(date.substring(0, 4));
    var month = Number(date.substring(4, 6));
    var day   = Number(date.substring(6, 8));
    
    // 날짜가 0이면 false
    if(day == 0) {
        return false;
    }

    var isValid = false;

    // 윤년일때
    if(isLeaf(year)) {
        if(month == 2) {
            if(day <= month_day[month-1] + 1) {
                isValid = true;
            }
        } else {
            if(day <= month_day[month-1]) {
                isValid = true;
            }
        }
    } else {
        if(day <= month_day[month-1]) {
            isValid = true;
        }
    }

    return isValid;

}

/**
 * 날짜포맷에 맞는지 검사
 */
function isDateFormat(d) {
    var df = /[0-9]{4}[0-1][0-9][0-3][0-9]/;
    return d.match(df);

}

/**
 * 윤년여부 검사
 */
function isLeaf(year) {
    var leaf = false;

    if(year % 4 == 0) {
        leaf = true;

        if(year % 100 == 0) {
            leaf = false;
        }

        if(year % 400 == 0) {
            leaf = true;
        }
    }

    return leaf;

}

/** 
 * 현재년월일을 YYYYMMDD 형식으로 반환
 */
function getCurYYYYMMDD() {
    var date = new Date();
    
    var year = date.getFullYear() + "";
    var month = (date.getMonth() + 1) + "";
    var day = date.getDate() + "";
    
    if (month.length == 1) {
        month = "0" + month;
    }
    
    if (day.length == 1) {
        day = "0" + day;
    }
    
    return year + month + day;

}

/**
 * 모바일 전화번호인지 검사
 * 
 * @param phoneNo 모바일 전화번호
 * @param delimiter 번호구분자
 * @returns
 */
function isMobileNo(phoneNo, delimiter) {
    delimiter = delimiter ? delimiter : "";
    return eval("(/01[016789]" + delimiter + "[1-9]{1}[0-9]{2,3}" + delimiter + "[0-9]{4}$/).test('" + phoneNo + "')");

}

/**
 * 전화번호인지 검사
 * 
 * @param phoneNo 전화번호
 * @param delimiter 번호구분자
 * @returns
 */
function isPhoneNo(phoneNo, delimiter) {
    delimiter = delimiter ? delimiter : "";
    return eval("(/(02|0[3-9]{1}[0-9]{1})" + delimiter + "[1-9]{1}[0-9]{2,3}" + delimiter + "[0-9]{4}$/).test('" + phoneNo + "')");

}

/**
 * datebox 를 사용해서 캘린더를 초기화 한다.
 * @param id
 * @param themeId
 */
function initCalendar2(id) {
	var options = '{'
			        + '"mode"                	: "calbox",'
			        + '"disableManualInput"  	: true,'
			        + '"noButton"            	: true,'
			        + '"focusMode"           	: false,'
			        + '"noAnimation"         	: true,'
			        + '"pickPageButtonTheme": "c",'
			        + '"calHighToday"        	: true,'
			        + '"centerWindow"        	: true,'
			        + '"useModal"            	: true'
			        + '}'
			        ;
	$("#" + id).attr('data-options', options);
	$("#" + id).attr('data-role','datebox');
	$("#" + id).attr('readonly','readonly');
	$("#" + id).css("text-align","center");
	
}

/**
 * 숫자에 "," 추가 (소수점 포함)
 */
function formatCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;

}

/**
 * YYYYMMDD 날짜포맷에 구분자 추가
 */
function formatYYYYMMDD(nStr, del) {
    if (nStr == null || nStr.length != 8) {
        return nStr;
    }
    
    return nStr.substring(0, 4) + del + nStr.substring(4, 6) + del + nStr.substring(6);

}

/**
 * YYYYMM 날짜포맷에 구분자 추가
 */
function formatYYYYMM(nStr, del) {
    if (nStr == null || nStr.length != 6) {
        return nStr;
    }

    return nStr.substring(0, 4) + del + nStr.substring(4, 6);

}

/**
 * HHMMSS 시분초 포맷에 구분자 추가
 */
function formatHHMMSS(nStr, del) {
    if (nStr == null || nStr.length != 6) {
        return nStr;
    }

    return nStr.substring(0, 2) + del + nStr.substring(2, 4) + del + nStr.substring(4, 6);

}

/**
 * 현재년도에 해당하는 달의 마지막 일자(yyyymmdd) 를 구한다. (윤달 포함)
 * mm : 월
 * formatChar : 	구분자(default- 포맷 없슴)
 * 					ex) '-' (yyyy-mm-dd), 'kor' (yyyy년mm월dd일)
 */
function getCurrYearLastDay(mm, formatChar){
	
	if(!isNaN(mm) && mm.length == 2 && parseInt(mm) < 13 && parseInt(mm) > 0  && mm.indexOf('-') < 0){}
	else{
		if(parseInt(mm) > 0 && parseInt(mm) < 10){
			mm = ('0'+mm);
		}else{
			mm = (''+mm);
		}
	}
	
	var now = new Date();
	var currYear = now.getFullYear();
	
	var currYearMonth = (currYear + mm);

	// getLastDay 호출.
	return getLastDay(currYearMonth, formatChar);
	
}

/**
 * 달의 마지막 일자(yyyymmdd) 를 구한다. (윤달 포함)
 * yyyymm : 년월
 * formatChar : 	구분자(default- 포맷 없슴)
 * 					ex) '-' (yyyy-mm-dd), 'kor' (yyyy년mm월dd일)
 */
function getLastDay(yyyymm, formatChar){
	
	if(!isNaN(yyyymm) && yyyymm.length == 6 && yyyymm.indexOf('-') < 0){}
	else{
		return '';
	}
	
	var end_yyyymmdd	= "";										// 결과값.
	
	var days 				= new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);		// 마지막 날짜 셋
	
	var tmpYear 			= yyyymm.substr(0,4);					// 파라미터 : 년도
	var tmpMonth 		= yyyymm.substr(4,2);					// 파라미터 : 월
	if(parseInt(tmpMonth) > 0 && parseInt(tmpMonth) < 13){}
	else{
		return '';
	}
	var tmpDay 			= days[parseInt(tmpMonth)-1];		// 날짜 - 월에 대한 마지막 날짜를 가져온다.
	
	// 2월이면
	if(tmpMonth == "02"){
		// 윤달 처리
		if(((tmpYear % 4 == 0) && (tmpYear % 100 != 0)) || (tmpYear % 400 == 0)){
			tmpDay	= 29;
		}
		
	}
	
	end_yyyymmdd	= yyyymm+tmpDay;
	
	// 결과값에 대한 format 처리.
	if(formatChar != null){
		var fmts;											// Array 변수 선언
		if(formatChar == 'kor'){
			fmts = new Array("년", "월", "일");
			
		}else{
			fmts = new Array(formatChar, formatChar, "");
			
		}
		
		end_yyyymmdd = end_yyyymmdd.substr(0, 4) + fmts[0] + end_yyyymmdd.substr(4, 2) + fmts[1] + end_yyyymmdd.substr(6, 2) + fmts[2];
		
	}
	
	return end_yyyymmdd;
	
}

/**
 * 입력날짜를 포맷처리 한다.
 * yyyymmdd : 년월일
 * formatChar : 	구분자(default- 포맷 없슴)
 * 					ex) '-' (yyyy-mm-dd), 'kor' (yyyy년mm월dd일)
 */
function getDayFmt(yyyymmdd, formatChar){
	
	if(!isNaN(yyyymmdd) && yyyymmdd.length == 8 && yyyymmdd.indexOf('-') < 0){}
	else{
		return '';
	}
	
	// format 처리.
	if(formatChar != null){
		var fmts;											// Array 변수 선언
		if(formatChar == 'kor'){
			fmts = new Array("년", "월", "일");
			
		}else{
			fmts = new Array(formatChar, formatChar, "");
			
		}
		
		end_yyyymmdd = yyyymmdd.substr(0, 4) + fmts[0] + yyyymmdd.substr(4, 2) + fmts[1] + yyyymmdd.substr(6, 2) + fmts[2];
		
	}
	
	return end_yyyymmdd;
	
}


//----------------------------------------------------------------------
// event 처리
//----------------------------------------------------------------------

/**
 * keydown 이벤트에서 숫자만 입력 확인
 */
function numberOnlyOnkeydown(event){
    if (event.which == 8) { // back space
        return;
    }
    if (!String.fromCharCode(event.which).match(/[0-9]/g)) {
        event.preventDefault();         
    }

}

/**
 * keydown 이벤트에서 금액만 입력 확인
 */
function currencyOnlyOnkeydown(event){
    if (event.which == 8) { // back space
        return;
    }
    if (!String.fromCharCode(event.which).match(/[0-9]/g)) {
        event.preventDefault();         
    }

}

/**
 * blur 이벤트에서 숫자에 comma 추가
 */
function addCommasOnBlur(event) {
    var value = formatCommas($(this).val().replace(/,/g, ""));
    if (value != "") {
        $(this).val(value);    	
    }
}

/**
 * Focus 시 입력값 클리어
 */
function clearOnFocus(event) {
	$(this).val(""); 
}

/**
 * JQUERY MOBILE DOM 객체 얻기
 */
function getJQMObject(selector) {
	return getCurrentPage().find(selector);

}


//----------------------------------------------------------------------
// 보안키패드 용 스크립트
//----------------------------------------------------------------------

var ENCRYTION_STR_PREFIX 	= "VPKEYPAD_STR_";
var ENCRYTION_NUM_PREFIX = "VPKEYPAD_NUM_";
var ENCRYPTED_FIELD_KEY  	= "Encrypted_Field_Key";

var nFilter_publicKey = "";
var keypadOn = false;

function onNumberKeypad(id, len, desc, masking, idCard) {

	if(keypadOn) {
		return;
	}
	
	keypadOn = true;
	
	$("#" + id).val("");
	$("#" + id).attr("iweb-encrypt-value", "");
	$("#" + id).attr("iweb-plain-value"  , "");

  window.location="call?cmd=showkeypad&mode=num&name="+id+"&len="+len+"&desc="+desc+"&masking="+masking+"&idCard=" + idCard + "&nFilter_publicKey=" + encodeURIComponent(nFilter_publicKey);

}

function onEngKeypad(id, len, desc, masking){

	if(keypadOn) {
		return;
	}

	keypadOn = true;
	
	$("#" + id).val("");
	$("#" + id).attr("iweb-encrypt-value", "");
	$("#" + id).attr("iweb-plain-value"  , "");
	
	window.location="call?cmd=showkeypad&mode=eng&name="+id+"&len="+len+"&desc="+desc+"&masking="+ masking + "&nFilter_publicKey=" + encodeURIComponent(nFilter_publicKey);

}

function vKeypadCallback(id, encryptValue, plainValue) {
	
	keypadOn = false;
	
	if (encryptValue == null || encryptValue == "" || plainValue == null || plainValue == "") {
		$("#" + id).val("");
		$("#" + id).attr("iweb-encrypt-value", "");
		$("#" + id).attr("iweb-plain-value"  , "");

		return;
	
	}
	
	var dummy = "";
	for(var i = 0; i < plainValue.length; i++) {
		dummy += "*";
	}
	
	$("#" + id).val(dummy);
	$("#" + id).attr("iweb-encrypt-value", encryptValue);
	$("#" + id).attr("iweb-plain-value"  , plainValue);

}

function vKeypadCancelCallback(id) {
	keypadOn = false;	

} 

function vKeypadCallbackForiPhone(id, encryptValue, plainValue) {
	keypadOn = false;
	
	if (encryptValue == null || encryptValue == "" || plainValue == null || plainValue == "") {
		$("#" + id).val("");
		$("#" + id).attr("iweb-encrypt-value", "");
		$("#" + id).attr("iweb-plain-value"  , "");

		return;
	
	}
	
	var dummy = "";
	for(var i = 0; i < plainValue.length; i++) {
		dummy += "*";
	}
	
	$("#" + id).val(dummy);
	$("#" + id).attr("iweb-encrypt-value", encryptValue);
	$("#" + id).attr("iweb-plain-value"  , plainValue);

}

function vKeypadCancelCallbackForiPhone(id) {
	keypadOn = false;	

}


function getDecryptValue(id) {
	if ($("#" + id).size() > 0) {
		return $("#" + id).attr("iweb-plain-value");
	}

	return "";

}

function initEncryptNumField(id, plainValue, dummyValue) {

	if (typeof(plainValue) == "undefined") {
		plainValue = "";
	}

	if (typeof(dummyValue) == "undefined") {
		dummyValue = "";
	}
	
	if (dummyValue == "" && plainValue != "") {
		for(var i = 0; i < plainValue.length; i++) {
			dummyValue += "*";
		}
	}
	
	$("#" + id).val(dummyValue);
	$("#" + id).attr("iweb-encrypt-type" , ENCRYTION_NUM_PREFIX);
	$("#" + id).attr("iweb-encrypt-value", "");
	$("#" + id).attr("iweb-plain-value"  , plainValue);

}

function initEncryptStrField(id, plainValue, dummyValue) {

	if (typeof(plainValue) == "undefined") {
		plainValue = "";
	}
	
	if (typeof(dummyValue) == "undefined") {
		dummyValue = "";
	}
	
	if (dummyValue == "" && plainValue != "") {
		for(var i = 0; i < plainValue.length; i++) {
			dummyValue += "*";
		}
	}
	
	$("#" + id).val(dummyValue);
	$("#" + id).attr("iweb-encrypt-type" , ENCRYTION_STR_PREFIX);
	$("#" + id).attr("iweb-encrypt-value", "");
	$("#" + id).attr("iweb-plain-value"  , plainValue);

}

function clearEncryptAttrs(id) {
	$("#" + id).val("");
	$("#" + id).attr("iweb-encrypt-type" , "");
	$("#" + id).attr("iweb-encrypt-value", "");
	$("#" + id).attr("iweb-plain-value"  , "");

}

