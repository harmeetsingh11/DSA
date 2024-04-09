def reverseNumber(n: int) -> int:
    revNum = 0
    while n > 0:
        last_digit = n % 10

        # round down, use double slash
        n //= 10

        # suppose n = 5356
        # first iteration last digit extract is 6.
        # second iteration we somehow need to add/append next extracted digit which is 5 to 6. which will give 65
        # So here's how we can do it: 60*10 + lastDigit
        # 6*10 + 5 = 65
        # and so on
        revNum = (revNum*10)+last_digit

    return revNum


print(reverseNumber(5356))
