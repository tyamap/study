let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.14;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// 基本的には型推論に任せる
const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 22,
}

// 配列の型宣言
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

// タプル
const book: [string, number, boolean] = ['business', 1500, false];

// 列挙型
enum CoffeSize{
  // oから数字が入る
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}
const coffee = {
  hot: true,
  size: CoffeSize.SHORT,
}
coffee.size = CoffeSize.TALL;

// ユニオン型
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [10, 'hello'];

// リテラル型
let apple: 'apple' = 'apple'
const APPLE = 'apple'
let size: 'small' | 'medium' | 'large';

// typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize;

// 関数
// 引数に型推論は効かない。返り値には効く
function add(num1: number, num2: number): number {
  return num1 + num2;
}
function sayHello(): void{
  console.log('hello');
}

// undefind型
let tmp: undefined;

const anotherAdd: (n1: number, n2: number) => number = add;
// アロー関数
const doubleNumber = (num: number): number => num * 2;
const doubleNumber2: (num: number) => number = num => num * 2;

// unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型
function error(message: string): never {
  throw new Error(message);
}