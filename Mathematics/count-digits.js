// Given a number N, the task is to return the count of digits in this number.

function countDigit(n) {
    if (n === 0) return 1;
    let count = 0;
    while (n !== 0) {
      n = Math.floor(n / 10);
      count++;
    }
    return count;
  }
  
  const n = 345289467;
  console.log(`Number of digits: ${countDigit(n)}`);
  