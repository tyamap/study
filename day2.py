%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# =====================================
# 三角関数の実装

def my_sin(x):
    return np.sin(x)
def my_cos(x):
    return np.cos(x)
def my_tan(x):
    return np.tan(x)

x = np.linspace(-np.pi, np.pi) # numpy.pi でπを取得。
y_sin = my_sin(x) # 引数の単位はラジアン。πラジアンが180°
y_cos = my_cos(x)

x = np.linspace(-1, 1)
y_tan = my_tan(x)

plt.plot(x, y_sin, label="sin")
plt.plot(x, y_cos, label="cos")
plt.plot(x, y_tan, label="tan")
plt.legend()

plt.xlabel("x", size=14)
plt.ylabel("y", size=14)
plt.grid()

plt.show

# =====================================
# 総和の実装
import numpy as np

a = np.array([1,3,2,5,4]) # a1からa5まで
y = np.sum(a) # 総和
print(y)

# 総乗の実装
y = np.prod(a) # 総乗
print(y)

b = np.array([6,1,5,4,3,2])
print(np.sum(b))
print(np.prod(b))

# =====================================
# 乱数の利用
# 均一な乱数
n = 1000 # サンプルの数
x = np.random.rand(n) # 0～1の均一な乱数
y = np.random.rand(n)

plt.scatter(x,y) # 散布図のプロット
plt.grid()
plt.show()

# 偏った乱数
n = 1000
x = np.random.randn(n) # 正規分布（中央で確率が高く、両端で確率が低くなる）に従う乱数
y = np.random.randn(n)

plt.scatter(x,y)
plt.grid()
plt.show()