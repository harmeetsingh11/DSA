// METHOD 1: USING OBJECT
function countCharacterFrequencyObject(str) {
  // If the input string is empty, return an empty object
  if (str === '') {
    return {};
  }

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

// METHOD 2: USING MAP()
function countCharacterFrequencyMap(str) {
  // If the input string is empty, return an empty map
  if (str === '') {
    return new Map();
  }

  // Initialize a new Map object to store the frequency of each character
  const frequency = new Map();

  // Iterate over each character of the input string
  for (const char of str) {
    // Skip spaces
    if (char !== ' ') {
      // Check if the current character exists as a key in the frequency map
      // If it does not exist, initialize its value to 0 and increment it by 1
      // If it already exists, retrieve its current frequency and increment it by 1
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }
  }

  // Return the frequency map containing the frequency of each character
  return frequency;
}

/* const str = '';
const result = countCharacterFrequencyMap(str);
console.log(result); */

// Export the function for testing
module.exports = { countCharacterFrequencyObject, countCharacterFrequencyMap };
