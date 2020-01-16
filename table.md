## 表・テーブルの表示
バーティカルバー（パイプ記号） `|` で区切って表を表現できる。  
タイトル行の下に列の数だけハイフン `-` をバーティカルバーで挟んだもの `|-|` を記述する。  
ハイフンの左側、右側、両端にコロン `:` を記述することで、その列の要素をそれぞれ左寄せ、右寄せ、中央寄せできる

### 入力

```
|ID|Name|Skill|Real Name|  
|-|:-:|:-|-:|  
|001|SpiderMan|web-shoot|Peter Parker|  
|002|IronMan|repulsor-ray|Tony Stark|  
|003|AntMan|gigantic|Scott Lang|  
```

### 結果

|ID|Name|Skill|Real Name|
|-|:-:|:-|-:|
|001|Spider-Man|web-shoot|Peter Parker|
|002|Iron-Man|repulsor-ray|Tony Stark|
|003|Ant-Man|gigantic|Scott Lang|

