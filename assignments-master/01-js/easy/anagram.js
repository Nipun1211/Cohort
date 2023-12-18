/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length != str2.length) {
    return false;
  }
  let s1= str1.toUpperCase();
  let s2= str2.toUpperCase();

  let map = new Map();
  
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }


  for (let i = 0; i < s2.length; i++) {
    if (!map.has(s2[i]) || map.get(s2[i]) === 0) {
      return false;
    }
    map.set(s2[i], map.get(s2[i]) - 1);
  }
  
  return true;
}
    // if (str1.length != str2.length)
    //     return false;
   

    // str1.split('').sort().join('');
    // str2.split('').sort().join('');
   
   
    // for (let i = 0; i < str1.length; i++){
    //     if (str1[i] != str2[i]){
    //         return false;
    //     }}
    // return true;


module.exports = isAnagram;
