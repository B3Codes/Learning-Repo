str1 = 'Hello! "World"'
print(str1)

str2 = "Hello \"QUOTE\"!"
print(str2)

str3 = "This is a \
single string"

print(str3)

str4 = str1 + str( 2)       # str() -> used for typeconversion to string
print(str4)

print(len(str4))           # len()  -> gives string length


""" Other methods:
    - upper()
    - lower()
    - index()
    - startswith()  -> returns bool
    - endswith()    -> returns bool
    - split()
    - .replace()
"""



""" Replace Method: """

str5 = "1abc2abc3abc4abc5abc6"
print(str5.replace("abc","ABC"))   # replace everything  -> o/p: 1ABC2ABC3ABC4ABC5ABC6


str6 = "1abc2abc3abc4abc5abc6"
print(str6.replace("abc","ABC",2))  # replace according to number of count  -> o/p: 1ABC2ABC3abc4abc5abc6



""" Substrings: """
print("\n*** Substrings ***")
sub = str6[1]
print(sub)

sub = str6[2:6]    # print from index 2 to index 5
print(sub)


# steps -> here we can define in how many steps should it work, it pick the char in steps

#str6 = "1abc2abc3abc4abc5abc6"

step1 = str6[0:8:1]
print(step1)       # o/p: 1abc2abc

step2 = str6[0:8:2]
print(step2)       # o/p: 1b2b (here picking every second char)

step3 = str6[0:12:3]
print(step3)       # o/p: 1cba (here picking every third char)


step4 = str6[::3]
print("Step4: "+ step4)


""" slicing: """

str7 = "This is string!"

print(str7[:])   # prints complete string

print(str7[1:])  # print string from index 1 -> o/p: his is string!

print(str7[:6])  # print string from index 0 to index 5 (6 exclusive) -> o/p: This i

print(str7[2:6]) # print string from index 2 to index 5 ( 2inclusive, 6 exclusive) -> o/p: This i


print(str7[-2]) # o/p: g  

print(str7[:-1]) # if we don't want last char o/p: This is string

print(str7[:-2]) # if we don't want last two char o/p: This is strin


# reverse a string
print(str7[ : :-1])   # o/p: !gnirts si sihT



""" Print variables with string   -> Print formatting """

event = "Party!"
city = "NYC"

print("Welcome to " + city + " and enjoy the " + event )

print("Welcome to %s and enjoy the %s" %(city,event) )


print("Welcome to {} and enjoy the {}" .format(city,event) )

print("Welcome to {x} and enjoy the {y}" .format(x  = city,y = event) )


print("First: {x} Second: {x}" .format(x  = "inserted") )





