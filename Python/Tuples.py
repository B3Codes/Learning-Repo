''' 
- Tuples are immutable  -> means can't be changed

'''

my_list = [1,2,3]   # normal list
print(my_list)
my_list[0] = 4    # mutable
print(my_list)


tuple_list = (5,6,7)   # we can't change tuple items
print(tuple_list)     

# tuple_list[0] = 1    ---> this is error not possible


print(tuple_list[0])   # finding element using index

print(tuple_list[1:])   # slicing



""" Methods in tuple """

print(tuple_list.index(7))  # returns elemnent index

print(tuple_list.count(6))   # returns count or number of times element is present in the tuple



