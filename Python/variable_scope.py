a = 10

def func_local(a):
	print("Value of 'a' is: "+ str(a))
	a = 2                                  # here 'a' have local scope
	print("After change, Value of 'a' is: " + str(a))

func_local(a)
print("After fucn call, {} \nValue of 'a' is: %s".format("Value of 'a' is \"updated!\"" if a != 10 else "Value of 'a' remains \"unchanged!\"" ) %a)


print("\n##################\n")

def func_global():
	global a       # global keyword used to make changes to global variable
	print("Global Value of 'a' is: "+ str(a))
	a = 2
	print("After change, Value of 'a' is: " + str(a))

func_global()
print("After fucn call, {} \nValue of 'a' is: %s".format("Value of 'a' is \"updated!\"" if a != 10 else "Value of 'a' remains \"unchanged\"" ) %a)
