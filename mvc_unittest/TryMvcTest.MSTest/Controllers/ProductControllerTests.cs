using Microsoft.VisualStudio.TestTools.UnitTesting;
using Store.Models;
using System.Web.Mvc;

namespace Store.Controllers.Tests
{
    [TestClass]
    public class ProductControllerTest
    {
        private ProductController _controller = new ProductController();

        [TestMethod]
        public void TestDetailsView()
        {
            var result = _controller.Details(2) as ViewResult;
            Assert.AreEqual("Details", result.ViewName);
        }

        //// 失敗するテスト
        //[TestMethod]
        //[Ignore]
        //public void FailTestDetailsView()
        //{
        //    var result = _controller.Details(2) as ViewResult;
        //    Assert.AreEqual(expected: "Index", actual: result.ViewName);
        //}
 
        // ViewDateのテスト
        [TestMethod]
        public void TestDetailsViewData()
        {
            var result = _controller.Details(2) as ViewResult;

            var product = (Product)result.ViewData.Model;

            Assert.AreEqual("Laptop", product.Name);
        }

        // Controller アクションのテスト
        [TestMethod]
        public void TestDetailsRedirect()
        {
            var result = (RedirectToRouteResult)_controller.Details(-1);
            Assert.AreEqual("Index", result.RouteValues["action"]);
        }
    }
}