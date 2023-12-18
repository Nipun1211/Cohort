/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s= str.toLowerCase();
  
  const lowercase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
 

  let start=0;
  let end= str.length-1;
  while (start<end){
    if (!lowercase.includes(s[start])){
      while(!lowercase.includes(s[start])){
        start++;
      }
    }
    if (!lowercase.includes(s[end])){
      while(!lowercase.includes(s[end])){
        end--;
      }
    }
    if (s[start]!=s[end]){
      return false;
    }
    
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
