## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the character inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. **Outer Loop (i)**: The outer loop runs N times, where N is the input parameter.
2. **First Inner Loop (j)**: This loop runs from `1 to N-i`, where i is the current value of the outer loop variable. 
3. **Second Inner Loop (j)**: This loop runs from `1 to 2*i`, where i is the current value of the outer loop variable. 
4. **Third Inner Loop (j)**: Similar to the first inner loop, it runs from `1 to N-i` iterations.

Now, let's calculate the total number of operations across all iterations of the outer loop:

- The first inner loop contributes a total of `N-1 + 3 + 2...0` iterations, which is  equivalent to $N*(N-1)/2$.
- The second inner loop contributes a total of `1 + 3 + 5 + ... + 2*N-1` iterations, which is equivalent to $N^2$.
- The third inner loop contributes a total of `N-1 + 3 + 2...0` iterations, which is  equivalent to $N*(N-1)/2$.

The total operations can be represented as $N*(N-1)/2 + N^2 + N*(N-1)/2$.

Therefore, the overall time complexity of the code, using the frequency count method, is **$O(N^2)$**.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

