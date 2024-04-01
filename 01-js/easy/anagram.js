/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if  (str1.length !== str2.length) {
    return false;
  }

  
  let colstr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  let cleanedStr1 = colstr1.replace(/[^\w\s]/gi, '');

  let colstr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
  let cleanedStr2 = colstr2.replace(/[^\w\s]/gi, '');

  let sortedStr1 = cleanedStr1.split('').sort().join('');
  let sortedStr2 = cleanedStr2.split('').sort().join('');

  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }

}

module.exports = isAnagram;
