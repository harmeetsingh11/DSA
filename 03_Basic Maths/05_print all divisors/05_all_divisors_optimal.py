# Optimal Approach
# Time Complexity - O(root(n))

def printAllDivisorsOptimal(n):
    # Initialize an empty list to store the divisors.
    arr = []

    # Iterate through numbers from 1 to the square root of 'n' using exponential operator (**).
    for i in range(1, int(n**(1/2))+1):
        # Check if 'i' is a divisor of 'n'.
        if n % i == 0:
            # If it is a divisor, add it to the list of divisors.
            arr.append(i)
            # Check if 'i' is not equal to 'n/i' to avoid duplicates.
            if i != n / i:
                # If not equal, add 'n/i' to the list of divisors.
                arr.append(int(n/i))

    # Sort the list of divisors in ascending order.
    arr.sort()

    # Print the divisors separated by spaces.
    for divisor in arr:
        print(divisor, end=" ")


if __name__ == "__main__":
    n = int(input())
    printAllDivisorsOptimal(n)
