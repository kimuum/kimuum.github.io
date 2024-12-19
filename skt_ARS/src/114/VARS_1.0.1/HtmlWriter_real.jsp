<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.net.*" %>
<%@ page import="com.bt.wforcus.message.WebMsgResult,org.apache.log4j.Logger" %>
<%@ page import="com.bt.common.Configuration" %>
<%
	
	Logger log = Logger.getLogger(this.getClass());

	WebMsgResult result	= WebMsgResult.getCurrentResult(request);
	String errorMsg 		= "";
	String resultUrl    	= "";
    String resultParam  	= "";

    if(result == null || result.isError())
    {
		errorMsg = "서비스가 종료 되었습니다.";
		
	}
  else
  {
    	resultUrl    	= result.getURL();
        resultParam  	= result.getAllParams();
        
    }
	
    log.debug("** resultUrl ==> "+ resultUrl);
    log.debug("** resultParam ==> "+ resultParam);
    
    String	varsType	= "t";
    if (resultParam.contains("cur_vars_type=C"))
    	varsType		= "c";
    
    log.debug("***** current vars type is " + varsType + " *****");
    
    if (resultUrl != null) 
    {
        if (resultUrl.toLowerCase().startsWith("http://")) 
        {
            response.sendRedirect(resultUrl);
            return;
        
        } 
        else if (resultUrl.toLowerCase().startsWith("/http://")) 
        {
            response.sendRedirect(resultUrl.substring(1));
            return;
      	
        }
    }
    
    // URL 파일 경로로 버전정보를 찾는다. (EX. version = 'VARS_1.0.0')
    String version = "";
	String[] resultUrlArray = resultUrl.split("/");
    for(int i=0; i< resultUrlArray.length; i++)
    {
    	version = resultUrlArray[i];
    	
    	if(version == null || version.equals("")) continue;
    	else break;
    }
    
    // INPUT STREAM
	InputStream in = null;
	
    /* 개발서버용 */
    /*
	if(resultUrl != null && !resultUrl.equals(""))
	{
		// 서버정보 조회.
	   	String scheme = request.getScheme();
	   	String serverName = request.getServerName();
	   	String serverPort = String.valueOf(request.getServerPort());
	   	String contextPath = request.getContextPath();
	   	
	   	// 서버 BASE 정보 세팅.
	   	String baseURL = (scheme+"://"+serverName+":"+serverPort+contextPath);
	   	
	   	// URL connection 으로 웹서버 접근.
	   	URL url = new URL(baseURL+resultUrl);
	   	url.openConnection();
	   	in = url.openStream();
	   	
	}
	*/
	/* 운영서버용 */
	// webtob real path + url path
	Configuration sysConfig 	= new Configuration();
    resultUrl = sysConfig.getString("ISS.WEBPATH")+resultUrl;
	
	try{
		File file = new File(resultUrl);
		in = new FileInputStream(file);
	
	}catch(Throwable t){}
	
	//in = this.getServletContext().getResourceAsStream(resultUrl);
	
	// 지정된 페이지 출력
    try
	{
    
	   	if(in == null) 
	   	{
	    	if(errorMsg == null || errorMsg.equals(""))
	    		errorMsg = "Not Found Page. Please Check your URL.";
	    }
	    else
	    {
			response.setContentType("text/html");
			
	    	String line = "";
	    	String param = resultParam.replaceAll("\\!","!");
	    	
	    	BufferedReader reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
            while((line = reader.readLine()) != null) 
            {
			    if(line.matches("[<][Hh][Ee][Aa][Dd][>]"))
			    {
			    	line = line.replaceAll("[<][Hh][Ee][Aa][Dd][>]", "<head>\r\n<script type='text/javascript'>var RESULT_PARAMS='?" + param + "';</script>");
			        out.println(line);
			    
			    }
			    else
			    {
			    	line = line.replaceAll("\\{version\\}", version);
			    	line = line.replaceAll("\\{vars_type\\}", "_" + varsType);
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
	
	log.debug("** errorMsg ==> "+ errorMsg);
    
    
// 장애 페이지 출력
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, user-scalable=no">
	<title> SKT보이는 ARS </title>
	<link rel="stylesheet" type="text/css" href="/common/css/common.css">
	<link rel="stylesheet" type="text/css" href="/common/css/content.css">
	<link rel="stylesheet" type="text/css" href="/common/js/jquery.alerts-1.1/jquery.alerts.css">
	<script type="text/javascript" src="/common/js/jquery/jquery.1.11.1.min.js"></script>
	<script type="text/javascript" src="/common/js/jquery/jquery-migrate-1.2.1.js"></script>
	<script type="text/javascript" src="/common/js/jquery.alerts-1.1/jquery.alerts.js"></script>
</head>
<body>
<section class="wrap pd0">
	<h1 class="none">SKT보이는 ARS</h1>
	<div class="error_wrap">
		<div class="cont">
			<p class="txt">죄송합니다.</p>
			<p class="desc">현재 보이는 ARS를 사용할 수 없습니다. <br><%=errorMsg %>(T)</p>
		</div>
	</div>
</section>

<script type="text/javascript" src="/common/js/common.js"></script>
<script type="text/javascript" src="/common/js/wforcus.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		"use strict";
		var ui = common.ui;
		
		$('.different_ars').on('click', '.d-clickable', function(e){
			e.preventDefault();
			$(this).closest('.different_ars').toggleClass('on');
		});
		
		//좌/우측 swipe이벤트
		common.PubSub.on({
			'swipe.left': function (e, data) {
				console.log(data.direction, data.startX, data.distanceX);
			},
			'swipe.right': function (e, data) {
				console.log(data.direction, data.startX, data.distanceX);
			}
		});
		
		
	});
	
</script>
</body>
</html>