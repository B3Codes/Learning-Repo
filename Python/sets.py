"""
   - sets: unordered collection of unique elements
   - can be construct by using: set() function

   - Frozen sets:  frozenset()
      -  immutable objects that only support methods and operators
         that produce a result without affecting the frozen set or sets 
         to which they are applied

      - elements of a set can be modified at any time, 
        elements of the frozen set remain the same after creation. 


   - Adding Elements to a Set:
      -> add() method:-  Only one element at a time
                            -  loops are used to add multiple elements at a time with the use of add() method.
                            -  Tuples allowed, List not accepted - because tuples are immutable and hence Hashable, list are not.

      -> update() method:- For addition of two or more elements 
                               -  accepts lists, strings, tuples as well as other sets as its arguments                      
 

  Note – Lists cannot be added to a set as elements because Lists are not hashable whereas Tuples can be added because tuples are immutable and hence Hashable. 


   - Removing elements from the Set:

        - remove() -> KeyError arises if element doesn’t exist in the set

        - discard() -> To remove elements from a set without KeyError, , if the element doesn’t exist in the set, it remains unchanged.

        - pop()     -> removes only the last element of the set
             * Note – unordered set -then no such way to determine which element is popped.

        - clear()   -> remove all the elements from the set. 

     
     - copy()	           -> Returns a shallow copy of a set

     - union()	           -> Returns the union of sets in a new set

     - difference()	       -> Returns the difference of two or more sets as a new set

     - difference_update() ->	Removes all elements of another set from this set

     - intersection()      -> Returns the intersection of two sets as a new set

     - intersection_update()  -> Updates the set with the intersection of itself and another

     - isdisjoint()	       -> Returns True if two sets have a null intersection

     - issubset()	       -> Returns True if another set contains this set

     - issuperset()	       -> Returns True if this set contains another set

     - symmetric_difference() -> Returns the symmetric difference of two sets as a new set

     - symmetric_difference_update() ->	Updates a set with the symmetric difference of itself and another



"""

x = set()

print(x)

x.add(1)

print(x)

x.add((2,3))

print(x)


x.add(1)  # if we try to put same element to the set then there will be no change
print(x)

x.update([4,5,6])

print(x)



y = set([1,2,3])
print(y)


# set using string

w = set("Hello World!")
print(w)


# Removing elements from the Set

print("\n# Removing elements from the Set")

y.remove(1)
print(y)


''' y.remove(5) -> this will produce keyError, intead of remove we will use discard() '''

y.discard(5)    # -> no error
print(y)

print(y.pop())
print(y)

print("\n# Clear method on x: will make set x empty")
x.clear()
print(x)



""" Frozen sets  """

print("\n# empty frozenset")

  ''' empty frozenset:
      - To print Empty Frozen Set, No parameter is passed
  '''
print(frozenset())


fset1 = frozenset(w)
print(fset1)

