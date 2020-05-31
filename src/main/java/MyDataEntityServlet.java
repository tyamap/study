package tyamap.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class MyDataEntityServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // EntityManagerを作成するFactoryクラス
    protected EntityManagerFactory factory = 
        Persistence.createEntityManagerFactory("mydataentity-persistance");

    @Override
    public void init() throws ServletException {
        super.init();

        // EntityManagerを作成
        EntityManager manager = factory.createEntityManager();
        try {
            // トランザクション開始
            manager.getTransaction().begin();
            // 永続化指定
            manager.persist(
                // エンティティを作成
                new MyDataEntity("taro", "taro@yamada", "090-999-999")
            );
            manager.persist(
                new MyDataEntity("hanako", "hanako@flower", "080-888-888")
            );
            manager.persist(
                new MyDataEntity("sachiko", "sachiko@happy", "070-777-777")
            );
            // コミット
            manager.getTransaction().commit();
        } finally {
            // エンティティマネージャの解放
            manager.close();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        EntityManager manager = factory.createEntityManager();
        Query query = manager.createQuery("select i from MyDataEntity i");
        List list = query.getResultList();

        request.setAttribute("list", list);

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request,response);
    }
}