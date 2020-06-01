describe('add 関数のテスト', function() {
  it('1 + 1 は 2', function() {
    expect(add(1, 1)).toBe(2);
  });

  it('2 + 3 は 5', function() {
    expect(add(2, 3)).toBe(5);
  });

  // 失敗するテスト
  xit('8 + 2 は 9', function() {
    expect(add(8, 2)).toBe(9); 
  });
});

describe('getBoxTextのテスト', function () {
  // 初期化処理でDOM要素を作成
  beforeEach(function () {
    $("body").append('<div id="jasmine-fixture"></div>');
    $("#jasmine-fixture").append('<div id="box1">box1要素のテキスト</div>');
    $("#jasmine-fixture").append('<div id="box2">box2要素のテキスト</div>');
    $("#jasmine-fixture").append('<div id="box3">box3要素のテキスト</div>');
    // クリックされたらテキストを変更するイベント関数を、#box1に付与
    $('#box1').on('click', function () {
      $(this).text('クリックされました。');
    });
  });

  // 後処理でDOM要素を空にする
  afterEach(function () {
    $("#jasmine-fixture").remove();
  });

  it('DOMの取得ができる', function() {
    expect(getBoxText(1)).toBe('box1要素のテキスト');
    expect(getBoxText(9)).toBe('該当するDOM要素がありません。');
    expect(getBoxText(2)).toBe('box2要素のテキスト');
  });

  it('クリックで内容が変わる', function () {
    expect(getBoxText(1)).toBe('box1要素のテキスト');

    $('#box1').trigger('click');       // クリックのイベントハンドラ実行

    expect(getBoxText(1)).toBe('クリックされました。');
  });
});