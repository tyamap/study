/*
  # プレイヤーオブジェクト定義
  ## フィールド
  - currentPlayingSong : song
    - 再生中の音楽を保持する
  - isPlaying　: bool
    - ステータス 再生中:true, 停止中:false
*/
function Player() {
}

// - 指定のSongオブジェクトを再生中の音楽として保持する
// - ステータスを再生中にする
Player.prototype.play = function (song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

// - ステータスを停止中にする
Player.prototype.pause = function() {
  this.isPlaying = false;
};

// - 停止中の場合、ステータスを再生中にする
// - すでに再生中の場合、エラーをthrowする
Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

// - 再生中の音楽をお気に入りに登録する
Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};