using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TryMvcTest.Models.Utility;

namespace TryMvcTestMSTest.Models.Utility
{
    // テスト対象ジェクトのAssemblyInfo.cs に 
    // [assembly: InternalsVisibleTo("テストプロジェクト名")] を追加

    [TestClass()]
    public class ComUtilityTests
    {
        [TestMethod()]
        public void GetTotalValueTest()
        {
            Assert.AreEqual(5, ComUtility.GetTotalValue(2, 3));
        }

        // private static メソッドのテスト
        [TestMethod()]
        public void IsIntegerTest_is_true_when_get_Number()
        {
            // PrivateType を作成
            var privateType = new PrivateType(typeof(ComUtility));
            // InvokeStatic で private static メソッド呼び出し
            var result = (bool) privateType.InvokeStatic("IsInteger", "3");

            Assert.IsTrue(result);
        }

        [TestMethod()]
        public void IsIntegerTest_is_true_when_get_NotNumber()
        {
            var privateType = new PrivateType(typeof(ComUtility));
            var result = (bool) privateType.InvokeStatic("IsInteger", "foo");
            Assert.IsFalse(result);
        }
    }
}