c = input()
# check for char is Uppercase
if (ord(c) in range(65, 91)):
    print(1)
# check for char is Lowercase
elif (ord(c) in range(97, 123)):
    print(0)
else:
    print(-1)
