QUnit.test('add 関数のテスト', function (assert) {
  assert.equal(add(1, 1), 2)
  
  assert.equal(add(2, 3), 5)
  
  // 失敗するテスト
  assert.equal(add(8, 2), 9)
});