from typing import *


def printNtimes(n: int) -> None:
    # base case
    if n == 0:
        return
    else:
        printNtimes(n-1)  # TRUST func will print n-1 times
        print("Coding Ninjas", end=" ")  # n-1 times done, print one more time


if __name__ == "__main__":
    n = int(input())
    printNtimes(n)
