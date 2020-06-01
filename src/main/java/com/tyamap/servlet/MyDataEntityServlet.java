package com.tyamap.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tyamap.domain.Employee;
import com.tyamap.domain.Department;
import com.tyamap.util.*;

import org.hibernate.*;

public class MyDataEntityServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // セッションファクトリーの用意
    protected Session session = HibernateUtil.getSessionFactory().openSession();

    // データベースにエンティティを保存する処理
    @Override
    public void init() throws ServletException {
        super.init();

        try {
            // トランザクション開始
            session.beginTransaction();

            // 永続化指定
            Department department = new Department("java");
            session.save(department);

            session.save(new Employee("Jakab Gipsz",department));
            session.save(new Employee("Captain Nemo",department));

            // コミット
            session.getTransaction().commit();
        } finally {

        }
    }

    // indexページでエンティティを取得
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        // Queryインスタンスを作成してクエリの作成
        Query q = session.createQuery("From Employee ");
        // クエリを使用してリストを取得
        List<Employee> resultList = q.list();

        request.setAttribute("list", resultList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request,response);
    }
}