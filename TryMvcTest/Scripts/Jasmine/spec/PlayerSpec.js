describe("Player", function() {
  var player;
  var song;

  // それぞれのspecが実行される前に実行される
  beforeEach(function () {
    player = new Player();
    song = new Song();
  });

  // 英文で書くと結果表示の際に自然に読めるものになる
  // it が示す主語は describe で指定した "Player"
  it("should be able to play a Song", function() {
    player.play(song);
    // Playerオブジェクトのフィールドが予測通りであることを確認
    expect(player.currentlyPlayingSong).toEqual(song);

    // カスタムMatcher toBePlaying を使用
    expect(player).toBePlaying(song);
  });

  // ステータスが停止中の場合
  // 想定するケースで分けてdescribeをネストしている
  describe("when song has been paused", function () {
    
    // 親Suite の beforeMatch 実行後、この Suite 内で実行される初期化処理
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // not メソッドはカスタムMatcher でも使用できる
      expect(player).not.toBePlaying(song);
    });

    // 停止中なら再生できる
    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // テストダブル機能を実装する スパイのサンプル
  it("tells the current song if the user has made it a favorite", function() {
    // SongオブジェクトのpersistFavoriteStatus関数をスパイする
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    // makeFavorite は Songオブジェクトの persistFavoriteStatus を呼び出す
    player.makeFavorite();

    // スパイしている関数が、引数true で一度以上呼び出され他ことを確認する
    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  // Spec系の単体テストの慣例として、関数のテストを行う際はspec名に "#関数名" を指定する
  describe("#resume", function() {
    // 例外をthrow することを確認する
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      // すでに再生中なのでErrorがthrowされることを確認してテストは成功する
      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
