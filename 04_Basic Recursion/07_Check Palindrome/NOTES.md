## Recursive Approach

- In this approach, we check the string using functional recursion where firstly, the letters on the two ends of the string (start, end) are compared to see if they’re the same or not.
![Alt text](image_1.png)
- If they’re the same then we simply call recursion for the next elements (start+1, end-1) and so on until the start becomes greater than or equal to the end. 
![Alt text](image_2.png)
- If at any point the character at start and the end differ, we return false stating that the string is not a palindrome.
- Otherwise, if the base condition is reached, then the string is obviously a palindrome and we return true.

### Time Complexity

- The time complexity of the recursive function can be expressed as $O(N)$, where $N$ is the length of the input string. 
- This is because each recursive call processes one character from the beginning and one from the end until the base case is reached.

### Space Complexity
- The space complexity is $O(N)$ as well. 
- This is due to the recursive nature of the function, which creates a new function call on the call stack for each character pair. 
- The space required on the stack is proportional to the length of the input string.