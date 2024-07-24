"""
  Conditional Logic:
    - if, if else, if elif else
    - while, while else
    - for loop

 - Break: to bring out of the closet enclosing loop
 - Continue: Go to the start of the closet enclosing loop

"""

if (100>10):
	print("if statement")   # in python starting of a code block intentation is 4 spaces

 
if(100<90):
	print(True)
else:
	print(False)

# elif

value = "Yellow"

if(value == "Green"):
	print("GO!")
elif(value == "Yellow"):
	print("Prepare to GO!")
else:
	print("Stop!")



''' While Loop: '''
i = 0

while(i<10):
	print("Loop iteration: " + str(i))
	i += 1
	if i == 5:
		break

print("Broke Out of LOOP! at {}th iteration".format(i))

num_list = []

i =0 
while(i<10):
	
	i += 1

	if(i == 4):
		continue
	num_list.append(i)
	print("num_list loop Iteration: "+str(i))

print(num_list)


# while else:

i = 11;
while i>10:
	print("While Loop iteration: {}".format(i))
	i -= 1
else:
	print("End of while Loop!")


# For Loop!

stri = "abcdfff"

for c in stri:

	# by default print prints in new line
	# print(c)

	if c == 'a':
		print(c.upper())
	else:
	    # to print in same line
	    print(c, end = ' ')


cars_list = ["BMW","Benz","Audi","Honda"]

# print each elemnt of list

print()
for car in cars_list:
	print(car)


# print dictionary elements:

dict_item = {"one":1,"two":2,"three":3}
for d in dict_item:
	print(d+": "+ str(dict_item[d]))


# accessing key,values together
print()
print("accessing key,values together")
for k,v in dict_item.items():
	print(k+": "+str(v))



