## My Approach

1. Take the input number, by default input is taken as `string`.
2. Using `for in` loop through each `char`.
3. Check if it is odd or even.
4. Don't forget to convert `char` to `int` using type conversion `int(i`). 
5. Add it to calculate the sum.

### Time Complexity
 O(n), where n is the number of digits in the input number. 
 
 ### Auxiliary Space: 
 O(n), because it only uses a fixed amount of memory to store the variables `sum_even`, `sum_odd` and  `n`. 
 
 It does not use any data structures that grow in proportion to the size of the input.

## Best Approach

1. Take the input number and convert it to `int` using type conversion.
2. Loop through each digit of a number, check if it is even or odd. 
3. Add it to calculate the sum.

```
num = int(input())

evenSum = 0 
oddSum = 0

while num > 0 :
    last = num % 10
    
    if last % 2 == 0 :
        evenSum += last
    else :
        oddSum += last
        
    num = num // 10
    
print(evenSum, " ", oddSum)

```

 ### Time Complexity
 O(n), where n is the number of digits in the input number. 
 
 ### Auxiliary Space: 
 O(n), because it only uses a fixed amount of memory to store the variables `evenSum`, `oddSum` and  `num`. 
 
 It does not use any data structures that grow in proportion to the size of the input.