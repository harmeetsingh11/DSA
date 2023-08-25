## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. **Outer Loop (i)**: The outer loop runs N times, where N is the input parameter.
2. **Inner Loop (j)**: This loop runs from the ASCII value of `'A'` to the ASCII value of `'A' + i - 1`. The maximum number of iterations for each iteration of the outer loop occurs when i is at its maximum value, which is N. In this case, the inner loop will iterate from `'A'` to `'A' + N - 1`, leading to N iterations.

Now, let's calculate the total number of iterations of the inner loop across all iterations of the outer loop:

`1 + 2 + 3 + ... + N`

This is the sum of the first `N` natural numbers, which can be represented as `N*(N+1)/2`.

Therefore, the overall time complexity of the program, using the frequency count method, is `O(N*(N+1)/2)`, which simplifies to **$O(N^2)$** in big O notation.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

