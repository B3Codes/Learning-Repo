sports = ["Athletics","Basketball","Cricket","Football","Hockey"]
print(sports)

print("#"*20)   # prints # 20 times
print(sports[1])

sports[1] = "Baseball"

print("\n"+"#"*20)  

print(sports)

print("\n"+"#"*20)  
squares = [n**2 for n in range(10)]
print(squares)

print("\n"+"#"*20)  
length = len(sports)
print(length)

print("\n"+"#"*20)  


""" Add element to the list """


sports.append("Jevlin")     # add new element to list
print(sports)

print("\n"+"#"*20)  

sports.insert(4,"Golf")     # add new element to list at a particular index
print(sports)

print("\n"+"#"*20)  



""" Return index of the element """ 

x = sports.index("Cricket")  # returns index of the element in the list
print(x)


print("\n"+"#"*20)  

rep_list = ["Athletics","Cricket","Football","Hockey","Cricket"]
x = rep_list.index("Cricket")  # list repeative elements => will returns index of the first element
print(x)


""" Remove element from the list """

rep_list.pop()   # pop or remove the last element in the list
print(rep_list)


rep_list.remove("Cricket")  # remove the desired element from the list
print(rep_list)


""" Slicing a list """

slicing = sports[1:3]
print(slicing)


slicing2 = sports[1:]
print(slicing2)


slicing3 = sports[:-1]  # prints except last element
print(slicing3) 


slicing4 = sports[1:-1] # prints except 1st and last element
print(slicing4)

slicing5 = sports[-3:] # prints last 3 elements  
print(slicing5)