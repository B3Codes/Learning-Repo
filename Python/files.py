""" 
Python uses file object, to interact with external files on our system
external files like audio, text,email,excel etc

- here we're using iPython to access/create text file

Summary: 

 - Use the open() function with the w or a mode to open a text file for appending.
 - Always close the file after completing writing using the close() method or use the with statement when opening the file.
 - Use write() and writelines() methods to write to a text file.
 - Pass the encoding='utf-8' to the open() function to write UTF-8 characters into a file.



"""


# iPython writing a file

f = open('test.txt')     # open the file
print(f.read())        # .read() -> method read the file   o/p: This is a test file!


f = open('test2.txt')     # open the file
print(f.readlines())    

# readlines() -> go through each line of the file and treat each line as different element and return it as a list

""" o/p: ['This is a test file!\n', 'This is a second line!'] """



""" Write file function """

g = open("new_text.txt","w+")

g.write("This is new file created using Python!")

g = open("new_text.txt")

stri = "This is line\n"

h = open("new_text_2.txt","w+")

L = [stri,stri, stri]

h.writelines(L)

h.close()

h = open("new_text_2.txt")

print(h.read())
 
with open("new_text_3.txt","w+") as i:
	i.writelines('\n'.join(L))

i.close()

i = open("new_text_3.txt")

print(i.read())



# write Unicode to file

quote = '成功を収める人とは人が投げてきたレンガでしっかりした基盤を築くことができる人のことである。'


''' Pass the encoding='utf-8' to the open() function to write UTF-8 characters into a file.
Did you find this tutorial helpful ?
'''

with open('quotes.txt', 'w+', encoding='utf-8') as uc:
    uc.write(quote)


uc.close()

uc = open('quotes.txt', encoding='utf-8')
print(uc.read())





