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

	<form method="post" action="./HelloServlet">
		入力: <input type="text" name="hoge">
		<button type="submit">送信</button>
	</form>
</body>
</html>