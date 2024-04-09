n = input()

sum_even = 0
sum_odd = 0

for i in n:
    if int(i) % 2 == 0:
        sum_even += int(i)
    else:
        sum_odd += int(i)

print(sum_even, sum_odd)


