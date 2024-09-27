// Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome.

function checkPalindrome(n) {
  let reverse = 0;
  let temp = n;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse === n;
}

const n = 7007;
if (checkPalindrome(n)) {
  console.log("Yes");
} else {
  console.log("No");
}
