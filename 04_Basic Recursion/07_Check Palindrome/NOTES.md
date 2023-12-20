### Time Complexity

- The time complexity of the recursive function can be expressed as $O(N)$, where $N$ is the length of the input string. 
- This is because each recursive call processes one character from the beginning and one from the end until the base case is reached.

### Space Complexity
- The space complexity is $O(N)$ as well. 
- This is due to the recursive nature of the function, which creates a new function call on the call stack for each character pair. 
- The space required on the stack is proportional to the length of the input string.