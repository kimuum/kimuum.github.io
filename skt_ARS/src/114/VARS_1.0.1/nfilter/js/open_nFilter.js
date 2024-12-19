// Open Web NFilter v4.0_release

var nshc = nshc || {};

nshc.isFinishInit = false;
nshc.setInitState = true;
nshc.jSPublicKey = "";
nshc.maxLength = false;
nshc.inputMax = 13;
nshc.escClick = false;
nshc.jsEncData = "";
nshc.sPubKey = "";
nshc.secretKey = "";
nshc.maxCall = false;
nshc.OnorientationchangeStyle = false;
nshc.contextPath = "";
nshc.CSSPath = "/nfilter/css";
nshc.imgPath = "/nfilter/image";
nshc.language = "";
nshc.randomIdLength = 10;
nshc.isEncryptImmediate = true;
nshc.secElement = "";
nshc.serviceNameKeypadManager = "NFilterKeypadManager";
nshc.serviceNameCSManager = "NFilterCSManager";
nshc.serviceNameJSManager = "NFilterJSManager";
nshc.requestParamIsKeypadInit = "nfilter_is_init";
nshc.requestParamSecretValue = "nfilter_encrypted";
nshc.responseErrCdPrefix = "ErrCode:";
nshc.responseErrMsgPrefix = "ErrMsg:";
nshc.responseErrCallBackType = "";
nshc.keypadIdTargetSuffix = "_nfilter_sec";
nshc.loadingStatusEnabled = false;
nshc.inputTargetElement;
nshc.inputDisplayElement;
nshc.CSPublicKey = "";
nshc.CSReturnURL = "";
nshc.JSReturnURL = "";
nshc.JSresult = "";
nshc.xmlHttp;
nshc.algName = "";
nshc.securityKeyPair = "";
nshc.securityPrikey = "";
nshc.securityPubkey = "";
nshc.hiddenFieldId = "";
nshc.financialEcdhPublicKey = "";
nshc.msgKeypadLoading = new Array();
nshc.msgMinCheck = new Array();
nshc.msgMaxCheck = new Array();
nshc.finiahedCallback = null;
nshc.financialRsaPublicKey = "";
nshc.financialRsaExponent = "";
nshc.callbackMsg = null;
nshc.siteIndividualSetting = "site_name";       
nshc.siteName = "default";                      
nshc.csrfTokenData = null;                      
nshc.inputEventUse = true;                      
nshc.capslockEnabled = false;                   
nshc.extDisplayElementId = "";
nshc.typeArray = new Array;
nshc.typeString = "";
nshc.keypadShowType = "";
nshc.keypadIdType = "";
nshc.BGEnabled = true;                          
nshc.renewEnabled = true;                       
nshc.formattingElement = new Array();           
nshc.planTextChangeEnabled = true;              
nshc.keyMaskingColor = null;                    
nshc.saveKey = false;                           
nshc.kdpBottomFix = false                       
nshc.numFixSize = 400;                          
nshc.currentInputObj = null;                    
nshc.ownCallback = null;

nshc.msgKeypadLoading["ko"] = "보안키패드 작동 중";
nshc.msgKeypadLoading["en"] = "Virtual Keyboard Loading";
nshc.msgKeypadLoading["ve"] = "Virtual Keyboard Loading";
nshc.msgKeypadLoading["vn"] = nshc.msgKeypadLoading["ve"];
nshc.msgKeypadLoading["ja"] = "Virtual Keyboard Loading";
nshc.msgMinCheck["ko"] = "[가상키보드] 최소 #1자 이상 입력하셔야합니다.";
nshc.msgMinCheck["en"] = "[Virtual Keyboard] You must enter at least #1 characters.";
nshc.msgMinCheck["ve"] = "[Virtual Keyboard] Bạn phải nhập ít nhất #1 ký tự";
nshc.msgMinCheck["vn"] = nshc.msgMinCheck["ve"];
nshc.msgMinCheck["ja"] = "[ソフトウェアキーボード] 最小#1文字以上、入力して下さい。";
nshc.msgMaxCheck["ko"] = "[가상키보드] 최대 #1자 이하까지 입력하실 수 있습니다.";
nshc.msgMaxCheck["en"] = "[Virtual Keyboard] You must enter at most #1 characters.";
nshc.msgMaxCheck["ve"] = "[Virtual Keyboard] Bạn phải nhập lên #1 ký hơn";
nshc.msgMaxCheck["vn"] = nshc.msgMaxCheck["ve"];
nshc.msgMaxCheck["ja"] = "[ソフトウェアキーボード] 最大#1文字以下、入力して下さい。";







nshc.setCallBackType = function (callbackType) {
    nshc.responseErrCallBackType = callbackType;
}


nshc.setCSPublicKey = function (sessionPublicKey) {
    nshc.CSPublicKey = sessionPublicKey;
}


nshc.setCSReturnURL = function (csReturnUrl) {
    nshc.CSReturnURL = csReturnUrl;
}


nshc.setLanguage = function (requestLanguage) {
    if (requestLanguage != null && requestLanguage != undefined && requestLanguage != "") {
        nshc.language = requestLanguage;
    }
}


nshc.setLoadingStatusEnable = function (isEnable) {
    nshc.loadingStatusEnabled = isEnable;
}


nshc.setExtAfterCSForword = function () {
}


nshc.setJSPublicKey = function (severPublicKey) {
    nshc.jSPublicKey = severPublicKey;
}


nshc.setJSReturnURL = function (jsReturnUrl) {
    nshc.JSReturnURL = jsReturnUrl;
}


nshc.setFixInitState = function () {
    if (nshc.jSPublicKey != "") {
        nshc.setInitState = false;
    }
}


nshc.setFinancialEcdhPublicKey = function (key) {
    nshc.financialEcdhPublicKey = key;
}

nshc.setIsFinishInit = function () {
    return nshc.isFinishInit;
}


nshc.setOnInitStart = function () {
    
    console.log("setIsFinishInit >> " + nshc.setIsFinishInit());
	//testlog("setOnInitStart isFinishInit >> " + nshc.setIsFinishInit());
}


nshc.setOnInitFinished = function () {
    
    console.log("setIsFinishInit >> " + nshc.setIsFinishInit());
    //("setIsFinishInit >> " + nshc.setIsFinishInit());
    
    if (nshc.finiahedCallback != null) {
        nshc.finiahedCallback();
    }
}


nshc.setRemoveAllKeypad = function () {
    var inputKey = document.getElementsByTagName("input");
    for (i = 0; i < inputKey.length; i++) {
        if (inputKey[i].getAttribute("nfilter") == "on") {
            if (inputKey[i].getAttribute("decarea") != null) {
                inputKey[i].removeAttribute("decarea");
            }
            nshc.beforeClose(inputKey[i].getAttribute("id"));
            inputKey[i].parentNode.removeChild(inputKey[i].nextSibling);
        }
    }
}


nshc.setRemoveKeypad = function (elementId) {
    var inputKey = document.getElementById(elementId);
    if (inputKey.getAttribute("nfilter") == "on") {
        if (inputKey.getAttribute("decarea") != null) {
            inputKey.removeAttribute("decarea");
        }
        nshc.beforeClose(elementId);
        inputKey.parentNode.removeChild(inputKey.nextSibling);
    }
}


nshc.setFinishiedCallback = function (callback) {
    nshc.finiahedCallback = callback;
}


nshc.setViewFormatting = function (args) {
    nshc.formattingElement = args.split('|');
    var elementArr = "";
    if (nshc.formattingElement.length > 0) {
        for (var int = 0; int < nshc.formattingElement.length; int++) {
            
            elementArr = nshc.formattingElement[int].split('=');
            document.getElementById(elementArr[0]).setAttribute("viewType", elementArr[1]);
        }
    }
}


nshc.setCsrfToken = function (token) {
    nshc.csrfTokenData = token;
}


nshc.setInputEvent = function (state) {
    nshc.inputEventUse = state;
}


nshc.setEncryptImmediateNotUse = function () {
    nshc.isEncryptImmediate = false;
}


nshc.setBgNotUse = function () {
    nshc.BGEnabled = false;
}


nshc.setRenewNotUse = function () {
    nshc.renewEnabled = false;
}


nshc.setPlanTextChangeNotUse = function () {
    nshc.planTextChangeEnabled = false;
}


nshc.setMaskingColor = function (color) {
    nshc.keyMaskingColor = color;
}


nshc.setKpdBottomFix = function () {
    nshc.kdpBottomFix = true;
}


nshc.setPcNumKpdWidth = function (val) {
    nshc.numFixSize = val;
}


nshc.setMultiDummy = function (multi) {
    if (multi != undefined || multi != null) {
        nshc.multiDummy = multi;
    }
}


nshc.setRandomNumKpd = function () {
    nshc.randomNumKdp = true;
}


nshc.setCommon = function (obj, strAttribute) {
    nshc.setFieldConfig(obj.id, "nfilter=on," + strAttribute);
}


nshc.setInit = function () {
	//testlog("1");
    nshc.extRegistEventOnKeyDownUp();
    //testlog("2");
    /*
    var extCss = document.createElement("link");
    extCss.setAttribute("rel", "stylesheet");
    extCss.setAttribute("type", "text/css");
    extCss.setAttribute("id", "open_nFilter_css");
    extCss.setAttribute("href", nshc.CSSPath + "/" + nshc.siteName + "/" + "open_nFilter.css");
    //testlog("3");
    //testlog(nshc.CSSPath + "/" + nshc.siteName + "/" + "open_nFilter.css");
    var headNode = document.getElementsByTagName("head")[0];
    headNode.appendChild(extCss);
    //testlog("4");
    */

    nshc.keypadInit(nshc.setInitState, false, nshc.hiddenFieldId, nshc.extDisplayElementId, "");
    //testlog("5");
}


nshc.setFinancialInputField = function (args) {
    var financialElement = args.split('|');
    if (financialElement.length > 0) {
        for (var int = 0; int < financialElement.length; int++) {
            document.getElementById(financialElement[int]).setAttribute("decarea", "financial");
        }
    }
}






nshc.setFieldConfig = function (id, strAttribute) {
    nshc.extDisplayElementId = id;
    if (!nshc.isElementExist(id, document)) {
        return false;
    }
    var input = document.getElementById(id);
    var ary = strAttribute.split(",");
    if (input != null && input != "undefined") {
        for (var i = 0; i < ary.length; i++) {
            nshc.keypadIdType = input.id + "|";
            var tmp = ary[i];
            var name = tmp.substr(0, tmp.indexOf("="));
            var value = tmp.substr(ary[i].indexOf("=") + 1);

            input.setAttribute(name, value);
            input.blur();
            input.readOnly = true;
        }

        if (nshc.inputEventUse == true) {     
            
            input.onfocus = function (e) {
                var inputKey = document.getElementsByTagName("input");
                for (i = 0; i < inputKey.length; i++) {
                    if (inputKey[i].getAttribute("nfilter") == "on") {
                        if (nshc.secElement == "" && nshc.BGEnabled == false) {
                            nshc.close(nshc.inputDisplayElement, "close", e.target);
                        } else if (nshc.secElement != "" && nshc.BGEnabled == false) {
                            if (nshc.isEncryptImmediate == true) {
                                if (nshc.algName == "ECDH") {
                                    nshc.inputTargetElement.value = nshc.inputEncryptEcdh(nshc.secElement);
                                } else {
                                    nshc.inputTargetElement.value = nshc.inputEncryptRSA(nshc.secElement);
                                }
                            }
                            if (nshc.planTextChangeEnabled == true) {
                                nshc.inputDisplayElement.value = nshc.inputDisplayElement.value.replace(/.$/, "*");
                            }
                            nshc.close(nshc.inputDisplayElement, "enter");
                        } else if (document.getElementById("nfilter_document").style.display == "block" && nshc.BGEnabled == true) {
                            nshc.close(nshc.inputDisplayElement, "close", e.target);
                            return;
                        }

                        var mode = document.getElementById(id).getAttribute("mode");
                        if (mode == "nAKpd" || mode == "nBKpd" || mode == "nCKpd") {
                            if (mode == "nAKpd") {
                                own('.ownKeypadWrap .kpdNum').addClass('typeA');
                            } else if (mode == "nBKpd") {
                                own('.ownKeypadWrap .kpdNum').addClass('typeB');
                            } else if (mode == "nCKpd") {
                                own('.ownKeypadWrap .kpdNum').addClass('typeC');
                            }
                        } else if (mode == "pcCKpd") {
                            own('.ownKeypadWrap .kpdChar').addClass('pc');
                        } else if (mode == "mCKpd") {
                            own('.ownKeypadWrap .kpdChar').addClass('mobile');
                        }

                        
                        if (nshc.language != null && nshc.language != undefined && nshc.language != "" && nshc.language != "ko") {
                            own('#ownKeypad .kpdChar.pc.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_pc_" + nshc.language + ".png)"});
                            own('#ownKeypad .kpdChar.pc .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_pc_" + nshc.language + ".png)"});
                            own('#ownKeypad .kpdChar.mobile.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_mobile_" + nshc.language + ".png)"});
                            own('#ownKeypad .kpdChar.mobile .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_mobile_" + nshc.language + ".png)"});
                        } else {
                            own('#ownKeypad .kpdChar.pc.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_pc.png)"});
                            own('#ownKeypad .kpdChar.pc .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_pc.png)"});
                            own('#ownKeypad .kpdChar.mobile.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_mobile.png)"});
                            own('#ownKeypad .kpdChar.mobile .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_qwer_mobile.png)"});
                        }
                        own('#ownKeypad .kpdNum.typeA.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_3_4.png)"});
                        own('#ownKeypad .kpdNum.typeA .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_3_4.png)"});
                        own('#ownKeypad .kpdNum.typeB.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_4_3.png)"});
                        own('#ownKeypad .kpdNum.typeB .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_4_3.png)"});
                        own('#ownKeypad .kpdNum.typeC.kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_2_6.png)"});
                        own('#ownKeypad .kpdNum.typeC .kpd-img').css({"background": "url(" + nshc.imgPath + "/" + nshc.siteName + "/" + "ownKpd_num_2_6.png)"});

                        
                        nshc.kpd.checkKpdType(mode);
                        nshc.kpd.init();
                        
                        nshc.keypadShowType = mode;

                        nshc.setHiddenFieldId(id);
                        nshc.keypadShow(e, nshc.keypadShowType, nshc.hiddenFieldId, id, true);

                        break;
                    }
                }
                
                nshc.currentInputObj = e;
            };
        }

        
        if (!nshc.isElementExist(id + "_nfilter_sec")) {
            var inputTargetElement = document.createElement("input");
            inputTargetElement.setAttribute("type", "hidden");

            
            var decArea = document.getElementById(id).getAttribute("decarea");
            
            if (decArea != undefined) {
                inputTargetElement.setAttribute("id", id + "_nfilter_sec_" + decArea);
                inputTargetElement.setAttribute("name", id + "_nfilter_sec_" + decArea);
            } else {
                inputTargetElement.setAttribute("id", id + "_nfilter_sec");
                inputTargetElement.setAttribute("name", id + "_nfilter_sec");
            }
        }
    }

    
    nshc.typeString += nshc.keypadIdType;
    nshc.typeArray = nshc.typeString.split("|");

    nshc.setHiddenFieldId(id);
}


nshc.setHiddenFieldId = function (id) {
    var decArea = document.getElementById(id).getAttribute("decarea");
    if (decArea != undefined) {
        nshc.hiddenFieldId = id + "_nfilter_sec_" + decArea;
    } else {
        nshc.hiddenFieldId = id + "_nfilter_sec";
    }
}


nshc.keypadInit = function (isKeypadInit, isDisplay, targetElementId, displayElementId, responseElementId) 
{
    nshc.securityKeyPair = new GenECKeyPair("secp256r1");
    nshc.securityPrikey = nshc.securityKeyPair.getPriKey();
    nshc.securityPubkey = nshc.securityKeyPair.getPubKey();

    nshc.createDocument();

    var requestParam = "";
    nshc.language = (nshc.language != null && nshc.language != undefined && nshc.language != "") ? nshc.language : "ko";
    requestParam = nshc.requestParamIsKeypadInit + "=" + isKeypadInit;
    //testlog(requestParam);
    nshc.asyncRequest(nshc.contextPath + "/" + nshc.serviceNameKeypadManager, requestParam, function () 
    {
    	//("1-1");
        if (nshc.xmlHttp.readyState == 1 || nshc.xmlHttp.readySate == 2 || nshc.xmlHttp.readyState == 3) 
        {
        	//testlog("2-1");
            if (nshc.loadingStatusEnabled) 
            {
                if (!document.getElementById("nfilter_loading")) 
                {
                    document.getElementById("nfilter_document").innerHTML += "<div id='nfilter_loading' " +
                        "style='position:absolute;z-index:1000;" +
                        "padding: 7.5px 15px;font-size: 15px;" +
                        "top:50%;left:50%;margin: -50px 0 0 -70px;background: #ffffff;" +
                        "border: 1px solid #8f8f8f;" +
                        "background: #949494;" +
                        "background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));" +
                        "background: -moz-linear-gradient(top, #ffffff, #ffffff);" +
                        "-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;" +
                        "-webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;-moz-box-shadow: rgba(0,0,0,1) 0 1px 0;box-shadow: rgba(0,0,0,1) 0 1px 0;'>" + nshc.msgKeypadLoading[nshc.language] + "</div>";
                } 
                else 
                {
                    document.getElementById("nfilter_loading").style.display = "block";
                }
            }
        } 
        else if (nshc.xmlHttp.readyState == 4 && nshc.xmlHttp.status == 200) 
        {
        	//testlog("3-1");
            if (nshc.loadingStatusEnabled) 
            {
            	//testlog("3-2");
                document.getElementById("nfilter_loading").style.display = "none";
                nshc.loadingStatusEnabled = false;
            }
            
            //testlog("3-3");
            if (nshc.responseErrCdPrefix == nshc.xmlHttp.responseText.substr(0, 8)) 
            {
                if (responseElementId != null && responseElementId != "") 
                {
                    if (typeof nshc.extExceptionCallBack == "function") 
                    {
                    	//testlog("3-4");
                        nshc.extExceptionCallBack(nshc.xmlHttp.responseText, responseElementId);
                    }
                } 
                else 
                {
                    if (typeof nshc.extExceptionCallBack == "function") 
                    {
                    	//testlog("3-5");
                        nshc.extExceptionCallBack(nshc.xmlHttp.responseText, "");
                    }
                }
            } 
            else 
            {
            	//testlog("3-6");
            	//testlog(nshc.xmlHttp.responseText);
            	document.getElementById("nfilter_document").innerHTML = nshc.xmlHttp.responseText;
                nshc.initAfter(isDisplay, targetElementId, displayElementId);
                
                nshc.isFinishInit = true;
                nshc.setOnInitFinished();
                nshc.isFinishInit = false;
            
            }
        }
    });
}



nshc.createDocument = function () {
    if (!document.getElementById("nfilter_document")) {
        var bGElement = document.createElement("div");
        bGElement.setAttribute("id", "ownKeypadBG");
        bGElement.setAttribute("class", "ownKeypadBG");
        bGElement.setAttribute("style", "display: none");
        document.body.appendChild(bGElement);
        var documentElement = document.createElement("div");
        documentElement.setAttribute("id", "nfilter_document");
        documentElement.setAttribute("class", "ownKeypadWrap ownDrag");
        documentElement.setAttribute("style", "display: none");
        document.body.appendChild(documentElement);
        return documentElement;
    } else {
        return document.getElementById("nfilter_document");
    }
}



nshc.initAfter = function (isDisplay, targetElementId, displayElementId) {
    
    if (isDisplay) {
        document.getElementById(displayElementId).focus();
    }

    
    var mapTags = document.getElementsByClassName('nfilter_keypad_div');
    for (var int = 0; int < mapTags.length; int++) {
        var area = mapTags[int].getElementsByTagName('button');
        for (var int2 = 0; int2 < area.length; int2++) {
            if (area[int2].onclick == undefined) {
                area[int2].onclick = function (e) {
                    nshc.click(this, e);
                }
            }
        }
    }

    
    nshc.setChangeKey();
}



nshc.asyncRequest = function (url, param, cfunc) {
    if (window.XMLHttpRequest) {
        nshc.xmlHttp = new XMLHttpRequest();
    } else {
        nshc.xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    nshc.xmlHttp.onreadystatechange = cfunc;
    nshc.xmlHttp.open("POST", url, true);
    nshc.xmlHttp.setRequestHeader("X-Ajax-call", "true");
    
    if (nshc.csrfTokenData != null) {
        nshc.xmlHttp.setRequestHeader("X-CSRF-TOKEN", nshc.csrfTokenData);
    }
    nshc.xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    nshc.xmlHttp.send(param);
}

nshc.keypadShow = function (e, keypadShowType, targetElementId, displayElementId, callback) {
    
    var t = own(e.target);
    var t_inputLeft = t.offset().left;
    var t_inputTop = t.offset().top;
    var tH = t.outerHeight();

    if (keypadShowType == "pcCKpd" || nshc.isMobile != true) {
        own('.ownKeypadWrap').css({
            'display'    : 'block',
            'top'        : t_inputTop + tH + 10,
            'left'       : t_inputLeft,
            'margin-left': 'inherit'
        });
    } else {
        if (nshc.kdpBottomFix == true && nshc.isMobile == true) {
            
            if (document.getElementById("nfilter_document").style.display != 'block') {
                own('body').css('height', own('body').height() + own('.ownKeypad').height());
            }
            own('.ownKeypadWrap').addClass('fixed');
            own('.ownKeypadWrap').css({
                'display'    : 'block',
                'left'       : 50 + '%',
                'margin-left': -(own('#ownKeypad .kpdWrap').width() / 2)
            });
            own('.ownKeypad').css({
                'bottom'  : 0,
                'position': 'fixed'
            });
            
            var nowScroll = nshc.getNowScroll();
            var scrollHeight = (t.offset().top + t.height() - nowScroll.Y) - (own(window).height() - own('.ownKeypad').height());

            if (scrollHeight > 0) {
                
                own("html,body").stop().animate({'scrollTop': nowScroll.Y + scrollHeight + 20}, 400);
            }
        } else if (nshc.kdpBottomFix != true && nshc.isMobile == true) {
            own('.ownKeypadWrap').css({
                'display'    : 'block',
                'top'        : t_inputTop + tH + 10,
                'left'       : 50 + '%',
                'margin-left': -(own('#ownKeypad .kpdWrap').width() / 2)
            });
            
            var nowScroll = nshc.getNowScroll();
            var scrollHeight = (t.offset().top + t.height() - nowScroll.Y + own('.ownKeypad').height()) - own(window).height();

            if (scrollHeight > 0) {
                
                own("html,body").stop().animate({'scrollTop': nowScroll.Y + scrollHeight + 20}, 400);
            }
        } else if (nshc.kdpBottomFix == false || nshc.isMobile == false) {
            own('.ownKeypadWrap').css({
                'display'    : 'block',
                'top'        : t_inputTop + tH + 10,
                'left'       : 50 + '%',
                'margin-left': -(own('#ownKeypad .kpdWrap').width() / 2)
            });
        }
    }

    if (keypadShowType == "nAKpd" || keypadShowType == "nBKpd" || keypadShowType == "nCKpd") {
        own('.ownKeypadWrap .kpdWrap.kpdNum, .ownKeypadWrap .kpdNum .kpdGrp').css('display', 'block');
    } else if (keypadShowType = "pcCKpd" || keypadShowType == "mCKpd") {
        own('.ownKeypadWrap .kpdWrap.kpdChar, .ownKeypadWrap .kpdChar .kpdGrp.lower').css('display', 'block');
    }
    own('.kpdWrap').focus();

    
    if (nshc.BGEnabled == true) {
        var bgHeight = Math.max(document.body["scrollHeight"], document.documentElement["scrollHeight"], document.body["offsetHeight"], document.documentElement["offsetHeight"]);
        var bgWidth = Math.max(document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);
        own('div.ownKeypadBG').css({'height': bgHeight, 'width': bgWidth, 'display': 'block'});
    }

    
    nshc.escClick = true;
    document.getElementById(displayElementId).blur();

    
    var minMaxCheckElement = document.getElementById(displayElementId);
    nshc.inputMax = minMaxCheckElement.getAttribute('maxlength');
    

    
    if (targetElementId.indexOf("|") > -1 && displayElementId.indexOf("|") > -1) {
        targetElementId = targetElementId.substring(0, targetElementId.indexOf("|"));
        displayElementId = displayElementId.substring(0, displayElementId.indexOf("|"));
        nshc.createElement(targetElementId, displayElementId);
        nshc.inputTargetElement = document.getElementById(targetElementId);
        nshc.inputDisplayElement = document.getElementById(displayElementId);
    } else {
        nshc.createElement(targetElementId, displayElementId);
        nshc.inputTargetElement = document.getElementById(targetElementId);
        nshc.inputDisplayElement = document.getElementById(displayElementId);
    }
    

    
    if (nshc.saveKey == false) {
        nshc.clearInput();
    } else {
        nshc.saveKey = false;
    }

    
    if (typeof nshc.ownCallback == "function" && callback == true) {
        nshc.ownCallback("open", displayElementId);
    }

    
    own(".ownDrag").draggable({scroll: true, scrollSensitivity: 100, scrollSpeed: 100});
    
}


nshc.createElement = function (createElementId, siblingElementId) {
    if (!nshc.isElementExist(createElementId)) {
        var inputTargetElement = document.createElement("input");
        inputTargetElement.setAttribute("type", "hidden");
        
        var decArea = document.getElementById(siblingElementId).getAttribute("decarea");
        if (decArea != undefined) {
            inputTargetElement.setAttribute("id", siblingElementId + "_nfilter_sec_" + decArea);
            inputTargetElement.setAttribute("name", siblingElementId + "_nfilter_sec_" + decArea);
        } else {
            inputTargetElement.setAttribute("id", siblingElementId + "_nfilter_sec");
            inputTargetElement.setAttribute("name", siblingElementId + "_nfilter_sec");
        }
        var displayElement = document.getElementById(siblingElementId);
        try {
            displayElement.parentNode.insertBefore(inputTargetElement, displayElement.nextSibling);
            return true;
        } catch (e) {
            return false;
        }
    }
}


nshc.click = function (key, e) {
    var formatAttribute = null;
    var formattingType = new Array();
    var inputKeyId = key.id;

    
    if (nshc.inputDisplayElement.getAttribute("viewtype") != undefined || nshc.inputDisplayElement.getAttribute("viewtype") != null) {
        formatAttribute = nshc.inputDisplayElement.getAttribute("viewtype");
        formattingType = formatAttribute.split(";");
    }

    if (inputKeyId == "nfilter_close" || inputKeyId == "nfilter_enter" || inputKeyId == "nfilter_clear") {
        if (inputKeyId == "nfilter_close" || inputKeyId == "nfilter_clear") {
            nshc.clearInput();
            if (inputKeyId == "nfilter_clear") {
                if (typeof nshc.ownCallback == "function") {
                    nshc.ownCallback(inputKeyId, nshc.inputDisplayElement.id);
                }
                return;
            }
            nshc.inputDisplayElement.removeAttribute("disabled");
        } else {
            
            var checkResult = nshc.minMaxCheck(nshc.inputDisplayElement.id, formattingType);
            
            if (!checkResult) {
                nshc.clearInput();
                return false;
            }

            
            if (formattingType[0] == null && formattingType[0] == undefined && nshc.planTextChangeEnabled == true) {
                nshc.inputDisplayElement.value = nshc.inputDisplayElement.value.replace(/.$/, "*");
            }

            nshc.inputDisplayElement.readOnly = true;
            if (nshc.isEncryptImmediate == true || nshc.CSReturnURL != "") {
                if (nshc.algName == "ECDH") {
                    nshc.inputTargetElement.value = nshc.inputEncryptEcdh(nshc.secElement);
                } else {
                    nshc.inputTargetElement.value = nshc.inputEncryptRSA(nshc.secElement);
                }
            }
            if (nshc.CSReturnURL != "") {
                nshc.CSProcess(nshc.inputTargetElement.value, nshc.inputDisplayElement.id);
            }
        }

        nshc.callbackMsg = (inputKeyId == "nfilter_close") ? "close" : "enter";

        setTimeout(function () {
            nshc.close(nshc.inputDisplayElement, nshc.callbackMsg);
        }, 100);

    } else if (inputKeyId == "nfilter_backspace") {
        
        if (nshc.secElement.length > 0) {
            nshc.secElement = nshc.secElement.substr(0, nshc.secElement.length - nshc.randomIdLength);
            nshc.inputTargetElement.value = nshc.inputTargetElement.value.substr(0, nshc.inputTargetElement.value.length - nshc.randomIdLength);
        }

        var temInputDisplayElementValue = "";
        if (nshc.inputDisplayElement.value.length > 0) {
            temInputDisplayElementValue = nshc.inputDisplayElement.value.substr(0, nshc.inputDisplayElement.value.length - 1);
            
            if (temInputDisplayElementValue.substring(temInputDisplayElementValue.length - 1, temInputDisplayElementValue.length) == formattingType[0]) {
                nshc.inputDisplayElement.value = temInputDisplayElementValue.substr(0, temInputDisplayElementValue.length - 1);
            } else {
                nshc.inputDisplayElement.value = temInputDisplayElementValue;
            }
        }

        
        if (typeof nshc.ownCallback == "function" && !nshc.maxLength) {
            nshc.callbackMsg = "delete";
            nshc.ownCallback(nshc.callbackMsg, nshc.inputDisplayElement.id);
        }

    } else if (inputKeyId == "nfilter_shift_l" || inputKeyId == "nfilter_shift_u" || inputKeyId == "nfilter_shift_s") {
        if (inputKeyId == "nfilter_shift_u") {
            if (nshc.capslockEnabled == true) {
                own('.kpdChar .upper .kpd-cmd').eq(0).css({'background-position-x': -(nshc.BtnW * 3)});
                own('.kpdChar .upper .kpd-cmd').eq(0).attr({'aria-label': '소문자변환'});
                window.setTimeout(function () {
                    own('.kpdChar .upper .kpd-data').eq(0).focus();
                }, 10);
                nshc.capslockEnabled = false;
            } else if (nshc.capslockEnabled == false) {
                
                if (nshc.renewEnabled == true) {
                    nshc.kpd.init();
                }
                nshc.viewChange.upper2Lower();
                window.setTimeout(function () {
                    own('.kpdChar .lower .kpd-data').eq(0).focus();
                }, 10);
                nshc.capslockEnabled = true;
            }
        } else if (inputKeyId == "nfilter_shift_l") {
            
            if (nshc.renewEnabled == true) {
                nshc.kpd.init();
            }
            nshc.capslockEnabled = true;
            own('.kpdChar .upper .kpd-cmd').eq(0).css({'background-position-x': -(nshc.BtnW * 2)});
            nshc.viewChange.lower2Upper();
            window.setTimeout(function () {
                own('.kpdChar .upper .kpd-data').eq(0).focus();
            }, 10);
        } else if (inputKeyId == "nfilter_shift_s") {
            
            if (nshc.renewEnabled == true) {
                nshc.kpd.init();
            }
            nshc.viewChange.special2Lower();
            window.setTimeout(function () {
                own('.kpdChar .lower .kpd-data').eq(0).focus();
            }, 10);
        }

        
        if (typeof nshc.ownCallback == "function") {
            nshc.ownCallback(inputKeyId, nshc.inputDisplayElement.id);
        }

    } else if (inputKeyId == "nfilter_lower2special" || inputKeyId == "nfilter_upper2special" || inputKeyId == "nfilter_change_char") {
        
        if (nshc.renewEnabled == true) {
            nshc.kpd.init();
        }

        if (inputKeyId == "nfilter_lower2special") {
            nshc.viewChange.lower2Special();
            window.setTimeout(function () {
                own('.kpdChar .special .kpd-data').eq(0).focus();
            }, 10);
        } else if (inputKeyId == "nfilter_upper2special") {
            nshc.viewChange.upper2Special();
            window.setTimeout(function () {
                own('.kpdChar .special .kpd-data').eq(0).focus();
            }, 10);
        } else if (inputKeyId == "nfilter_change_char") {
            nshc.viewChange.special2Lower();
            window.setTimeout(function () {
                own('.kpdChar .lower .kpd-data').eq(0).focus();
            }, 10);
        }

        
        if (typeof nshc.ownCallback == "function") {
            nshc.ownCallback(inputKeyId, nshc.inputDisplayElement.id);
        }

    } else if (inputKeyId == "nfilter_renew") {
        if (nshc.renewEnabled == false) {
            return;
        }
        nshc.kpd.init();
        window.setTimeout(function () {
            own('.kpdChar .lower .kpd-data').eq(0).focus();
            own('.kpdChar .upper .kpd-data').eq(0).focus();
            own('.kpdChar .special .kpd-data').eq(0).focus();
        }, 10);

        
        if (typeof nshc.ownCallback == "function") {
            nshc.ownCallback(inputKeyId, nshc.inputDisplayElement.id);
        }

    } else {
        if (typeof key == "string" && key.indexOf("dummy") != -1) {
            return;
        } else if (typeof key == "object" && key.id.indexOf("dummy") != -1) {
            return;
        }

        
        if (document.getElementById(inputKeyId).getAttribute("nfiltercode") != "space") {
            var t = own(e.target);
            var t_left = t.css('left');
            var t_top = t.css('top');

            own('.kpd-touch .kpdBtn').css({
                'width' : nshc.BtnW,
                'height': nshc.BtnH,
                'left'  : t_left,
                'top'   : t_top
            });

            
            if (nshc.keyMaskingColor != null || nshc.keyMaskingColor != undefined) {
                own('.kpd-touch .kpdBtn').css({
                    'background-color': nshc.keyMaskingColor
                });
            }
            

            own('.ownKeypad .kpd-touch').css({
                'opacity'    : 1,
                'display'    : 'block',
                'top'        : nshc.kpdTypeParam[9],
                'left'       : '50%',
                'margin-left': '-49%'
            }).animate({'opacity': 0}, 100);

            setTimeout(function () {
                own('.ownKeypad .kpd-touch').css('display', 'none');
            }, 200);
        }
        

        if (nshc.inputTargetElement.value.length > 0) {
            nshc.inputTargetElement.value = nshc.inputTargetElement.value + inputKeyId;
            nshc.secElement = nshc.secElement + inputKeyId;
        } else {
            nshc.inputTargetElement.value = inputKeyId;
            nshc.secElement = inputKeyId;
        }

        
        inputKeyId = document.getElementById(inputKeyId).getAttribute("nfiltercode");
        
        if (inputKeyId == "quot") {
            inputKeyId = "'";
        }
        if (inputKeyId == "apos") {
            inputKeyId = "\"";
        }
        if (inputKeyId == "space") {
            inputKeyId = " ";
        }
        

        if (formattingType[0] == ",") {
            
            if (nshc.inputDisplayElement.value.charAt(0) == 0) {
                nshc.inputDisplayElement.value = inputKeyId;
            } else {
                nshc.inputDisplayElement.value += inputKeyId;
            }
        } else {
            nshc.inputDisplayElement.value += inputKeyId;
        }

        
        if (formattingType[0] != null || formattingType[0] != undefined) {
            nshc.inputDisplayElement.value = nshc.planTextToAsterisk(nshc.inputDisplayElement.value, formattingType);
        } else if (formattingType[0] == null && formattingType[0] == undefined && nshc.planTextChangeEnabled == true) {
            nshc.inputDisplayElement.value = nshc.planTextChanger(nshc.inputDisplayElement.value);
        }

        if (formattingType[0] == "," && nshc.inputDisplayElement.value.charAt(0) == "0" && nshc.inputDisplayElement.value.charAt(1) == "0") {
            return;
        }

        if (formattingType[0] != null || formattingType[0] != undefined) {
            nshc.inputDisplayElement.value = nshc.inputFormatting(nshc.inputDisplayElement, formattingType);
        }

        
        if (nshc.capslockEnabled && document.getElementsByClassName("nfilter_keypad_div")[1].style.display == "block") {
            nshc.viewChange.upper2Lower();
            window.setTimeout(function () {
                own('.kpdChar .lower .kpd-data').eq(0).focus();
            }, 10);
        }
        
        var checkElement = nshc.inputDisplayElement.value;
        if (nshc.isKeyFormatting()) {
            checkElement = checkElement.split(formattingType[0]).join("");
        }
        if (checkElement.length >= nshc.getMaxLength(nshc.inputDisplayElement.id)) {
            nshc.click(document.getElementById("nfilter_enter"));
        }

        
        if (typeof nshc.ownCallback == "function") {
            nshc.ownCallback(inputKeyId, nshc.inputDisplayElement.id);
        }
    }
}


nshc.planTextToAsterisk = function (value, formattingType) {
    
    var astNum = new Array();
    var inputSplitSum = new Array();
    var total = 0;
    for (var a = 1, b = 0; a < formattingType.length; a++, b++) {
        if (formattingType[a].indexOf('*') != -1) {
            astNum[b] = parseFloat(formattingType[a].substring(0, 1));
            inputSplitSum[b] = total;
        }
        total += parseFloat(formattingType[a]);
    }
    var ptToAste = new Array;
    ptToAste = value;
    ptToAste = ptToAste.split(formattingType[0]).join("");

    for (var i = ptToAste.length - 1; i < ptToAste.length; i++) {
        for (var t = 0; t < astNum.length; t++) {
            if (inputSplitSum[t] <= i && i < (astNum[t] + inputSplitSum[t])) {
                var pattern = /.$/;
                var aste = ptToAste[i].replace(pattern, "*");
                ptToAste = ptToAste.substring(0, i) + aste;
            }
        }
    }

    return ptToAste;
}




nshc.planTextChanger = function (value) {
    var ptToAste = new Array;
    ptToAste = value;
    if (ptToAste.length > 1) {
        for (var i = ptToAste.length - 2; i < ptToAste.length - 1; i++) {
            var pattern = /.$/;
            var aste = ptToAste[i].replace(pattern, "*");
            ptToAste = ptToAste.substring(0, i) + aste + ptToAste.substring(value.length - 1, value.length);
        }
    }

    return ptToAste;
}





nshc.setChangeKey = function () {
    var changeKey = document.getElementsByTagName("button");
    for (var i = 0; i < changeKey.length; i++) {
        if (changeKey[i].hasAttribute("class") && changeKey[i].getAttribute("class").indexOf("nfilter_keypad_button") != -1) {
            var key = changeKey[i].getAttribute("aria-label");
            if (key.indexOf("!") != -1) {
                changeKey[i].setAttribute("aria-label", "느낌표");
            }
            if (key.indexOf("@") != -1) {
                changeKey[i].setAttribute("aria-label", "골뱅이");
            }
            if (key.indexOf("$") != -1) {
                changeKey[i].setAttribute("aria-label", "달러");
            }
            if (key.indexOf("^") != -1) {
                changeKey[i].setAttribute("aria-label", "위꺽새");
            }
            if (key.indexOf("*") != -1) {
                changeKey[i].setAttribute("aria-label", "별");
            }
            if (key.indexOf("(") != -1) {
                changeKey[i].setAttribute("aria-label", "여는괄호");
            }
            if (key.indexOf(")") != -1) {
                changeKey[i].setAttribute("aria-label", "닫는괄호");
            }
            if (key.indexOf("-") != -1) {
                changeKey[i].setAttribute("aria-label", "빼기");
            }
            if (key.indexOf("=") != -1) {
                changeKey[i].setAttribute("aria-label", "등호");
            }
            if (key.indexOf("+") != -1) {
                changeKey[i].setAttribute("aria-label", "플러스");
            }
            if (key.indexOf("{") != -1) {
                changeKey[i].setAttribute("aria-label", "여는중괄호");
            }
            if (key.indexOf("}") != -1) {
                changeKey[i].setAttribute("aria-label", "닫는중괄호");
            }
            if (key.indexOf("[") != -1) {
                changeKey[i].setAttribute("aria-label", "여는대괄호");
            }
            if (key.indexOf("]") != -1) {
                changeKey[i].setAttribute("aria-label", "닫는대괄호");
            }
            if (key.indexOf(":") != -1) {
                changeKey[i].setAttribute("aria-label", "콜론");
            }
            if (key.indexOf(";") != -1) {
                changeKey[i].setAttribute("aria-label", "세미콜론");
            }
            if (key.indexOf("<") != -1) {
                changeKey[i].setAttribute("aria-label", "여는꺽쇠괄호");
            }
            if (key.indexOf(">") != -1) {
                changeKey[i].setAttribute("aria-label", "닫는꺽쇠괄호");
            }
            if (key.indexOf(",") != -1) {
                changeKey[i].setAttribute("aria-label", "쉼표");
            }
            if (key.indexOf(".") != -1) {
                changeKey[i].setAttribute("aria-label", "마침표");
            }
            if (key.indexOf("/") != -1) {
                changeKey[i].setAttribute("aria-label", "슬래쉬");
            }
            if (key.indexOf("?") != -1) {
                changeKey[i].setAttribute("aria-label", "물음표");
            }
            if (key.indexOf("|") != -1) {
                changeKey[i].setAttribute("aria-label", "수직막대");
            }
            if (key.indexOf("~") != -1) {
                changeKey[i].setAttribute("aria-label", "물결");
            }
            if (key.indexOf("_") != -1) {
                changeKey[i].setAttribute("aria-label", "언더바");
            }
            if (key.indexOf("`") != -1) {
                changeKey[i].setAttribute("aria-label", "억음부호");
            }
            if (key.indexOf("apos") != -1) {
                changeKey[i].setAttribute("aria-label", "쌍따옴표");
            }
            if (key.indexOf("quot") != -1) {
                changeKey[i].setAttribute("aria-label", "홑따옴표");
            }
        }
    }
    for (var i = 0; i < changeKey.length; i++) {
        if (changeKey[i].hasAttribute("class") && changeKey[i].getAttribute("class").indexOf("nfilter_keypad_button") != -1) {
            var key = changeKey[i].getAttribute("aria-label");
            if (key.indexOf("소문자1") != -1) {
                changeKey[i].setAttribute("aria-label", "1");
            }
            if (key.indexOf("소문자2") != -1) {
                changeKey[i].setAttribute("aria-label", "2");
            }
            if (key.indexOf("소문자3") != -1) {
                changeKey[i].setAttribute("aria-label", "3");
            }
            if (key.indexOf("소문자4") != -1) {
                changeKey[i].setAttribute("aria-label", "4");
            }
            if (key.indexOf("소문자5") != -1) {
                changeKey[i].setAttribute("aria-label", "5");
            }
            if (key.indexOf("소문자6") != -1) {
                changeKey[i].setAttribute("aria-label", "6");
            }
            if (key.indexOf("소문자7") != -1) {
                changeKey[i].setAttribute("aria-label", "7");
            }
            if (key.indexOf("소문자8") != -1) {
                changeKey[i].setAttribute("aria-label", "8");
            }
            if (key.indexOf("소문자9") != -1) {
                changeKey[i].setAttribute("aria-label", "9");
            }
            if (key.indexOf("소문자0") != -1) {
                changeKey[i].setAttribute("aria-label", "0");
            }
            if (key.indexOf("대문자1") != -1) {
                changeKey[i].setAttribute("aria-label", "1");
            }
            if (key.indexOf("대문자2") != -1) {
                changeKey[i].setAttribute("aria-label", "2");
            }
            if (key.indexOf("대문자3") != -1) {
                changeKey[i].setAttribute("aria-label", "3");
            }
            if (key.indexOf("대문자4") != -1) {
                changeKey[i].setAttribute("aria-label", "4");
            }
            if (key.indexOf("대문자5") != -1) {
                changeKey[i].setAttribute("aria-label", "5");
            }
            if (key.indexOf("대문자6") != -1) {
                changeKey[i].setAttribute("aria-label", "6");
            }
            if (key.indexOf("대문자7") != -1) {
                changeKey[i].setAttribute("aria-label", "7");
            }
            if (key.indexOf("대문자8") != -1) {
                changeKey[i].setAttribute("aria-label", "8");
            }
            if (key.indexOf("대문자9") != -1) {
                changeKey[i].setAttribute("aria-label", "9");
            }
            if (key.indexOf("대문자0") != -1) {
                changeKey[i].setAttribute("aria-label", "0");
            }
        }
    }
    for (var i = 0; i < changeKey.length; i++) {
        if (changeKey[i].hasAttribute("class") && changeKey[i].getAttribute("class").indexOf("nfilter_keypad_button") != -1) {
            var key = changeKey[i].getAttribute("aria-label");
            if (key.indexOf(" ") != -1) {
                changeKey[i].setAttribute("aria-label", "공백");
            }
            if (key.indexOf("dummy") != -1 && nshc.isMobile) {
                changeKey[i].removeAttribute("aria-label");
                changeKey[i].setAttribute("aria-hidden", true);
            }
            var sShift = changeKey[i].getAttribute("id");
            if (sShift.indexOf("nfilter_shift_s") != -1) {
                changeKey[i].removeAttribute("aria-label");
                changeKey[i].setAttribute("aria-hidden", true);
            }
        }
    }
}



window.addEventListener("resize", function () {
    nshc.reSizeEvent = true;
    kpdLoad(nshc.kpdTypeParam);
    if (document.getElementById("nfilter_document").style.display == 'block') {
        nshc.saveKey = true;
        nshc.keypadShow(nshc.currentInputObj, nshc.keypadShowType, nshc.hiddenFieldId, nshc.inputDisplayElement.id, false);
    }
});




nshc.beforeClose = function (id) {
    document.getElementById(id).setAttribute("nfilter", "off");
    document.getElementById(id).value = '';
    document.getElementById(id).onfocus = null;
    document.getElementById(id).onclick = null;
    document.getElementById(id).readOnly = false;
    document.getElementById(id).disabled = false;
}


nshc.close = function (inputID, callbackMsg, clickTarget) {
    var currentState = (document.getElementById("nfilter_document").style.display == "block") ? true : false;
    nshc.escClick = false;
    nshc.OnorientationchangeStyle = false;

    own('.ownKeypadWrap').css('display', 'none');
    own('.ownKeypadWrap .kpdWrap').css('display', 'none');
    own('.ownKeypadWrap .kpdGrp').css('display', 'none');
    own('.ownKeypadWrap .kpdNum').removeClass('typeA');
    own('.ownKeypadWrap .kpdNum').removeClass('typeB');
    own('.ownKeypadWrap .kpdNum').removeClass('typeC');
    own('.ownKeypadWrap .kpdChar').removeClass('pc');
    own('.ownKeypadWrap .kpdChar').removeClass('mobile');

    if (own('.ownKeypadWrap').hasClass('fixed')) {
        own('.ownKeypadWrap').removeClass('fixed');
        own('body').css('height', '');
    }

    window.setTimeout(function () {
        own('.ownKeypadBG').css('display', 'none');
    }, 200)

    
    if (typeof nshc.ownCallback == "function" && inputID != undefined && inputID != null) {
        if (currentState == true) {
            if (clickTarget != inputID || clickTarget == undefined) {
                nshc.ownCallback(callbackMsg, inputID.id);
            }
        }
    }
}


nshc.isElementExist = function (elementName, doc) {
    if (doc == undefined) doc = document;
    if (!doc.getElementById(elementName)) {
        return false;
    } else {
        return true;
    }
}


nshc.clearInput = function () {
    if (nshc.inputTargetElement != undefined && nshc.inputTargetElement != null) {
        nshc.inputTargetElement.value = "";
        nshc.secElement = "";
    }
    if (nshc.inputDisplayElement != undefined && nshc.inputDisplayElement != null) {
        nshc.inputDisplayElement.value = "";
    }
}


nshc.CSProcess = function (targetElementValue, responseElementId) {
    var requestParam = nshc.requestParamSecretValue + "=" + targetElementValue + "&" + "cs_public_key=" + nshc.CSPublicKey;
    jAlert("CS" + requestParam);
    nshc.asyncRequest(nshc.contextPath + "/" + nshc.serviceNameCSManager, requestParam, function () {
        if (nshc.xmlHttp.readyState == 4 && nshc.xmlHttp.status == 200) {
            if (nshc.responseErrCdPrefix == nshc.xmlHttp.responseText.substr(0, 8)) {
                if (responseElementId != undefined && responseElementId != "") {
                    if (typeof nshc.extExceptionCallBack == "function") {
                        nshc.extExceptionCallBack(nshc.xmlHttp.responseText, responseElementId);
                    }
                } else {
                    document.getElementById("nfilter_document").innerHTML = nshc.xmlHttp.responseText;
                    document.getElementById("nfilter_document").style.display = "block";
                }
            } else {
                try {
                    location.href = nshc.CSReturnURL + "?encdata=" + nshc.xmlHttp.responseText;
                    if (typeof nshc.setExtAfterCSForword == "function") {
                        nshc.setExtAfterCSForword();
                    }
                } catch (e) {
                    if (responseElementId != "") {
                        if (typeof nshc.extExceptionCallBack == "function") {
                            nshc.extExceptionCallBack("ErrCode:120, ErrMsg:CS Module Interface Error", responseElementId);
                        }
                    } else {
                        document.getElementById("nfilter_document").innerHTML = "ErrCode:120, ErrMsg:CS Module Interface Error";
                        document.getElementById("nfilter_document").style.display = "block";
                    }
                }
            }
        }
    });
}


nshc.JSProcess = function (targetElementValue, responseElementId, jsKeypadCallback) {
    var resultCabllbackFlag = 1;
    var requestParam = nshc.requestParamSecretValue + "=" + targetElementValue + "&" + "js_public_key=" + nshc.jSPublicKey;
    jAlert("JS" + requestParam);
    nshc.asyncRequest(nshc.contextPath + "/" + nshc.serviceNameJSManager, requestParam, function () {
        if (nshc.xmlHttp.readyState == 4 && nshc.xmlHttp.status == 200) {
            if (nshc.responseErrCdPrefix == nshc.xmlHttp.responseText.substr(0, 8)) {
                if (responseElementId != undefined && responseElementId != "") {
                    if (typeof nshc.extExceptionCallBack == "function") {
                        nshc.extExceptionCallBack(nshc.xmlHttp.responseText, responseElementId);
                    }
                } else {
                    document.getElementById("nfilter_document").innerHTML = nshc.xmlHttp.responseText;
                    document.getElementById("nfilter_document").style.display = "block";
                }
            } else {
                try {
                    
                    var originData = nshc.xmlHttp.responseText;
                    originData = originData.split('|');
                    nshc.sPubKey = originData[0];
                    nshc.jsEncData = originData[1];
                    
                    var prikey = keyPair.getPriKey();

                    
                    var sPKey = Base642HexStr(nshc.sPubKey);
                    

                    
                    nshc.secretKey = DeriveECKey("secp256r1", prikey, sPKey);
                    if (nshc.JSReturnURL == "" || nshc.JSReturnURL == null) {
                        try {
                            nshc.JSresult = HexStr2Utf8(SEEDDecrypt(nSaferJS.mode.CFB, '00000000000000000000000000000000', nshc.secretKey, nshc.jsEncData));
                            
                            if (typeof jsKeypadCallback === "function" && nshc.JSresult != "") {
                                resultCabllbackFlag = 0;
                                jsKeypadCallback(resultCabllbackFlag, nshc.JSresult);
                            }
                        } catch (e) {
                            if (nshc.JSresult == "") {
                                nshc.extExceptionCallBack("ErrCode:120, ErrMsg:JS Module Interface Error", responseElementId);
                            }
                        }
                        if (typeof jSdecryptResult == "function") {
                            jSdecryptResult();
                        }
                    } else {
                        location.href = nshc.JSReturnURL + "?encData=" + nshc.jsEncData + "&nFilterKey=" + nshc.secretKey;
                    }
                } catch (e) {
                    if (nshc.sPubKey.indexOf("java.lang.ArrayIndexOutOfBoundsException") != 1) {
                        
                    } else {
                        if (responseElementId != "") {
                            if (typeof nshc.extExceptionCallBack == "function") {
                                nshc.extExceptionCallBack("ErrCode:120, ErrMsg:JS Module Interface Error", responseElementId);
                            }
                        } else {
                            document.getElementById("nfilter_document").innerHTML = "ErrCode:120, ErrMsg:JS Module Interface Error";
                            document.getElementById("nfilter_document").style.display = "block";
                        }
                    }
                }
            }
        }
    });
}




nshc.minMaxCheck = function (inputKeyId, formattingType) {
    var minMaxCheckElement = document.getElementById(inputKeyId);
    var maxlenth = 0;
    var minlength = 0;
    try {
        maxlenth = window[inputKeyId].getMaxLength();
        minlength = window[inputKeyId].getMinLength();
    } catch (e) {
        maxlenth = minMaxCheckElement.maxlength;
        minlength = minMaxCheckElement.minlength;
        if (maxlenth == null && maxlenth == undefined) {
            maxlenth = minMaxCheckElement.getAttribute('maxlength');
        }
        if (minlength == null && minlength == undefined) {
            minlength = minMaxCheckElement.getAttribute('minlength');
        }
    }
    var checkElement = minMaxCheckElement.value;
    try {
        if (nshc.isKeyFormatting()) {
            checkElement = checkElement.split(formattingType[0]).join("");
        }
    } catch (e) {
    }
    if (Number(maxlenth) < Number(checkElement.length)) {
        nshc.maxCall = true;

        
        if (typeof nshc.extMessageHandler == "function") {
            nshc.extMessageHandler(nshc.msgMaxCheck[nshc.language].replace("#1", maxlenth));
        }
        return false;
    }
    if (Number(minlength) > Number(checkElement.length)) {
        if (typeof nshc.extMessageHandler == "function") {

            
            window.setTimeout(function () {
                nshc.extMessageHandler(nshc.msgMinCheck[nshc.language].replace("#1", minlength));
            }, 100);
        }
        return false;
    }
    return true;
}


nshc.getMaxLength = function (inputKeyId) {
    var minMaxCheckElement = document.getElementById(inputKeyId);
    var maxlenth = 0;
    try {
        maxlenth = window[inputKeyId].getMaxLength();
    } catch (e) {
        maxlenth = minMaxCheckElement.maxlength;
        if (maxlenth == null || maxlenth == undefined) {
            maxlenth = minMaxCheckElement.getAttribute('maxlength');
        }
    }
    return maxlenth;
}



nshc.getOSInfo = function () {
    var ua = navigator.userAgent;
    if (ua.indexOf("NT 6.1") != -1) return "Windows7";
    else if (ua.indexOf("iPhone") != -1) return "iPhone";
    else if (ua.indexOf("iPod") != -1) return "iPod";
    else if (ua.indexOf("iPad") != -1) return "iPad";
    else if (ua.indexOf("Android") != -1) return "Android";
    else if (ua.indexOf("NT 6.0") != -1) return "Windows Vista/Server 2008";
    else if (ua.indexOf("NT 5.2") != -1) return "Windows Server 2003";
    else if (ua.indexOf("NT 5.1") != -1) return "Windows XP";
    else if (ua.indexOf("NT 5.0") != -1) return "Windows 2000";
    else if (ua.indexOf("NT") != -1) return "Windows NT";
    else if (ua.indexOf("9x 4.90") != -1) return "Windows Me";
    else if (ua.indexOf("Win16") != -1) return "Windows 3.x";
    else if (ua.indexOf("Windows") != -1) return "Windows";
    else if (ua.indexOf("Macintosh") != -1) return "Macintosh";
    else if (ua.indexOf("BlackBerry") != -1) return "BlackBerry";
    else if (ua.indexOf("Linux") != -1) return "Linux";
    else return "";
}


nshc.getNowScroll = function () {
    var de = document.documentElement;
    var b = document.body;
    var now = {};

    
    now.X = document.getElementById ? (!de.scrollLeft ? b.scrollLeft : de.scrollLeft) : (window.pageXOffset ? window.pageXOffset : window.scrollX);
    now.Y = document.getElementById ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY);
    return now;
}



nshc.parseErrorCode = function (errorData) {
    var errCode = "";
    if (errorData.indexOf(nshc.responseErrMsgPrefix) > -1) {
        errCode = errorData.substr(nshc.responseErrCdPrefix.length, 3);
    }
    return errCode;
}


nshc.parseErrorMessage = function (errorData) {
    var errMssage = "";
    if (errorData.indexOf(nshc.responseErrMsgPrefix) > -1) {
        errMssage = errorData.substr(errorData.indexOf(nshc.responseErrMsgPrefix) + nshc.responseErrMsgPrefix.length);
    }
    return errMssage;
}


nshc.encrypted = function (displayEleementId) {
    var returnSecretValue = "";
    var inputValue = "";
    if (displayEleementId != undefined && displayEleementId != "") {
        var targetElement = document.getElementById(displayEleementId + nshc.keypadIdTargetSuffix);
        if (targetElement != undefined && targetElement != null) {
            if (nshc.isEncryptImmediate == true) {
                inputValue = targetElement.value;
            } else {
                if (nshc.algName == "ECDH") {
                    returnSecretValue = nshc.inputEncryptEcdh(targetElement.value);
                } else {
                    returnSecretValue = nshc.inputEncryptRSA(targetElement.value);
                }
            }
            if (inputValue != "") {
                if (returnSecretValue == "") {
                    returnSecretValue = targetElement.id + "=" + inputValue;
                }
            }
        }
    } else {
        var secElements = document.getElementsByTagName("input");
        for (var i = 0; i < secElements.length; i++) {
            if (secElements[i].type != undefined && secElements[i].type == "hidden" && secElements[i].id != undefined && secElements[i].id.indexOf(nshc.keypadIdTargetSuffix) > -1) {
                if (secElements[i].value != undefined && secElements[i].value != "") {
                    
                    
                    if (nshc.isEncryptImmediate == true) {
                        inputValue = secElements[i].value;
                    } else {
                        if (nshc.algName == "ECDH") {
                            inputValue = nshc.inputEncryptEcdh(secElements[i].value);
                        } else {
                            inputValue = nshc.inputEncryptRSA(secElements[i].value);
                        }
                    }
                } else {
                    inputValue = "";
                }
                if (inputValue != "") {
                    if (returnSecretValue == "") {
                        if (nshc.algName == "ECDH") {
                            returnSecretValue = nshc.securityPubkey;
                            returnSecretValue += "," + secElements[i].id + "=" + inputValue;
                        } else {
                            returnSecretValue = secElements[i].id + "=" + inputValue;
                        }
                    } else {
                        returnSecretValue += "|" + secElements[i].id + "=" + inputValue;
                    }
                }
            }
        }
    }
    return returnSecretValue;
}


nshc.extExceptionCallBack = function (errorData, responseElementId) {
    var responseErrorCode = nshc.parseErrorCode(errorData);
    var responseErrorMessage = nshc.parseErrorMessage(errorData);
    switch (nshc.responseErrCallBackType) {
        case "alert":
            alert("ErrorCode: " + responseErrorCode + "\n" + "ErrorMessage: " + responseErrorMessage);
            break;
        case "display":
            if (responseElementId != "") {
                document.getElementById(responseElementId).value = errorData;
                document.getElementById(responseElementId).style.display = "block";
                document.getElementById(responseElementId).style.visibility = "visible";
            } else {
                document.getElementById("nfilter_document").innerHTML = errorData;
                document.getElementById("nfilter_document").style.display = "block";
                document.getElementById("nfilter_document").style.visibility = "visible";
            }
            break;
        case "status":
            window.defaultStatus = errorData;
            break;
        case "customizing":
            if (typeof alertNFilter == "function") {
                alertNFilter();
            } else {
                setTimeout(function () {
                    alert(responseErrorCode);
                }, 0);
            }
            break;
        default:
            document.getElementById("nfilter_document").innerHTML = errorData;
            document.getElementById("nfilter_document").style.display = "block";
            document.getElementById("nfilter_document").style.visibility = "visible";
            break;
    }
}


nshc.extMessageHandler = function (message) {
    switch (nshc.responseErrCallBackType) {
        case "alert":
            setTimeout(function () {
                alert(message);
            }, 0);
            break;
        case "display":
            setTimeout(function () {
                alert(message);
            }, 0);
            break;
        case "status":
            window.defaultStatus = message;
            break;
        case "customizing":
            if (typeof alertNFilter == "function") {
                alertNFilter();
            } else {
                setTimeout(function () {
                    alert(message);
                }, 0);
            }
            break;
        default:
            if (nshc.getOSInfo() == "iPhone" && nshc.getOSInfo() == 'iPod' && nshc.getOSInfo() == "iPad") {
                setTimeout(function () {
                    alert(message);
                }, 0);
            } else {
                alert(message);
            }
            break;
    }
}


nshc.extRegistEventOnKeyDownUp = function () {
    document.onkeydown = function (e) {
        if (window.event) {
            keyCode = window.event.keyCode;
        } else if (e) {
            keyCode = e.which;
        }
        if (keyCode == 27) {
            if (nshc.escClick == true) {
                nshc.clearInput();
                nshc.close(nshc.inputDisplayElement, "close");
            }
        }
        return true;
    };
    document.onkeyup = function (e) {
        if (window.event) {
            keyCode = window.event.keyCode;
        } else if (e) {
            keyCode = e.which;
        }
        if (keyCode == 27) {
            if (nshc.escClick == true) {
                nshc.clearInput();
                nshc.close(nshc.inputDisplayElement, "close");
            }
        }
        return true;
    };
}



nshc.isKeyFormatting = function () {
    if (nshc.formattingElement.length > 0) {
        for (var int = 0; int < nshc.formattingElement.length; int++) {
            if (nshc.formattingElement[int].split("=")[0] == nshc.inputDisplayElement.id) {
                return true;
            }
        }
    } else {
        return false;
    }
}


nshc.inputFormatting = function (field, formattingType) {
    
    var val = field.value;
    
    if (formattingType[0] == ',' && formattingType[1] == null && formattingType[1] == undefined) {
        var num = val.split(formattingType[0]).join("");
        var num_str = num.toString();
        var result = '';
        for (var i = 0; i < num_str.length; i++) {
            var tmp = num_str.length - (i + 1);
            if (i % 3 == 0 && i != 0) result = ',' + result;
            result = num_str.charAt(tmp) + result;
        }
    } else {
        var inputSplit = new Array();
        var total = 0;
        for (var a = 1, b = 0; a < formattingType.length; a++, b++) {
            total += parseFloat(formattingType[a]);
            inputSplit[b] = total;
        }

        
        field.setAttribute("maxlength", total);

        var num = val.split(formattingType[0]).join("");
        var num_str = num.toString();
        var result = '';
        for (var i = 0, j = 0; i < num_str.length; i++) {
            var tmp = i;
            if (i % inputSplit[j] == 0 && i != 0) {
                result = result + formattingType[0];
                j++;
            }
            result = result + num_str.charAt(tmp);
        }
    }

    return result;
}



nshc.dynamicCSSChanger = function (url) {
    
    var parentUrl = (window.location != window.parent.location) ? document.referrer : document.location.href;
    console.log("parentUrl :: " + parentUrl);

    
    if (url.indexOf("|") > -1) {
        var urlSet = url.split("|");
        for (var i = 0; i < urlSet.length; i++) {
            if (parentUrl.indexOf(urlSet[i]) != -1) {
                nshc.siteName = urlSet[i];

                
                
                
                
                
                
                

                console.log("nshc.siteName :: " + nshc.siteName);
            }
        }
    } else {
        nshc.siteName = "default";
        console.log("nshc.siteName :: " + nshc.siteName);
    }
}









nshc.lineNum = null;                 
nshc.charCutLine = null;             
nshc.numCutLine = null;              
nshc.BtnW = null;                    
nshc.BtnH = null; 		             
nshc.BtnposX = null;				 
nshc.BtnposY = null;                 
nshc.BtnTopSpace = null;             
nshc.BtnLeftSpace = null;            
nshc.BtnBgPosX = null;               
nshc.BtnBgPosY4Lower = null;	     
nshc.BtnBgPosY4Upper = null;	     
nshc.BtnBgPosY4Special = null;	     
nshc.BtnBgPosYNumber = null;         
nshc.BtnBgPosX4Special = null;       
nshc.kpdWidth = null;                
nshc.kpdHeight = null;               
nshc.kpdBgWidth = null;              
nshc.kpdBgHeight = null;             


nshc.multiDummy = 1;                
nshc.randomNumKdp = false;          
nshc.backupData = new Array();      
nshc.newNumKpdArr = new Array();    
nshc.reSizeEvent = false;           
nshc.backupDone = false;            
nshc.numKdpID = new Array();        
nshc.numKdpAL = new Array();        
nshc.numKdpNC = new Array();        
nshc.kpdTypeParam = new Array();    
nshc.isMobile = /iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|Windows CE|MOT|SonyEricsson|Nokia/i.test(navigator.userAgent) ? true : false;  


nshc.arrayKpd = new Array();  
nshc.oldDummy = [[2, 4], [2, 4], [2, 4, 6], [2, 4, 6], [2, 4], [2, 4], [2, 4, 6], [2, 4, 6], [2, 4], [2, 4], [2, 4, 6], [2, 4, 6], [2, 4], [2, 4], [2, 4]]; 

nshc.kpd = new function () {
    
    this.init = function () {
        nshc.reSizeEvent = false;
        nshc.arrayKpd = [];
        nshc.arrayKpd.push(this.random("dQn"));
        nshc.arrayKpd.push(this.random("dQ1"));
        nshc.arrayKpd.push(this.random("dQ2"));
        nshc.arrayKpd.push(this.random("dQ3"));
        nshc.arrayKpd.push(this.random("dQn"));
        nshc.arrayKpd.push(this.random("dQ1"));
        nshc.arrayKpd.push(this.random("dQ2"));
        nshc.arrayKpd.push(this.random("dQ3"));
        nshc.arrayKpd.push(this.random("dQn"));
        nshc.arrayKpd.push(this.random("dQ1"));
        nshc.arrayKpd.push(this.random("dQ2"));
        nshc.arrayKpd.push(this.random("dQ3"));
        nshc.arrayKpd.push(this.random("dNa"));
        nshc.arrayKpd.push(this.random("dNb"));
        nshc.arrayKpd.push(this.random("dNc"));

        
        nshc.oldDummy = nshc.arrayKpd;

        kpdLoad(nshc.kpdTypeParam);

    }
    
    this.random = function (type) {
        var result = new Array();
        if (type == 'dQn' || type == 'dQ1') {
            while (true) {
                result[0] = Math.floor(Math.random() * 11);
                result[1] = Math.floor(Math.random() * 11);
                if (result[0] != result[1]) {
                    if (Math.abs(result[0] - result[1]) != 1) {
                        result.sort(function (a, b) {
                            return a - b;
                        })
                        
                        break;
                    }
                }
            }
        } else if (type == 'dQ2') {
            while (true) {
                result[0] = Math.floor(Math.random() * 10);
                result[1] = Math.floor(Math.random() * 10);
                result[2] = Math.floor(Math.random() * 10);
                if ((result[0] != result[1]) && (result[0] != result[2]) && (result[1] != result[2])) {
                    if ((Math.abs(result[0] - result[1]) != 1) && (Math.abs(result[0] - result[2]) != 1) && (Math.abs(result[1] - result[2]) != 1)) {
                        result.sort(function (a, b) {
                            return a - b;
                        })
                        
                        break;
                    }
                }
            }
        } else if (type == 'dQ3') {
            while (true) {
                result[0] = Math.floor(Math.random() * 8) + 1;
                result[1] = Math.floor(Math.random() * 8) + 1;
                result[2] = Math.floor(Math.random() * 8) + 1;
                if ((result[0] != result[1]) && (result[0] != result[2]) && (result[1] != result[2])) {
                    if ((Math.abs(result[0] - result[1]) != 1) && (Math.abs(result[0] - result[2]) != 1) && (Math.abs(result[1] - result[2]) != 1)) {
                        result.sort(function (a, b) {
                            return a - b;
                        })
                        
                        break;
                    }
                }
            }
        } else if (type == 'dNa') {
            while (true) {
                result[0] = Math.floor(Math.random() * 11);
                result[1] = Math.floor(Math.random() * 11);
                if (result[0] != result[1]) {
                    if (Math.abs(result[0] - result[1]) >= 4) {
                        if (nshc.oldDummy[12][0] != result[0] && nshc.oldDummy[12][1] != result[1]) {
                            result.sort(function (a, b) {
                                return a - b;
                            })
                            
                            
                            break;
                        }
                    }
                }
            }
        } else if (type == 'dNb') {
            while (true) {
                result[0] = Math.floor(Math.random() * 11);
                result[1] = Math.floor(Math.random() * 11);
                if (result[0] != result[1]) {
                    if (Math.abs(result[0] - result[1]) >= 3) {
                        if (nshc.oldDummy[13][0] != result[0] && nshc.oldDummy[13][1] != result[1]) {
                            result.sort(function (a, b) {
                                return a - b;
                            })
                            
                            
                            break;
                        }
                    }
                }
            }
        } else if (type == 'dNc') {
            while (true) {
                result[0] = Math.floor(Math.random() * 11);
                result[1] = Math.floor(Math.random() * 11);
                if (result[0] != result[1]) {
                    if (Math.abs(result[0] - result[1]) >= 5) {
                        if (nshc.oldDummy[14][0] != result[0] && nshc.oldDummy[14][1] != result[1]) {
                            result.sort(function (a, b) {
                                return a - b;
                            })
                            
                            
                            break;
                        }
                    }
                }
            }
        }
        return result;
    }
    
    this.numIndex = function () {

        var indexs = new Array(); 
        var hasValue = false; 

        while (indexs.length < 10) {
            hasValue = false;
            var temp = Math.floor(Math.random() * 10);
            for (c = 0; c < indexs.length; c++) {
                if (temp == indexs[c]) {
                    hasValue = true;
                    break;
                }
            }
            if (hasValue == false) {
                indexs.push(temp);
            }
        }
        return indexs;
    }
    
    this.backupNumKpd = function (n, arr) {
        nshc.backupData[n] = {bpx: arr[0], bpy: arr[1]};
        
    }


    
    this.checkKpdType = function (type) {
        
        if (type == 'pcCKpd') {
            nshc.kpdTypeParam[0] = type;
            nshc.kpdTypeParam[1] = 600;
            nshc.kpdTypeParam[2] = 300;
            nshc.kpdTypeParam[3] = 1472;
            nshc.kpdTypeParam[4] = 530;
            nshc.kpdTypeParam[5] = 46;
            nshc.kpdTypeParam[6] = 46;
            nshc.kpdTypeParam[7] = 15;
            nshc.kpdTypeParam[8] = 15;
            nshc.kpdTypeParam[9] = '16.2%';
        } else if (type == 'mCKpd') {
            nshc.kpdTypeParam[0] = type;
            nshc.kpdTypeParam[1] = 770;
            nshc.kpdTypeParam[2] = 644;
            nshc.kpdTypeParam[3] = 1920;
            nshc.kpdTypeParam[4] = 1159;
            nshc.kpdTypeParam[5] = 60;
            nshc.kpdTypeParam[6] = 103;
            nshc.kpdTypeParam[7] = 34.333;
            nshc.kpdTypeParam[8] = 20;
            nshc.kpdTypeParam[9] = '14.5%';
        } else if (type == 'nAKpd') {
            nshc.kpdTypeParam[0] = type;
            nshc.kpdTypeParam[1] = 770;
            nshc.kpdTypeParam[2] = 560;
            nshc.kpdTypeParam[3] = 2232;
            nshc.kpdTypeParam[4] = 782;
            nshc.kpdTypeParam[5] = 186;
            nshc.kpdTypeParam[6] = 111;
            nshc.kpdTypeParam[7] = 37;
            nshc.kpdTypeParam[8] = 62;
            nshc.kpdTypeParam[9] = '16.5%';
        } else if (type == 'nBKpd') {
            nshc.kpdTypeParam[0] = type;
            nshc.kpdTypeParam[1] = 770;
            nshc.kpdTypeParam[2] = 750;
            nshc.kpdTypeParam[3] = 2988;
            nshc.kpdTypeParam[4] = 998;
            nshc.kpdTypeParam[5] = 249;
            nshc.kpdTypeParam[6] = 124;
            nshc.kpdTypeParam[7] = 41;
            nshc.kpdTypeParam[8] = 83;
            nshc.kpdTypeParam[9] = '13.5%';
        } else if (type == 'nCKpd') {
            nshc.kpdTypeParam[0] = type;
            nshc.kpdTypeParam[1] = 770;
            nshc.kpdTypeParam[2] = 480;
            nshc.kpdTypeParam[3] = 1476;
            nshc.kpdTypeParam[4] = 726;
            nshc.kpdTypeParam[5] = 123;
            nshc.kpdTypeParam[6] = 123;
            nshc.kpdTypeParam[7] = 41;
            nshc.kpdTypeParam[8] = 41;
            nshc.kpdTypeParam[9] = '19%';
        }

        return nshc.kpdTypeParam;
    }
}




nshc.dummy = new function () {

    this.ldQn = function () {
        var arr = nshc.arrayKpd[0];
        this.dummyCss(arr, this.dummyPattern(), 'ldQn');
        return arr;
    }
    this.ldQ1 = function () {
        var arr = nshc.arrayKpd[1];
        this.dummyCss(arr, this.dummyPattern(), 'ldQ1');
        return arr;
    }
    this.ldQ2 = function () {
        var arr = nshc.arrayKpd[2];
        this.dummyCss(arr, this.dummyPattern(), 'ldQ2');
        return arr;
    }
    this.ldQ3 = function () {
        var arr = nshc.arrayKpd[3];
        this.dummyCss(arr, this.dummyPattern(), 'ldQ3');
        return arr;
    }
    this.udQn = function () {
        var arr = nshc.arrayKpd[4];
        this.dummyCss(arr, this.dummyPattern(), 'udQn');
        return arr;
    }
    this.udQ1 = function () {
        var arr = nshc.arrayKpd[5];
        this.dummyCss(arr, this.dummyPattern(), 'udQ1');
        return arr;
    }
    this.udQ2 = function () {
        var arr = nshc.arrayKpd[6];
        this.dummyCss(arr, this.dummyPattern(), 'udQ2');
        return arr;
    }
    this.udQ3 = function () {
        var arr = nshc.arrayKpd[7];
        this.dummyCss(arr, this.dummyPattern(), 'udQ3');
        return arr;
    }
    this.sdQn = function () {
        var arr = nshc.arrayKpd[8];
        this.dummyCss(arr, this.dummyPattern(), 'sdQn');
        return arr;
    }
    this.sdQ1 = function () {
        var arr = nshc.arrayKpd[9];
        this.dummyCss(arr, this.dummyPattern(), 'sdQ1');
        return arr;
    }
    this.sdQ2 = function () {
        var arr = nshc.arrayKpd[10];
        this.dummyCss(arr, this.dummyPattern(), 'sdQ2');
        return arr;
    }
    this.sdQ3 = function () {
        var arr = nshc.arrayKpd[11];
        this.dummyCss(arr, this.dummyPattern(), 'sdQ3');
        return arr;
    }
    this.dNa = function () {
        var arr = nshc.arrayKpd[12];
        this.dummyCss(arr, this.dummyPattern(), 'dNa');
        return arr;
    }
    this.dNb = function () {
        var arr = nshc.arrayKpd[13];
        this.dummyCss(arr, this.dummyPattern(), 'dNb');
        return arr;
    }
    this.dNc = function () {
        var arr = nshc.arrayKpd[14];
        this.dummyCss(arr, this.dummyPattern(), 'dNc');
        return arr;
    }
    this.dummyPattern = function () {
        var dumArr = new Array();
        if (nshc.multiDummy == 1) {
            dumArr = [10, 10, 10];
        } else if (nshc.multiDummy == 2) {
            dumArr = [10, 11, 10];
        } else if (nshc.multiDummy == 3) {
            dumArr = [10, 11, 12];
        }
        return dumArr;
    }
    this.dummyCss = function (arr, dum, type) {
        var dumpath = 0;
        var dummyLineNum = 0;
        if (type == 'ldQ1' || type == 'udQ1' || type == 'sdQ1') {
            dummyLineNum = 1;
            dumpath = 2;
        } else if (type == 'ldQ2' || type == 'udQ2' || type == 'sdQ2') {
            dummyLineNum = 2;
            dumpath = 4;
        } else if (type == 'ldQ3' || type == 'udQ3' || type == 'sdQ3') {
            dummyLineNum = 3;
            dumpath = 7;
        }
        for (var i = 0; i < arr.length; i++) {
            if (type == 'ldQn' || type == 'ldQ1' || type == 'ldQ2' || type == 'ldQ3') {
                own('.lower > .kpd-blank').eq(i + dumpath).css({
                    'width'                : nshc.BtnW,
                    'height'               : nshc.BtnH,
                    'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                    'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'background-position-x': -((nshc.kpdBgWidth / 32) * dum[i]),
                    'background-position-y': -(nshc.kpdHeight)
                });
            } else if (type == 'udQn' || type == 'udQ1' || type == 'udQ2' || type == 'udQ3') {
                own('.upper > .kpd-blank').eq(i + dumpath).css({
                    'width'                : nshc.BtnW,
                    'height'               : nshc.BtnH,
                    'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                    'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'background-position-x': -((nshc.kpdBgWidth / 32) * dum[i]),
                    'background-position-y': -(nshc.kpdHeight)
                });
            } else if (type == 'sdQn' || type == 'sdQ1' || type == 'sdQ2' || type == 'sdQ3') {
                own('.special > .kpd-blank').eq(i + dumpath).css({
                    'width'                : nshc.BtnW,
                    'height'               : nshc.BtnH,
                    'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                    'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'background-position-x': -((nshc.kpdBgWidth / 32) * dum[i]),
                    'background-position-y': -(nshc.kpdHeight)
                });
            } else if (type == "dNa") {
                if (arr[i] >= 7) {
                    own('.typeA > .number > .kpd-blank').eq(i + dumpath).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : (nshc.BtnW * (arr[i] - 7)) + ((arr[i] - 7) * nshc.BtnLeftSpace),
                        'top'                  : (nshc.BtnH * (dummyLineNum + 2)) + ((dummyLineNum + 3) * nshc.BtnTopSpace),
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                        'background-position-y': -(nshc.kpdHeight)
                    });
                } else if (arr[i] >= 4) {
                    if (i == 0) {
                        own('.typeA > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * (arr[i] - 4)) + ((arr[i] - 4) * nshc.BtnTopSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    } else if (i == 1) {
                        own('.typeA > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * (arr[i] - 3)) + ((arr[i] - 3) * nshc.BtnLeftSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    }
                } else {
                    own('.typeA > .number > .kpd-blank').eq(i + dumpath).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                        'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                        'background-position-y': -(nshc.kpdHeight)
                    });
                }
            } else if (type == "dNb") {
                if (arr[i] >= 8) {
                    own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : (nshc.BtnW * (arr[i] - 8)) + ((arr[i] - 8) * nshc.BtnLeftSpace),
                        'top'                  : (nshc.BtnH * (dummyLineNum + 3)) + ((dummyLineNum + 4) * nshc.BtnTopSpace),
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                        'background-position-y': -(nshc.kpdHeight)
                    });
                } else if (arr[i] >= 6) {
                    if (i == 0) {
                        own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * ((arr[i] - 6))) + (((arr[i] - 6)) * nshc.BtnTopSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 2)) + ((dummyLineNum + 3) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    } else if (i == 1) {
                        own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * (arr[i] - 5)) + ((arr[i] - 5) * nshc.BtnLeftSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 2)) + ((dummyLineNum + 3) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    }
                } else if (arr[i] >= 3) {
                    if (i == 0) {
                        own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * ((arr[i] - 3))) + (((arr[i] - 3)) * nshc.BtnTopSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    } else if (i == 1) {
                        if (arr[i] == 5) {
                            own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                                'width'                : nshc.BtnW,
                                'height'               : nshc.BtnH,
                                'left'                 : (nshc.BtnW * (arr[i] - 5)) + ((arr[i] - 5) * nshc.BtnLeftSpace),
                                'top'                  : (nshc.BtnH * (dummyLineNum + 2)) + ((dummyLineNum + 3) * nshc.BtnTopSpace),
                                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                                'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                                'background-position-y': -(nshc.kpdHeight)
                            });
                        } else {
                            own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                                'width'                : nshc.BtnW,
                                'height'               : nshc.BtnH,
                                'left'                 : (nshc.BtnW * (arr[i] - 2)) + ((arr[i] - 2) * nshc.BtnLeftSpace),
                                'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                                'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                                'background-position-y': -(nshc.kpdHeight)
                            });
                        }
                    }
                } else {
                    own('.typeB > .number > .kpd-blank').eq(i + dumpath).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                        'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                        'background-position-y': -(nshc.kpdHeight)
                    });
                }
            } else if (type == "dNc") {
                if (arr[i] >= 6) {
                    own('.typeC > .number > .kpd-blank').eq(i + dumpath).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : (nshc.BtnW * (arr[i] - 5)) + ((arr[i] - 5) * nshc.BtnLeftSpace),
                        'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                        'background-position-y': -(nshc.kpdHeight)
                    });
                } else {
                    if (arr[i] == 5 && i == 1) {
                        own('.typeC > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * (arr[i] - 5)) + ((arr[i] - 5) * nshc.BtnLeftSpace),
                            'top'                  : (nshc.BtnH * (dummyLineNum + 1)) + ((dummyLineNum + 2) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    } else {
                        own('.typeC > .number > .kpd-blank').eq(i + dumpath).css({
                            'width'                : nshc.BtnW,
                            'height'               : nshc.BtnH,
                            'left'                 : (nshc.BtnW * (arr[i] + i)) + ((arr[i] + i) * nshc.BtnLeftSpace),
                            'top'                  : (nshc.BtnH * dummyLineNum) + ((dummyLineNum + 1) * nshc.BtnTopSpace),
                            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                            'background-position-x': -((nshc.kpdBgWidth / 12) * dum[i]),
                            'background-position-y': -(nshc.kpdHeight)
                        });
                    }
                }
            }
        }
    }
}




nshc.keyLocation = new function () {
    this.Pc = function () {
        
        nshc.charCutLine = 10;
        
        var qnDum = null;
        var q1Dum = null;
        var q2Dum = null;
        var q3Dum = null;

        for (var t = 0; t < 3; t++) {
            if (t == 0) {
                qnDum = nshc.dummy.ldQn();
                q1Dum = nshc.dummy.ldQ1();
                q2Dum = nshc.dummy.ldQ2();
                q3Dum = nshc.dummy.ldQ3();
            } else if (t == 1) {
                qnDum = nshc.dummy.udQn();
                q1Dum = nshc.dummy.udQ1();
                q2Dum = nshc.dummy.udQ2();
                q3Dum = nshc.dummy.udQ3();
            } else if (t == 2) {
                qnDum = nshc.dummy.sdQn();
                q1Dum = nshc.dummy.sdQ1();
                q2Dum = nshc.dummy.sdQ2();
                q3Dum = nshc.dummy.sdQ3();
            }

            
            for (var n = 0; n < 36; n++) {

                if (n >= 10) {
                    nshc.BtnBgPosX = -((nshc.kpdBgWidth / 32) * (n - nshc.charCutLine));
                    nshc.BtnBgPosX4Special = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosY4Lower = -(nshc.kpdHeight + nshc.BtnH);
                    nshc.BtnBgPosY4Upper = -(nshc.kpdHeight + (nshc.BtnH * 2));
                    nshc.BtnBgPosY4Special = -(nshc.kpdHeight + (nshc.BtnH * 3));
                } else if (n >= 0) {
                    nshc.BtnBgPosX = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosX4Special = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosY4Lower = -nshc.kpdHeight;
                    nshc.BtnBgPosY4Upper = -nshc.kpdHeight;
                    nshc.BtnBgPosY4Special = -(nshc.kpdHeight + (nshc.BtnH * 3));
                }

                if (n >= 29) {
                    nshc.lineNum = 3;
                    if (q3Dum[0] <= (n - (nshc.charCutLine + 18)) && q3Dum[1] > (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 1)) + ((n - (nshc.charCutLine + 18) + 1)) * nshc.BtnLeftSpace;
                    } else if (q3Dum[1] <= (n - (nshc.charCutLine + 18)) && q3Dum[2] > (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 2)) + ((n - (nshc.charCutLine + 18) + 2)) * nshc.BtnLeftSpace;
                    } else if (q3Dum[2] <= (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 3)) + ((n - (nshc.charCutLine + 18) + 3)) * nshc.BtnLeftSpace;
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18))) + ((n - (nshc.charCutLine + 18))) * nshc.BtnLeftSpace;
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 20) {
                    nshc.lineNum = 2;
                    if (q2Dum[0] <= (n - (nshc.charCutLine + 10)) && q2Dum[1] > (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 1)) + ((n - (nshc.charCutLine + 10) + 1)) * nshc.BtnLeftSpace;
                    } else if (q2Dum[1] <= (n - (nshc.charCutLine + 10)) && q2Dum[2] > (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 2)) + ((n - (nshc.charCutLine + 10) + 2)) * nshc.BtnLeftSpace;
                    } else if (q2Dum[2] <= (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 3)) + ((n - (nshc.charCutLine + 10) + 3)) * nshc.BtnLeftSpace;
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10))) + ((n - (nshc.charCutLine + 10))) * nshc.BtnLeftSpace;
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 10) {
                    nshc.lineNum = 1;
                    if (q1Dum[0] <= (n - nshc.charCutLine) && q1Dum[1] > (n - nshc.charCutLine)) {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine + 1)) + ((n - nshc.charCutLine + 1) * nshc.BtnLeftSpace);
                    } else if (q1Dum[1] <= n - nshc.charCutLine) {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine + 2)) + ((n - nshc.charCutLine + 2) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine)) + ((n - nshc.charCutLine) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.lineNum = 0;
                    if (qnDum[0] <= n && qnDum[1] > n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else if (qnDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 2)) + ((n + 2) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }

                if (t == 0) {
                    own('.lower > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX,
                        'background-position-y': nshc.BtnBgPosY4Lower
                    });
                } else if (t == 1) {
                    own('.upper > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX,
                        'background-position-y': nshc.BtnBgPosY4Upper
                    });
                } else if (t == 2) {
                    own('.special > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX4Special,
                        'background-position-y': nshc.BtnBgPosY4Special
                    });
                }
            }
        }

        
        var fnBtnPosX_chg = 0;                                  
        var fnBtnPosX_spe = (nshc.BtnW * 2) + (nshc.BtnLeftSpace * 2)     
        var fnBtnPosX_space = (nshc.BtnW * 4) + (nshc.BtnLeftSpace * 4);  
        var fnBtnPosX_cancle = (nshc.BtnW * 8) + (nshc.BtnLeftSpace * 8); 
        var fnBtnPosX_end = (nshc.BtnW * 9) + (nshc.BtnLeftSpace * 9);    

        for (var i = 0; i < 3; i++) {
            var className = null;
            if (i == 0) {
                className = ".lower > .kpd-cmd";
            } else if (i == 1) {
                className = ".upper > .kpd-cmd";
            } else if (i == 2) {
                className = ".special > .kpd-cmd";
            }

            
            own(className).eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : 0,
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': -(nshc.BtnW * 1),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            if (i == 1) {
                own(className).eq(0).css({'background-position-x': -(nshc.BtnW * 2)});
            }

            
            own(className).eq(1).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : (nshc.BtnW * 11) + (nshc.BtnLeftSpace * 11),
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': '0',
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            if (nshc.renewEnabled == true) {
                
                own(className).eq(2).css({
                    'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                    'height'               : nshc.BtnH,
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'left'                 : fnBtnPosX_chg,
                    'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                    'background-position-x': -(nshc.BtnW * 4),
                    'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
                });
            } else if (nshc.renewEnabled == false) {
                
                own(className).eq(2).css({
                    'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                    'height'               : nshc.BtnH,
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'left'                 : fnBtnPosX_chg,
                    'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                    'background-position-x': -(nshc.BtnW * 24),
                    'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH),
                    'cursor'               : 'default'
                });
            }

            
            own(className).eq(3).css({
                'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_spe,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 7),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            if (i == 2) {
                own(className).eq(3).css({'background-position-x': -(nshc.BtnW * 10)});
            }

            
            own(className).eq(4).css({
                'width'                : (nshc.BtnW * 4) + (nshc.BtnLeftSpace * 3),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_space,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 13),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(5).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_cancle,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 18),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(6).css({
                'width'                : (nshc.BtnW * 3) + (nshc.BtnLeftSpace * 2),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_end,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 19),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(7).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : nshc.kpdWidth - nshc.BtnW - (nshc.BtnLeftSpace * 2),
                'margin-top'           : '-2%',
                'top'                  : -nshc.BtnH - nshc.BtnTopSpace + 2,
                'background-position-x': -(nshc.BtnW * 23),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });
        }
    }
    this.Mc = function () {
        
        nshc.charCutLine = 10;
        
        var qnDum = null;
        var q1Dum = null;
        var q2Dum = null;
        var q3Dum = null;

        for (var t = 0; t < 3; t++) {
            if (t == 0) {
                qnDum = nshc.dummy.ldQn();
                q1Dum = nshc.dummy.ldQ1();
                q2Dum = nshc.dummy.ldQ2();
                q3Dum = nshc.dummy.ldQ3();
            } else if (t == 1) {
                qnDum = nshc.dummy.udQn();
                q1Dum = nshc.dummy.udQ1();
                q2Dum = nshc.dummy.udQ2();
                q3Dum = nshc.dummy.udQ3();
            } else if (t == 2) {
                qnDum = nshc.dummy.sdQn();
                q1Dum = nshc.dummy.sdQ1();
                q2Dum = nshc.dummy.sdQ2();
                q3Dum = nshc.dummy.sdQ3();
            }

            
            for (var n = 0; n < 36; n++) {

                if (n >= 10) {
                    nshc.BtnBgPosX = -((nshc.kpdBgWidth / 32) * (n - nshc.charCutLine));
                    nshc.BtnBgPosX4Special = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosY4Lower = -(nshc.kpdHeight + nshc.BtnH);
                    nshc.BtnBgPosY4Upper = -(nshc.kpdHeight + (nshc.BtnH * 2));
                    nshc.BtnBgPosY4Special = -(nshc.kpdHeight + (nshc.BtnH * 3));
                } else if (n >= 0) {
                    nshc.BtnBgPosX = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosX4Special = -((nshc.kpdBgWidth / 32) * n);
                    nshc.BtnBgPosY4Lower = -nshc.kpdHeight;
                    nshc.BtnBgPosY4Upper = -nshc.kpdHeight;
                    nshc.BtnBgPosY4Special = -(nshc.kpdHeight + (nshc.BtnH * 3));
                }

                if (n >= 29) {
                    nshc.lineNum = 3;
                    if (q3Dum[0] <= (n - (nshc.charCutLine + 18)) && q3Dum[1] > (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 1)) + ((n - (nshc.charCutLine + 18) + 1)) * nshc.BtnLeftSpace;
                    } else if (q3Dum[1] <= (n - (nshc.charCutLine + 18)) && q3Dum[2] > (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 2)) + ((n - (nshc.charCutLine + 18) + 2)) * nshc.BtnLeftSpace;
                    } else if (q3Dum[2] <= (n - (nshc.charCutLine + 18))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18) + 3)) + ((n - (nshc.charCutLine + 18) + 3)) * nshc.BtnLeftSpace;
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 18))) + ((n - (nshc.charCutLine + 18))) * nshc.BtnLeftSpace;
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 20) {
                    nshc.lineNum = 2;
                    if (q2Dum[0] <= (n - (nshc.charCutLine + 10)) && q2Dum[1] > (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 1)) + ((n - (nshc.charCutLine + 10) + 1)) * nshc.BtnLeftSpace;
                    } else if (q2Dum[1] <= (n - (nshc.charCutLine + 10)) && q2Dum[2] > (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 2)) + ((n - (nshc.charCutLine + 10) + 2)) * nshc.BtnLeftSpace;
                    } else if (q2Dum[2] <= (n - (nshc.charCutLine + 10))) {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10) + 3)) + ((n - (nshc.charCutLine + 10) + 3)) * nshc.BtnLeftSpace;
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.charCutLine + 10))) + ((n - (nshc.charCutLine + 10))) * nshc.BtnLeftSpace;
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 10) {
                    nshc.lineNum = 1;
                    if (q1Dum[0] <= (n - nshc.charCutLine) && q1Dum[1] > (n - nshc.charCutLine)) {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine + 1)) + ((n - nshc.charCutLine + 1) * nshc.BtnLeftSpace);
                    } else if (q1Dum[1] <= n - nshc.charCutLine) {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine + 2)) + ((n - nshc.charCutLine + 2) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.charCutLine)) + ((n - nshc.charCutLine) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.lineNum = 0;
                    if (qnDum[0] <= n && qnDum[1] > n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else if (qnDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 2)) + ((n + 2) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }

                if (t == 0) {
                    own('.lower > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX,
                        'background-position-y': nshc.BtnBgPosY4Lower
                    });
                } else if (t == 1) {
                    own('.upper > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX,
                        'background-position-y': nshc.BtnBgPosY4Upper
                    });
                } else if (t == 2) {
                    own('.special > .kpd-data').eq(n).css({
                        'width'                : nshc.BtnW,
                        'height'               : nshc.BtnH,
                        'left'                 : nshc.BtnposX,
                        'top'                  : nshc.BtnposY,
                        'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                        'background-position-x': nshc.BtnBgPosX4Special,
                        'background-position-y': nshc.BtnBgPosY4Special
                    });
                }
            }
        }

        
        var fnBtnPosX_chg = 0;                                  
        var fnBtnPosX_spe = (nshc.BtnW * 2) + (nshc.BtnLeftSpace * 2)     
        var fnBtnPosX_space = (nshc.BtnW * 4) + (nshc.BtnLeftSpace * 4);  
        var fnBtnPosX_cancle = (nshc.BtnW * 7) + (nshc.BtnLeftSpace * 7); 
        var fnBtnPosX_end = (nshc.BtnW * 9) + (nshc.BtnLeftSpace * 9);    

        for (var i = 0; i < 3; i++) {
            var className = null;
            if (i == 0) {
                className = ".lower > .kpd-cmd";
            } else if (i == 1) {
                className = ".upper > .kpd-cmd";
            } else if (i == 2) {
                className = ".special > .kpd-cmd";
            }
            
            own(className).eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : 0,
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': -(nshc.BtnW * 1),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            if (i == 1) {
                own(className).eq(0).css({'background-position-x': -(nshc.BtnW * 2)});
            }

            
            own(className).eq(1).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : (nshc.BtnW * 11) + (nshc.BtnLeftSpace * 11),
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': '0',
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            if (nshc.renewEnabled == true) {
                
                own(className).eq(2).css({
                    'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                    'height'               : nshc.BtnH,
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'left'                 : fnBtnPosX_chg,
                    'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                    'background-position-x': -(nshc.BtnW * 4),
                    'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
                });
            } else if (nshc.renewEnabled == false) {
                
                own(className).eq(2).css({
                    'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                    'height'               : nshc.BtnH,
                    'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                    'left'                 : fnBtnPosX_chg,
                    'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                    'background-position-x': -(nshc.BtnW * 26),
                    'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH),
                    'cursor'               : 'default'
                });
            }

            
            own(className).eq(3).css({
                'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_spe,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 7),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            if (i == 2) {
                own(className).eq(3).css({'background-position-x': -(nshc.BtnW * 10)});
            }

            
            own(className).eq(4).css({
                'width'                : (nshc.BtnW * 3) + (nshc.BtnLeftSpace * 2),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_space,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 13),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(5).css({
                'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_cancle,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 17),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(6).css({
                'width'                : (nshc.BtnW * 3) + (nshc.BtnLeftSpace * 2),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_end,
                'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
                'background-position-x': -(nshc.BtnW * 20),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });

            
            own(className).eq(7).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH / 4 * 3,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : nshc.kpdWidth - nshc.BtnW - (nshc.BtnLeftSpace * 3),
                'margin-top'           : '-2%',
                'top'                  : -(nshc.BtnH / 4 * 3) - (nshc.BtnTopSpace * 4) - 1,
                'background-position-x': -(nshc.BtnW * 24),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });
        }
    }
    this.Na = function () {
        
        nshc.numCutLine = 3;
        
        var nDum = nshc.dummy.dNa();

        
        for (var n = 0; n < 10; n++) {

            nshc.BtnBgPosX = -((nshc.kpdBgWidth / 12) * n);
            nshc.BtnBgPosYNumber = -nshc.kpdHeight;

            if (nDum[0] <= 3 && 3 <= nDum[1] && nDum[1] <= 6) {
                if (n >= 6) {
                    nshc.lineNum = 2;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 3))) + ((n - (nshc.numCutLine + 3)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 3) {
                    nshc.lineNum = 1;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - nshc.numCutLine) + 1)) + (((n - nshc.numCutLine) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine)) + ((n - nshc.numCutLine) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (nDum[0] <= 3 && 7 <= nDum[1] && nDum[1] <= 10) {
                if (n >= 7) {
                    nshc.lineNum = 2;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - 7) + 1)) + (((n - 7) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - ((nshc.numCutLine + 3) + 1))) + ((n - ((nshc.numCutLine + 3) + 1)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 3) {
                    nshc.lineNum = 1;
                    nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine)) + ((n - nshc.numCutLine) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (4 <= nDum[0] && nDum[0] <= 7 && 7 <= nDum[1] && nDum[1] <= 10) {
                if (n >= 7) {
                    nshc.lineNum = 2;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n - 7 + 1)) + ((n - 7 + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - 7)) + ((n - 7) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 4) {
                    nshc.lineNum = 1;
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - 4) + 1)) + (((n - 4) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - 4)) + ((n - 4) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            }

            own('.typeA > .number > .kpd-data').eq(n).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'left'                 : nshc.BtnposX,
                'top'                  : nshc.BtnposY,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'background-position-x': nshc.BtnBgPosX,
                'background-position-y': nshc.BtnBgPosYNumber
            });

            var arr = new Array();
            if (nshc.backupDone == false) {
                nshc.numKdpID[n] = own('.typeA > .number > .kpd-data').eq(n).attr("id");
                nshc.numKdpAL[n] = own('.typeA > .number > .kpd-data').eq(n).attr("aria-label");
                nshc.numKdpNC[n] = own('.typeA > .number > .kpd-data').eq(n).attr("nfiltercode");
                if (n == 9) nshc.backupDone = true;
            }
            arr[0] = own('.typeA > .number > .kpd-data').eq(n).css("background-position-x");
            arr[1] = own('.typeA > .number > .kpd-data').eq(n).css("background-position-y");

            nshc.kpd.backupNumKpd(n, arr);

        }

        
        var fnBtnPosX_chg = 0;                                      
        var fnBtnPosX_clear = (nshc.BtnW * 1) + (nshc.BtnLeftSpace * 1)       
        var fnBtnPosX_backspace = (nshc.BtnW * 2) + (nshc.BtnLeftSpace * 2);  
        var fnBtnPosX_end = (nshc.BtnW * 3) + (nshc.BtnLeftSpace * 3);        

        if (nshc.renewEnabled == true) {
            
            own('.typeA > .number > .kpd-cmd').eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': 0,
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });
        } else if (nshc.renewEnabled == false) {
            
            own('.typeA > .number > .kpd-cmd').eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
                'background-position-x': -(nshc.BtnW * 6),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH),
                'cursor'               : 'default'
            });
        }

        
        own('.typeA > .number > .kpd-cmd').eq(1).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_clear,
            'top'                  : (nshc.BtnH * 3) + (nshc.BtnTopSpace * 4),
            'background-position-x': -(nshc.BtnW * 1),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeA > .number > .kpd-cmd').eq(2).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_backspace,
            'top'                  : (nshc.BtnH * 3) + nshc.BtnTopSpace * 4,
            'background-position-x': -(nshc.BtnW * 2),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeA > .number > .kpd-cmd').eq(3).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_end,
            'top'                  : (nshc.BtnH * 3) + nshc.BtnTopSpace * 4,
            'background-position-x': -(nshc.BtnW * 3),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });
        
        own('.typeA > .number > .kpd-cmd').eq(4).css({
            'width'                : nshc.BtnW / 3,
            'height'               : nshc.BtnH / 4 * 3,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : nshc.kpdWidth - (nshc.BtnW / 3) - (nshc.BtnLeftSpace * 3),
            'margin-top'           : '-2%',
            'top'                  : -(nshc.BtnH / 4 * 3) - (nshc.BtnTopSpace * 3) + 1,
            'background-position-x': -(nshc.BtnW * 5),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        this.randomNumKpLocation('typeA');
    }
    this.Nb = function () {
        
        nshc.numCutLine = 2;
        
        var nDum = nshc.dummy.dNb();

        
        for (var n = 0; n < 10; n++) {

            nshc.BtnBgPosX = -((nshc.kpdBgWidth / 12) * n);
            nshc.BtnBgPosYNumber = -nshc.kpdHeight;

            if (nDum[0] <= 2 && 2 <= nDum[1] && nDum[1] <= 4) {
                if (n >= 7) {
                    nshc.lineNum = 3;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 5))) + ((n - (nshc.numCutLine + 5)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 4) {
                    nshc.lineNum = 2;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 2))) + ((n - (nshc.numCutLine + 2)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 2) {
                    nshc.lineNum = 1;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - nshc.numCutLine) + 1)) + (((n - nshc.numCutLine) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine)) + ((n - nshc.numCutLine) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (nDum[0] <= 2 && 5 <= nDum[1] && nDum[1] <= 7) {
                if (n >= 7) {
                    nshc.lineNum = 3;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 5))) + ((n - (nshc.numCutLine + 5)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 5) {
                    nshc.lineNum = 2;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 3)) + 1)) + (((n - (nshc.numCutLine + 3)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 3))) + ((n - (nshc.numCutLine + 3)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 2) {
                    nshc.lineNum = 1;
                    nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine) + (n - nshc.numCutLine) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (nDum[0] <= 2 && 8 <= nDum[1] && nDum[1] <= 10) {
                if (n >= 8) {
                    nshc.lineNum = 3;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 6)) + 1)) + (((n - (nshc.numCutLine + 6)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 6))) + ((n - (nshc.numCutLine + 6)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 5) {
                    nshc.lineNum = 2;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 3))) + ((n - (nshc.numCutLine + 3)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 2) {
                    nshc.lineNum = 1;
                    nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine) + (n - nshc.numCutLine) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (3 <= nDum[0] && nDum[0] <= 5 && 5 <= nDum[1] && nDum[1] <= 7) {
                if (n >= 7) {
                    nshc.lineNum = 3;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 5))) + ((n - (nshc.numCutLine + 5)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 5) {
                    nshc.lineNum = 2;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 3)) + 1)) + (((n - (nshc.numCutLine + 3)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 3))) + ((n - (nshc.numCutLine + 3)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 3) {
                    nshc.lineNum = 1;
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 1)) + 1)) + (((n - (nshc.numCutLine + 1)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 1))) + ((n - (nshc.numCutLine + 1)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (3 <= nDum[0] && nDum[0] <= 5 && 8 <= nDum[1] && nDum[1] <= 10) {
                if (n >= 8) {
                    nshc.lineNum = 3;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 6)) + 1)) + (((n - (nshc.numCutLine + 6)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 6))) + ((n - (nshc.numCutLine + 6)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 5) {
                    nshc.lineNum = 2;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 3))) + ((n - (nshc.numCutLine + 3)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 3) {
                    nshc.lineNum = 1;
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 1)) + 1)) + (((n - (nshc.numCutLine + 1)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 1))) + ((n - (nshc.numCutLine + 1)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            } else if (6 <= nDum[0] && nDum[0] <= 8 && 8 <= nDum[1] && nDum[1] <= 10) {
                if (n >= 8) {
                    nshc.lineNum = 3;
                    if (nDum[1] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 6)) + 1)) + (((n - (nshc.numCutLine + 6)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 6))) + ((n - (nshc.numCutLine + 6)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 6) {
                    nshc.lineNum = 2;
                    if (nDum[0] <= n) {
                        nshc.BtnposX = (nshc.BtnW * ((n - (nshc.numCutLine + 4)) + 1)) + (((n - (nshc.numCutLine + 4)) + 1) * nshc.BtnLeftSpace);
                    } else {
                        nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 4))) + ((n - (nshc.numCutLine + 4)) * nshc.BtnLeftSpace);
                    }
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 3) {
                    nshc.lineNum = 1;
                    nshc.BtnposX = (nshc.BtnW * (n - (nshc.numCutLine + 1))) + ((n - (nshc.numCutLine + 1)) * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

                } else if (n >= 0) {
                    nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                    nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
                }
            }

            own('.typeB > .number > .kpd-data').eq(n).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'left'                 : nshc.BtnposX,
                'top'                  : nshc.BtnposY,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'background-position-x': nshc.BtnBgPosX,
                'background-position-y': nshc.BtnBgPosYNumber
            });

            var arr = new Array();
            if (nshc.backupDone == false) {
                nshc.numKdpID[n] = own('.typeB > .number > .kpd-data').eq(n).attr("id");
                nshc.numKdpAL[n] = own('.typeB > .number > .kpd-data').eq(n).attr("aria-label");
                nshc.numKdpNC[n] = own('.typeB > .number > .kpd-data').eq(n).attr("nfiltercode");
                if (n == 9) nshc.backupDone = true;
            }
            arr[0] = own('.typeB > .number > .kpd-data').eq(n).css("background-position-x");
            arr[1] = own('.typeB > .number > .kpd-data').eq(n).css("background-position-y");

            nshc.kpd.backupNumKpd(n, arr);

        }

        
        var fnBtnPosX_chg = 0;                                  
        var fnBtnPosX_clear = (nshc.BtnW / 2) + (nshc.BtnLeftSpace / 2);  
        var fnBtnPosX_backspace = nshc.BtnW + nshc.BtnLeftSpace;          
        var fnBtnPosX_end = (nshc.BtnW * 2) + (nshc.BtnLeftSpace * 2);    

        
        own('.typeB > .number > .kpd-cmd').eq(0).css({
            'width'                : (nshc.BtnW / 2) - (nshc.BtnLeftSpace / 2),
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_chg,
            'top'                  : (nshc.BtnH * 4) + (nshc.BtnTopSpace * 5),
            'background-position-x': 0,
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        if (nshc.renewEnabled == true) {
            
            own('.typeB > .number > .kpd-cmd').eq(0).css({
                'width'                : (nshc.BtnW / 2) - (nshc.BtnLeftSpace / 2),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 4) + (nshc.BtnTopSpace * 5),
                'background-position-x': 0,
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });
        } else if (nshc.renewEnabled == false) {
            
            own('.typeB > .number > .kpd-cmd').eq(0).css({
                'width'                : (nshc.BtnW / 2) - (nshc.BtnLeftSpace / 2),
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 4) + (nshc.BtnTopSpace * 5),
                'background-position-x': -(nshc.BtnW * 5),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH),
                'cursor'               : 'default'
            });
        }

        
        own('.typeB > .number > .kpd-cmd').eq(1).css({
            'width'                : (nshc.BtnW / 2) - (nshc.BtnLeftSpace / 2),
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_clear,
            'top'                  : (nshc.BtnH * 4) + (nshc.BtnTopSpace * 5),
            'background-position-x': -nshc.BtnW,
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeB > .number > .kpd-cmd').eq(2).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_backspace,
            'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
            'background-position-x': -(nshc.BtnW * 2),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeB > .number > .kpd-cmd').eq(3).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_end,
            'top'                  : (nshc.BtnH * 4) + nshc.BtnTopSpace * 5,
            'background-position-x': -(nshc.BtnW * 3),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });
        
        own('.typeB > .number > .kpd-cmd').eq(4).css({
            'width'                : nshc.BtnW / 3,
            'height'               : nshc.BtnH / 4 * 3,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : nshc.kpdWidth - (nshc.BtnW / 3) - (nshc.BtnLeftSpace * 3),
            'margin-top'           : '-2%',
            'top'                  : -(nshc.BtnH / 4 * 3) - (nshc.BtnTopSpace * 3) + 2,
            'background-position-x': -(nshc.BtnW * 4),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        this.randomNumKpLocation('typeB');
    }
    this.Nc = function () {
        
        nshc.numCutLine = 5;
        
        var nDum = nshc.dummy.dNc();

        
        for (var n = 0; n < 10; n++) {

            nshc.BtnBgPosX = -((nshc.kpdBgWidth / 12) * n);
            nshc.BtnBgPosYNumber = -nshc.kpdHeight;

            if (n >= 5) {
                nshc.lineNum = 1;
                if (nDum[1] <= n) {
                    nshc.BtnposX = (nshc.BtnW * ((n - nshc.numCutLine) + 1)) + (((n - nshc.numCutLine) + 1) * nshc.BtnLeftSpace);
                } else {
                    nshc.BtnposX = (nshc.BtnW * (n - nshc.numCutLine)) + ((n - nshc.numCutLine) * nshc.BtnLeftSpace);
                }
                nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + ((nshc.lineNum + 1) * nshc.BtnTopSpace);

            } else if (n >= 0) {
                if (nDum[0] <= n) {
                    nshc.BtnposX = (nshc.BtnW * (n + 1)) + ((n + 1) * nshc.BtnLeftSpace);
                } else {
                    nshc.BtnposX = (nshc.BtnW * n) + (n * nshc.BtnLeftSpace);
                }
                nshc.BtnposY = (nshc.BtnH * nshc.lineNum) + (nshc.BtnTopSpace);
            }

            own('.typeC > .number > .kpd-data').eq(n).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'left'                 : nshc.BtnposX,
                'top'                  : nshc.BtnposY,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'background-position-x': nshc.BtnBgPosX,
                'background-position-y': nshc.BtnBgPosYNumber
            });

            var arr = new Array();
            if (nshc.backupDone == false) {
                nshc.numKdpID[n] = own('.typeC > .number > .kpd-data').eq(n).attr("id");
                nshc.numKdpAL[n] = own('.typeC > .number > .kpd-data').eq(n).attr("aria-label");
                nshc.numKdpNC[n] = own('.typeC > .number > .kpd-data').eq(n).attr("nfiltercode");
                if (n == 9) nshc.backupDone = true;
            }
            arr[0] = own('.typeC > .number > .kpd-data').eq(n).css("background-position-x");
            arr[1] = own('.typeC > .number > .kpd-data').eq(n).css("background-position-y");

            nshc.kpd.backupNumKpd(n, arr);

        }

        
        var fnBtnPosX_chg = 0;                                      
        var fnBtnPosX_clear = (nshc.BtnW * 1) + (nshc.BtnLeftSpace * 1)       
        var fnBtnPosX_backspace = (nshc.BtnW * 2) + (nshc.BtnLeftSpace * 2);  
        var fnBtnPosX_end = (nshc.BtnW * 4) + (nshc.BtnLeftSpace * 4);        

        
        own('.typeC > .number > .kpd-cmd').eq(0).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_chg,
            'top'                  : (nshc.BtnH * 2) + (nshc.BtnTopSpace * 3),
            'background-position-x': 0,
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        if (nshc.renewEnabled == true) {
            
            own('.typeC > .number > .kpd-cmd').eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 2) + (nshc.BtnTopSpace * 3),
                'background-position-x': 0,
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
            });
        } else if (nshc.renewEnabled == false) {
            
            own('.typeC > .number > .kpd-cmd').eq(0).css({
                'width'                : nshc.BtnW,
                'height'               : nshc.BtnH,
                'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
                'left'                 : fnBtnPosX_chg,
                'top'                  : (nshc.BtnH * 2) + (nshc.BtnTopSpace * 3),
                'background-position-x': -(nshc.BtnW * 9),
                'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH),
                'cursor'               : 'default'
            });
        }

        
        own('.typeC > .number > .kpd-cmd').eq(1).css({
            'width'                : nshc.BtnW,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_clear,
            'top'                  : (nshc.BtnH * 2) + (nshc.BtnTopSpace * 3),
            'background-position-x': -nshc.BtnW,
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeC > .number > .kpd-cmd').eq(2).css({
            'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_backspace,
            'top'                  : (nshc.BtnH * 2) + nshc.BtnTopSpace * 3,
            'background-position-x': -(nshc.BtnW * 2),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        own('.typeC > .number > .kpd-cmd').eq(3).css({
            'width'                : (nshc.BtnW * 2) + nshc.BtnLeftSpace,
            'height'               : nshc.BtnH,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : fnBtnPosX_end,
            'top'                  : (nshc.BtnH * 2) + nshc.BtnTopSpace * 3,
            'background-position-x': -(nshc.BtnW * 5),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });
        
        own('.typeC > .number > .kpd-cmd').eq(4).css({
            'width'                : nshc.BtnW / 3 * 2,
            'height'               : nshc.BtnH / 3 * 2,
            'background-size'      : nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px',
            'left'                 : nshc.kpdWidth - (nshc.BtnW / 3 * 2) - (nshc.BtnLeftSpace * 3),
            'margin-top'           : '-2%',
            'top'                  : -(nshc.BtnH / 3 * 2) - (nshc.BtnTopSpace * 3) + 1,
            'background-position-x': -(nshc.BtnW * 8),
            'background-position-y': -(nshc.kpdBgHeight - nshc.BtnH)
        });

        
        this.randomNumKpLocation('typeC');
    }
    
    this.randomNumKpLocation = function (type) {
        if (nshc.randomNumKdp == true) {
            if (nshc.reSizeEvent != true) {
                nshc.newNumKpdArr = nshc.kpd.numIndex();
            }
            

            for (var n = 0; n < 10; n++) {
                own('.' + type + '> .number > .kpd-data').eq(n).attr({
                    'id'         : nshc.numKdpID[nshc.newNumKpdArr[n]],
                    'aria-label' : nshc.numKdpAL[nshc.newNumKpdArr[n]],
                    'nfiltercode': nshc.numKdpNC[nshc.newNumKpdArr[n]]
                });
                own('.' + type + '> .number > .kpd-data').eq(n).css({
                    'background-position-x': nshc.backupData[nshc.newNumKpdArr[n]].bpx,
                    'background-position-y': nshc.backupData[nshc.newNumKpdArr[n]].bpy
                });
            }
        }
    }
}




function kpdLoad(kpdTypeParam) {
    var ww = own(window).width();
    var wh = own(window).height();

    var d_size = kpdTypeParam[1];

    if (!nshc.isMobile) { 
        if (kpdTypeParam[0] != 'pcCKpd') {
            ww = nshc.numFixSize;
        } else {
            if (ww >= kpdTypeParam[1]) {
                ww = kpdTypeParam[1];
            }
        }
    } else { 
        if (window.orientation == 0) { 
            if (ww >= kpdTypeParam[1]) {
                ww = kpdTypeParam[1];
            }
        } else if (window.orientation != 0) { 
            if (wh >= kpdTypeParam[2]) {
                ww = kpdTypeParam[1];
            } else {
                ww = own(window).height();
            }
        }
    }

    
    var kpdCurrentType = kpdTypeParam[0];           
    var kpdoriW = kpdTypeParam[1];                  
    var kpdoriH = kpdTypeParam[2];                  
    var kpdoriBgW = kpdTypeParam[3];                
    var kpdoriBgH = kpdTypeParam[4];                
    var BtnoriW = kpdTypeParam[5];                  
    var BtnoriH = kpdTypeParam[6];                  
    var val4BtnTopSpace = kpdTypeParam[7];          
    var val4BtnLeftSpace = kpdTypeParam[8];         
    var kpdTopRate = kpdTypeParam[9];               
    

    nshc.lineNum = 0;                                   
    nshc.BtnW = (BtnoriW * ww) / kpdoriW; 		        
    nshc.BtnH = (BtnoriH * ww) / kpdoriW; 		        
    nshc.BtnposX = null;				                
    nshc.BtnposY = null;                                
    nshc.BtnTopSpace = nshc.BtnH / val4BtnTopSpace;     
    nshc.BtnLeftSpace = nshc.BtnW / val4BtnLeftSpace;   
    nshc.BtnBgPosX = null;                              
    nshc.BtnBgPosY4Lower = null;	                    
    nshc.BtnBgPosY4Upper = null;	                    
    nshc.BtnBgPosY4Special = null;	                    
    nshc.BtnBgPosYNumber = null;                        
    nshc.BtnBgPosX4Special = null;                      
    nshc.kpdWidth = (kpdoriW * ww) / d_size;            
    nshc.kpdHeight = (kpdoriH * ww) / d_size;           
    nshc.kpdBgWidth = (kpdoriBgW * ww) / d_size;        
    nshc.kpdBgHeight = (kpdoriBgH * ww) / d_size;       

    
    if (ww <= d_size) {
        own('#ownKeypad').css({'width': ww, 'height': nshc.kpdHeight});
        own('.kpdWrap').css({
            'width'          : ww,
            'height'         : nshc.kpdHeight,
            'background-size': nshc.kpdBgWidth + 'px ' + nshc.kpdBgHeight + 'px'
        });
    } else {
        own('#ownKeypad').css({'width': kpdoriW + 'px', 'height': kpdoriH + 'px'});
    }

    
    own('.kpdGrp').css({
        'position'   : 'relative',
        'top'        : kpdTopRate,
        'left'       : '50%',
        'margin-left': '-49%'
    })

    
    if (kpdCurrentType == 'pcCKpd') {
        nshc.keyLocation.Pc();
    } else if (kpdCurrentType == 'mCKpd') {
        nshc.keyLocation.Mc();
    } else if (kpdCurrentType == 'nAKpd') {
        nshc.keyLocation.Na();
    } else if (kpdCurrentType == 'nBKpd') {
        nshc.keyLocation.Nb();
    } else if (kpdCurrentType == 'nCKpd') {
        nshc.keyLocation.Nc();
    }
}




nshc.viewChange = new function () {

    this.special2Lower = function () {
        own('.ownKeypadWrap .kpdGrp.special').css('display', 'none');
        own('.ownKeypadWrap .kpdGrp.lower').css('display', 'block');
    }
    this.lower2Special = function () {
        own('.ownKeypadWrap .kpdGrp.lower').css('display', 'none');
        own('.ownKeypadWrap .kpdGrp.special').css('display', 'block');
    }
    this.lower2Upper = function () {
        own('.ownKeypadWrap .kpdGrp.lower').css('display', 'none');
        own('.ownKeypadWrap .kpdGrp.upper').css('display', 'block');
    }
    this.upper2Lower = function () {
        own('.ownKeypadWrap .kpdGrp.upper').css('display', 'none');
        own('.ownKeypadWrap .kpdGrp.lower').css('display', 'block');
    }
    this.upper2Special = function () {
        own('.ownKeypadWrap .kpdGrp.upper').css('display', 'none');
        own('.ownKeypadWrap .kpdGrp.special').css('display', 'block');
    }
}
