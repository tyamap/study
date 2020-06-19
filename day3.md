Day3

# 型変換

大きな範囲を大きな範囲の値を小さな範囲の値に代入する際は、明示的な型変換が必要。

```java
int a = 10;
short b = (short) a;
```

また、Javaにはbyte型とboolean型に互換性はないため注意。