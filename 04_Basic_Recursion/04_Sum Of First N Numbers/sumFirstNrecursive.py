from typing import List


def sumFirstNrecursive(n: int) -> int:
    if n == 0:
        return 0
    else:
        return sumFirstNrecursive(n-1) + n


if __name__ == "__main__":
    n = int(input())
    print(sumFirstNrecursive(n))
