%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# ====================
# ���`�ϊ�

# ���`�ϊ��ɂ��x�N�g����ϊ�����B
# matplotlib.pyplot��quiver() �֐���p���ăx�N�g����\������
# quiver(�n�_��x���W, �n�_��y���W, ����x����, ����y����, angles=���̊p�x�̌�����@, scale=�X�P�[���̒P��, color=���̐F)

def arrow(start, size,color):
    plt.quiver(start[0], start[1], size[0], size[1], angles="xy", scale_units="xy", scale=1, color=color)
    
# ���̎n�_
s = np.array([0, 0]) # ���_
# �x�N�g��
a = np.array([2, 3])

arrow(s, a, color="black")

# �O���t�\��
plt.xlim([-3,3]) # x�̕\���͈�
plt.ylim([-3,3])
plt.xlabel("x", size=14)
plt.ylabel("y", size=14)
plt.grid()
plt.axes().set_aspect("equal") # �c����G�𓯂���
plt.show()

# �x�N�g���ɍs��������邱�Ƃɂ���ăx�N�g����ϊ����邱�Ƃ���`�ϊ��Ƃ���

a = np.array([2, 3]) # �x�N�g��a
A = np.array([[2, -1],
              [2, -2]]) # �s��A

b = np.dot(A, a) # ���`�ϊ�

print("�ϊ��O�̃x�N�g�� (a) :", a)
print("�ϊ���̃x�N�g�� (b) :", b)

s = np.array([0, 0]) # ���_

arrow(s, a, color="black")
arrow(s, b, color="blue")

# �O���t�\��
plt.xlim([-3, 3])
plt.ylim([-3, 3])
plt.xlabel("x", size=14)
plt.ylabel("y", size=14)
plt.grid()
plt.axes().set_aspect("equal")
plt.show()