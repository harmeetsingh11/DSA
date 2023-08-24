## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity

The program consists of an outer loop that iterates `N ` times, where `N`is the input value. Inside this outer loop, there are three inner loops and a print statement. Let's analyze each inner loop separately and then calculate the total time complexity.

1. **First Inner Loop (Spaces)**: This loop runs (N - i) times for each value of i, where i is the current line number. The maximum value of i is N, so the maximum number of iterations for this loop is (N - N) = 0 for the last line.
2. **Second Inner Loop (Stars)**: This loop runs (2 * i - 1) times for each value of i. The maximum value of i is N, so the maximum number of iterations for this loop is (2 * N - 1) for the last line.
3. **Third Inner Loop (Spaces)**: Similar to the first inner loop, this also runs (N - i) times for each value of i. The maximum number of iterations for this loop is also 0 for the last line.
4. **Print Statement**: This operation is executed once for each iteration of the outer loop.

Now, let's calculate the total number of operations:

- The outer loop runs N times.
- For each iteration of the outer loop, the maximum number of operations performed inside all the loops and statements combined is (2 * N - 1) + 0 + 0.

So, the total number of operations is:

```
Total operations = N * ((2 * N - 1))
                 = 2 * N^2 - N
```
The time complexity of the given program is therefore $O(N^2)$. This means that the number of operations the program performs increases quadratically as the input N increases.
where N is the number of rows/lines (horizontally).

### Space Complexity
The space complexity of the program is determined by the amount of memory required to store the variables used in the program. 

1. **Integer variables**: The variables `N`, `i`, and `j` are integer variables used for loop control. These variables require a constant amount of memory, regardless of the input size. Therefore, the memory usage for integer variables is $O(1)$.

2. **String literals**: The program prints the "*" character for each iteration of the inner loop. However, since this is a constant-sized string literal, it does not grow with the input size. Thus, the memory usage for string literals is also $O(1)$.

Overall, the memory usage of the program remains constant, and it does not depend on the input size. Therefore, the space complexity of the program is $O(1)$, indicating constant space usage.
