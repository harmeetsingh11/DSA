def countDigits(n: int) -> int:
    count = 0
    temp = n
    while n > 0:
        last_digit = n % 10
        if last_digit != 0:
            # count will be incremented by 1 if the condition is true
            count += (temp % last_digit == 0)
        # round down, use double slash
        n //= 10
    return count


print(countDigits(75))
