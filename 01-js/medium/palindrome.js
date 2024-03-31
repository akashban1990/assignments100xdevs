/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  if (str.length == 0) {
    return true;
}

  let colstr = str.replace(/[^a-z]/gi, '');
  let cleanedStr = colstr.replace(/[^\w\s]/gi, '');

  let reversedStr = cleanedStr.split('').reverse().join('');

  if (cleanedStr === reversedStr) {
    return true;
} else {
    return false;
}
}

module.exports = isPalindrome;


/*
test_str = "badda!";
console.log(isPalindrome(test_str)); // true
*/