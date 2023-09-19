def calcGCDoptimal(n: int, m: int) -> int:
    while n > 0 and m > 0:
        # The algorithm reduces the larger number until one of them becomes zero
        if n > m:
            n = n % m  # Reduce n by the remainder when divided by m
        else:
            m = m % n  # Reduce m by the remainder when divided by n

    # At this point, one of the numbers is zero, and the other is the GCD
    # Return the non-zero value as the GCD
    if n == 0:
        return m
    return n


if __name__ == "__main__":
    # Input two integers separated by a space
    n, m = input().split()

    # Calculate and print the GCD of the two input integers
    print(calcGCDoptimal(int(n), int(m)))
