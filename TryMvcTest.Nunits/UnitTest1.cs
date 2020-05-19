using NUnit.Framework;
using Store.Models;
using System;

namespace TryMvcTest.Nunits
{
    [TestFixture]
    public class UnitTest1
    {
        [Test]
        public void SuccessTestMethod()
        {
            Assert.IsTrue(true);
        }

        [Test]
        [Ignore("原因不明：要調査")]
        public void FailTestMethod()
        {
            Assert.IsTrue(false);
        }

        // private メソッドのテスト
        [Test]
        public void TestPrivateMethod_GetTaxIncluded()
        {
            // テスト対象のインスタンス
            Product product = new Product(1, "Laptop", 100000);
            
            var param = 1.08 ;
            // PrivateInvoke
            var actPrice = CommonModule.PrivateMethodInvoke(product, "GetTaxIncluded", new Object[] { param });

            Assert.AreEqual(108000, actPrice);
        }
    }
}
