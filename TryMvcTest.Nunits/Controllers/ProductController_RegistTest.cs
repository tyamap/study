using NUnit.Framework;
using Store.Models;
using System.Web.Mvc;
using System.Text.Json;
using System;

namespace Store.Controllers.Nunit
{
    [TestFixture]
    public class ProductController_RegistTest
    {
        ProductController _controller = new ProductController();

        [Category("登録機能 正常登録")]
        [Test, Sequential]
        public void TestRegist([Values("Laptop", "Television", "")] string pName,
                               [Values(100000, 200000, 0)] int pPrice)
        {
            var product = new Product(pName, pPrice);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.That(response.Success, Is.True);
            Assert.That(response.Message, Is.EqualTo(Constant.Regist.SUCCESS));
        }

        [Category("登録機能 バリデーションエラー")]
        [Test, Sequential]
        public void TestRegistError([Values("LongLongName", "Laptop", "LongLongName")] string pName,
                                    [Values(1000, -1000, -1000)] int pPrice,
                                    [Values(Constant.Regist.NAME_ERROR, 
                                            Constant.Regist.PRICE_ERROR, 
                                            Constant.Regist.NAME_ERROR)] string ExpMsg)
        {
            var product = new Product(pName, pPrice);
            var jsonString = JsonSerializer.Serialize(product);
            var response = ((JsonResult)_controller.Regist(jsonString)).Data as Response;

            Assert.That(response.Success, Is.False);
            Assert.That(response.Message, Is.EqualTo(ExpMsg));
        }

        [Category("登録機能 予期せぬ動作")]
        [Test, Sequential]
        public void TestRegistIllegal([Values("", @"{""foo"":""bar""}", null)] string pJson,
                                      [Values(typeof(JsonException), 
                                              typeof(NullReferenceException), 
                                              typeof(ArgumentNullException))] Type exp)
        {
            Assert.That(() => { _controller.Regist(pJson); },
                        Throws.TypeOf(exp));
        }
    }
}
