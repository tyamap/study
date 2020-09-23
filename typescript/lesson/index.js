"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.14;
var single = 'hello';
var double = "hello";
var back = "hello";
// 基本的には型推論に任せる
var person = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 22,
};
// 配列の型宣言
var fruits = ['Apple', 'Banana', 'Grape'];
// タプル
var book = ['business', 1500, false];
// 列挙型
var CoffeSize;
(function (CoffeSize) {
    // oから数字が入る
    CoffeSize[CoffeSize["SHORT"] = 0] = "SHORT";
    CoffeSize[CoffeSize["TALL"] = 1] = "TALL";
    CoffeSize[CoffeSize["GRANDE"] = 2] = "GRANDE";
    CoffeSize[CoffeSize["VENTI"] = 3] = "VENTI";
})(CoffeSize || (CoffeSize = {}));
var coffee = {
    hot: true,
    size: CoffeSize.SHORT,
};
coffee.size = CoffeSize.TALL;
// ユニオン型
var unionType = 10;
var unionTypes = [10, 'hello'];
// リテラル型
var apple = 'apple';
var APPLE = 'apple';
var size;
var clothSize;
// 関数
// 引数に型推論は効かない。返り値には効く
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
// undefind型
var tmp;
var anotherAdd = add;
// アロー関数
var doubleNumber = function (num) { return num * 2; };
var doubleNumber2 = function (num) { return num * 2; };
// unknown型
var unknownInput;
var anyInput;
var text;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
