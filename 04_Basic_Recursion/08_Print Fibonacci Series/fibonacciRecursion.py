# Instead of printing the Fibonacci series till N, we’re going to print the Nth Fibonacci number using functional recursion with multiple function calls.


# index -> 0 1 2 3 4 5 6...
# fib ->   0 1 1 2 3 5 8...
# fib(6) = 5 + 3 = fib(5) + fib(4) = 8

# fib(n) = fib(n-1) + fib(n-2)


def generateFibonacciSeries(n):
    # base case
    # series/index starting from 0
    # fib(0) = 0, fib(1) = 1
    if n <= 1:
        return n

    # Problem broken down into 2 functional calls
    # and their results combined and returned.
    last = generateFibonacciSeries(n - 1)
    secondLast = generateFibonacciSeries(n - 2)

    return last + secondLast


if __name__ == "__main__":
    n = int(input())
    print(generateFibonacciSeries(n))
