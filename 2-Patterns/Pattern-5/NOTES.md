## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
   
### Time Complexity
The given program consists of two nested loops. 
The outer loop runs from 1 to N, and the inner loop runs from `1 to (N+1-i)`, where `i` is the current value of the outer loop variable. Inside the inner loop, a constant-time operation (printing "*") is performed.

Let's analyze the time complexity step by step:

1. The outer loop runs "N" times.
2. For each iteration of the outer loop, the inner loop runs (N+1-i) times, where "i" ranges from 1 to N.

The total number of times the inner loop runs can be calculated as follows:

For i = 1: N+1-1 = N <br>
For i = 2: N+1-2 = N-1 <br>
...<br>
For i = N: N+1-N = 1<br>

So, the total number of iterations of the inner loop is:

N + (N-1) + (N-2) + ... + 1 = N * (N+1) / 2

Therefore, the time complexity of the program is $O(N^2)$ since the dominant factor is the nested loops where each loop iterates up to N times.

where N is the number of rows/lines (horizontally).

### Space Complexity
The space complexity of the program is determined by the amount of memory required to store the variables used in the program. 

1. **Integer variables**: The variables `N`, `i`, and `j` are integer variables used for loop control. These variables require a constant amount of memory, regardless of the input size. Therefore, the memory usage for integer variables is $O(1)$.

2. **String literals**: The program prints the "*" character for each iteration of the inner loop. However, since this is a constant-sized string literal, it does not grow with the input size. Thus, the memory usage for string literals is also $O(1)$.

Overall, the memory usage of the program remains constant, and it does not depend on the input size. Therefore, the space complexity of the program is $O(1)$, indicating constant space usage.
