from typing import List


def recursiveFunction(x: int, ans: List[int]) -> None:
    if x == 0:
        return
    else:
        # TRUST the function that it will print 1 to n-1
        recursiveFunction(x-1, ans)
        # Then, it will print last element (nth)
        ans.append(x)


def printNos(x: int) -> List[int]:
    # declaring an empty list
    ans = []

    # calling recursive function
    recursiveFunction(x, ans)

    # returning the result
    return ans


if __name__ == "__main__":
    n = int(input())
    print(printNos(n))
