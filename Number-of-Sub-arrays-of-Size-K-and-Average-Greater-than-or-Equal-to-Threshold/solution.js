/*
 * Problem: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  var head = 0;
  var tail = 0;
  var sum = 0;
  var result = 0;

  while (tail < arr.length) {
    sum += arr[tail];
    if (tail - head >= k - 1) {
      if (sum >= k * threshold) {
        result += 1;
      }
      sum -= arr[head];
      head++;
    }
    tail++;
  }
  return result;
};
