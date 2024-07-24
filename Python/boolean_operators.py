"""
and
************************

************************

or
************************

************************

not
************************

************************


-> Precedence Order:
1. not
2. and
3. or

"""

and_op = (10 == 10) and (10>=9)
print(and_op)

or_op = (10 != 10) or (10>=9)
print(or_op)

not_op = not(10 == 10)
print(not_op)



# Precedence order:

bool_op = True or not False and False   # o/p: True 
print(bool_op)          

bool_op1 = 10 == 10 or not 10>10 and 10>10    # o/p: True 
print(bool_op1)    

bool_op2 = (10 == 10 or not 10>10 )and 10>10     # o/p: False 
print(bool_op2)     





