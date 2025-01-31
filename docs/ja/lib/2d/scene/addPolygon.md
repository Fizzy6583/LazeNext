# シーン2D.多角形追加

シーンに多角形を追加するメソッドです

## 使い方

```
配列<*ベクトル2D>: 頂点;
ベクトル2D: 頂点A(0.0, 0.0);
頂点.追加(頂点A);
ベクトル2D: 頂点B(0.0, 5.0);
頂点.追加(頂点B);
ベクトル2D: 頂点C(5.0, 0.0);
頂点.追加(頂点C);
実数: 大きさ = 1.0;
ベクトル2D: 座標(1.0, 2.0);
ベクトル3D: 色(0.2, 0.5, 0.7);
実数: 重なり順 = 10;
実数: id = シーン.多角形追加(頂点, 大きさ, 座標, 色, 重なり順);
```

### 引数

#### 頂点

追加する多角形の頂点の座標を[ベクトル2D](/lib/math/vec2)の配列で指定します

#### 大きさ

追加する多角形の大きさを実数で指定します

#### 座標

追加する多角形のxy座標を[ベクトル2D](/lib/math/vec2)で指定します

#### 色

追加する多角形の色を[ベクトル3D](/lib/math/vec3)で指定します

指定はRGBの順です

#### 重なり順

追加する多角形の重なり順を実数で指定します

重なり順が大きいほど手前に描画されます

### 戻り値

#### id

追加された多角形のidが返ってきます

回転や移動など[スプライト](/lib/2d/sprite/index)に対して処理を行う際に使用します