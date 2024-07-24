'''
   Some Built-in functions:
   - max(): any number of I/Ps, returns largest one
   - min(): any number of I/Ps, returns largest one
   - abs(): returns abolute value of a number, i.e. number's distance from 0
            always returns +ive vakue
            I/P: single number
   - type(): returns 'type' of data it takes as an argument
'''


# min() function

def largest_num(*args):     # here * tells python that function can have any number of arguments
	print(max(args))

largest_num(2,4,61,1,34,-12,3,-434)



# min() function

def smallest_num(*args):     # here * tells python that function can have any number of arguments
	return min(args)


print(smallest_num(2,4,61,1,34,-12,3,-434))



# abs() function

def absolute_val(a):
	return abs(a)

print("+ive num absolute value: "+ str(absolute_val(10)))
print("-ive num absolute value: "+ str(absolute_val(-10)))



# type() function

print(type(99))
print(type(99.987785656565656565665766667))
print(type("jhdfhdfhu"))
print(type(99.98))
print(type([1,2,3]))