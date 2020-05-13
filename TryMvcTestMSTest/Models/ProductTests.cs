using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Store.Models.Tests
{
    [TestClass()]
    public class ProductTests
    {
        // テスト対象のインスタンス
        private Product product = new Product(1, "Laptop", 100000);

        // private フィールドのテスト
        [TestMethod]
        public void TestPrivateField_Id()
        {
            // PrivateObjectを作成
            var privateObject = new PrivateObject(product);

            // privateプロパティを取得
            var id = (int)privateObject.GetField("Id");

            Assert.AreEqual(1, id);
        }

        // private プロパティのテスト
        [TestMethod]
        public void TestPrivateProp_IsFirst()
        {
            // PrivateObjectを作成
            var privateObject = new PrivateObject(product);

            // privateプロパティを取得
            var isFirst = (bool)privateObject.GetProperty("IsFirst");

            Assert.IsTrue(isFirst);
        }

        // private メソッドのテスト
        [TestMethod]
        public void TestPrivateMethod_GetTaxIncluded()
        {
            // PrivateObjectを作成
            var privateObject = new PrivateObject(product);

            // invoke で private メソッド呼び出し
            var actPrice = (int)privateObject.Invoke("GetTaxIncluded", 1.08);

            Assert.AreEqual(108000, actPrice);
        }
    }
}
