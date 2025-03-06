/*
 * Problem: https://leetcode.com/problems/minimum-operations-to-make-array-equal/
 */

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  if (n % 2 == 0) {
    return (n * n) / 4;
  }

  return (n * n - 1) / 4;
};
