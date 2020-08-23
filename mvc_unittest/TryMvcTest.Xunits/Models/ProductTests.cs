using Xunit;

namespace Store.Models.Xunit
{
    public class ProductTests
    {
        // テスト対象のインスタンス
        private Product _product = new Product(1, "Laptop", 100000);

        // public メソッドのテスト
        [Fact]
        public void TestForPublic()
        {
            var info = _product.GetInfo();

            Assert.Equal("Name: Laptop, Price: 100000", info);
        }

        // private メソッドのテスト
        [Fact]
        public void TestForPrivate()
        {
            var param = 1.08;
            // PrivateInvoke
            var actPrice = CommonModule.PrivateMethodInvoke(_product, "GetTaxIncluded", new object[] { param });

            Assert.Equal(108000, actPrice);
        }
    }
}
