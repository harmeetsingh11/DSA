function countCharacterFrequency(str) {
  // Initialize an empty object to store the frequency of each character
  const frequency = {};

  // Iterate over each character of the input string
  for (const char of str) {
    // Skip spaces
    if (char !== ' ') {
      // Check if the current character exists as a key in the frequency object
      // If it does not exist, initialize its value to 0 and increment it by 1
      // If it already exists, increment its value by 1
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  // Return the frequency object containing the frequency of each character
  return frequency;
}

// Example usage:
const str = 'hello world';
const result = countCharacterFrequency(str);
console.log(result);
