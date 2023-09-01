## My Approach

```
Problem:

N = 4

4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

```

We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. So, what we can observe from the above examples is that on the perimeter of the square, there is an integer no. N which decreases by 1 as we move inside the square level-wise. 
4. Since this cannot be printed directly, we print it in reverse fashion (1’s at the border of the square, then 2 in the inner perimeter, then 3, and so on).
5. For only making logic, we subtract pattern from N+1. `New_pattern = (N+1)-Pattern`.
6. New Pattern will be:
```
New_Patern:

1 1 1 1 1 1 1 
1 2 2 2 2 2 1 
1 2 3 3 3 2 1 
1 2 3 4 3 2 1 
1 2 3 3 3 2 1 
1 2 2 2 2 2 1 
1 1 1 1 1 1 1 
```
7. To achieve above pattern, we take the minimum distance of the current cell from each of the ends of the square ( for `i = 3, j = 4` min(left, right, top, bottom) min(4,4,3,5) ) and make the current cell value equal to that number. So for `i=3 j=4` value would be 3.
8. To calculate distance of current cell from each of the ends:
   - The distance from the current cell to the top edge of the grid **top_dist = i**
   - The distance from the current cell to the left edge of the grid **left_dist = j**
   - The distance from the current cell to the bottom edge of the grid **bottom_dist = 2*N-i**
   - The distance from the current cell to the right edge of the grid **right_dist = 2*N-j**
9.  And then subtract the whole pattern by N+1 at the end which just makes the outermost perimeter filled with the number N, inner perimeter with N-1 and finally the centermost element with the integer 1.
 
### Time Complexity


To analyze the time complexity of this program, let's break it down step by step:

1. Outer Loop: The outer loop iterates from `i = 1 to 2*N - 1`. It runs 2*N - 1 times.
2. Inner Loop: The inner loop iterates from `j = 1 to 2*N - 1`. It also runs 2*N - 1 times.
3. Inside the inner loop, there are constant-time operations:
   - Calculating `top_dist, left_dist, bottom_dist, and right_dist` involves basic arithmetic operations that are executed in constant time.
   - The `min` function computes the minimum of four values in constant time.
   - Printing `(N+1) - min(top_dist, bottom_dist, left_dist, right_dist)` involves a constant number of operations.
4. Printing a newline character (print()) is also a constant-time operation.

Now, let's calculate the overall time complexity:

1. The outer loop runs `2*N - 1` times.
2. The inner loop runs `2*N - 1` times for each iteration of the outer loop.

So, the total number of iterations (or work done) by the innermost part of the code (the operations inside the inner loop) is:

`(2*N - 1) * (2*N - 1)`

Simplifying this expression:

`= 4*N^2 - 4*N + 1`

In terms of Big O notation, the time complexity is **$O(N^2)$** because the dominant term is the quadratic term $N^2$. This means that the running time of the program grows quadratically with the input size N.


### Space Complexity
- The additional space used by the code is mainly for temporary variables and the input values.
- The memory used by the nested loops is constant and does not depend on the input size N.
- So, the space complexity of the code is **$O(1)$**, constant space complexity.

