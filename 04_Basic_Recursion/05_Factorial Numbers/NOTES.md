## Approach

1. In the problem statement, we have to find the Factorial of number `n`.
2. Let's understand the logic:
```py
# for n = 5
# fact(4) = 4*3*2*1 = 4*fact(3)
# fact(3) = 3*2*1 = 3*fact(2)
# fact(2) = 2*1 = 2*fact(1)
# fact(1) = 1 = (n==1) return 1 stops here (BASE CASE)
# TRUST THE FUNCTION fact(n-1) will give factorial (3! here n = 4)
# fact(n) = n*fact(n-1)
# fact(4) = fact(3) * 4

def factorial(n: int):
    # base case
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
```
## Time Complexity

- The time complexity of this code is **O(n)**, where n is the input number. 
- This is because the function `factorialNumbers` calls itself recursively exactly `n` times. Each recursive call involves a constant amount of work (multiplying by `n`), and there are `n` such calls. 
- Therefore, the time complexity is linear with respect to the input size `n`.

## Space Complexity
- The space complexity is also **O(n)** in this case. 
- This is because for each recursive call, a new stack frame is created to store the function's local variables, including the argument `n`.
-  Since there are `n` recursive calls in the worst case (when `n` is the maximum value), the space required for the call stack also grows linearly with the input size `n`. 
-  Therefore, the space complexity is **O(n)**.

It's important to note that this code could potentially lead to a stack overflow error for very large values of `n` due to the recursive nature of the function. Using an iterative approach or memoization can be more efficient and avoid stack overflow issues for large inputs.