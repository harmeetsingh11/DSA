## Approach
1. Initialize two variables `count` and `temp` to zero. count will be used to keep track of the count of digits that evenly divide n, and `temp` will be a temporary copy of n for later reference.

2. Enter a while loop that continues as long as `n` is greater than zero. This loop will extract and examine each digit of the input number `n` one by one.

3. Inside the loop, calculate the `last_digit` by taking the remainder of n when divided by 10. This operation effectively extracts the rightmost digit of `n`.

4. Check if the `last_digit` is not equal to 0. This condition is used to filter out digits that are not zero because division by zero is not allowed. If `last_digit` is zero, it is skipped.

5. If `last_digit` is not zero, check if `temp` is evenly divisible by `last_digit` by using the modulo operator `(temp % last_digit == 0)`. If this condition is true, it means that the `last_digit` evenly divides `n`, so the `count` variable is incremented by 1.

6. Update `n` by performing integer division by 10 `(n //= 10)`. This operation removes the rightmost digit from `n`, preparing it for the next iteration of the loop.

7. Repeat steps 3-6 until all digits of the original number have been processed.

Finally, when the loop completes, the function returns the value of the `count` variable, which represents the number of digits in the original number `n` that evenly divide it.

### Time Complexity

Let's analyze the time complexity of the countDigits function.

1. The while loop iterates through each digit of `n` as long as `n` is greater than 0. This loop runs for each digit of `n`.

2. Inside the loop, you perform constant time operations:

    - Computing `last_digit = n % 10`: This operation takes constant time as it involves a modulo operation and assignment.
    - Checking if `last_digit` is not equal to 0: This is a constant time comparison.
    - Checking if `temp % last_digit == 0`: Another constant time operation.
    - Updating `count` by incrementing it if the condition is true: Constant time.
  
3. After these constant-time operations, you perform `n = n / 10`, which effectively removes the last digit of `n` in each iteration.

Since you are processing each digit of `n` once in the while loop, the number of iterations is determined by the number of digits in `n`. In base-10 notation, the number of digits in `n` is roughly proportional to $log₁₀(n)$.

Therefore, the overall time complexity of this function can be expressed as **$O(log₁₀(n))$**, where $log₁₀$ represents the base-10 logarithm. 

However, when we write time complexity, we typically use base-2 logarithms. So, you can also express it as **$O(log₂(n))$**, where log₂ represents the base-2 logarithm.

In summary, the time complexity of the countDigits function is $O(log n)$, where `n` is the input integer.

### Space Complexity

The space complexity of the `countDigits` function is **O(1)**, indicating that it uses a constant amount of memory regardless of the input size 'n'. Here's the breakdown of the variables contributing to space complexity:

1. `count` (int): A variable used to store the count of digits that evenly divide 'n'. It occupies a constant amount of space, as it is not dependent on 'n'. **O(1)**.

2. `temp` (int): A variable used to store a copy of the input 'n'. It also occupies a constant amount of space, as it does not depend on 'n'. **O(1)**.
   
3.  `last_digit` (int): A variable used to store the last digit extracted from 'n' in each iteration. Like the other variables, it occupies a constant amount of space. **O(1)**.

In summary, the space complexity of the `countDigits` function is **O(1)** because the memory requirements of the variables are fixed and do not depend on the input size 'n'. It uses a constant amount of memory, regardless of the magnitude of 'n'.