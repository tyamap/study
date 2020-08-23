/*
  独自実装のカスタムMatcher
  toBePlaying
*/

// beforeEach: Spec一つ一つをテストする前に処理を実行する
beforeEach(function () {
  // Jasmine.addMatchers: カスタムマッチャーを定義する
  jasmine.addMatchers({
    // Matcher関数名を指定
    toBePlaying: function () {
      // compareオブジェクトを返す
      return {
        // expected(actual).カスタムMatcher(expected)で渡される
        compare: function (actual, expected) {
          var player = actual;

          // passプロパティを持つオブジェクトを返す
          return {
            // passプロパティはbooleanで返す
            // 再生中の音楽が予測と一値しており、再生中だった場合、テストをパスする
            pass: player.currentlyPlayingSong === expected && player.isPlaying
            // messageプロパティを指定すると、エラー発生時に出力される
            // message: 'failed'
          };
        }
      };
    }
  });
});
