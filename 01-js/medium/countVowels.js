/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = ['a','i','e','o','u'];

    colstr = str.replace(/[^a-z]/gi, '');

    let count = 0;
    let alphabetPattern = /^[a-zA-Z]+$/;

    for (let i = 0; i < colstr.length; i++) {
      if(alphabetPattern.test(colstr[i])){
        if (vowels.includes(colstr[i].toLowerCase())) {
            count++;
        }
    }

}

return count;
}

module.exports = countVowels;