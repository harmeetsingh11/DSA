def calcGCDBruteForce(n: int, m: int) -> int:
    # Initialize the result to 1 (since 1 is a common divisor for all numbers)
    ans = 1

    # Iterate through all numbers from 1 to the minimum of n and m
    for i in range(1, min(n, m) + 1):
        # Check if both n and m are divisible by i (i is a common divisor)
        if n % i == 0 and m % i == 0:
            ans = i  # If i is a common divisor, update the result to i

    return ans  # Return the final GCD


if __name__ == "__main__":
    # Input two integers separated by a space and convert them to integers
    n, m = input().split()

    # Calculate and print the GCD of the two input integers using the brute force method
    print(calcGCDBruteForce(int(n), int(m)))
