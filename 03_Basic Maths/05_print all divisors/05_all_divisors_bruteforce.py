# Brute Force Approach
# Time Complexity - O(n)

def printAllDivisorsBruteForce(n):
    # Iterate through numbers from 1 to 'n'.
    for i in range(1, n+1):
        # Check if 'i' is a divisor of 'n'.
        if n % i == 0:
            # If it is a divisor, print 'i'.
            print(i)


if __name__ == "__main__":
    n = int(input())
    printAllDivisorsBruteForce(36)
