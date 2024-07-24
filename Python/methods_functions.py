"""
   - def keyword used 
	    -> Methods:
	         - method is defined within a class and hence they are dependent on that class
	         - can't be just called by the name only,
	            need to invoke the class by the reference of the class in which it's defined
	         - def. always includes 'self' as its 1st parameter
	         - method is implicitly passed the object on which it is invoked
	         - can operate on the data(instant variable) that is contained by the corresponding class
	         - two types:
	               - user defined
	               - built-in
	    
	    -> Functions:
	         - block of code, called by its name (Independent)
	         - may or maynot have parameters
	         - if any parameter/data is passed then they're 'paased explicitly'
	         - doesn't deal with class and its instance concept
	         - may or maynot return any data
	         - two types:
	               - user defined
	               - built-in

"""


''' ===== User defined Methods ===== '''
class ABC:
	def fun_abc(self):
		print("Method of class 'ABC'")

class_ref = ABC()   # ABC class object
class_ref.fun_abc()                     # o/p: Method of class 'ABC'



''' ===== Bukt-in Methods ===== '''
import math
ceil_val = math.ceil(4.38)
print("Ceil Value of 4.38 is "+str(ceil_val))    # o/p: Ceil Value of 4.38 is 5



''' ===== User-defined Functions: ===== '''

def func_eg():
	print("Hello!")

func_eg()           # o/p: Hello!


def sum1():
	return 2+4

print(sum1())        # op: 6


def sum2( a,  b):
	return a+b

print(sum2(3,4))      # o/p: 7


def sum3(a = 4, b=5):
	return a+b

print("Sum3 default values sum: %d" %(sum3()))      # o/p: Sum3 default values sum: 9
 
print("Sum3 (passing parameters) %d" %(sum3(4,9)))  # o/p: Sum3 (passing parameters) 13

print("Sum3 (positional + keyword argument): {}".format(sum3(b=6,a=9)))  # o/p: Sum3 (positional + keyword argument): 15


print("sum3: {}".format(sum3(8,b=6)))    # o/p: sum3: 14


''' ===== Built-in Functions ===== '''
print(sum([1,2,3]))                  # o/p: 6
print(max(1,2,67,96,-9,8,34,-844))   # o/p: 96

