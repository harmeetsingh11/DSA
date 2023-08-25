## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the number inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. **Outer Loop (i)**: The outer loop runs from 1 to N (inclusive), which results in N iterations.

2. **Inner Loop (j)**: This loop runs from 1 to i (inclusive), where i is the current value of the outer loop variable. In the worst case, this loop runs up to N times (when i = N).

For each iteration of the inner loop, a constant number of operations are performed: printing a number and incrementing the `num` variable.

Since the number of iterations in the inner loop is determined by the value of the outer loop variable, and the operations within the inner loop are constant time, the total number of operations can be approximated by the sum of the first N natural numbers: `1 + 2 + 3 + ... + N`. This sum is known to be `N*(N+1)/2`.

Therefore, the time complexity of the program is `O(N*(N+1)/2)`, which simplifies to **$O(N^2)$** in big O notation.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

