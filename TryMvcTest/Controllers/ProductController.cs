using Store.Models;
using System;
using System.Web.Mvc;

namespace Store.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult Index()
        {
            // Add action logic here
            throw new NotImplementedException();
        }

        public ActionResult Details(int Id)
        {
            // 無効なID指定でIndexにリダイレクト
            if (Id < 1)
            {
                return RedirectToAction("Index");
            }

            // 指定のProductモデルデータをViewDataで返す
            var product = new Product(Id, "Laptop", 100000);
            return View("Details", product);
        }
    }
}
