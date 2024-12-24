// Given an integer n, write a function that returns count of trailing zeroes in n!. 
// Examples : 

// Input: n = 5
// Output: 1 
// Factorial of 5 is 120 which has one trailing 0.


function findTrailingZeros(n) {
    if (n < 0) return -1;
  
    let count = 0;
  
    for (let i = 5; n / i >= 1; i *= 5) {
      count += Math.floor(n / i);
    }
  
    return count;
  }
  
  const n = 100;
  console.log(`Count of trailing 0s in ${n}! is ${findTrailingZeros(n)}`);