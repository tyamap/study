using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TryMvcTest.MSTest
{
    [TestClass()]
    public class UnitTest1
    {
        [TestMethod]
        public void SuccessTestMethod()
        {
            Assert.IsTrue(true);
        }

        [TestMethod]
        [Ignore]
        public void FailTestMethod()
        {
            Assert.IsTrue(false);
        }
    }
}
