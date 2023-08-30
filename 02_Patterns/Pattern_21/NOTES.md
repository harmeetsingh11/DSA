## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the "*" inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. The outer loop runs for N iterations `(from i = 1 to N)`.
2. Inside the outer loop, there is an inner loop that also runs for N iterations `(from j = 1 to N)`.
3. Within the inner loop, there are a few constant-time operations involving comparisons and character printing.

Since both the outer and inner loops iterate for `N` times each, the total number of operations in terms of input size `N` can be approximated as:

`Total operations = N * N = N^2`

The time complexity of the given code is **$O(N^2)$**, where N is the input size (number of rows/columns). The nested loops contribute to the quadratic time complexity.


### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

