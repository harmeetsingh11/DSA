n = int(input())
fibonacci_series = [1, 1]
if (n == 1 or n == 2):
    print(1)
else:
    for i in range(n-2):
        fibonacci_series.append(fibonacci_series[-1]+fibonacci_series[-2])
    print(fibonacci_series[-1])
