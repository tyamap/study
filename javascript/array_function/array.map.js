// 条件に合致する要素から配列を作成する
// 30最以上の人物データの名前を配列に格納
const dataList =
  [
    { id: 1, age: 19, name: 'Peter' },
    { id: 2, age: 50, name: 'Tony' },
    { id: 3, age: 102, name: 'Steve' },
  ];

// bad
/*
const over30List = [];
dataList.forEach(data => {
  if (data.age >= 30) {
    over30List.push(data.name)
  }
});
console.log(over30List);
*/

// better
// array.filter
// array.map
const over30List = dataList
  .filter(data => data.age >= 30)
  .map(data => data.name);
console.log(over30List);
