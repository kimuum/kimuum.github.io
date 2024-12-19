<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.net.*" %>
<%@ page import="java.io.*" %>
<%@ page import="org.apache.log4j.Logger" %>
<%@ page isErrorPage="true" %>
<%

Logger log = Logger.getLogger(this.getClass());

String error = "";									// [engin] error code
String errorMsg = "";
boolean screenChange = false;					// T전화 기본화면 강제전환

String errorCase1 = "현재 보이는 ARS를 사용할 수 없습니다.";
String errorCase2 = "현재 보이는 ARS를 사용할 수 없습니다.<br>버튼식 ARS로 전환합니다.";
String errorCase3 = "현재 보이는 ARS를 사용할 수 없습니다.<br>상담사를 연결해 드리겠습니다.";
String errorCase4 = "해당 URL이 만료되었습니다.<br>이용해주셔서 감사합니다.";


String timerCount = "0";		// default 0초.
Object osType_check = (String)session.getAttribute("osType"); // SMS 방식 추가로 타입 추가
log.debug("osType 체크 : " + osType_check);
if(osType_check == null){
	osType_check = "0";
}
if(exception == null || exception.getMessage() == null && osType_check.equals("2")){
	
InputStream in = null;
                        // URL connection 으로 웹서버 접근.
                       log.debug("url 다이렉트");
					   // 운영 URL 주소
//					    URL url = new URL("https://vars.sktelecom.com:8060/VARS_1.0.1/html/TARS_ERROR_SMS.html");
					   
					   // 개발 URL 주소
						//  URL url = new URL("https://varsd.sktelecom.com:8060/VARS_QA/html/TARS_ERROR_SMS.html");
//                          url.openConnection();

//			 in = url.openStream();

//		  try{
//
		try{

                        File file = new File("/ISS_WEB/VARS/VARS_1.0.1/html/TARS_ERROR_SMS.html");
                        in = new FileInputStream(file);

                if(in == null)
                {
                if(errorMsg == null || errorMsg.equals(""))
                        errorMsg = "Not Found Page. Please Check your URL.";
            }else
            {

                String line = "";

                BufferedReader reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
            while((line = reader.readLine()) != null)
            {
                if(line.matches("[<][Hh][Ee][Aa][Dd][>]"))
                    {
						line = line.replaceAll("[<][Hh][Ee][Aa][Dd][>]", "<head>\r\n<script type='text/javascript'></script>");
                         out.println(line);

                }else{
                    // line = line.replaceAll("\\{version\\}", "VARS_QA");
					line = line.replaceAll("\\{version\\}", "VARS_1.0.1");
                     line = line.replaceAll("\\{vars_type\\}", "_" + "c");
                     out.println(line);
                }

			}
				out.flush();
				return;

            }

    }
        finally
        {
        try
        {
           in.close();
           System.out.println("input stream close ok!");

                }
        catch(Throwable t)
        {
              System.out.println("input stream close pass or fail!");

                }
    }

}else if(exception == null || exception.getMessage() == null){
	log.error("[exceptionError.jsp] [error Message] exception is null !!");
	errorMsg = errorCase2;
	
}else{
	// error 메세지
	errorMsg = exception.getMessage();	
	log.error("[exceptionError.jsp] [error Message] "+ errorMsg);
	
	if(errorMsg.indexOf("[AGENT]") > -1){				// pc 접근일 경우
		errorMsg	= errorCase1;
		
	}else if(errorMsg.indexOf("[T-server]") > -1){
		errorMsg	= errorCase2;
		timerCount = "5";
		
	}else if(errorMsg.indexOf("[ICM]") > -1){
		error 		= errorMsg.substring(errorMsg.indexOf("[ICM] ")+6);
		
		// 1. 호 폭주.
		if(error.equals("[0014]")) errorMsg = errorCase3;
		else if(error.equals("[0013]") && osType_check.equals("2")) {
		
		InputStream in = null;
                        // URL connection 으로 웹서버 접근.
                       log.debug("url 다이렉트");
					   // 운영 URL 주소
//					     URL url = new URL("https://vars.sktelecom.com:8060/VARS_1.0.1/html/TARS_ERROR_SMS.html");
					   
					   // 개발 URL 주소
						//  URL url = new URL("https://varsd.sktelecom.com:8060/VARS_QA/html/TARS_ERROR_SMS.html");
  //                        url.openConnection();

//			 in = url.openStream();

//		  try{

		try{

                        File file = new File("/ISS_WEB/VARS/VARS_1.0.1/html/TARS_ERROR_SMS.html");
                        in = new FileInputStream(file);

                if(in == null)
                {
                if(errorMsg == null || errorMsg.equals(""))
                        errorMsg = "Not Found Page. Please Check your URL.";
            }else
            {

                String line = "";

                BufferedReader reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
            while((line = reader.readLine()) != null)
            {
                if(line.matches("[<][Hh][Ee][Aa][Dd][>]"))
                    {
						line = line.replaceAll("[<][Hh][Ee][Aa][Dd][>]", "<head>\r\n<script type='text/javascript'></script>");
                         out.println(line);

                }else{
                 //    line = line.replaceAll("\\{version\\}", "VARS_QA");
				 line = line.replaceAll("\\{version\\}", "VARS_1.0.1");
                     line = line.replaceAll("\\{vars_type\\}", "_" + "c");
                     out.println(line);
                }

			}
				out.flush();
				return;

            }

    }
        finally
        {
        try
        {
           in.close();
           System.out.println("input stream close ok!");

                }
        catch(Throwable t)
        {
              System.out.println("input stream close pass or fail!");

                }
    }
		}
		// 2. icm 등록 오류. (버튼식 전환)
		else if(error.equals("[0013]")) errorMsg = errorCase2;
		// 그외
		else errorMsg	= errorCase2;
		
	}else if(errorMsg.indexOf("[IVR]") > -1){
		error 		= errorMsg.substring(errorMsg.indexOf("[IVR] ")+6);
		
		// 예외처리 임.
		// 1. 보이는 ARS 메인에서 버튼식 ARS로 전환 시 호 변경이 일어나고 READ TIMEOUT 발생 (ivr 서비스 체인지, ivr 세션 안끊어짐.)
		if(error.equals("Read timed out")){
			errorMsg = "";
			timerCount = "-1";
		}
		else if(error.equals("Invalid Ack method. expected 18, but 22") && osType_check.equals("2")){
			InputStream in = null;
                        // URL connection 으로 웹서버 접근.
                       log.debug("url 다이렉트");
					   // 운영 URL 주소
//					    URL url = new URL("https://vars.sktelecom.com:8060/VARS_1.0.1/html/TARS_ERROR_SMS.html");
					   
					   // 개발 URL 주소
						//  URL url = new URL("https://varsd.sktelecom.com:8060/VARS_QA/html/TARS_ERROR_SMS.html");
  //                        url.openConnection();

//			 in = url.openStream();

//		  try{
//
		try{

                        File file = new File("/ISS_WEB/VARS/VARS_1.0.1/html/TARS_ERROR_SMS.html");
                        in = new FileInputStream(file);

                if(in == null)
                {
                if(errorMsg == null || errorMsg.equals(""))
                        errorMsg = "Not Found Page. Please Check your URL.";
            }else
            {

                String line = "";

                BufferedReader reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
            while((line = reader.readLine()) != null)
            {
                if(line.matches("[<][Hh][Ee][Aa][Dd][>]"))
                    {
						line = line.replaceAll("[<][Hh][Ee][Aa][Dd][>]", "<head>\r\n<script type='text/javascript'></script>");
                         out.println(line);

                }else{
                  //   line = line.replaceAll("\\{version\\}", "VARS_QA");
				  line = line.replaceAll("\\{version\\}", "VARS_1.0.1");
                     line = line.replaceAll("\\{vars_type\\}", "_" + "c");
                     out.println(line);
                }

			}
				out.flush();
				return;

            }

    }
        finally
        {
        try
        {
           in.close();
           System.out.println("input stream close ok!");

                }
        catch(Throwable t)
        {
              System.out.println("input stream close pass or fail!");

                }
    }
			
		}
		// 예외처리 임.
		// 2. IVR 응답이 SESSION RELEASE 로 올 때 Invalid Ack method. expected 18, but 22 에러. 빈페이지 처리. T전화 기본화면 강제전환 시킴.
		else if(error.equals("Invalid Ack method. expected 18, but 22")){
			errorMsg = "";
			timerCount = "-1";
			screenChange = true;
			
		}
		// 1. 보이는 ARS 라이센스 초과
		else if(error.equals("[0x01]")){
			errorMsg = errorCase2;
			timerCount = "5";
			
		}
		// 3. IVR 전체 장애 (일부장애 경우는 없슴)
		else if(error.equals("[0x03]")) errorMsg = errorCase3;
		// 그외
		else errorMsg	= errorCase2;
		
	}else{										// 일반적 오류
		errorMsg = errorCase2;
		
	}
	
}

log.error("** errorMsg ==> "+errorMsg);
log.error("  errorTimerCount ==> " + timerCount);

String varsType	= "T";
Object tempType	= (String)session.getAttribute("cur_vars_type");
if (tempType != null)
	varsType	= (String)tempType;

if(osType_check.equals("2"))
	varsType = "C";


log.error("***** current session vars type is " + varsType + "******");

%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, user-scalable=no">
	<title>SKT보이는 ARS</title>
	<link rel="stylesheet" type="text/css" href="/common/css/common.css">
	<link rel="stylesheet" type="text/css" href="/common/css/content.css">
	<link rel="stylesheet" type="text/css" href="/common/js/jquery.alerts-1.1/jquery.alerts.css">
	<script type="text/javascript" src="/common/js/jquery/jquery.1.11.1.min.js"></script>
	<script type="text/javascript" src="/common/js/jquery/jquery-migrate-1.2.1.js"></script>
	<script type="text/javascript" src="/common/js/jquery.alerts-1.1/jquery.alerts.js"></script>
</head>
<body>
<section class="wrap pd0">
	<h1 class="none" <%= timerCount.equals("-1")? "style='display: none;'": "" %>>SKT보이는 ARS</h1>
	<div class="error_wrap">
		<div class="cont" <%= timerCount.equals("-1")? "style='display: none;'": "" %>>
			<p class="txt">죄송합니다.</p>
			<p class="desc"><%= errorMsg %></p>
		</div>
	</div>
</section>

<script type="text/javascript" src="/common/js/common.js"></script>
<script type="text/javascript" src="/common/js/wforcus.js"></script>
<script type="text/javascript" src="/common/js/tphone.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		"use strict";
		var ui = common.ui;
		
		//좌/우측 swipe이벤트
		common.PubSub.on({
			'swipe.left': function (e, data) {
				console.log(data.direction, data.startX, data.distanceX);
			},
			'swipe.right': function (e, data) {
				console.log(data.direction, data.startX, data.distanceX);
			}
		});
		
		<%
		if(screenChange){
		%>
			setTimeout(function()
			{
				<%
				log.error("check changeoverPhone 1 : " + varsType);
				if (varsType.equals("T"))
				{
					log.error("changeoverPhone 1");
				%>
					// T전화 기본화면 전환
					changeoverPhone(false); 
				<%
				}
				%>
	
			}, 0);
		<%
		}else{
		%>
			// 예외처리
			// timerCount 를 센 후 callback 함수를 실행한다.
			// timerCount 가 -1 이면 timer 처리 없다.
			if(<%=timerCount%> > -1 &&  <%=timerCount%> != 7){
				setTimer(<%=timerCount%>, timerCallback, null);
			
			}
		<%
		}
		%>
		
	});
	
	// timer callback 함수
	function timerCallback()
	{
		
		// T전화 기본화면 전환
		// 버튼식 ARS 전환일 때 키패드 호출.
		<%
		log.error("check changeoverPhone 2 : " + varsType);
		if (varsType.equals("T"))
		{
			log.error("changeoverPhone 2");
		%>
			changeoverPhone(<%=errorMsg.equals(errorCase2) ? "true" : "false" %>);
		<%
		}
		%>
		
	}
	
</script>
</body>
</html>
<%
//세션종료
session.invalidate();
%>
