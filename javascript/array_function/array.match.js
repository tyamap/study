// 要素が一つでも条件に合致するかどうかを調べる
const dataList =
  [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Tony' },
    { id: 3, name: 'Steve' },
  ];

// bad
/*
let foundIDFlag = false;
for (const data of dataList) {
  if (data.id === 5) {
    foundFlag = true;
    break;
  } if (foundIDFlag === false) {
    console.log('No data found.');
  }
}
*/

// Array.some()関数
// better
const foundIDFlag = dataList.some(data => data.id === 5);

if (foundIDFlag === false) {
  console.log('No data found.');
}

// Array.every()関数
const notFoundIdFlag = dataList.every(data => data.id !== 5);
if (foundIDFlag === true) {
  console.log('No data found.');
}
