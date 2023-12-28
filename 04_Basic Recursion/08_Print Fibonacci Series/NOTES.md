## Recursive Approach 

**Intuition:**

In this approach, instead of printing the Fibonacci series till N, we’re going to print the Nth Fibonacci number using functional recursion with multiple function calls.

One may wonder how multiple-function calls work. Let’s understand through an illustration below:

![multiple recursion calls](image_1.webp)

Similar kinds of multiple-function calls would be used in implementing the Fibonacci series where any Nth Fibonacci number can be written as a sum of `(N-1)`th and `(N-2)`th Fibonacci numbers. So, the function result would look like this:

`Fibonacci(N) = Fibonacci(N-1) + Fibonacci(N-2)`

Results from both the function calls would be summed and returned to the main function call.

**Approach:**

- Similar to all the recursion problems we’ve seen before, we need a base case in this problem too in order for recursion to not go infinitely. Here, we notice that the Fibonacci series start from N = 1, where we initialize its value as 1. 
- Assume `Fibonacci(0) = 0`. So, `Fibonacci(2) = 1+0 = 1` as the Nth Fibonacci number is the sum of the previous two Fibonacci numbers.
- Similarly, we call `Fibonacci(N-1)` and `Fibonacci(N-2)` and return their sum. Both the function calls `Fibonacci(N-1)` and `Fibonacci(N-2)` would be computed individually one by one until the base condition is reached for both and then they return back to the main function.

Let us see the recursion tree for the following problem to get an even better understanding:

![Recursion tree](image_2.webp)

### Time Complexity
- The time complexity of this recursive solution is $O(2^N)$ 
- This problem involves two function calls for each iteration which further expands to 4 function calls and so on (see recursive tree) which makes worst-case time complexity to be exponential in nature.

### Space Complexity
- The space complexity is $O(N)$ 
- At maximum there could be `N` function calls waiting in the recursion stack since we need to calculate the Nth Fibonacci number for which we also need to calculate `(N-1)` Fibonacci numbers before it.

## Iterative Approach

1. The function `generate_fibonacci_series` initializes the Fibonacci series with the first two terms: 0 and 1.

2. It checks if the number of terms (`n`) is less than or equal to 1. If so, it returns a list containing only the first term (0), as the Fibonacci series starts with 0.

3. If `n` is greater than 1, the program enters a `while` loop. This loop continues until the length of the Fibonacci series is equal to the desired number of terms (`n`).

4. Inside the loop, the next term is calculated by summing the last two terms of the Fibonacci series.

5. The calculated next term is then appended to the Fibonacci series.

6. Steps 4 and 5 are repeated until the length of the Fibonacci series reaches the specified number of terms (`n`).

7. The final generated Fibonacci series is returned by the function.

In summary, the program starts with the first two terms and iteratively calculates and appends the next term to build the Fibonacci series until the desired number of terms is achieved. The logic uses a loop to efficiently generate the series and ensures that the output adheres to the Fibonacci sequence.

### Time Complexity

The time complexity is $O(n)$ where n is the number of terms in the Fibonacci series. The loop iterates until the desired number of terms is reached, and each iteration involves constant time operations.

### Space Complexity
The space complexity is $O(n)$ as well. The space required is proportional to the number of terms in the Fibonacci series. The `fib_series` list stores the entire series, and its length is directly related to the input value `n`.

*The credit for the images and the notes goes to Striver's AtoZ DSA Sheet - [TakeUForward](https://takeuforward.org/)*