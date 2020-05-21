using NUnit.Framework;

namespace Store.Models.Nunit
{
    [TestFixture]
    public class ProductTests
    {
        // テスト対象のインスタンス
        private Product _product = new Product(1, "Laptop", 100000);

        // public メソッドのテスト
        [Test]
        public void TestForPublic()
        {
            var info = _product.GetInfo();

            Assert.AreEqual("Name: Laptop, Price: 100000", info);
        }

        // private メソッドのテスト
        [Test]
        public void TestForPrivate()
        {
            var param = 1.08;
            // PrivateInvoke
            var actPrice = CommonModule.PrivateMethodInvoke(_product, "GetTaxIncluded", new object[] { param });

            Assert.AreEqual(108000, actPrice);
        }
    }
}
