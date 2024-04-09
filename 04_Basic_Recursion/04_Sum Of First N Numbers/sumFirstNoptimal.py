from typing import List


def sumFirstNoptimal(n: int) -> int:
    # Iterative Approach using mathematical formula
    return (n*(n+1))//2


if __name__ == "__main__":
    n = int(input())
    print(sumFirstNoptimal(n))
