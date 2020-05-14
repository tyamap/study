using System.Web.Mvc;
using NUnit.Framework;

namespace Store.Controllers.Tests
{
    [TestFixture]
    public class ProductControllerTests
    {
        [Test]
        public void IndexActionReturnsIndexView()
        {
            string expected = "Details";
            var controller = new ProductController();
            var result = controller.Details(2) as ViewResult;

            Assert.That(result.ViewName, Is.EqualTo(expected));

        }
    }
}