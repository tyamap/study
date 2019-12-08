%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# =====================================
# �O�p�֐��̎���

def my_sin(x):
    return np.sin(x)
def my_cos(x):
    return np.cos(x)
def my_tan(x):
    return np.tan(x)

x = np.linspace(-np.pi, np.pi) # numpy.pi �Ń΂��擾�B
y_sin = my_sin(x) # �����̒P�ʂ̓��W�A���B�΃��W�A����180��
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
# ���a�̎���
import numpy as np

a = np.array([1,3,2,5,4]) # a1����a5�܂�
y = np.sum(a) # ���a
print(y)

# ����̎���
y = np.prod(a) # ����
print(y)

b = np.array([6,1,5,4,3,2])
print(np.sum(b))
print(np.prod(b))

# =====================================
# �����̗��p
# �ψ�ȗ���
n = 1000 # �T���v���̐�
x = np.random.rand(n) # 0�`1�̋ψ�ȗ���
y = np.random.rand(n)

plt.scatter(x,y) # �U�z�}�̃v���b�g
plt.grid()
plt.show()

# �΂�������
n = 1000
x = np.random.randn(n) # ���K���z�i�����Ŋm���������A���[�Ŋm�����Ⴍ�Ȃ�j�ɏ]������
y = np.random.randn(n)

plt.scatter(x,y)
plt.grid()
plt.show()