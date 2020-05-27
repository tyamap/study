using Xunit;
using Store.Models;
using System.Web.Mvc;
using System.Text.Json;
using System;

namespace Store.Controllers.Xunit
{
    public class ProductController_RegistTest
    {
        ProductController _controller = new ProductController();

        [Trait("Category", "登録機能 正常登録")]
        [Theory(DisplayName = "正常登録")]
        [InlineData("Laptop", 100000, Constant.Regist.SUCCESS)]
        [InlineData("Television", 200000, Constant.Regist.SUCCESS)]
        [InlineData("", 0, Constant.Regist.SUCCESS)]
        public void TestRegist(string name, int price, string message)
        {
            var product = new Product(name, price);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.True(response.Success);
            Assert.Equal(message, response.Message);
        }

        [Trait("Category", "登録機能 バリデーションエラー")]
        [Theory(DisplayName = "バリデーションエラー")]
        [InlineData("LongLongName", 1000, Constant.Regist.NAME_ERROR)]
        [InlineData("Laptop", -1000, Constant.Regist.PRICE_ERROR)]
        [InlineData("LongLongName", -1000, Constant.Regist.NAME_ERROR)]
        public void TestRegistError(string name, int price, string message)
        {
            var product = new Product(name, price);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.False(response.Success);
            Assert.Equal(message, response.Message);
        }

        [Trait("Category", "登録機能 予期せぬ動作")]
        [Theory(DisplayName = "予期せぬ動作")]
        [InlineData("", typeof(JsonException))]
        [InlineData(@"{""foo"":""bar""}", typeof(NullReferenceException))]
        [InlineData(null, typeof(ArgumentNullException))]
        public void TestRegistIllegal(string pJson, Type exp)
        {
            Assert.Throws(exp,() => {
                _controller.Regist(pJson);
            });
        }
    }
}
