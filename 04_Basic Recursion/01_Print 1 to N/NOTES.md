## Approach

1. In the problem statement, we have to print elements from 1 to n.
2. Let's understand the logic:
```py
# let take n = 5
# recursion: TRUST func will print from 1 to 4
# then print one more time (nth element)
# f(n) = f(n-1) + 1

# n = 5
# f(5) = f(4) + 1
# f(4) = f(3) + 1
# f(3) = f(2) + 1
# f(2) = f(1) + 1
# f(1) = f(0) + 1 base case: stop here because n = 0
def recursiveFunction(n:int):
    # base case: if n reaches 0, then return
    if n==0:
        return
    else:
        recursiveFunction(n-1) # TRUST it will print from 1 to n-1

        print(n) # n-1 elements are printed above, now print one more time (nth element)

```

## Time Complexity

The time complexity of this code is **O(n)**, where n is the input value passed to the `printNos` function.

In the `recursiveFunction`, the function is called recursively with a decremented value `x-1` until `x` reaches 0. This results in exactly `n` recursive calls. Since each recursive call involves constant time operations (appending to the `ans` list and comparisons), the overall time complexity is linear in terms of `n`.

## Space Complexity

The space complexity of this code is also **O(n)**, where n is the input value passed to the `printNos` function.

In the `printNos` function, an empty list `ans` is declared, which has a constant space requirement (O(1)). However, during the recursive calls to `recursiveFunction`, elements are appended to the `ans` list. In the worst case, when `x` is equal to the input `n`, the `ans` list will contain `n` elements. Therefore, the space complexity is linear in terms of `n`, resulting in O(n) space complexity.
