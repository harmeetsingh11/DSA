## Approach



**Input**
- The code takes an integer input `n` from the user.

**Initialization**
- It initializes a variable `given_num` with the value of `n`. This variable is used to store the original value of `n` because `n` will be modified during the process.

**`check_palindrome` Function**
- The `check_palindrome` function is defined to determine whether a number is a palindrome.
- It initializes a variable `rev_num` to 0. This variable will be used to store the reverse of `n`.

**Reversing `n`**
- The code enters a `while` loop that continues as long as `n` is greater than 0.
- In each iteration of the loop:
  - It calculates the last digit of `n` using the modulo operation (`n % 10`) and stores it in the `last_digit` variable.
  - It updates `n` by removing the last digit using integer division (`n //= 10`).
  - It updates `rev_num` by appending the `last_digit` to the right of the current `rev_num`. This is done by multiplying `rev_num` by 10 and adding `last_digit` to it (`rev_num = (rev_num * 10) + last_digit`).
  - This process effectively reverses the digits of `n` and stores the result in `rev_num`.

**Checking for Palindrome**
- After the loop completes, `rev_num` contains the reversed value of the original number `n`.
- It then checks whether `rev_num` is equal to the `given_num` (the original number) using the equality operator (`rev_num == given_num`).
- The result of this comparison is a Boolean value (`True` if `n` is a palindrome, `False` otherwise).
- To match the expected output format mentioned in the problem statement, the Boolean value is first converted to a string using `str()`, and then it is converted to lowercase using `.lower()`.

**Printing the Result**
- Finally, the code prints the result of the `check_palindrome` function, which will be either "true" (if `n` is a palindrome) or "false" (if `n` is not a palindrome).



## Time Complexity Analysis

The provided code is designed to check whether an input integer `n` is a palindrome by reversing its digits. Let's analyze its time complexity:

1. Input: The code starts by taking an integer input `n` from the user, which is a constant-time operation and does not affect the overall time complexity.

2. `check_palindrome` Function:
   - The `check_palindrome` function contains a `while` loop for reversing the digits of the input integer `n`.
   - In each iteration of the loop, the following operations are performed:
     - Calculation of the last digit of `n` using the modulo operation (`n % 10`).
     - Integer division to remove the last digit from `n` (`n //= 10`).
     - Update of `rev_num` by appending the `last_digit` to the right of the current `rev_num` using multiplication and addition (`rev_num = (rev_num * 10) + last_digit`).

3. The number of iterations in the `while` loop depends on the number of digits in the input integer `n`. For an integer with `d` digits, the loop will run approximately `d` times until `n` becomes zero.

4. Therefore, the time complexity of the code is proportional to the number of digits in `n`, which can be represented as **$O(log10(n))$**.

In summary, the time complexity of the given code is **$O(log10(n))$**, where `n` is the input integer. This reflects the logarithmic growth in the number of iterations as the input integer's digits increase in magnitude.




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
