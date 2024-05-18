# [Recursion Tutorial by Utkarsh Gupta](https://www.youtube.com/watch?v=0UM_J1jE1dg)

## Factorial of a number 
```js
//  fact(4) = 4*3*2*1 = 4*fact(3)
//  fact(3) = 3*2*1 = 3*fact(2)
//  fact(2) = 2*1 = 2*fact(1)
//  fact(1) = 1 = (n==1) stops here (BASE CASE)
//  TRUST THE FUNCTION fact(n-1) will give factorial
//  fact(n) = n*fact(n-1)

function factorial(n) {
  // Base case
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

## Sum of 1 to n Natural numbers
```js
// n = 5
// 1 + 2 + 3 + 4 + 5
// TRUST THE FUNCTION-sum_n(n-1) will give sum of 1 to n-1
// return 1 + 2 + 3 + .. (n-1) + n
function sum_n(n) {
  // Base case
  if (n === 0) {
    return 0;
  } else {
    // Recursively summing numbers from 1 to n
    return sum_n(n - 1) + n;
  }
}
```

## Sum of digits of a number
```js

// 1234 = sum(123) + 4
// 123 = sum(12) + 3
// 12 = sum(1) + 2
// 1 = sum(0) + 1 // base case
// TRUST: sum(123) will return sum of 1,2 and 3

function sum_digits(n) {
  // Base case
  if (n === 0) {
    return 0;
  } else {
    const quotient = Math.floor(n / 10);
    const last_digit = n % 10;
    // console.log(quotient, "", last_digit);
    return sum_digits(quotient) + last_digit;
  }
}
```
## Pattern 1
```js
//  lines=5
//  1
//  12
//  123
//  1234
//  12345
//  
//  1
//  .
//  .
//  1..4   print till n-1 lines // TRUST the function
//  12345  then print n (last line)
//  
//  print line 1 to line n-1
//  then print line n

function pattern1(n) {
  if (n === 0) {
    return;
  }
  pattern1(n - 1);
  let line = '';
  for (let i = 1; i <= n; i++) {
    line += i + ' ';
  }
  console.log(line);
}
```
## Pattern 2
```js

//  12345
//  1234
//  123
//  12
//  1
//  
//  First print line : 12345 = 1...n
//  Then TRUST the function that it will print from line n-1 to 1

function pattern2(n) {
  if (n === 0) {
    return;
  }
  let line = '';
  for (let i = 1; i <= n; i++) {
    line += i + ' ';
  }
  console.log(line);
  pattern2(n - 1);
}
```
## Pattern 3
```js
//  12345 // print 1 to n
//  1234 __
//  123    |
//  12     |
//  1      | // rest recursion call n-1
//  12     |
//  123    |
//  1234 __|
//  12345 // print 1 to n

function pattern3(n) {
  if (n === 1) {
    console.log(1);
  } else {
    let line = '';
    for (let i = 1; i <= n; i++) {
      line += i + ' ';
    }
    console.log(line);

    pattern3(n - 1);

    line = '';
    for (let i = 1; i <= n; i++) {
      line += i + ' ';
    }
    console.log(line);
  }
}
```

## Reverse an Array
```js
function reverseArray(arr, left, right) {
  // Base case
  if (left >= right) {
    return;
  } else {
    // Swap the first and last elements, rest we can trust the function
    [arr[left], arr[right]] = [arr[right], arr[left]];
    // Trust the function recursively
    reverseArray(arr, left + 1, right - 1);
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5]
console.log(reverseArray(arr, 0, arr.length))
```

# Basic Recursion Problems🔥

This directory includes problems, solutions and accompanying notes for various basic recursion problems.

| S.No. | Problem | Solution | Difficulty | Solution Notes |
|-------|----------|----------|------------|----------------|
|1| [Print 1 to N](./01_Print%201%20to%20N/README.md) | [Recursive](./01_Print%201%20to%20N/print_1toN.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./01_Print%201%20to%20N/NOTES.md) |
|2| [Print name N times](./02_Print%20name%20N%20times/README.md) | [Recursive](./02_Print%20name%20N%20times/printNtimes.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./02_Print%20name%20N%20times/NOTES.md) |
|3| [Print N to 1](./03_Print%20N%20to%201/README.md) | [Recursive](./03_Print%20N%20to%201/print_Nto1.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./03_Print%20N%20to%201/NOTES.md) |
|4| [Sum of first N numbers](./04_Sum%20Of%20First%20N%20Numbers/README.md) | [Optimal](./04_Sum%20Of%20First%20N%20Numbers/sumFirstNoptimal.js
) <br> [Recursive](./04_Sum%20Of%20First%20N%20Numbers/sumFirstNrecursive.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./04_Sum%20Of%20First%20N%20Numbers/NOTES.md) |
|5| [Factorial](./05_Factorial%20Numbers/README.md) | [Recursive](./05_Factorial%20Numbers/factorialNumbers.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./05_Factorial%20Numbers/NOTES.md) |
|6| [Reverse an array](./06_Reverse%20an%20Array/README.md) | [Brute Force(Iterative)](./06_Reverse%20an%20Array/reverseArrayIterative.js
) <br> [Recursive](./06_Reverse%20an%20Array/reverseArrayRecursive.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./06_Reverse%20an%20Array/NOTES.md) |
|7| [Check Pallindrome](./07_Check%20Palindrome/README.md) | [Recursive](./07_Check%20Palindrome/checkPalindrome.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./07_Check%20Palindrome/NOTES.md) |
|8| [Fibonacci Series](./08_Print%20Fibonacci%20Series/README.md) | [Brute Force(Iterative)](./08_Print%20Fibonacci%20Series/fibonacciIterative.js
) <br> [Recursive](./08_Print%20Fibonacci%20Series/fibonacciRecursion.js
) | <img src="https://img.shields.io/badge/Easy-brightgreen" alt="Easy" /> | [Notes](./08_Print%20Fibonacci%20Series/NOTES.md) |
