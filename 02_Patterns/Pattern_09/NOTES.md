## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity

1. **Upper Triangle Loop:**
    - The outer loop runs N times, where N is the input parameter.
    - The first inner loop runs `(N - i)` times, where i ranges from 1 to N. So, on average, it runs `(N/2)` times.
    - The second inner loop runs `2*i` times, where i ranges from 1 to N. So, on average, it runs `(2*N/2)` times.
    -The third inner loop also runs `(N/2)` times on average.

    The total number of iterations for the upper triangle part is roughly proportional to `(N/2) * (N + 2*N + N)`, which simplifies to `2.5*N^2`.

2. **Lower Triangle Loop:**
    - Similar to the upper triangle loop, the outer loop runs N times.
    - The first inner loop runs `(i - 1)` times, where i ranges from 1 to N. So, on average, it runs `(N/2)` times.
    - The second inner loop runs `(2*N - (2*i - 1))` times, where i ranges from 1 to N. So, on average, it runs `(2*N - N)` times.
    - The third inner loop also runs `(N/2)` times on average.

    The total number of iterations for the lower triangle part is roughly proportional to `(N/2) * (N + N)`, which simplifies to `N^2`.

Combining both the upper and lower triangle parts, the total number of iterations is roughly proportional to `2.5*N^2 + N^2`, which simplifies to `3.5*N^2`.

Therefore, the time complexity of the printDiamond method is **$O(N^2)$**, where N is the input parameter representing the size of the triangle.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

