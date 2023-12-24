# neetcodeio-YT
# variables are dynamically typed means we do not have to declare the data type at all
import heapq
from collections import deque
import math

# ---------------VARIABLES----------------------

n = 0
print('n =', n)

# types are determined at runtime, so if we reassign the var n, it will work
n = 'apple'
print('n =', n)

# take input from user
username = input("Enter username:")
print("Username is: " + username)

# Multiple assignments to variables
n, m = 0, 'John'  # n = 0 m = John
print(n, m)

# Increment
n = n + 1  # ok
n += 1     # ok
# n++ can't do like this

# ---------------IF ELSE STATEMENTS----------------------

# If statements don't need parenthesis or curly braces. We can you parenthesis if conditions are long/complex
n = 1
if n > 2:
    n -= 1
    print("Value of n:", n)

elif n == 1:
    print("Value of n:", n)


# Parenthesis are needed if conditions are long/complex
# use and for &&
# use or for ||
n, m = 1, 2
if ((n > 2 and n != m) or n == m):
    n += 1

# ---------------LOOPS----------------------

# while loops
print('while loop')
n = 0
while n < 5:
    print(n)
    n += 1


# for loops
# i = 0 to i = 4
print('for loop from 0 to 4')
# range(5) i goes in range from 0 to 4 and i is incremented implicitly, we don't have to manually increment it
for i in range(5):
    print(i)


# looping from i = 2 to i = 5
print('for loop from 2 to 5')
for i in range(2, 6):
    print(i)


# looping from i = 5 to i = 2
print('for loop from 5 to 2')
# loop starts from 5 goes till 2 excluding 1. -1 means we are decrementing. By default, if we did not specify, it will increment
for i in range(5, 1, -1):
    print(i)

# ---------------MATHS----------------------
# Maths

# division is decimal by default whereas in other languages it will round off towards 0
print(5 / 2)  # 2.5

# To round off, use double slash for round down
print(5 // 2)  # 2

# CAREFUL: most languages round towards 0 by default so negative numbers will round down like in java it would round down -1.5 to -1
print(-3 // 2)  # -2

# use decimal division and then convert to int, you will get the same result as other languages, it will automatically round down
print(int(-3 / 2))


# Modular is similar to other languages. It givers remainder
print(10 % 3)

# Modular is different for negative values, other languages gives 1 but python gives 2
print(-10 % 3)

# To overcome above issue and consistent with other languages
print(math.fmod(-10, 3))

# More math functions
print(math.floor(3/2))
print(math.ceil(3/2))
print(math.sqrt(2))
print(math.pow(2, 3))

# Max/ Min Integer-
float("inf")  # Max
float("-inf")  # Min

# Python numbers are infinite so they never overflow
print(math.pow(2, 200))

# But still less than infinity
print(math.pow(2, 200) < float("inf"))

# ---------------ARRAYS OR LISTS----------------------
# ARRAYS
# Arrays (called lists in python)

# initializing
arr = [1, 2, 3]
print(arr)

# arrays in python are dynamic by default and can be used as a stack
arr.append(4)
arr.append(5)
print(arr)

arr.pop()
print(arr)

# insert an element at index n. arr.insert(index where to insert, element to be inserted)
arr.insert(2, 7)
print(arr)

# NOTE: PUSH, POP, INSERT IS AN BIG O(N) OPERATION

# WHEREAS READ THE VALUE FROM INDEX, RE-ASSIGNING IT IS A CONSTANT OPERATION
arr[0] = 0
arr[1] = 1
print(arr)


# initializing an array of size n with the default value=1
n = 10
arr = [1]*n
print(arr)
print(len(arr))


# CAREFUL: -1 is not out of bounds in python
# it returns the last value
arr = [1, 2, 3]
print(arr[-1])

# indexing -2 is the second last value etc.
print(arr[-2])

# Sublist (Slicing)
arr = [1, 2, 3, 4, 5, 6]
print(arr[1:4])  # returns arr from index 1 to 3 (less than 4)
print(arr[0:4])  # [1,2,3,4]

# Unpacking
a, b, c = [1, 2, 3]
print(a, b, c)

# Be careful in unpacking: no of variables should be equal to no of elements
# a, b = [1, 2, 3]  # this will not work

# looping through array
nums = [1, 2, 3]

# using index
for i in range(len(nums)):
    print(nums[i])
 # type: ignore

# without index
for n in nums:
    print(n)

# if you need index and value
for i, n in enumerate(nums):
    print(i, n)

# If we want to iterate multiple arrays simultaneously, then we can do it with unpacking, with helper function called zip.
# it will combine both arrays and combine them into pairs and unpack those values from both arrays
nums1 = [1, 2, 3]
nums2 = [4, 5, 6]
for n1, n2 in zip(nums1, nums2):
    print(n1, n2)

# reversing an array
nums = [1, 2, 3]
nums.reverse()
print(nums)

# ---------------SORTING----------------------

# Sorting
arr = [5, 4, 7, 3, 8]
arr.sort()  # by default sorting will happen in ascending order
print(arr)

# if we want to sort in desc order
arr.sort(reverse=True)
print(arr)

# arrays of string sorted based on alphabetical order
arr = ["Bob", "Alice", "Jane", "Doe"]
arr.sort()
print(arr)

# Custom sort (based on length of string in ascending order)
arr.sort(key=lambda x: len(x))
print(arr)

# another short ways of initializing arrays(lists)-Lists comprehension
# it will go through every value in range(5) and then add it to the array
arr = [i for i in range(5)]
print(arr)
arr = [i+i for i in range(5)]
print(arr)

# ---------------2-D ARRAYS----------------------

# 2-D Array
arr = [[0]*4 for i in range(4)]
print(arr)

# ---------------STRINGS----------------------
# Strings
s = "abc"
print(s)
# slicing in strings
print(s[0:2])
# type: ignore
# Strings are immutable
# s[0] = "A" this will not work

# This creates a new string
s += "def"
print(s)

# valid number strings can be converted to int
print(int("100") + int("100"))

# Also number can be converted to strings
print(str(100) + str(100))

# n case you need the ASCII value of char
print(ord("a"))
print(ord("A"))

# combine the list of strings (with an empty string delimitor)
strings = ["ab", "cd", "ef"]
print("".join(strings))

# ---------------QUEUE----------------------

# QUEUE (double ended queues)
# all below operations are constant time unlike stacks

queue = deque()

# append right side
queue.append(1)
queue.append(2)
queue.append(3)
print(queue)

# append left side
queue.appendleft(0)
print(queue)

# pop from right side
queue.pop()
print(queue)

# pop from left side
queue.popleft()
print(queue)

# ---------------HASHSETS----------------------

# Hashsets (add, remove and search values in constant time)
# Note: there can't be any duplicates in hashset

mySet = set()

# add values
mySet.add(1)
mySet.add(2)
print(mySet)
print(len(mySet))

# Search operation with hashset using "in" operator
print(1 in mySet)
print(2 in mySet)
print(3 in mySet)

# remove values
mySet.remove(2)
print(mySet)

# initializing set with lists
print(set([1, 2, 3, 4, 5]))

# Set comprehension (like we did in lists)
mySet = {i for i in range(5)}
print(mySet)

# ---------------HASHMAP----------------------

# HASHMAP (Dictionary)-store in key-value pair.
# value is mapped to a key. Like Hashsets these don't accept duplicates

# initializing the map
myMap = {}
myMap["alice"] = 12
myMap["bob"] = 34
print(myMap)

# len of map will give the no of keys in hashmap
print(len(myMap))

# we can modify the value mapped to a key
myMap["alice"] = 10
print(myMap["alice"])  # this gives value of the key

# Search, remove operations are in constant time
# check if key exists in Hashmap
print("alice" in myMap)

# remove key form hashset
myMap.pop("alice")
print(myMap)

# OR we can also initialize like this in key:val pairs
myMap = {"alice": 90, "bob": 70}
print(myMap)

# Hashmap/Dict comprehension
myMap = {i: i*10 for i in range(5)}
print(myMap)

# looping through maps
# this will iterate through every key and print value of that key
myMap = {"alice": 90, "bob": 70}
for key in myMap:
    print(key, myMap[key])

# iterate directly through values, if we don't need keys
for val in myMap.values():
    print(val)

# alternative of looping method 1
for key, val in myMap.items():
    print(key, val)

# ---------------TUPLES----------------------

# TUPLES (like arrays/lists but immutable)
tup = (1, 2, 3)
print(tup)
print(tup[0])
print(tup[-1])

# NOTE: tup[0] = 1 we can't modify it

# tuples can be used as a key for hashmap and hashsets
myMap = {(1, 2): "row 1"}
print(myMap[(1, 2)])

# tuples in hashset
mySet = set()
mySet.add((1, 2, 3))

# searching for tuple in hashset
print((1, 2, 3) in mySet)

# reason for using tuples in hashset,hashmap: Lists/arrays can't be keys.
# myMap[[1,2]] will not work

# Lists can't be keys
#  myMap[[3,4]] = 5 This won't work

# ---------------HEAPS----------------------

# HEAPS (by default, they are minHeaps)
# Data Structure used to find min/max from a set of values frequently.
# Under the hood, they are implemented with arrays

# MINHEAP
minHeap = []
# push values to created minHeap
heapq.heappush(minHeap, 12)
heapq.heappush(minHeap, 10)
heapq.heappush(minHeap, 1)
heapq.heappush(minHeap, 23)

# min values is at index[0]
print(minHeap)

# length of min Heap
print(len(minHeap))

# looping through heaps
while len(minHeap):
    # popping values from minHeap, values are printed from smallest to largest
    print(heapq.heappop(minHeap))

# MaxHEAP

# No Max heaps by default
# push negative values and multiply by -1(negative * negative = positive]) when push, pop, print.


maxHeap = []
heapq.heappush(maxHeap, -1)
heapq.heappush(maxHeap, -12)
heapq.heappush(maxHeap, -4)
heapq.heappush(maxHeap, -88)

# Max value is always at index 0
print(-1 * maxHeap[0])

# looping through heaps
while len(maxHeap):
    # popping values from maxHeap, values are printed from Largest to smallest
    print(-1 * heapq.heappop(maxHeap))

# Build heap from initial values in linear time using heapify
arr = [2, 1, 44, 22, 77, 90, 123]
# push values into heap
heapq.heapify(arr)

# looping/printing through values
while arr:
    # printed from smallest to largest because by default heaps in python are minHeaps
    print(heapq.heappop(arr))


# -----------------FUNCTIONS-----------------------

def myFunc(n, m):
    return n * m


print(myFunc(10, 2))

# Nested/inner Functions have access to outer problems


def outer(a, b):
    c = 5

    def inner():
        return a+b+c

    return inner()


print(outer(2, 3))

# Can modify objects but not reassign
# unless using nonlocal keyword


def double(arr, val):
    def helper():
        # Modifying array works
        for i, n in enumerate(arr):
            arr[i] *= 2

        # will only modify val in the helper scope
        # val *= 2

        # this will modify val outside helper scope
        nonlocal val
        val *= 2
    helper()
    print(arr, val)


nums = [1, 2]
val = 3
double(nums, val)

# ---------------CLASSES-------------------


class MyClass:
    # Constructor
    def __init__(self, nums):
        # Self is passed to every method of class, it's like "this" keyword in other languages
        # Create member variables (eg- self.nums)
        self.nums = nums
        self.size = len(nums)

    # self key word required as param
    def getLength(self):
        return self.size

    def getDoubleLength(self):
        return 2 * self.getLength()


myObj = MyClass([1, 2, 3])
print(myObj.getLength())
print(myObj.getDoubleLength())
