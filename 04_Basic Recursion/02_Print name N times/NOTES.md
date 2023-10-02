## Approach

1. In the problem statement, we have to print name n times
2. Let's understand the logic:
```py
# let take n = 5
# recursion: TRUST func will print n-1 i.e 4 times
# then print one more time 
# f(n) = f(n-1) + 1

# n = 5
# f(5) = f(4) + 1
# f(4) = f(3) + 1
# f(3) = f(2) + 1
# f(2) = f(1) + 1
# f(1) = f(0) + 1 base case: stop here because n = 0
def printNtimes(n:int):
    # base case: if n reaches 0, then return
    if n==0:
        return
    else:
        printNtimes(n-1) # TRUST it will print n-1 times

        print("Coding Ninjas", end=" ") # n-1 times printed above, now print one more time

```

## Time Complexity

The time complexity of this code is **O(n)**, where n is the input value passed to the `printNtimes` function.

In the `printNtimes` function, there is a recursive call `printNtimes(n-1)`. This results in exactly `n` recursive calls, with each call decrementing `n` by 1 until it reaches the base case `n == 0`. Each recursive call also involves a print statement, which is a constant-time operation.

Therefore, the overall time complexity is linear in terms of `n`, making it **O(n)**.

## Space Complexity

The space complexity of this code is **O(n)**, where n is the input value passed to the `printNtimes` function.

In the recursive function `printNtimes`, there are `n` recursive calls placed on the call stack. Each call has its own set of local variables, including the `n` parameter. Therefore, the space required on the call stack is proportional to `n`.

Additionally, since the code prints "Coding Ninjas" in each recursive call, it consumes additional space on the stack for the print operation. However, this space is constant relative to the input size and doesn't affect the overall space complexity.