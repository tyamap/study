import numpy as np

# ====================
# �ŗL�l�ƌŗL�x�N�g��
# �����s��A�ɑ΂��āA�ȉ��̊֌W�𖞂����X�J���[�ɂ��A�s��A�́u�ŗL�l�v�B�x�N�g��x���s��A�́u�ŗL�x�N�g���v�Ƃ����B
# (Latex) $$A\vec{x} = \lambda\vec{x}$$
# �܂�ŗL�x�N�g���́A���`�ϊ��ɂ��e�v�f���ŗL�l�{�ɂȂ�x�N�g���̂���

# �Ⴆ�Έȉ��̂悤�ȒP�ʍs��E������B
E = np.eye((2))
# �P�ʍs��������Ă��x�N�g���͕ω����Ȃ��̂ŁA
# (Latex) $$A\vec{x} = \lambda E \vec{x}$$
# �E�ӂ����ӂɑ�����āA
# $$(A - \lambda E)\vec{x} = \vec{0}$$
# �s��(A-��E)���t�s������Ƃ���ƁA
# $$\vec{x} = (A - \lambda E)^{-1} \vec{0} = \vec{0}$$
# �ƂȂ�A�x�N�g��x��0�ƂȂ�B
# �s��(A-��E)���t�s��������Ȃ����̂Ƃ��čl����ƁA�ȉ��̊֌W�����������B
# $$det(A - \lambda E) = 0$$
# ������s��A�́u�ŗL�������v�Ƃ����B

# NumPy��linalg.eig()�֐��ɂ��A�ŗL�l�ƌŗL�x�N�g���𓯎��ɋ��߂邱�Ƃ��ł���B
a = np.array([[3, 1], 
              [2, 4]])

ev = np.linalg.eig(a) # �ŗL�l�ƌŗL�x�N�g�������߂�B

print(ev[0]) # �ŏ��̗v�f���ŗL�l
print()
print(ev[1]) # ��ڂ̗v�f�͌ŗL�x�N�g��

# ��̗�ł́A��̌ŗL�l�����߂�ꂽ�B
# �ŗL�x�N�g�����Q�B���߂�ꂽ�s��̊e�s���A�ŗL�x�N�g����\���A
# �e�ŗL�x�N�g����L2�m������ 1 �ƂȂ��Ă���BL2�m�������P�ƂȂ�x�N�g�����u�P�ʃx�N�g���v�Ƃ����B
# NumPy��linalg.eig()�֐��́A�ŗL�x�N�g����P�ʃx�N�g���̌`�ŕԂ��B