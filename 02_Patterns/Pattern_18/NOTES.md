## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the character inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. **Outer Loop (i)**: The outer loop runs N times, where N is the input parameter.
2. **Inner Loop (j)**: This loop runs from `1 to i`, where i is the current value of the outer loop variable. In the worst case, when i is at its maximum value of N, the inner loop will run for N iterations.

Inside the inner loop:

- The operation `ord('A') + (N - i)` is constant time, as it calculates a value based on the current value of i and doesn't depend on the total number of elements N.
- Printing `chr(ch)` and incrementing `ch` both are constant-time operations.

The overall time complexity of the program is determined by the nested loops:

- The outer loop runs N times.
- The inner loop runs at most N times (when i is at its maximum value).
  
The total number of operations is proportional to $N * N$, which simplifies to $N^2$

Therefore, the time complexity of the program is **$O(N^2)$**.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

