using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TryMvcTest.Models.Utility
{
    // internal Class
    internal static class ComUtility
    {
        // public static メソッド
        public static int GetTotalValue(int val1, int val2)
        {
            return val1 + val2;
        }

        // private static メソッド
        private static bool IsInteger(string strNum)
        {
            return int.TryParse(strNum, out int i);
        }
    }
}
