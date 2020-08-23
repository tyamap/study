Day1

# パッケージ
パッケージの目的は以下三つ
- 名前空間を提供し、名前の衝突を避ける
- アクセス修飾子と組み合わせてアクセス制御機能を提供する
- クラスの分類を可能にする
  
## 名前の重複を避ける
過去のプロジェクトで作った部品や他社製品のモジュールと組み合わせて使うためにも、名前空間の分類は必須。  
慣習として、ドメイン名を逆にした文字列がパッケージ名に使用される。

## アクセス制御を行う
クラスをパッケージに分類することで、パッケージ単位でアクセス制御ができるようになる。 
`public`修飾子を持たないクラスは、他のパッケージからは参照できない。 

## クラスを分類する
パッケージはディレクトリ構造とマッピングされる。  
パッケージとディレクトリが一致することで、クラスの分類整理が実現する。

## パッケージの宣言
パッケージの宣言には `package` キーワードを用いる。宣言の際のルールは以下。
- パッケージ宣言は必ずソースコードの先頭行に記述する  
- パッケージ宣言よりも前に記述できるのはコメントのみ

# クラスのインポート
コンパイラや`JVM(Java仮想マシン)`はクラスを完全修飾クラス名でしか扱えない。  
パッケージ宣言をしなかった場合は、無名パッケージ(デフォルトパッケージ)に属するものとして扱われる。  
よって、クラスを扱う際は、`完全修飾クラス名`で呼び出す必要がある。

完全修飾クラス名で記述すると、コードが冗長で読みづらいものになるので、インポート宣言をすることでクラスをインポートする。  

## インポートを省略する
`Java.lang`パッケージは、`String`や`Integer`など基本的なクラスがまとめられているので、インポート宣言なしで利用できる。  
同じパッケージに属するクラスもインポート不要。  
アスタリスク`*`を用いることで、そのパッケージに属するクラスをすべて利用できる。  

```java
import java.util.*;
```

ただし、この方法では、指定したパッケージに属するクラスのみがインポート対象で、`サブパッケージ`に属するクラスはインポートされない。

# エントリーポイント
JVMがクラスを読み込み、実行する際に処理を始めるためのメソッドを`エントリーポイント`と呼ぶ。  
エントリーポイントの定義は以下。

```java
public  static void main(String[] args) {
    // code
}
```

上記の定義のうち、変更できるのは引数の変数名`args`のみ。  
エントリーポイントに適用されるルールは以下。

- `public`であること
- `static`であること
- 戻り値は`void`であること
- メソッド名は`main`であること
- 引数は`String配列`１つを受け取ること

引数には、次のように`可変長引数のString型`を受け取ることもできる。可変長の引数はコンパイル時に配列型に変換されるため。

```
public static void main(String... args){

}
```

# java コマンド
`javaコマンド`はJVMを起動するためのコマンド。  
JVMは起動後に、指定されたクラスをロードし、mainメソッドを呼び出す。

javaコマンドの構文は以下のとおり

```
$ java 完全修飾クラス名 [引数 引数 ...]
```

クラス名の後に続ける引数のことを`起動パラメータ`や`コマンドライン引数`と呼ぶ。  
起動パラメータとして指定されたデータは、JVMによってString配列型オブジェクトに格納され、mainメソッドの引数として使用される。

javaコマンドを実行したときの動作は以下のとおり。

- JVMを起動する
- 指定されたクラスをクラスパスから探し出してロードする
- String配列型オブジェクトを作成し、起動パラメータを格納する
- 起動パラメータを保持したオブジェクトへの参照を引数に渡して、mainメソッドを実行する。

## javaコマンドで実行できるもの
javaコマンドでは、以下の三つを実行できる。

- mainメソッドを持つクラスファイル
- jarファイル内のメソッド
- モジュールに含まれるメインクラス

三つ目はjava SE 9 で導入されたモジュール機能によって追加された。

さらに、Java SE 11 以降では、javacコマンドでソースファイルをコンパイルする必要なく、javaコマンドだけでプログラムを実行できる。

## 起動パラメータの指定
起動パラメータは、javaコマンドのクラス名やソースファイル名の後ろに、スペースを入れて指定する。  
スペースを含む文字列を起動パラメータに指定する場合は、ダブルクオテーションで括る。  
ダブルクオテーション自体はパラメータに含まれない。ダブルクオテーションを文字として指定したい場合は、`¥`でエスケープする。  

起動パラメータのポイントは以下。

- スペースが区切り記号として扱われる
- スペースを含む文字列はダブルクオテーションで括ることで１つとして扱われる
- ダブルクオテーションそのものは文字として扱われない