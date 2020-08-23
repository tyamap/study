QUnit.module("add 関数のテスト", {
  setup: function () {
  }
});
QUnit.test('成功するテスト', function (assert) {
  assert.equal(add(1, 1), 2)
  assert.equal(add(2, 3), 5)
});
QUnit.skip('失敗するテスト', function (assert) {
  assert.equal(add(8, 2), 9)
});

QUnit.module("関係のないテスト", {
  setup: function () {
  }
});
QUnit.test('常に成功', function (assert) {
  assert.equal(true, true)
});

QUnit.module("getBoxTextのテスト", {
  setup: function () {
  }
});
QUnit.test("DOM取得のテスト", function(assert) {
  assert.equal(getBoxText(1), 'box1要素のテキスト', 'DOM取得のテスト - 1');
  assert.equal(getBoxText(9), '該当するDOM要素がありません。', 'DOM取得のテスト - 9');
  assert.equal(getBoxText(2), 'box2要素のテキスト', 'DOM取得のテスト - 2');
});

QUnit.test("クリックイベントのテスト", function (assert) {
  $(window).trigger('load');       // 無名関数定義のきっかけとなるイベントを発生させる

  assert.equal(getBoxText(1), 'box1要素のテキスト', 'クリック前');
  
  $('#box1').trigger('click');       // クリックのイベントハンドラ実行
  
  assert.equal(getBoxText(1), 'クリックされました。', 'クリック後');
});