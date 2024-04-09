# n:int the function takes a single parameter named n
# The n: int part specifies that n is expected to be of type int, which means it should be an integer

# -> int: This is the return type annotation. It specifies the type of value that the function is expected to return.
# In this case, -> int indicates that the function should return an integer.

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
