## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the "*" inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

**Upper Triangle:**

1. **Outer Loop (i)**: The outer loop runs N times, where N is the input parameter.
2. **First Inner Loop (j)**: This loop runs from `1 to N+1-i`. In the worst case, when i is at its maximum value of N, the inner loop will run for 1 iteration.
3. **Second Inner Loop (j)**: This loop runs from `1 to 2*i-1`, where i is the current value of the outer loop variable. In the worst case, when i is at its maximum value of N, the inner loop will run for `2*N-1` iterations.
4. **Third Inner Loop (j)**: Similar to the first inner loop, it runs from `1 to N+1-i`

**Lower Triangle:**

1. **Outer Loop (i)**: The outer loop runs N times, where N is the input parameter.
2. **First Inner Loop (j)**: This loop runs from 1 to i, where i is the current value of the outer loop variable.
3. **Second Inner Loop (j)**: This loop runs from `1 to 2*N-2*i`, where i is the current value of the outer loop variable.
4. **Third Inner Loop (j)**: Similar to the first inner loop, it runs from 1 to i.

Summing up the operations for both triangles:

- The total number of operations is proportional to the sum of operations in the upper and lower triangles.

- The upper triangle contributes $O(N^2)$ operations.

- The lower triangle contributes $O(N^2)$ operations.

Therefore, the overall time complexity of the program is **$O(N^2)$**, as the dominant term is the quadratic term due to the nested loops iterating over the input size `N`.

where N is the number of rows/lines (horizontally).

### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

