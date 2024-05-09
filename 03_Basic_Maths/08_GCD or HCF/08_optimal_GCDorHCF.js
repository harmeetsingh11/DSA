function calcGCDoptimal(n, m) {
  while (n > 0 && m > 0) {
    // The algorithm reduces the larger number until one of them becomes zero
    if (n > m) {
      n = n % m; // Reduce n by the remainder when divided by m
    } else {
      m = m % n; // Reduce m by the remainder when divided by n
    }
  }

  // At this point, one of the numbers is zero, and the other is the GCD
  // Return the non-zero value as the GCD
  if (n === 0) {
    return m;
  }
  return n;
}

// call the function using sample inputs
// console.log(calcGCDoptimal(2, 5));

// Export the function for testing
module.exports = calcGCDoptimal;
