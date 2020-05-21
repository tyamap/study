using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Store.Models
{
    public static class Constant
    {
        public static class Regist
        {
            public const string SUCCESS = "登録しました。";
            public const string NAME_ERROR = "商品名は10文字未満で入力してください。";
            public const string PRICE_ERROR = "価格は正の整数で入力してください";
        }
    }
}