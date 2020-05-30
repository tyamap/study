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
	<% String userName = (String) request.getAttribute("userName"); %>
	<h2>こんにちは <%= userName %> さん！</h2>

	<% if ("Guest".equals(userName)) { %>
	<form method="post" action="./Hello">
		名前を入力してください: <input type="text" name="name">
		<button type="submit">登録</button>
	</form>
	<% } %>

	<%= new java.util.Date() %>
</body>
</html>