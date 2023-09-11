def sumOfAllDivisorsBruteForce(n: int) -> int:
    divisor_list = []  # Create an empty list to store divisors.

    # Loop from 1 to 'n' because we need to find divisors from 1 to 'n'.
    for num in range(1, n+1):
        # For each number 'num', it evaluates its divisors and adds them to the 'divisor_list'.
        for j in range(1, int(num**0.5) + 1):
            # If 'j' is a divisor of 'num', add it to the list.
            if num % j == 0:
                divisor_list.append(j)

                # Also, add the corresponding divisor if it's not equal to 'j'.
                if j != num/j:
                    divisor_list.append(int(num/j))

    # Calculate and return the sum of all divisors.
    return sum(divisor_list)


if __name__ == "__main__":
    # Input a number from the user.
    n = int(input())

    # Calculate and print the sum of all divisors of the input number using the brute-force method.
    print(sumOfAllDivisorsBruteForce(n))
