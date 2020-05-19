using NUnit.Framework;
using Store.Models;
using System;

namespace TryMvcTest.Nunits
{
    public class ForPrivateTest
    {
        [Test, Sequential]
        public void TwoTimeStringTest([Values("1", "4", "88", "-4", "0")] String prm1,
                                      [Values(2, 8, 176, -8, 0)] int Exp1)
        {
            ForPrivate forPrivate = new ForPrivate();
            Assert.NotNull(forPrivate);

            int act = (int)CommonModule.PrivateMethodInvoke(forPrivate, "TwoTimeString", new object[] { prm1 });
            Assert.AreEqual(Exp1, act);
        }

        [Test, Sequential]
        public void TwoTimeStringExceptionTest([Values("", " ", "0.00004", null)] String prm1)
        {
            ForPrivate forPrivate = new ForPrivate();
            Assert.Throws<InvalidCastException>(() => CommonModule.PrivateMethodInvoke(forPrivate, "TwoTimeString", new object[] { prm1 }));
        }
    }
}