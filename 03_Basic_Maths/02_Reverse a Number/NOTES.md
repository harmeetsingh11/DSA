## Approach


1. Initialize a variable `revNum` to 0. This variable will be used to store the reversed number.

2. Enter a `while` loop that continues as long as `n` is greater than 0. This loop is used to process each digit of the input number from right to left.

3. Inside the loop, the code does the following for each iteration:

   - Extract the last digit of `n` using the modulo operation (`n % 10`). This operation effectively isolates the rightmost digit.

   - Update `n` by performing integer division by 10 (`n //= 10`). This operation removes the rightmost digit, preparing `n` for the next iteration.

   - To reverse the digits, the code constructs the reversed number `revNum` by multiplying its current value by 10 and then adding the extracted `last_digit`. This operation effectively appends the extracted digit to the reversed number.

   - For example, if `n` were 5356, in the first iteration, the last digit extracted would be 6. In the second iteration, the code would update `revNum` from 6 to 60 (6 * 10) and then add 5, resulting in 65.

4. Repeat these steps until all digits of the original number `n` have been processed.

5. Finally, when the loop completes, the function returns the value of `revNum`, which represents the reversed number with its digits reversed.


## Time Complexity Analysis

The time complexity of the given code is O(log(n)), where `n` is the input integer.

Here's the explanation:

1. In each iteration of the `while` loop, one digit is extracted from `n` using the modulo operation (`n % 10`).

2. After extracting the last digit, integer division is performed (`n //= 10`) to remove the last digit from `n`.

3. The extracted digit is then appended to the `revNum` by multiplying the current `revNum` by 10 and adding the extracted digit (`revNum = (revNum * 10) + last_digit`).

Since each iteration of the loop reduces the value of `n` by a factor of 10 (due to integer division), the number of iterations required is proportional to the number of digits in `n`.

For an integer with `d` digits, the loop will run approximately `d` times until `n` becomes zero.

Therefore, the time complexity of the code is **$O(log(n))$**, where `n` is the input integer.



## Space Complexity Analysis


1. **Initialization**: The code initializes a single integer variable `revNum` to store the reversed number. This variable does not depend on the input size `n`, so its space complexity is constant (O(1)).

2. **Loop Variables**: 
   - The code uses a loop to iterate through the digits of `n`. Inside the loop, it creates a few temporary variables:
     - `last_digit`: To hold the value of the last digit extracted in each iteration. This variable is also an integer and takes constant space (O(1)).
     - The loop does not create any new data structures or allocate memory based on the input size. Instead, it uses these variables to perform operations.

### Space Complexity:

The space complexity of this code is primarily determined by the constant amount of memory used for the variables `revNum` and `last_digit`, both of which are integers. 

Therefore, the space complexity is **O(1)**, indicating that the memory requirements of the algorithm do not grow with the size of the input `n`. The code uses a fixed amount of memory regardless of the value of `n`.

In summary, the space complexity of this code is constant, denoted as **O(1)**.
