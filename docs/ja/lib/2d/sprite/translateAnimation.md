# スプライト.移動アニメーション

スプライトに移動のアニメーションを付けるために使用するメソッドです

## 使い方

```
ベクトル2D: 移動量(5.0, -5.0);
実数: 開始時間 = 1000;
実数: 継続時間 = 200;
スプライト.移動アニメーション(移動量, 開始時間, 継続時間);
```

### 引数

#### 移動量

アニメーションで移動させる量を[ベクトル2D](/lib/math/vec2)で指定します

#### 開始時間

アニメーションが開始する時間(プログラムが実行してからの時間)を実数で指定します

単位はms(ミリ秒)です

#### 継続時間


アニメーションが継続する時間を実数で指定します

単位はms(ミリ秒)です

### 戻り値

なし