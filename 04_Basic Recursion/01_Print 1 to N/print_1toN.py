from typing import List


def printNos(x: int, ans: List[int]):
    if x == 0:
        return
    else:
        # TRUST the function that it will print 1 to n-1
        printNos(x-1, ans)
        # Then, it will print last element (nth)
        ans.append(x)
        return ans


if __name__ == "__main__":
    n = int(input())
    ans = []
    print(printNos(n, ans))
