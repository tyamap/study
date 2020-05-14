using NUnit.Framework;

namespace Store.Models.Tests
{
    [TestFixture]
    public class ProductTests
    {
        // テスト対象のインスタンス
        private Product product = new Product(1, "Laptop", 100000);

        // private フィールドのテスト
        [Test]
        public void TestPrivateField_Id()
        {
            // PrivateObjectを作成
            var name = product.Name;

            Assert.AreEqual("Laptop", name);
        }

        //// private プロパティのテスト
        //[Test]
        //public void TestPrivateProp_IsFirst()
        //{
        //    // PrivateObjectを作成
        //    var privateObject = new PrivateObject(product);

        //    // privateプロパティを取得
        //    var isFirst = (bool)privateObject.GetProperty("IsFirst");

        //    Assert.IsTrue(isFirst);
        //}

        //// private メソッドのテスト
        //[Test]
        //public void TestPrivateMethod_GetTaxIncluded()
        //{
        //    // PrivateObjectを作成
        //    var privateObject = new PrivateObject(product);

        //    // invoke で private メソッド呼び出し
        //    var actPrice = (int)privateObject.Invoke("GetTaxIncluded", 1.08);

        //    Assert.AreEqual(108000, actPrice);
        //}
    }
}
