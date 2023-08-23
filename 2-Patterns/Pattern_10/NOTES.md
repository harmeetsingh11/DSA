## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. The outer loop runs from `i = 1` to `i = 2*N - 1`, which means it iterates a total of `2*N - 1` times.
2. Inside the outer loop, there is an inner loop that iterates from j = 1 to j = stars, where stars is determined by the current value of i.
    - For the first half of the loop `(i <= N)`, stars is equal to i.
    - For the second half of the loop `(i > N)`, stars is equal to `2*N - i`.
  
Now let's analyze the time complexity of the inner loop:

- For the first half of the loop `(i <= N)`, the maximum value of stars is N.
- For the second half of the loop `(i > N)`, the maximum value of stars is also N.

So, regardless of whether i is less than or greater than N, the inner loop runs at most N times.

Given that the outer loop iterates `2*N - 1` times and the inner loop runs at most N times for each iteration of the outer loop, the total number of iterations for the inner loop is roughly bounded by `(2*N - 1) * N`, which simplifies to `O(N^2)`.

Therefore, the overall time complexity of the program is **$O(N^2)$**, where N is the input value.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

