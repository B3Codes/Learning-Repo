'''
   - we can import built-in modeuls in two ways
     1. importing the whole package (i.e import math)
     2. importing the specific function from the module(i.e from math import sqrt)
'''

# import math   # importing the whole module

import module_external as car

import class_objects as cs
from math import sqrt    # importing the specific function

class ModuleDemo(object):
	"""docstring for ModuleDemo"""
	def builtin_modules(self):

		print(sqrt(100))    # importing the specific function
		# print(math.sqrt(100))     # when importing the whole module


		print(car.info("BMW","550i"))   # importing function from (cmodule_external)


m = ModuleDemo()
m.builtin_modules()