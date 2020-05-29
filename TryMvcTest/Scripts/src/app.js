function add(a, b) {
  return a + b;
}

// #box{num}要素ないのテキストを返す関数
var getBoxText = function(num){
  if ($('#box'+num)[0] == undefined) { return '該当するDOM要素がありません。' };
  return $('#box'+num).text();
};