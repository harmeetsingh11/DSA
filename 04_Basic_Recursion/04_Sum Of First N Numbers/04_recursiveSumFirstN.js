function sumFirstNrecursive(n) {
  // Base case: When n is 0, return 0
  if (n === 0) {
    return 0;
  } else {
    // Recursive call: sum of first (n-1) numbers plus n
    return sumFirstNrecursive(n - 1) + n;
  }
}

//   Call the function using sample inputs
// console.log(sumFirstNrecursive(5));

// Export the function for testing
module.exports = sumFirstNrecursive;
