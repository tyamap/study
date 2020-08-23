%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# ====================
# 線形変換

# 線形変換によりベクトルを変換する。
# matplotlib.pyplotのquiver() 関数を用いてベクトルを表現する
# quiver(始点のx座標, 始点のy座標, 矢印のx成分, 矢印のy成分, angles=矢印の角度の決定方法, scale=スケールの単位, color=矢印の色)

def arrow(start, size,color):
    plt.quiver(start[0], start[1], size[0], size[1], angles="xy", scale_units="xy", scale=1, color=color)
    
# 矢印の始点
s = np.array([0, 0]) # 原点
# ベクトル
a = np.array([2, 3])

arrow(s, a, color="black")

# グラフ表示
plt.xlim([-3,3]) # xの表示範囲
plt.ylim([-3,3])
plt.xlabel("x", size=14)
plt.ylabel("y", size=14)
plt.grid()
plt.axes().set_aspect("equal") # 縦横比絵を同じに
plt.show()

# ベクトルに行列をかけることによってベクトルを変換することを線形変換という

a = np.array([2, 3]) # ベクトルa
A = np.array([[2, -1],
              [2, -2]]) # 行列A

b = np.dot(A, a) # 線形変換

print("変換前のベクトル (a) :", a)
print("変換後のベクトル (b) :", b)

s = np.array([0, 0]) # 原点

arrow(s, a, color="black")
arrow(s, b, color="blue")

# グラフ表示
plt.xlim([-3, 3])
plt.ylim([-3, 3])
plt.xlabel("x", size=14)
plt.ylabel("y", size=14)
plt.grid()
plt.axes().set_aspect("equal")
plt.show()