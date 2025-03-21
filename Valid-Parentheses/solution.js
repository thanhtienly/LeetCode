/*
 * Problem: https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isMatch = function (char1, char2) {
  if (
    (char1 == "(" && char2 == ")") ||
    (char1 == "[" && char2 == "]") ||
    (char1 == "{" && char2 == "}")
  ) {
    return true;
  }
  return false;
};

var isValid = function (s) {
  var stack = [];
  var stackLength;
  for (let i = 0; i < s.length; i++) {
    stackLength = stack.length;
    if (stackLength == 0) {
      stack.push(s[i]);
    } else {
      if (isMatch(stack[stackLength - 1], s[i])) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length == 0;
};
