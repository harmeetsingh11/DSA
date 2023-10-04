from typing import *


def factorialNumbers(n: int):
    if n == 1:
        return 1
    else:
        return factorialNumbers(n-1)*n


if __name__ == "__main__":
    n = int(input())
    print(factorialNumbers(n))
