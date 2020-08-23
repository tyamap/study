# ====================
# �R�T�C���ގ��x
# �R�T�C���ގ��x�̓x�N�g�����m�̌����̋߂���\���B
# ��̓񎟌��x�N�g���̓��ς́A�e�v�f�̐ς̑��a�Ƃ��ĈȊO�ɁA�O�p�֐���L2�m�������g���ċ��߂邱�Ƃ��ł���B
# $$\vec{a}�\vec{b} = ||\vec{a}||_2||\vec{b}||_2cos\theta = \sqrt{a_2^1 + a_2^2}\sqrt{b_2^1 + b_2^2}cos\theta$$
# [note]�]���藝
# ���̊֌W�ɂ��Acos�Ƃ̒l���ȉ��̂悤�ɋ��߂邱�Ƃ��ł���B
# $$cos\theta = \frac{a_1 b_1 + a_2 b_2 }{ \sqrt{a_2^1+a_2^2} \sqrt{b_2^2 + b_2^2}}$$
# cos�Ƃ̒l�́A�x�N�g���Ԃ̊p�x�Ƃ� 0 �̎��ő�l�����A�Ƃ��傫���Ȃ�قǏ������Ȃ�B
# ����������cos�Ƃ̒l�́u2�̃x�N�g���̌������ǂꂾ���ǂꂾ�������Ă��邩�v��\���B
# �񎟌��x�N�g�������łȂ��An�����̃x�N�g���ɂ��g���ł���B
# �l�H�m�\�Ŏ��R����������ꍇ�ɁA�P������΂��΃x�N�g���ŕ\���B
# �R�T�C���ގ��x�́A���̂悤�ȒP��Ԃ̊֌W����\���̂ɗ��p�����B

# ���ςƃm�������g���āA�R�T�C���ގ��x���v�Z����B
# ���ς̌v�Z�ɂ�NumPy��dot()�֐��A�m�����̌v�Z�ɂ�linalg.norm()�֐����g���B

import numpy as np

def cos_sim(vec_1, vec_2):
    return np.dot(vec_1, vec_2) / (np.linalg.norm(vec_1) * np.linalg.norm(vec_2))

a = np.array([2, 2, 2, 2])
b = np.array([1, 1, 1, 1]) # a�Ɠ�������
c = np.array([-1, -1, -1, -1]) # a�Ɛ����΂̌���

print("��� a��b�̃R�T�C���ގ��x ---")
print(cos_sim(a, b))

print("��� a��c�̃R�T�C���ގ��x ---")
print(cos_sim(a, c))