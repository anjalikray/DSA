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


























//   For Example  suppose a=98 & b=56  a>b so put a= a-b and b remains same. So  a=98-56=42  & b= 56 . Since b>a, we check if b%a==0. since answer is no we proceed further. Now b>a  so  b=b-a and a remain same. So b= 56-42 = 14 & a= 42   . Since a>b, we check if a%b==0 . Now the answer is yes. So we print smaller among a and b as H.C.F . i.e. 42 is  3 times of 14  so HCF is 14. 

// likewise  when a=36  & b=60  ,here b>a  so b = 24 & a= 36 but a%b!=0.  Now a>b so a= 12 & b= 24  . and b%a==0. smaller among a and b is 12  which becomes  HCF of 36 and 60.   