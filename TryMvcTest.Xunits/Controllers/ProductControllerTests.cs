using Xunit;
using Store.Models;
using System.Web.Mvc;

namespace Store.Controllers.Xunit
{
    public class ProductControllerTest
    {
        [Fact]
        public void TestDetailsView()
        {
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;

            Assert.Equal("Details", result.ViewName);
        }

        // ViewDateのテスト
        [Fact]
        public void TestDetailsViewData()
        {
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;
            var product = (Product)result.ViewData.Model;

            Assert.Equal("Laptop", product.Name);
        }

        // Controller アクションのテスト
        [Fact]
        public void TestDetailsRedirect()
        {
            var controller = new ProductController();
            var result = (RedirectToRouteResult)controller.Details(-1);

            Assert.Equal("Index", result.RouteValues["action"]);
        }
    }
}