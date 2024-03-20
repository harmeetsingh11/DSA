## Method 1 (using Object)

### Code Explanation:

- The function `countCharacterFrequencyObject` takes a string `str` as input and returns an object containing the frequency of each character in the string.
- Inside the function, an empty object named `frequency` is initialized to store the frequency of each character.
- The `for...of` loop iterates over each character `char` of the input string `str`.
- Within the loop, there's a conditional statement `if (char !== ' ')` to skip spaces. This ensures that spaces are not included in the frequency count.
- Within the loop, the frequency of each non-space character is updated in the `frequency` object:
     - If the current character `char` does not exist as a key in the `frequency` object (`frequency[char]` is falsy), its value is initialized to 0 and then incremented by 1.
     - If the character already exists as a key in the `frequency` object, its value is incremented by 1.
- The function returns the `frequency` object containing the frequency of each character (excluding spaces) in the input string.

### Time Complexity

To calculate the time complexity of the provided function `countCharacterFrequencyObject`, let's analyze each operation within the function:

1. **Iteration over Characters**: The function iterates over each character of the input string using a `for...of` loop. The number of iterations is directly proportional to the length of the input string `str`, denoted as `n`. Therefore, the time complexity of this operation is O(n), where `n` is the length of the input string.

2. **Skip Spaces (Conditional Check)**: Inside the loop, there is a single conditional check `if (char !== ' ')` to skip spaces. This check is constant time regardless of the length of the string, so it does not affect the overall time complexity.

3. **Counting Frequency (Updating Object)**: Within the loop, each character's frequency is updated in the `frequency` object. Accessing and updating properties in a JavaScript object has an average time complexity of O(1). Therefore, for each character, the time complexity of updating the `frequency` object is O(1).

Since all operations within the loop are bounded by the length of the input string `str`, the overall time complexity of the function is determined by the iteration over the characters, which is O(n), where `n` is the length of the input string.

Therefore, the time complexity of the `countCharacterFrequencyObject` function is **$O(n)$**, where `n` is the length of the input string. This means that the time taken by the function to count the frequency of characters grows linearly with the size of the input string.



## Method 2 (using Map)

### Code Explanation:



   - The function `countCharacterFrequencyMap` takes a string `str` as input and returns a `Map` containing the frequency of each character in the string.


   - Inside the function, a new `Map` object named `frequency` is initialized to store the frequency of each character.


   - The `for...of` loop iterates over each character `char` of the input string `str`.

   - Within the loop, there's a conditional statement `if (char !== ' ')` to skip spaces. This ensures that spaces are not included in the frequency count.


   - Inside the loop, the frequency of each non-space character is updated in the `frequency` map:
     - The `get()` method is used to retrieve the current frequency of the character from the `frequency` map.
     - If the character does not exist in the map (its frequency is falsy), its value is initialized to 0 and then incremented by 1.
     - If the character already exists in the map, its frequency is incremented by 1.
     - The updated frequency is then set in the `frequency` map using the `set()` method.


   - The function returns the `frequency` map containing the frequency of each character (excluding spaces) in the input string.



### Time Complexity

To calculate the time complexity of the provided function `countCharacterFrequencyMap`, let's analyze each operation within the function:

1. **Iteration over Characters**: The function iterates over each character of the input string using a `for...of` loop. The number of iterations is directly proportional to the length of the input string `str`, denoted as `n`. Therefore, the time complexity of this operation is O(n), where `n` is the length of the input string.

2. **Skip Spaces (Conditional Check)**: Inside the loop, there is a single conditional check `if (char !== ' ')` to skip spaces. This check is constant time regardless of the length of the string, so it does not affect the overall time complexity.

3. **Counting Frequency (Updating Map)**: Within the loop, each character's frequency is updated in the `frequency` map using the `get()` and `set()` methods. Both `get()` and `set()` operations on a `Map` have an average time complexity of O(1). Therefore, for each character, the time complexity of updating the `frequency` map is O(1).

Since all operations within the loop are bounded by the length of the input string `str`, the overall time complexity of the function is determined by the iteration over the characters, which is O(n), where `n` is the length of the input string.

Therefore, the time complexity of the `countCharacterFrequencyMap` function is **$O(n)$**, where `n` is the length of the input string. This means that the time taken by the function to count the frequency of characters grows linearly with the size of the input string.