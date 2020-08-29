// 配列の分割代入
const heroObj = { id: 1, age: 50, name: 'ironman', real_name: 'Tony' };

// Object のキーバリュー配列を生成する

// bad
/*
Object.entries(heroObj).forEach(entry => {
  console.log(`key: ${entry[0]}`);
  console.log(`value: ${entry[1]}`);
});
*/

// better
// 配列の分割代入を用いる
// const entry = [キー, 値];
// const [key, value] = [キー, 値];

Object.entries(heroObj).forEach(([key, value]) => {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
});
