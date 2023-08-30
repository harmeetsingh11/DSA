## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the "*" inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. The outer loop iterates `2 * N - 1` times (it runs N times for the first half of rows and `N - 1` times for the second half).
2. Inside the outer loop, there are three parts that involve nested loops.
    - The first inner loop `(for j in range(1, stars+1))` runs i times where i ranges from `1 to 2 * N - 1`.
    - The second inner loop `(for j in range(1, spaces+1))` runs `2 * N - 2 * i` times for each i.
    - The third inner loop `(for j in range(1, stars+1))` also runs i times.

When we put it all together, for each row:
- The time spent in the first inner loop is roughly proportional to `i`.
- The time spent in the second inner loop is roughly proportional to `N - i`.
- The time spent in the third inner loop is roughly proportional to `i`.

Considering these factors, the code's overall time complexity is quadratic, specifically **$O(N^2)$**, where N represents the number of rows or lines in the triangle.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

