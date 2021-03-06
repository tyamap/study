﻿get_ipython().run_line_magic('matplotlib', 'inline')

import numpy as np
import matplotlib.pyplot as plt

a = 1.5 # a；定数
x = np.linspace(-1,1) # x：変数 -1から1の範囲
y = a*x # y：変数

plt.plot(x,y)
plt.xlabel("x",size=14)
plt.ylabel("y",size=14)
plt.grid()
plt.show()

def my_func(x):
    return 3*x + 2

x = 4
y = my_func(x)
print(y)

# =========================
# べき乗の実装
def my_func(x):
    a=3
    return x**3

x = np.linspace(0,3)
y = my_func(x)

plt.plot(x,y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("power")
plt.grid()
plt.show()

# =========================
# 平方根の実装
def my_func(x):
    return np.sqrt(x)

x = np.linspace(0,9)
y = my_func(x)

plt.plot(x,y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("root")
plt.grid()
plt.show()

# =========================
# 演習
def my_func(x):
    return 3*x**2 + 2*x + 3
x= np.linspace(-2,2)
y= my_func(x)

plt.plot(x,y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("polynomial_2")
plt.grid()
plt.show()

def my_func(x):
    return 4*x**3 + 2*x**2 + x + 3
x= np.linspace(-2,2)
y= my_func(x)

plt.plot(x,y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("polynomial_3")
plt.grid()
plt.show()

def my_func(x):
    return x**3 - 2*x**2 - 3*x + 4
x= np.linspace(-4,4)
y= my_func(x)

plt.plot(x,y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("polynomial_4")
plt.grid()
plt.show()