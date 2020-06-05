<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.util.List" %>
<%
    request.setCharacterEncoding("utf-8");
    List list = (List)request.getAttribute("list");
%>
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
    </head>        
<body>
<h1>Hello World!</h1>
<p><%= new java.util.Date() %></p>
<ul>
    <% for (Object entity : list) { %>
        <li><%= entity %></li>
    <% } %>
</ul>
</body>
</html>