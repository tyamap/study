using System;

namespace TryMvcTest.Nunits
{
    public class ForPrivate
    {
        private int TwoTimeString(String BaseNum)
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
}
