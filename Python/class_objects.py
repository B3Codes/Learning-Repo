'''
 -> class: 

  - In Python everything is an object
  - start class name with 'CAPITAL letter'
  - A class is a user-defined blueprint/prototype from which objects are created
  - provide a means of bundling data and functionality together
  - creating new class, creates a 'new object', allowing new instance of that type to be made
  - Class creates a user-defined data structure

  -> Important points:
   - created by keyword 'class'
   - attributes have varibles that belongs to a class
   - attributes are always public, can be accessed using 'dot(.)'


 -> object:
    - instance of a class
    - class -> blue print
      instnace -> copy of the class with its actual values.

    - An object consists of :
      - State: represented by the attributes of an object
               reflects the properties of an object

      - Behaviour: represented by methods of the object
                   reflects response of an object to other object

      - Identity: object's unique name
                  enables one object to interact with another


 -> self:
    - similar to this 'pointer' in C++ and 'this reference' in Java



 -> __init__ method:

    - similar to 'constructors' in C++ and Java
    - Constructors are used to initializing the object’s state
    - Like methods, a constructor also contains a collection of statements(i.e. instructions)  # noqa: E501
      that are executed at the time of Object creation.
    - runs as soon as an object of a class is instantiated
    - useful to do any initialization with object
    - or usefult to instialize all the objects we're going to use with the class

    - min. it takes 1 parmeter (i.e self)

'''


s = "Hello!"   # 's' is an insatnce of object/class str (i.e. string)
s.upper()
# print(type(s))


''' ================================================ '''

class Cars(object):      # here class Cars is 'inheriting' the object class (buikt-in class in python)  # noqa: E501

   # declaring __init__ (siliar to constructor) # noqa: E302
   def __init__(self, make):   # make is the argument provide by us  # noqa: E302
      self.make = make         # similar to this in java  # noqa: E111


# creating the insatance of the class
# (wer're out of the class here)
c1 = Cars('bmw')      # in java,c++ or other langs we use 'new' keyword to create the insatance of a class but in Python we don't need/use 'new' keyword  # noqa: E501
# above we're passing 'bmw' as a parametr for 'make', we don't need to send any parameter for self  # noqa: E114, E501

print(c1.make)   # o/p: bmw


c1 = Cars('benz')
print(c1.make)     # o/p: benz
