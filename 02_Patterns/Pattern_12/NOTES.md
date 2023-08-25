## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. **Outer Loop (i)**: The outer loop runs from 1 to N (inclusive), leading to N iterations.
2. **First Inner Loop (j)**: This loop runs from 1 to i (inclusive). In the worst case, it runs i times, where i reaches its maximum value of N in the last iteration of the outer loop.
3. **Second Inner Loop (j)**: This loop runs from 1 to (2N - 2i) + 1. The value of `(2N - 2i) + 1` represents the number of spaces to be printed in each row. At the beginning, when i is small, this value is larger, but it decreases as i increases. In the worst case, the maximum number of iterations occurs when i is 1 (first iteration of the outer loop). Therefore, this loop iterates `2*N - 1` times in the worst case.
4. **Third Inner Loop (j)**: Similar to the first inner loop, it runs up to i times, with i being the current value of the outer loop variable. Just like the first inner loop, it runs i times in the worst case.

Let's calculate the total number of iterations:

- Outer Loop: `N` iterations
- First Inner Loop: `1 + 2 + 3 + ... + N` iterations (sum of integers from 1 to N)
- Second Inner Loop: `(2*N - 1)` iterations
- Third Inner Loop: `1 + 2 + 3 + ... + N` iterations (same as the First Inner Loop)

The sum of integers from 1 to N can be represented as `N*(N+1)/2`.

So, the total number of iterations can be approximated as follows:

`N + N*(N+1)/2 + (2N - 1) + N(N+1)/2`

Simplifying this gives:

`N^2 + 3*N`

In big O notation, the dominant term is N^2, so the time complexity of the program is **$O(N^2)$**.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

