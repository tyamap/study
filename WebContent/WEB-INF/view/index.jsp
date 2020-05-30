<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>	${title}</title>
</head>
<body>
	<h1>${title}</h1>
	<%= new java.util.Date() %>
	<br>
	<%= request.getAttribute("foo") %>
</body>
</html>