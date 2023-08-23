## My Approach
We always use nested loops for printing the patterns. 
1. For the outer loop, we count the number of lines/rows and loop for them.
2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
3. We print the `*` inside the inner loop.
4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.
### Time Complexity
$O(N^2)$

where N is the number of rows/lines (horizontally).

### Space Complexity
O(1), that is constant space.

We are not using any auxiliary space.

Hence the space complexity is O(1).