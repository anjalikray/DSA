// LCM (Least Common Multiple) of two numbers is the smallest number which can be divided by both numbers

// JS program to find LCM of two numbers

// Recursive function to return gcd of a and b
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  // Function to return LCM of two numbers
  function lcm(a, b) {
    return (a / gcd(a, b)) * b;
  }
  
  // Driver program to test above function
  const a = 15;
  const b = 20;
  console.log(`LCM of ${a} and ${b} is ${lcm(a, b)}`);































//   a x b = LCM(a, b) * GCD (a, b)

//    LCM(a, b) = (a x b) / GCD(a, b)