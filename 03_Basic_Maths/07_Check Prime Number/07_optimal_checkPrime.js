function checkPrimeOptimal(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }

  if (count === 2) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// call the function using sample input
// console.log(checkPrimeOptimal(6));

// Export the function for testing
module.exports = checkPrimeOptimal;
