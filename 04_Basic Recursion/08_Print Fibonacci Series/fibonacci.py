

# fib(n) = fib(n-1)+fib(n-2) 

from typing import List
def generateFibonacciSeries(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib_series = generateFibonacciSeries(n - 1)
        fib_series.append(fib_series[-1] + fib_series[-2])
        return fib_series

if __name__ == "__main__":
    n = int(input("Enter the value of n: "))
    fibonacci_series = generateFibonacciSeries(n)
    print(f"Fibonacci Series up to {n}: {fibonacci_series}")

    