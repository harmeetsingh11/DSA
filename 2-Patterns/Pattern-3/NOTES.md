## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
### Time Complexity
The time complexity can be estimated by analyzing the number of iterations performed by the nested loops. 

The inner loop runs a maximum of `N` times in the first iteration of the outer loop, then `N-1` times in the second iteration, and so on. Therefore, the total number of iterations for the inner loop is:

$1 + 2 + 3 + ... + N-1 + N$

This is an arithmetic series whose sum is given by the formula: $N * (N + 1) / 2$.

Hence, the time complexity of the nested loops is $O(N^2)$, quadratic in terms of N.

where N is the number of rows/lines (horizontally).

### Space Complexity
The space complexity of the program is determined by the amount of memory required to store the variables used in the program. 

In this case, the program only uses a few integer variables `(N, i, j)`, and their memory usage is constant regardless of the input value `N`.

Therefore, the space complexity of the program is $O(1)$, constant space..