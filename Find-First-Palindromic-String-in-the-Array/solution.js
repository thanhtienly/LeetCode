/*
 * Problem: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindromic(words[i])) {
      return words[i];
    }
  }
  return "";
};

var isPalindromic = function (word) {
  if (word.length == 0 || word.length == 1) {
    return true;
  }

  var left = 0;
  var right = word.length - 1;

  /* Other solution: use recursion, but maybe need more time to complete */
  while (left < right) {
    if (word[left] != word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
