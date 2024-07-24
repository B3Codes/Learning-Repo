'''
    - built in function range()
    - create a sequence of numbers but don't save them in memory
    - useful for generating numbers
    - range(start, stop, step)
    - 0 is the default start number in range
'''


for i in range(0,10):    # 0 is inclusive, 10 is exclusive 
    print(i,end = ' ')

print("\n")
a = range(0,10)
print("a type: "+ str(type(a)))

print(list(a))   # print as list


# 0 is default start number in range
print(list(range(5)))   # o/p: [0, 1, 2, 3, 4]


# step in range:
print("# step in range:")
for i in range(0,10,3):
    print(i,end=" ")
 

