using NUnit.Framework;
using Store.Models;
using System.Web.Mvc;

namespace Store.Controllers.Nunit
{
    [TestFixture]
    public class ProductControllerTest
    {
        private ProductController _controller = new ProductController();

        [Test]
        public void TestDetailsView()
        {
            var result = _controller.Details(2) as ViewResult;

            Assert.That(result.ViewName, Is.EqualTo("Details"));
        }

        // ViewDateのテスト
        [Test]
        public void TestDetailsViewData()
        {
            var result = _controller.Details(2) as ViewResult;
            var product = (Product)result.ViewData.Model;

            Assert.That(product.Name, Is.EqualTo("Laptop"));
        }

        // Controller アクションのテスト
        [Test]
        public void TestDetailsRedirect()
        {
            var result = (RedirectToRouteResult)_controller.Details(-1);

            Assert.That(result.RouteValues["action"], Is.EqualTo("Index"));
        }
    }
}