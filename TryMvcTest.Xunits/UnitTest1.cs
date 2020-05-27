using Xunit;

namespace TryMvcTest.Xunits
{
    public class UnitTest1
    {
        [Fact]
        public void SuccessTestMethod()
        {
            Assert.True(true);
        }

        [Fact(Skip = "原因不明：要調査")]
        public void FailTestMethod()
        {
            Assert.True(false);
        }
    }
}
