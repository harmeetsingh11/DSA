// USING OBJECT
function countFrequencyObject(arr) {
  // Initialize an empty object to store the frequency of each element
  const frequency = {};

  // Iterate over each element of the input array
  for (const num of arr) {
    // Check if the current element exists as a key in the frequency object
    // If it does not exist, initialize its value to 0 and increment it by 1
    // If it already exists, increment its value by 1
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Return the frequency object containing the frequency of each element
  return frequency;
}

// USING MAP()
function countFrequencyMap(arr) {
  // Initialize a new Map object to store the frequency of each element
  const frequency = new Map();

  // Iterate over each element of the input array
  for (const num of arr) {
    // Check if the current element exists as a key in the frequency map
    // If it does not exist, set its frequency to 0 and increment it by 1
    // If it already exists, retrieve its current frequency and increment it by 1
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Return the frequency map containing the frequency of each element
  return frequency;
}

const arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 4, 5];
const result = countFrequencyMap(arr);
console.log(result);

module.export = countFrequencyMap;
module.export = countFrequencyObject;
