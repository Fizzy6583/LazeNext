# モデル.モデル()

この関数はモデルクラスのコンストラクタです。

## 使い方

```
実数:頂点データ[12][3][6] = [...];
整数:頂点の数=36;
ベクトル3D:色(0.2, 0.5, 0.7);
ベクトル3D:座標(0.0, 0.0, 0.0);
整数:シェーダーID = 0;
モデル:キューブ(&頂点データ, 頂点の数, 色, 座標, シェーダーID);
```

### 引数

#### 頂点データ

モデルの頂点データを表す実数の配列をさすポインタ。

### 頂点の数

モデルに頂点が何個あるか示す整数。

### 色

モデルの色を示す[ベクトル3D](/lib/math/vec3)。

### 座標

モデルの座標を表す[ベクトル3D](/lib/math/vec3)。

### シェーダーID

モデルを描画するときに使うシェーダーのID。

| 物体の種類 | ID |
|-----------|----|
| 普通の物体 |  0 |
| 光源 | 1 |

### 返り値

なし