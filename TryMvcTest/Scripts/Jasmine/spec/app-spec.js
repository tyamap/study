describe('add 関数のテスト', function() {
  it('1 + 1 は 2', function() {
      expect(add(1, 1)).toBe(2);
  });

  it('2 + 3 は 5', function() {
      expect(add(2, 3)).toBe(5);
  });

  // 失敗するテスト
  it('8 + 2 は 9', function() {
      expect(add(8, 2)).toBe(9); 
  });
});