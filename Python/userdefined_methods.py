'''
    - Member variable:
        - availabe to all the memebers of the class
        - can be defined any where, but best place is to define above __init__ method

    Note:
        - using i'nsatnce variable' to access 'memeber variables' is an wrong practice
        - instead we must use access 'memeber variables' using 'class' directly

        - wrong Practice:
            c1.wheels = 3 
            print(c1.wheels)

        - right way is:
            print(Cars.wheels)

'''


class Cars(object):

    ''' Member variables '''
    wheels = 4

    # default method:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    # user-defined method:
    def info(self):
        print("Make of the car: " + self.make)
        print("Model of the car: " + self.model + "\n")


# creating insatnce of the class
c1 = Cars("bmw", "550i")
print(c1.make)
print(c1.model)

c2 = Cars('benz', 'E350')
print(c2.make)
print(c2.model)


# instead of above staements we can make use of info() method
print("\n-----------------------------")
print("using info() method:")
print("-----------------------------")
c1.info()
c2.info()

print("\n-----------------------------")
print(c1.make)
# print(c1.wheels)  # o/p: 4
# c1.wheels = 3     # here value of wheel will ony change for c1 not for c2
# print(c1.wheels)  # o/p: 3
print(c2.make)
# print(c2.wheels)  # o/p: 4

"""
    Note:
        - using i'nsatnce variable' to access 'memeber variables' is an wrong practice
        - instead we must use access 'memeber variables' using 'class' directly

        - wrong Practice:
            c1.wheels = 3
            print(c1.wheels)

        - right way is:
            print(Cars.wheels)

"""

print()
print(Cars.wheels)
