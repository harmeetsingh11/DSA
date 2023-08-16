## My Approach

1. Take array/list with two values initialized with [1,1].
2. Check for n=1 or n=2, return 1.
3. Now, run a loop from (0 to n-2) or (2 to n) one and the same thing. If n=7, loop will run 5 times or n-2 times.
4. Sum the last two elements of list and append that sum value to the list.
5. At he end, the len of list will be n, so last value of list will be the nth fibonacci number.
6. Return last element fibonacci_series[-1].
   
### Time Complexity
O(N), where ‘N’ is the input number for which we are finding its equivalent Fibonacci.

As our loop will run for ‘N’ times.

### Space Complexity
O(N),  where ‘N’ is the number for which we are finding its equivalent Fibonacci.

As we are using an array/list (fibonacci_series) of size ‘N’ for storing values.

## Best Approach (Optimized Dynamic programming)

1. We take three integers a, b, c and we initialized a=0, b=1 as now we want to optimize the space by only storing “2” last numbers as we need only them.
2. Now we run a loop up to our “Nth” number and by using property the next number is the sum of two previous numbers like “c=a+b.
3. Now we update “a=b” and “b=c” at every step of the iteration.
4. In this way when our loop finished “b” contains the “Nth” Fibonacci number.
5. Return ‘b'.
   
### Time Complexity
O(N), where ‘N’ is the number for which we are finding its equivalent Fibonacci.

 

As our loop will run for ‘N’ times.

### Space Complexity
O(1),  we are using constant space.