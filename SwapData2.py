def SwapData(a,b):
	Work = a
	a = b
	b = Work

	# 結果を出力
	return a,b

i1 = input("1=")
i2 = input("2=")
print(SwapData(i1,i2))