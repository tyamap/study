import sys
args = sys.argv

print(args)
print(args[1]) 
print(args[2])

Work = args[1]
args[1] = args[2]
args[2] = Work

print ("=====swapped=====")
print (args[1])
print (args[2])
