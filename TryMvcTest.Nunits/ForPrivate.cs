using NUnit.Framework;
using System;

namespace TryMvcTest.Nunits
{
    public class ForPrivate
    {
        private int TwoTimeString(string BaseNum)
        {
            if (string.IsNullOrWhiteSpace(BaseNum))
                throw new InvalidCastException();

            int ret = int.MinValue;

            if (int.TryParse(BaseNum, out ret))
            {
                return ret * 2;
            }

            throw new InvalidCastException();
        }
    }
    
    public class ForPrivateTest
    {
        [Test, Sequential]
        public void TwoTimeStringTest([Values("1", "4", "88", "-4", "0")] string prm1,
                                      [Values(2, 8, 176, -8, 0)] int Exp1)
        {
            ForPrivate forPrivate = new ForPrivate();
            Assert.That(forPrivate, Is.Not.Null);

            int act = (int)CommonModule.PrivateMethodInvoke(forPrivate, "TwoTimeString", new object[] { prm1 });
            Assert.That(act, Is.EqualTo(Exp1));
        }

        [Test, Sequential]
        public void TwoTimeStringExceptionTest([Values("", " ", "0.00004", null)] string prm1)
        {
            ForPrivate forPrivate = new ForPrivate();
            Assert.That(() =>
            {
                CommonModule.PrivateMethodInvoke(forPrivate, "TwoTimeString", new object[] { prm1 });
            }, 
            Throws.TypeOf<InvalidCastException>());
        }
    }
}
