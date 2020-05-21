using Microsoft.VisualStudio.TestTools.UnitTesting;
using Store.Controllers;
using Store.Models;
using System.Web.Mvc;
using System.Text.Json;

namespace TryMvcTestMSTest.Controllers
{
    [TestClass]
    public class ProductController_RegistTest
    {
        ProductController _controller = new ProductController();

        [TestCategory("登録機能 正常登録")]
        [TestMethod]
        [DataRow("Laptop", 100000, Constant.Regist.SUCCESS)]
        [DataRow("Television", 200000, Constant.Regist.SUCCESS)]
        [DataRow("", 0, Constant.Regist.SUCCESS)]
        public void TestRegist(string name, int price, string message)
        {
            var product = new Product(name, price);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.IsTrue(response.Success);
            Assert.AreEqual(response.Message, message);
        }

        [TestCategory("登録機能 バリデーションエラー")]
        [TestMethod]
        [DataRow("LongLongName", 1000, Constant.Regist.NAME_ERROR)]
        [DataRow("Laptop", -1000, Constant.Regist.PRICE_ERROR)]
        [DataRow("LongLongName", -1000, Constant.Regist.NAME_ERROR)]
        public void TestRegistError(string name, int price, string message)
        {
            var product = new Product(name, price);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.IsFalse(response.Success);
            Assert.AreEqual(response.Message, message);
        }

        [TestCategory("登録機能 予期せぬ動作")]
        [TestMethod]
        [ExpectedException(typeof(JsonException))]
        public void TestRegistIllegal()
        {
            // 不正なJSONデータが送信された場合
            var jsonString = "{'foo': 'bar'}";
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.IsFalse(response.Success);
        }
    }
}
