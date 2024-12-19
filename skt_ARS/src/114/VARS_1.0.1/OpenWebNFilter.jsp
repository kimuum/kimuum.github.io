<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="net.nshc.nfilter.openweb.OpenWebNFilterConfig" %>
<%
	String	contextPath			= request.getContextPath();
	int 	randomIdLength		= OpenWebNFilterConfig.getRandomIdLength();
	String	serviceNameManager	= OpenWebNFilterConfig.getServiceNameKeypadManager();
	String	algName				= OpenWebNFilterConfig.getAlgName();
	int		keyLength			= OpenWebNFilterConfig.getKeyLength();
	
	serviceNameManager			= serviceNameManager.replace("//", "////");
	String	result				= "{\"contextPath\":\"" + contextPath + "\",\"randomIdLength\":\"" + randomIdLength + "\",\"serviceNameManager\":\"" + serviceNameManager + "\",\"algName\":\"" + algName + "\",\"keyLength\":\"" + keyLength + "\"}";
	
	out.println(result);
%>