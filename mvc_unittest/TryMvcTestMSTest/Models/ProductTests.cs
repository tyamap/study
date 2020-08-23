using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Store.Models.Tests
{
    [TestClass()]
    public class ProductTests
    {
        // テスト対象のインスタンス
        private Product _product = new Product(1, "Laptop", 100000);

        // public メソッドのテスト
        [TestMethod]
        public void TestForPublic()
        {
            var info = _product.GetInfo();

            Assert.AreEqual("Name: Laptop, Price: 100000", info);
        }

        // private メソッドのテスト
        [TestMethod]
        public void TestForPrivate()
        {
            // PrivateObjectを作成
            var privateObject = new PrivateObject(_product);
            // invoke で private メソッド呼び出し
            var actPrice = (int)privateObject.Invoke("GetTaxIncluded", 1.08);

            Assert.AreEqual(108000, actPrice);
        }
    }
}
