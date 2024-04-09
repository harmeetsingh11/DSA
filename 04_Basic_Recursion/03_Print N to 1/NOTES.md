## Approach

1. In the problem statement, we have to print elements from N to 1.
2. Let's understand the logic:
```py
# let take n = 5
# First, print one element that is 5
# recursion: TRUST func will print n-1 elements from 4 to 1
# f(n) = 1 + f(n-1)

# n = 5
# f(5) = 1 + f(4) 
# f(4) = 1 + f(3) 
# f(3) = 1 + f(2) 
# f(2) = 1 + f(1) 
# f(1) = 1 + f(0)  base case: stop here because n = 0

def recursiveFunction(n:int):
    # base case: if n reaches 0, then return
    if n==0:
        return
    else:
        print(n) # print first element - 5 (for n = 5)
        
        recursiveFunction(n-1) # TRUST it will print n-1 elements from n-1 to 1


```

## Time Complexity

The time complexity of this code is **O(n)**, where n is the input value passed to the `printNos` function.

In the `recursiveFunction`, the function is called recursively with a decremented value `x-1` until `x` reaches the base case `x == 0`. This results in exactly `n` recursive calls. Each recursive call involves constant time operations (appending to the `ans` list and comparisons), and the total number of recursive calls is directly proportional to `n`.

Therefore, the overall time complexity is linear in terms of `n`, making it **O(n)**.

## Space Complexity

The space complexity of this code is also **O(n)**, where n is the input value passed to the `printNos` function.

In the recursive function `recursiveFunction`, there are `n` recursive calls placed on the call stack. Each call has its own set of local variables, including the `x` parameter and the `ans` list. Therefore, the space required on the call stack is proportional to `n`.

Additionally, since the code appends the elements to the `ans` list, it consumes additional space on the stack for the append operation. However, this space is constant relative to the input size and doesn't affect the overall space complexity significantly.