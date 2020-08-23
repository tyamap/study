# ====================
# �s��̐�
# ��̍s��̍s���
# �O�̍s��̂��ׂĂ̍s�ƌ�̍s��̂��ׂĂ̗�̑g�ݍ��킹�ŉ��Z���s���A�V�����s������
# �O�̍s��̗񐔂ƌ��̍s��̍s������v���Ă��Ȃ���΂Ȃ�Ȃ�
# NumPy��dot()�֐���p���Čv�Z�ł���B

import numpy as np

a = np.array([[0, 1, 2],
              [1, 2, 3]])
b = np.array([[2, 1],
              [2, 1],
              [2, 1]])

print(np.dot(a, b))

# �v�f���Ƃ̐ρi�A�_�}�[���ρj
# ���Z�q*�ŉ��Z�ł���

a = np.array([[0, 1, 2],
              [3, 4, 5],
              [6, 7, 8]])

b = np.array([[0, 1, 2],
              [2, 0, 1],
              [1, 2, 0]])

print(a * b)


# ====================
# �]�u
#  �s���]�u���邱�Ƃɂ��A�s�Ɨ񂪓���ւ��B
a = np.array([[1, 2, 3],
              [4, 5, 6]])
print(a)   # ���̂܂�
print(a.T) # �]�u

# �]�u�ɂ��O�̍s��̍s���ƌ��̍s��̗񐔂���v���A�s��ς����Z�ł���ꍇ������
print(np.dot(a,a.T))

# ====================
# �P�ʍs��
# �s�Ɨ�̐����������A���ォ��E���ɂ����� 1 �����сA���̂ق��̗v�f�� 0 �ł���s���P�ʍs��Ƃ����B
# �C�ӂ̍s��ɒP�ʍs��������Ă��A�s��̒l�͕ω����Ȃ��B
# NumPy�� eye() �֐��ŒP�ʍs����쐬�ł���B

print(np.eye(2)) # 2�~2�̒P�ʍs��
print(np.eye(3))
print(np.eye(4))


# ====================
# �t�s��
# ����s��ɂ�����ƒP�ʍs��ɂȂ�s����t�s��Ƃ����B
# ����s��͍s�Ɨ�̐��������������s��ł���K�v������B

# �s��
# �s��ɂ���Ă͋t�s�񂪑��݂��Ȃ��ꍇ������A
# �t�s�񂪑��݂��邩�ǂ����́A�s�񎮂ɂ���Ĕ���ł���B
# NumPy�� linalg.det() �֐��ɂ��A�s�񎮂����߂邱�Ƃ��ł���B

a = np.array([[1, 2],
              [3, 4]])
print(np.linalg.det(a)) # �s�񎮂� 0 �ɂȂ�Ȃ��ꍇ�A�t�s�񂪑��݂���B

b = np.array([[1, 2],
              [0, 0]])
print(np.linalg.det(b)) # �t�s�� 0 �ɂȂ�ꍇ�A�t�s��͑��݂���B

# �t�s��̎���
# �t�s�񂪑��݂���ꍇ�Alinalg.inv() �֐��ɂ��t�s������߂邱�Ƃ��ł���B
invA = np.linalg.inv(a)
print(invA)
print(np.dot(a,invA)) # !!?? �P�ʍs��ɂȂ�Ȃ��H

# �t�s��́A�l�H�m�\�ɂ����ĕϐ����m�̑��֊֌W�𒲂ׂ��A���͂Ɏg����B