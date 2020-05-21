using Microsoft.VisualStudio.TestTools.UnitTesting;
using Store.Models;
using System.Web.Mvc;
using System.Text.Json;
using System;

namespace Store.Controllers.Tests
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
            Assert.AreEqual(message, response.Message);
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
            Assert.AreEqual(message, response.Message);
        }

        [TestCategory("登録機能 予期せぬ動作")]
        [TestMethod]
        [ExpectedException(typeof(JsonException))]
        public void TestRegistIllegal1()
        {
            // 不正なJSONデータが送信された場合
            var jsonString = "";
            _controller.Regist(jsonString);
        }

        [TestCategory("登録機能 予期せぬ動作")]
        [TestMethod]
        [ExpectedException(typeof(NullReferenceException))]
        public void TestRegistIllegal2()
        {
            // デシリアライズ可能だがメンバーに割りあてられない
            var jsonString = @"{""foo"":""bar""}";
            _controller.Regist(jsonString);
        }

        [TestCategory("登録機能 予期せぬ動作")]
        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void TestRegistIllegal3()
        {
            // 引数Null
            string jsonString = null;
            _controller.Regist(jsonString);
        }
    }
}
