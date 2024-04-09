## Optimal Approach

1. A prime number is a natural number that is only divisible by 1 and by itself. Examples 1 2 3 5 7 11 13 17 19 …
2. Using a for loop for checking if the number is divisible by a number from 2 to its square root.
3. Running the for loop from 2 to the square root of the number.
4. And then checking if the number is divisible by the numbers from 2 to its square root.
5. Then, If the remainder is zero, that means it is divisible and hence not a prime number.
6. If the loop runs till square root and none of the numbers divided it completely. So it is the Prime number.





## Time Complexity Analysis

1. The code runs a loop from `i = 1` to `sqrt(n)` in the `for` loop.
2. Within the loop, it performs a constant amount of work for each iteration: checking if `n % i == 0` and potentially incrementing the `count` variable.
3. Therefore, the time complexity of this code is **$O(sqrt(n))$**.


## Space Complexity Analysis

1. The space complexity is determined by the memory used for variables.
2. The code uses a few integer variables (`count`, `i`, and `n`), which occupy a constant amount of memory space.
3. Thus, the space complexity is **O(1)**, indicating constant space usage.








