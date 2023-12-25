# Instead of printing the Fibonacci series till N, we’re going to print the Nth Fibonacci number using functional recursion with multiple function calls.

# fib(n) = fib(n-1) + fib(n-2) 

def generateFibonacciSeries(n):
    # base case
    # series starting from 0 
    if n <=1:
        return n
    
    last = generateFibonacciSeries(n-1)
    secondLast = generateFibonacciSeries(n-2)

    return last + secondLast

if __name__ == "__main__":
    n = int(input())
    print(generateFibonacciSeries(n))
    