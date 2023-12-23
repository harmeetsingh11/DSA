## Recursive Approach

To solve this problem, we can use a recursive approach. We'll define a helper function `isPalindromeHelper`, that takes two pointers, start and end, indicating the current positions in the string to compare.
 

- **Base Case:** If the start pointer is greater than or equal to the end pointer, we have checked all the characters in the string, and they match. So, we can return true as the string is a palindrome.
- **Recursive Case:** Check if the characters at the start and end pointers are equal:
  ![Alt text](image_1.png)
    - If they are equal, we can recursively call the `isPalindromeHelper` function by moving the start pointer to the right and the end pointer to the left. This way, we compare the next pair of characters.
    ![Alt text](image_2.png)
    - If unequal, we can immediately return false if the string is not a palindrome.


### Time Complexity

- The time complexity of the recursive function can be expressed as $O(N)$, where $N$ is the length of the input string. 
- This is because each recursive call processes one character from the beginning and one from the end until the base case is reached.

### Space Complexity
- The space complexity is $O(N)$ as well. 
- This is due to the recursive nature of the function, which creates a new function call on the call stack for each character pair. 
- The space required on the stack is proportional to the length of the input string.