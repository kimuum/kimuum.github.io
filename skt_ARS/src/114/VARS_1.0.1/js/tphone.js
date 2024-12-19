//=============================================
// tphone.js 공통 스크립트 - t전화 앱 연동 API
//=============================================


/* --------------------------------------------------------------------------------------
 * 1. capturePhone 			: 현재 화면을 사진함에 저장합니다.
 * 2. collapsePhone			: 확장 모드였다면 일반 모드로 전환합니다.
 * 3. copyPhone				: 문자열을 클립보드에 복사합니다.
 * 4. changeoverPhone		: 일반 통화로 전환합니다.
 * 5. showkeypadPhone 	: 보안키패드를 띄웁니다.
 * 6. callPhone				: 전화를 발신합니다.
 -------------------------------------------------------------------------------------- */


// *************************************************
// 	t전화 앱 이벤트 함수 정의
// *************************************************

//-------------------------------------------------------------------------------------------------------------------
// 1. 현재 화면을 사진함에 저장합니다. 응답은 activity가 내려가지 않는 상황을 제외하고는 호출됩니다.
//-------------------------------------------------------------------------------------------------------------------
function capturePhone(obj){
	try{
		if(obj != null){
			obj.prop('disabled', true);
		}
		
		location.href = "tphone-api://visualcall?method=capture&callback=callbackPhone";
	
	}catch(e){
		if(obj != null){
			obj.prop('disabled', false);
		}
		
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// 2. 확장 모드였다면 일반 모드로 전환합니다. 응답은 activity가 내려가지 않는 상황을 제외하고는 호출됩니다.
//-------------------------------------------------------------------------------------------------------------------
// dtmfYn - DTMF 보여줄지 여부 (default: 안보여줌)
//-------------------------------------------------------------------------------------------------------------------
function collapsePhone(dtmfYn){
	try{
		var tempURL = "tphone-api://visualcall?method=collapse&callback=callbackPhone";
		if(dtmfYn == null){}
		else if(dtmfYn) tempURL += "&dtmf="+dtmfYn;
			
		location.href = tempURL;
				
	}catch(e){
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// 3. 문자열을 클립보드에 복사합니다. 응답은 activity가 내려가지 않는 상황을 제외하고는 호출됩니다.
//-------------------------------------------------------------------------------------------------------------------
// txt - 복사할 텍스트
//-------------------------------------------------------------------------------------------------------------------
function copyPhone(txt, callbackName){
	if(txt == null || txt == "") return;
	try{
		var name = "";
		if(callbackName == null || callbackName == "") name = "callbackPhone";
		else name = callbackName;
		
		location.href = "tphone-api://visualcall?method=copy&text="+txt+"&callback="+name;
	
	}catch(e){
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// 4. 일반 통화로 전환합니다. 웹뷰를 종료하기 때문에 응답은 없습니다.
//-------------------------------------------------------------------------------------------------------------------
// dtmfYn - DTMF 보여줄지 여부 (default: 안보여줌)
//-------------------------------------------------------------------------------------------------------------------
function changeoverPhone(dtmfYn){
	
	try
	{
		var varsType	= getUrlParameter("cur_vars_type");
		if (varsType != 'C')
		{
			var param = "tphone-api://visualcall?method=changeover";
			if(dtmfYn == null){}
			else if(dtmfYn) param += "&dtmf="+dtmfYn;
			
			location.href = param;
		}
	}
	catch(e)
	{
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// 5. 보안키패드를 띄웁니다. 응답은 activity가 내려가지 않는 상황을 제외하고는 호출됩니다.
//-------------------------------------------------------------------------------------------------------------------
// mode 		- "num" or "eng" (키패드 종류)
// fieldname	- 필드명 (default: 빈문자열)
// len			- 입력값 최대길이 (1 이상, default: 최대)
// title			- 입력박스 상단 문자열 (없거나 비어 있으면 default 값 사용예정)
// publickey	- 공개키 설정.
//-------------------------------------------------------------------------------------------------------------------
function showkeypadPhone(mode, fieldname, len, title, publickey){
	if(mode == null || fieldname == null || len == null || title == null || publickey == null
			|| mode == "" || fieldname == "" || len == "" || title == "" || publickey == "") return;
	try{
		location.href = "tphone-api://visualcall?method=showkeypad&mode="+mode+"&fieldname="+fieldname+"&len="+len+"&title="+title+"&pub_key="+encodeURIComponent(publickey)+"&callback=callbackKeypad";
		
	}catch(e){
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// 6. 전화를 발신합니다. 응답은 없습니다.
//-------------------------------------------------------------------------------------------------------------------
// callNumber	- 문자열 (전화번호)
//-------------------------------------------------------------------------------------------------------------------
function callPhone(callNumber){
	if(callNumber == null) return;
	try{
		location.href = "tphone-api://visualcall?method=call&number="+callNumber;
		
	}catch(e){
		jAlert("<p>api 호출 오류!</p>", '');
	}
	
}

// *************************************************
// 	콜백함수 정의
// *************************************************

//-------------------------------------------------------------------------------------------------------------------
// CALLBACK 함수 - callbackPhone
//-------------------------------------------------------------------------------------------------------------------
// ret - boolean(성공/ 실패)
//-------------------------------------------------------------------------------------------------------------------
function callbackPhone(ret){
	if(ret){
		try{
			callbackTPhone(ret);
			
		}catch(e){}
		
	}
	else{
		jAlert("<p>error!!</p>", '');
		try{
			callbackTPhone(ret);
			
		}catch(e){}
		
	}
	
}

//-------------------------------------------------------------------------------------------------------------------
// CALLBACK 함수 - callbackKeypad
//-------------------------------------------------------------------------------------------------------------------
// fieldname(필드명), encryptData(암호화된 데이터), inputDataLength(입력된 문자열 길이)
//-------------------------------------------------------------------------------------------------------------------
function callbackKeypad(fieldname, encryptData, inputDataLength){
	
	if(fieldname == null || encryptData == null || inputDataLength == null
			|| fieldname == "" || encryptData == "" || inputDataLength == ""){
	
		console.log("callback empty!!");
		
	}else{
		var vars_type	= getUrlParameter("cur_vars_type");
		if (vars_type == "" || vars_type == undefined)
	     	vars_type = "C";
		
		//callgate가 아닐 때는 표시하지 않는다.
		if (vars_type != "C")
		{
			for(var i=0; i< inputDataLength; i++)
			{
				document.getElementById(fieldname).value += "●";			// 입력필드 길이 만큼 비밀번호 mask 생성.
			}
		}
		
		document.getElementById(fieldname).setAttribute('iweb-encrypt-value', encryptData);
		
	}
	
}

