function LPAD(data, format, number)
{  
	if(!data || !format || data.length >= number)
	{
		return data
	}
	
	var max = (number - data.length)/format.length;
	for(var i = 0; i< max; i++)
	{
		data = format + data;
	}
	return data
}

function displayButtonByInput(inputElement, buttonElement, backElement)
{
	inputElement.addEventListener("focus", function()
	{
		buttonElement.setAttribute("style", "display:none");
		if (backElement != null && backElement != undefined)
			backElement.setAttribute("style", "margin-bottom:250px");
		var vars_type	= getUrlParameter("cur_vars_type");
		if (vars_type == "" || vars_type == undefined)
	     	vars_type = "C";
		 
		if (vars_type == "C")
		{
			window.scrollTo(0, 1000);
		}
		
	}.bind(null, buttonElement), true);
	
	inputElement.addEventListener("blur", function()
	{
		buttonElement.setAttribute("style", "display:block");

	}.bind(null, buttonElement), true);
	
}

function initSKKeypad(varsionPath, elements)
{
	if (nshc == null || nshc == undefined)
	{
		console.log("nshc is undefined or non object");
		return false;
	}
	
	for (var i = 0; i < elements.length; i++)
		elements[i].disabled	= true;
	
	var httpRequest	= new XMLHttpRequest();
	if (!httpRequest)
	{
		console.log("not make http request object");
		return false;
	}
	
	httpRequest.onreadystatechange = function(elements, httpRequest, varsionPath)
	{
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
		{
			console.log("ajax not ready");
			return;
		}
		if (httpRequest.status !== 200)
		{
			console.log("http status is not 200");
			return;
		}
		
		var source		= httpRequest.responseText;
		if (source == "")
		{
			console.log("ajax response is empty");
			return;
		}
	
		try
		{
			var tempSource		= JSON.parse(source);
			//testlog(source);
			if (!tempSource.hasOwnProperty("randomIdLength"))
			{
				console.log("nfilter setting data is uncorrect");
				testlog("nfilter setting data is uncorrect");
				return;
			}
			
			nshc.contextPath				= tempSource.contextPath;
			nshc.CSSPath					= varsionPath + "nfilter/css";
			nshc.imgPath					= varsionPath + "nfilter/image";
			nshc.randomIdLength				= tempSource.randomIdLength;
			nshc.serviceNameKeypadManager	= tempSource.serviceNameManager;
			nshc.algName					= tempSource.algName;
			nshc.keyLength					= tempSource.keyLength;
			
			nshc.setOnInitStart();
			//nshc.setViewFormatting("formatting1=-;4;4*;4*;4|formatting2=,");
			
			for (var index in elements)
			{
				var element	= elements[index];
				nshc.setCommon(element, "mode=nAKpd"); // 숫자, typeA
			}
			
			nshc.ownCallback	= function(msg, inputID)
			{
				if (msg == "enter")
				{
					var encryptData	= nshc.encrypted(inputID);
					encryptData 	= encodeURIComponent(encryptData);
					var element		= document.getElementById(inputID);
					var value		= element.value.trim();
					callbackKeypad(inputID, encryptData, value.length);
					
					if (sendData != undefined)
						sendData(element, "RT");
					
					return;
				}
				
				return;
			}
			
			nshc.setInit();
			
			nshc.setOnInitFinished = function()
			{
				var length	= elements.length;
				for (var i = 0; i < length; i++)
				{
					if (elements[i].disabled)
						elements[i].disabled	= false;
				}	
			}
		}
		catch (ex)
		{
			//testlog(ex.stack);
		}
		
	}.bind(null, elements, httpRequest, varsionPath);
	
	var path	= location.protocol + "//" + location.host + "/OpenWebNFilter.jsp" ;
	httpRequest.open('GET', path);
	httpRequest.send();
	
	return true;
}

function setCss(varsionPath, curType)
{
	if (curType == "" || curType == undefined)
		curType 	= "C";
	
	var commonCss	= document.createElement("link");
	var contentCss	= document.createElement("link");
	
	commonCss.setAttribute("rel", "stylesheet");
	contentCss.setAttribute("rel", "stylesheet");
	commonCss.setAttribute("type", "text/css");
	contentCss.setAttribute("type", "text/css");
	var commonPath	= "";
	var contentPath	= "";
	
	if (curType == "T")
	{
		commonPath = varsionPath + 'css_t/new_style.css';
		contentPath = varsionPath + 'css_t/new_style.css';
	}
	else
	{
		commonPath = varsionPath + 'css_c/new_style.css';
		contentPath = varsionPath + 'css_c/new_style.css';
	}

	commonCss.setAttribute("href", commonPath);
	contentCss.setAttribute("href", contentPath);
	
	var head	= document.getElementsByTagName("head").item(0);
	head.appendChild(commonCss);
	head.appendChild(contentCss);
	
	return;
}

/*
 * 	여러 element의 attribute(css. style 등)을 반영
 */
function setAttribute(curType, attrList)
{
	// 만약 curType이 비어있거나 undefined이면 "C"로 설정
	if (curType == "" || curType == undefined)
		curType 	= "C";
	
	// attrList의 각 요소를 반복
	for (var index in attrList)
	{
		var attrItem	= attrList[index];
		// varsType이 비어있거나 undefined이면 콘솔에 로그를 남기고 다음 반복으로 넘어감
		if (attrItem.varsType == "" || attrItem.varsType == undefined)
		{
			console.log("vars type is empty");
			continue;
		}
		// varsType이 현재 타입과 다르고 else가 비어있거나 undefined이면 다음 반복으로 넘어감
		if (attrItem.varsType != curType && (attrItem.else == "" || attrItem.else == undefined))
			continue;
		// elemName이 비어있거나 undefined이면 콘솔에 로그를 남기고 다음 반복으로 넘어감
		if (attrItem.elemName == "" || attrItem.elemName == undefined)
		{
			console.log("element name is empty");
			continue;
		}
		// attrType이 비어있거나 undefined이면 콘솔에 로그를 남기고 다음 반복으로 넘어감
		if (attrItem.attrType == "" || attrItem.attrType == undefined)
		{
			console.log("attribute type is empty");
			continue;
		}
		// value가 undefined이면 빈 문자열로 설정
		if (attrItem.value == undefined)
			attrItem.value	= "";
		// elemName으로 HTML 요소를 찾음
		var element	= document.getElementById(attrItem.elemName);
		// 요소가 null이면 콘솔에 로그를 남기고 다음 반복으로 넘어감
		if (element == null)
		{
			console.log("element is null. element Name : " + attrItem.elemName);
			continue;
		}
		// 설정할 값을 선택합니다. varsType이 현재 타입과 다르고 else가 설정되어 있으면 else 값을 사용
		var value	= attrItem.value;
		if (attrItem.varsType != curType && (attrItem.else != "" && attrItem.else != undefined))
			value	= attrItem.else;
		// 값이 "remove"이면 요소를 부모 노드에서 제거
		if (value == "remove")
		{
			element.parentNode.removeChild(element);
			continue;
		}
		// 요소의 속성을 설정
		element.setAttribute(attrItem.attrType, value);
	}
	
	return;
}

/*
 *	2018.01.03
 *	B 보이는 ARS / 콜게이트 ARS 값을 받는다.
 */
window.addEventListener("load", function()
{
	if ($ == null)
		$	= own.noConflict();
	
	var vars_type	= getUrlParameter("cur_vars_type");
	if (vars_type == "" || vars_type == undefined)
     	vars_type = "C";
	 
	if (vars_type == "C")
	{
		var run_time	= getUrlParameter("run_time");
		//run_time		= "2019-07-16 09:58:380";
		var countTime = 0;
		if (run_time != "")
		{
			var arrDateTime	= run_time.split(" ");
			var arrDate		= arrDateTime[0].split("-");
			var arrTime		= arrDateTime[1].split(":");
			var year		= arrDate[0].substring(2, 4);
			var conTime		= new Date(	
										parseInt(arrDate[0]), 
										parseInt(arrDate[1]) - 1, 
										parseInt(arrDate[2]), 
										parseInt(arrTime[0]), 
										parseInt(arrTime[1]), 
										parseInt(arrTime[2])
									  );
			setInterval(function()
			{
				var dateTime 	= new Date();
				countTime 		= dateTime - conTime;
				countTime 		= Math.round(countTime/1000) * 1;
				if (countTime < 0)
				{
					countTime	= 0;
					countTime 	= Math.round(countTime/1000) * 1;
				}
				
				m 				= LPAD(Math.floor(countTime / 60)+'','0',2) + "분" + LPAD((countTime % 60)+'','0',2) + "초" ;
				msg 			= "SKT 114&nbsp;&nbsp;&nbsp;"+m;
				$("#typeTitle").html(msg);
				
			}, 1000);
		}
	}
	
	var closeCallgate	= document.getElementById("btnCloseCallgate");	
	closeCallgate.addEventListener("click", function()
	{
		if ($ == undefined)
			$ = own.noConflict();
		sendRepPageData("callgate", "D", 'menu');
		setTimeout(function()
		{
			var vars_type	= getUrlParameter("cur_vars_type");
			if (vars_type == "" || vars_type == undefined)
		     	vars_type = "C";
			
			if (vars_type == "T")
				changeoverPhone(false);

		}, 500);
	});
	
	var inElement		= document.getElementById("vars_type");
	if (inElement == null)
	{
		inElement		= document.createElement("input");
		inElement.setAttribute("type", "hidden");
		inElement.setAttribute("id", "vars_type");
		inElement.setAttribute("iweb-data", "in");
		
		document.getElementsByTagName("body").item(0).appendChild(inElement);
	}
	
	inElement.setAttribute("value", vars_type);
	
	return;
});