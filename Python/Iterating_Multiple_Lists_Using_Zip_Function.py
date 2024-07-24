"""
   - Iterating multiple at the same time
   - for this we use zip() function
   - takes iterable/containers( list, string etc ) and returns a single iterator object, 
     having mapped values from all the containers. 

   - iterable/containers with least length decide the lenght of new iterator/ zip object

   - zip() end result -> (1st iterator item, 2nd iterator item): pair of elements

   - to unzip we use '*' operator
"""

l1 = [1,2,3]
l2 = [4,5,6,7,8]

mapped = zip(l1,l2)      # using zip() to map values

mapped_list = list(mapped)  # converting values to print as list of pairs
print(mapped_list)          # o/p: [(1, 4), (2, 5), (3, 6)]

for a,b in zip(l1,l2):
	print(a, end="")
	print(" "+str(b))



# unziping

mapped = zip(l1,l2)      # using zip() to map values

print(*mapped)         # unziping as pair  -> o/p: (1, 4) (2, 5) (3, 6)



mapped = zip(l1,l2)

ul1, ul2 = zip(*mapped)   # unziping as individual tuple
print(ul1, end = " ")    # o/p: (1, 2, 3)
print(ul2, end = " ")    # o/p: (4, 5, 6)



# creating dictionary using zip()

stocks = ['reliance', 'infosys', 'tcs']
prices = [2175, 1127, 2750]


new_dict  = {stock: price for stock, price in zip(stocks,prices)}
print()
print(new_dict)


print()
print("***************************")
print("application of zip()")
print("***************************")
print()

# Python code to demonstrate the application of zip()
 
# initializing list of players.
players = ["Sachin", "Sehwag", "Gambhir", "Dravid", "Raina"]
 
# initializing their scores
scores = [100, 15, 17, 28, 43]
 

for player, score in zip(players,scores):
	print(player+": " + str(score))