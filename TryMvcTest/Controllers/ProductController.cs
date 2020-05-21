using Store.Models;
using System;
using System.Web.Mvc;
using System.Text.Json;

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

        // 要求データをもとに情報登録
        public ActionResult Regist(string jsonString)
        {
            var response = new Response();
            response.Success = true;

            try
            {
                // parse
                var product = JsonSerializer.Deserialize<Product>(jsonString);

                // validation
                if (product.Name.Length > 10)
                    throw new RegistException(Constant.Regist.NAME_ERROR);

                if (product.Price < 0)
                    throw new RegistException(Constant.Regist.PRICE_ERROR);

                // regist
                // 未実装
                
                // return json response
                response.Message = Constant.Regist.SUCCESS;
                return Json(response);
            }
            catch (RegistException e)
            {
                response.Success = false;
                response.Message = e.Message;
                return Json(response);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
