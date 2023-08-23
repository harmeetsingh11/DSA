## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity

1. **First Nested Loop (Spaces)**:

   - This loop runs i-1 times in each iteration of the outer loop, where i ranges from 1 to N.
   - The sum of the iterations for this loop across all iterations of the outer loop is: `1 + 2 + 3 + ... + N-1 = (N-1) * N / 2`

    So, the total number of iterations for this loop is approximately O(N^2).

2. **Second Nested Loop (Stars)**:
   - This loop runs (2*N - (2*i-1)) + 1 times in each iteration of the outer loop, where i ranges from 1 to N.
   - The sum of the iterations for this loop across all iterations of the outer loop is: `(2N - 1) + (2N - 3) + ... + 1 = N^2`

    So, the total number of iterations for this loop is O(N^2).

3. **Third Nested Loop (Spaces)**:

   - This loop runs i-1 times in each iteration of the outer loop, where i ranges from 1 to N.
   - The sum of the iterations for this loop across all iterations of the outer loop is: `1 + 2 + 3 + ... + N-1 = (N-1) * N / 2`

    So, the total number of iterations for this loop is approximately O(N^2).


Now, considering all these loops, the overall time complexity of the code is approximately O(N^2) due to the dominant loops. The constant factors and lower-order terms are dropped in the big O notation analysis.

So, the time complexity is **$O(N^2)$**.
where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

