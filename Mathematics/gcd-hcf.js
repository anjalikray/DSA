// GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them. 

// JS program to find GCD or HCF of two numbers

// Recursive function to return gcd of a and b
function gcd(a, b) {
    // Everything divides 0
    if (a === 0) return b;
    if (b === 0) return a;
  
    // base case
    if (a === b) return a;
  
    // a is greater
    if (a > b) return gcd(a - b, b);
    return gcd(a, b - a);
  }
  
  // Driver program to test above function
  const a = 98, b = 56;
  console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);