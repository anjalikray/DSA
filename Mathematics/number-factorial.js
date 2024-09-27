function factorial(n) { 
    if (n == 0) 
        return 1; 
    let i = n, fact = 1; 
    while (Math.floor(n / i) != n) { 
      fact = fact * i; 
      i--; 
    } 
    return fact; 
  } 
  
  let num = 5; 
  console.log(`Factorial of ${num} is ${factorial(num)}`);
  