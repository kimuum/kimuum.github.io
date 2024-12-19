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
				if (msg == "close" || msg == "enter")
				{
					var encryptData	= nshc.encrypted(inputID);
					encryptData 	= encodeURIComponent(encryptData);
					var value		= document.getElementById(inputID).value.trim();
					callbackKeypad(inputID, encryptData, value.length);
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

/*
 * 	여러 element의 attribute(css. style 등)을 반영
 */
function setAttribute(curType, attrList)
{
	if (curType == "" || curType == undefined)
		curType 	= "C";
	
	for (var index in attrList)
	{
		var attrItem	= attrList[index];
		if (attrItem.varsType == "" || attrItem.varsType == undefined)
		{
			console.log("vars type is empty");
			continue;
		}
		
		if (attrItem.varsType != curType && (attrItem.else == "" || attrItem.else == undefined))
			continue;
		
		if (attrItem.elemName == "" || attrItem.elemName == undefined)
		{
			console.log("element name is empty");
			continue;
		}
		
		if (attrItem.attrType == "" || attrItem.attrType == undefined)
		{
			console.log("attribute type is empty");
			continue;
		}
		
		if (attrItem.value == undefined)
			attrItem.value	= "";
		
		var element	= document.getElementById(attrItem.elemName);
		if (element == null)
		{
			console.log("element is null. element Name : " + attrItem.elemName);
			continue;
		}
		
		var value	= attrItem.value;
		if (attrItem.varsType != curType && (attrItem.else != "" && attrItem.else != undefined))
			value	= attrItem.else;
		
		if (value == "remove")
		{
			element.parentNode.removeChild(element);
			continue;
		}
		
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
	//보안키패드 충돌 방지
	if ($ == null)
		$	= own.noConflict();
	
	var vars_type	= getUrlParameter("cur_vars_type");
	if (vars_type == "" || vars_type == undefined)
     	vars_type = "C";
	 
	if (vars_type == "C")
	{
		var run_time	= getUrlParameter("run_time");
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
				msg 			= "SKT 1600-2000&nbsp;&nbsp;&nbsp;"+m;
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