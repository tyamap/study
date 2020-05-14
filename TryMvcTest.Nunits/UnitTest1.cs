using NUnit.Framework;

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
    }
}
