// 多次元の配列を一次元にする
// hash_tags の要素を一次元の配列に格納する
const dataList = [
  { note: 'I studied JS today.', hash_tags: ['study', 'js', 'programming', 'diary'] },
  { tweet: 'I forgot to eat lunch.', hash_tags: ['lunch', 'diary'] },
  { tweet: 'Arrays are difficult to handle.', hash_tags: ['study', 'programming'] },
];

// bad
/*
const tagList = [];
dataList.forEach(data => {
  data.hash_tags.forEach(tag => { tagList.push(tag); });
});
console.log(tagList);
// 重複の削除 重複を許さない Set オブジェクトを用いる
console.log(Array.from(new Set(tagList)));
*/

// better
// Array.flatMap()
// map()関数の後にflat(1)関数を実行する
const tagList = dataList.flatMap(data => data.hash_tags);
console.log(...new Set(tagList)); // スプレッド構文