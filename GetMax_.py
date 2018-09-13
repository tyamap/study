T = [1,2,3,4,5,6,7,8,9,10]

Max = T[0] 
Midx = 0
Idx = 1

for Idx in range(10):
	if Max < T[Idx]:
		Max = T[Idx]
		Midx = Idx
	Idx = Idx+1

print(Max)