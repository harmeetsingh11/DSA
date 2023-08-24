## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. The outer loop runs `N` times, where `N` is the input to the function.
2. For each value of `i` from `1` to `N`, the inner loop runs `i` times.

Inside the inner loop, the operations are constant time operations: assigning values to `start`, printing, and toggling start. These operations do not depend on the input size `N`.

So, the time complexity of this program can be approximated by considering the number of iterations of the inner loop:

`1 + 2 + 3 + ... + N`

This is an arithmetic series, and the sum of the first `N` positive integers can be computed using the formula: 

`sum = N * (N + 1) / 2`.

Therefore, the time complexity of the program is **$O(N^2)$**, where N is the input to the function.

where N is the number of rows/lines (horizontally).

### Space Complexity

1. The main factor contributing to space complexity is the storage of variables that hold temporary values or data that changes with the input size.
2. The `i` variable takes constant space as it's just an integer index for the outer loop.
3. The `start` variable is used to store either 0 or 1, which is constant space.
4. The `j` variable is similar to i, just an integer index for the inner loop.

Overall, the space complexity of the program remains constant regardless of the input size `N`. 

Therefore, the space complexity is **$O(1)$**, which means it uses a constant amount of memory.
