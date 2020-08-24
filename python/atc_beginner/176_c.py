# https://atcoder.jp/contests/abc176
n = int(input())
a = list(map(int,input().split()))
ans = 0
for i in range(1, n):
    if a[i] < a[i-1]:
        ans += (a[i-1] - a[i])
        a[i] = a[i-1]
print(ans)

# pythonの整数は多倍長整数なので、そのまま9で割ることもできる
# ```
# N=int(input())
# if N%9 == 0:
#     print("Yes")
# else:
#     print("No")
# ```
