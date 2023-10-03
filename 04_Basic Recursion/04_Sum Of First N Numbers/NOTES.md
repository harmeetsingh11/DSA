## Recursive Approach

1. In the problem statement, we have to print elements from N to 1.
2. Let's understand the logic:
```py
# # n = 5
# 1 + 2 + 3 + 4 + 5
# TRUST THE FUNCTION-sum_n(n-1) will give sum of 1 to n-1 that 1 + 2 + 3 + 4
# Then add nth element that 5 to above sum of n-1 elements
# return 1 + 2 + 3 + .. (n-1) + n

# sum(5) = sum(4) + 5
# sum(4) = sum(3) + 4
# sum(3) = sum(2) + 3
# sum(2) = sum(1) + 2
# sum(1) = sum(0) + 1 
# sum(0) stop here return 0 (sum(0) = 0): base case (n becomes 0)
def sum_n(n: int):
    if n == 0:
        return 0
    else:
        return sum_n(n-1) + n 

```

### Time Complexity

The time complexity of this code is **O(n)**, where `n` is the input value passed to the `sumFirstNrecursive` function.

In the `sumFirstNrecursive` function, the recursion is used to sum the numbers from `n` down to 1. There are exactly `n` recursive calls made. Each recursive call involves constant time operations (addition and comparisons), and the total number of recursive calls is directly proportional to `n`.

Therefore, the overall time complexity is linear in terms of `n`, making it **O(n)**.

### Space Complexity

The space complexity of this code is **O(n)**, where `n` is the input value passed to the `sumFirstNrecursive` function.

In the recursive function `sumFirstNrecursive`, there are 'n' recursive calls placed on the call stack. Each call has its own set of local variables, including the `n` parameter. Therefore, the space required on the call stack is proportional to `n`.

Additionally, since the code uses recursion, it creates a new stack frame for each recursive call, consuming space on the call stack. This space is linear in terms of `n`, which contributes to the overall space complexity.

In summary, the code has a time complexity of O(n) and a space complexity of O(n) due to the linear number of recursive calls and the space required on the call stack.

## Iterative Approach (Optimal)

- We know that the formula to calculate the sum of the first ‘n’ natural numbers is `(n) * (n + 1) / 2`. 
- So, what we will do is we will put the given `n` in this formula.
-  Finally, we will return the answer.
 

### Time Complexity
We are calculating the answer in constant operation.
 
Hence, the time complexity is **O(1)**.

### Space Complexity
We are using a variable to keep the answer.

Hence, the space complexity is **O(1)**.


