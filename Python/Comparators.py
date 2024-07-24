"""
==   -> equality
!=   -> Not equal to
<>   -> Not equal to
<    -> Less than
<    -> Greater than
<=   -> Less than equal to
>=   -> Greater than equal to

# Chained comparision operator:
and -> a<b and b<c
or  -> a<b or b<c
a<b<c -> a<b and b<c
"""

bool_one  = 10 == 10
print(bool_one)

bool_one  = 10 == 11
print(bool_one)

not_equal  = 10 != 11
print(bool_one)



# Chained comparision operator

a = 10
b =20
c= 30

print(a<b<c)

# a<b<c is equal to a<b and b<c

