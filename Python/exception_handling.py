"""
exceptions are the errors
we should handle in our code
to make sure our code is working the way we want  and is handling all the un-wanted issues

- to handle exception
   we use 'try and except' block

- else block:
    executed when no exception error

- finally:
    is the block which is executed everytime

- 'raise' keyword
    . used to raise exceptions or errors
        and stops the control flow of the program
    . can be used to raise exception for the other method that will use the current method
    . used to bring up the current exception in an exception handler 
        so that it can be handled further up the call stack.

"""


def exceptionHandling():
    try:
        a = 10
        b = 20
        c = 0


        d = (a + b) / c    # gives zeroDivisionError
        print(d)

    except:
        print("In the except block: NOT POSSIBLE!")
        # raise Exception("This is an exception")    # 'raise ' keyword usage

    finally:                        # finally block usage
    	print("finally, always exceuted!")

exceptionHandling()


''' ----------------------------------------------- '''


def exceptionHandling2():
    try:
        a = 10
        b = "20"
        c = 10

        d = (a + b) / c   # gives typeError
        print(d)

    except:
        print("In the except block: NOT POSSIBLE!")
    finally:
    	print("finally, always exceuted!")


exceptionHandling2()


''' ----------------------------------------------- '''


# handling multiple exceptions:

def exceptionHandling3():
    try:
        a = 10
        b = "20"
        c = 0

        d = (a + b) / c
        print(d)

    except ZeroDivisionError:
        print("zeroDivision! not possible")
    except TypeError:
    	print("Can't add int to string")
    finally:
    	print("finally, always exceuted!")


exceptionHandling3()



''' ----------------------------------------------- '''


# executing else Block:

print("\n### executing else Block: ###\n")

def exceptionHandling4():
    try:
        a = 10
        b = 20
        c = 10

        d = (a + b) / c
        print(d)

    except:
        print("In the except block: NOT POSSIBLE!")
    else:
    	print("There is no exception error!, else executed")
    finally:
    	print("finally, always exceuted!")


exceptionHandling4()



