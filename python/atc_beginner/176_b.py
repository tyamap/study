# https://atcoder.jp/contests/abc176
n = input()
sum = 0
for i in n:
    sum += int(i)
print("Yes" if sum % 9 == 0 else "No")