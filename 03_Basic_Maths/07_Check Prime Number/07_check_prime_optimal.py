import math


def checkPrimeOptimal(n: int) -> str:
    count = 0
    for i in range(1, int(math.sqrt(n))+1):
        if n % i == 0:
            count += 1
            if i != int(n/i):
                count += 1

    if count == 2:
        return "YES"
    else:
        return "NO"


if __name__ == "__main__":
    n = int(input())
    print(checkPrimeOptimal(n))
