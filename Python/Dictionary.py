car = {"make":"bmw","model":"550i","year":2016}
print(car)

print(car["make"])

empty_dict = {}  # empty dictionary
print(empty_dict)


""" ===== Add itmes to dictionary ===== """

empty_dict["one"] = 1
print(empty_dict)

empty_dict["two"] = 2
print(empty_dict)


sum_num = empty_dict["two"] + 8
print(sum_num)


""" ===== Update value ===== """

empty_dict["one"] = "Hello"
print(empty_dict)


print("\n","="*40+"\n")



""" ===== Nested Dictionary ===== """

cars_nested = {'bmw':{'model':"550i",'year':2016},'benz':{"model":"E350",'year':2015}}
print(cars_nested["benz"]['model'])



""" ===== Dictionary methods: ===== """

print(car.keys())
print(car.values())
print(car.items())    # returns (key,value) pairs

print("\n","="*40+"\n")

print(cars_nested.keys())
print(cars_nested.values())
print(cars_nested.items())   # returns (key,value) pairs


print("\n","="*40+"\n")

""" ===== Copy a dictionary ===== """

car_copy = car.copy()
print(car_copy)


print("\n","="*40+"\n")

""" ===== clear the dictionary ===== """
car_copy.clear()
print(car_copy)


""" Pop/remove an element from the dictionary """
car_copy = cars_nested.copy()

print(car_copy.pop("bmw"))
print(car_copy)
