# ベクトル3D

3次元のベクトルを表し、3D座標、色などを表すのに用いられます。

## 初期化

```
実数: x = 0.0;
実数: y = 0.0;
実数: z = 0.0;
ベクトル3D: ベクトル(x, y, z);
```

### x

定義するベクトルのx成分を実数で指定します

### y

定義するベクトルのy成分を実数で指定します

### z

定義するベクトルのz成分を実数で指定します


## メンバー

### x

ベクトルのx成分

### y

ベクトルのy成分

### z

ベクトルのz成分

## メソッド

### 長さ

```
実数:長さ = ベクトル.長さ();
```

#### 戻り値

3Dベクトルの長さ(x²+y²+z²の正の平方根)

### 正規化

```
ベクトル3D: 単位ベクトル = ベクトル.正規化();
```

#### 戻り値

正規化されたベクトル3D(長さ1)
