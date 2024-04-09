from typing import List


def recursiveFunction(x: int, ans: List[int]) -> None:
    if x == 0:
        return
    else:
        # we have to print from n to 1

        # First, print one element
        # print n (n=5 o/p- 5 4 3 2 1) i.e print 5
        ans.append(x)

        # TRUST the function that it will print n-1 to 1
        # It will print n-1 elements
        recursiveFunction(x-1, ans)


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
