## Brute Force Approach  
**Intuition**: Simply traverse from 1 to min(a,b) and check for every number.

**Approach**: 

- Traverse from 1 to min(a,b).
- And check if i is divisible by both a and b.If yes store it in the answer.
- Find the maximum value of i which divides both a and b.
  
### Time Complexity Analysis

1. The code uses a `for` loop that iterates from 1 to the minimum of `n` and `m`, which means it iterates at most `min(n, m)` times.
2. Inside the loop, there are a few constant time operations: two modulo operations and an assignment (`ans = i`).
3. Therefore, the dominant factor affecting the time complexity is the loop itself.

The time complexity of this code is **$O(min(n, m))$** because the loop iterates up to the minimum of `n` and `m`.

### Space Complexity Analysis

1. The code uses a constant amount of space for variables such as `ans`, `i`, `n`, and `m`.
2. It also uses a `for` loop, which does not add any significant space complexity.

The space complexity of this code is `O(1)`, indicating that the amount of memory used by the code does not depend on the input sizes `n` and `m`.

## Optimal Approach (Using Euclidean Algorithm)
GCD of two numbers is the largest number that divides both of them. The **Euclidean Algorithm** is a way to find the greatest common divisor of two positive integers.

**Euclidean Algorithm**  

The algorithm is based on the below facts. 

1. If we subtract a smaller number from a larger one (we reduce a larger number), GCD doesn’t change. So if we keep subtracting repeatedly the larger of two, we end up one num with 0 and remaining num with GCD.  
```
for a>b 

GCD(a,b) = GCD(a-b,b)...subtracting till one num is 0 and remaining num is GCD
```
2. Since Subtraction will take lot of steps and it might not improve the time complexity.
Now instead of subtraction, if we divide the larger number by smaller number (the steps will reduce), the algorithm stops when one of the num become 0 and the other is GCD.
```
for a>b 

GCD(a,b) = GCD(b,a%b)...dividing till one num is 0 and remaining num is GCD
```

**Approach**

- Recursively call gcd(b,a%b) function till the base condition is hit.  
- b==0 is the base condition.When base condition is hit return a,as gcd(a,0) is equal to a.

### Time Complexity Analysis
The time complexity of this code is **$O(logϕ(min(n, m)))$** where ϕ is 1.61.  
 
 - Whenever in digit extraction happens, the complexity will always be in terms of log.
 - Usually in digit extraction, we divide number by 10, so the complexity comes to log base 10.
 - But, in this case, the num always changes. Therefore, complexity in terms of log base ϕ (Phi).

### Space Complexity Analysis

The space complexity of this code is `O(1)`, indicating that the amount of memory used by the code does not depend on the input sizes `n` and `m`.




