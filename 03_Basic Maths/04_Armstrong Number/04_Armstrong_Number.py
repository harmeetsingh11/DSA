import math
n = int(input())
dup = n


def check_armstrong(n) -> int:
    # using len function to determine the no of digits by convert int to str
    num_of_digits = len(str(n))
    sum = 0
    while n > 0:
        last_digit = n % 10
        n //= 10
        sum += math.pow(last_digit, num_of_digits)
    return str(sum == dup).lower()


print(check_armstrong(n))
