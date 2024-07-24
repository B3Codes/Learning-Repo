"""
   Inheritance:
       - here Cars is parent/super class
       - BMW is child class
       - calling 'super constructor' is a good practice not mandatory

   Overriding:
       - adding our fuctionality to parent class fucntion
       - if want to add our fuctionality to parent class functio
           i.e we don't want to compeletly override it,
               still using parent fumctonality + adding our own fucntionality,
               This can be achive as follows:
                   super().func()
"""

class Cars(object):    # here we're inheriting from 'object class'
    def __init__(sel0):
	    print("Just created the Cars() instance")

    def drive(self):
    	print("Car started...")

    def stop(self):
	    print("Car stopped!")


c = Cars()  # 'creating the instance' of the class Cars
c.drive()
c.stop()


print("-----------------------------------")


class BMW(Cars):    # inheriting from the 'Cars' class

	def __init__ (self):
		Cars.__init__(self)    # call to 'Super' constructor / calling Parent/super class contructor
		print("Just created the BMW class!\n")


	''' ----- overriding ----- '''

	def drive(self):
		print("===== overriding ====\n")
		super(BMW, self).drive()    # using parent fumctonality + adding our own fucntionality
		print("you're driving a BMW!, enjoy...\n")

	def headup_display(self):
		print("\nThis is a unique feature!\n")


b = BMW()
b.drive()
b.stop()    # inherited function from Cars class
b.headup_display()




