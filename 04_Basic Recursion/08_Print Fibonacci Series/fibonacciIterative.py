def generate_fibonacci_series(n):
    # Initialize Fibonacci series with the first two terms
    fib_series = [0, 1]

    # Check if n is less than or equal to 1
    if n <= 1:
        return [0]

    # Check if n is greater than 1
    else:
        # Continue adding terms until the desired number of terms (n) is reached
        while len(fib_series) < n:
            # Calculate the next term by summing the last two terms
            next_term = fib_series[-1] + fib_series[-2]

            # Append the next term to the Fibonacci series
            fib_series.append(next_term)

    # Return the generated Fibonacci series
    return fib_series


if __name__ == "__main__":
    n = int(input("Enter the number of terms in the Fibonacci series: "))
    fibonacci_series = generate_fibonacci_series(n)
    print(f"Fibonacci Series up to {n} terms: {fibonacci_series}")
