using Microsoft.VisualStudio.TestTools.UnitTesting;
using Store.Models;
using System.Web.Mvc;

namespace Store.Controllers.Tests
{
    [TestClass]
    public class ProductControllerTest
    {
        [TestMethod]
        public void TestDetailsView()
        {
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;
            Assert.AreEqual("Details", result.ViewName);
        }

        // 失敗するテスト
        [TestMethod]
        [Ignore]
        public void FailTestDetailsView()
        {
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;
            Assert.AreEqual(expected: "Index", actual: result.ViewName);
        }

        // ViewDateのテスト
        [TestMethod]
        public void TestDetailsViewData()
        {
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;

            var product = (Product)result.ViewData.Model;

            Assert.AreEqual("Laptop", product.Name);
        }

        // Controller アクションのテスト
        [TestMethod]
        public void TestDetailsRedirect()
        {
            var controller = new ProductController();
            var result = (RedirectToRouteResult)controller.Details(-1);
            Assert.AreEqual("Index", result.RouteValues["action"]);
        }
    }
}