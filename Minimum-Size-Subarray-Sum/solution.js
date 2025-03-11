/*
 * Problem: https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var left = 0;
  var sum = 0;
  var minLength = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      sum -= nums[left];
      minLength = Math.min(minLength, i - left + 1);
      left += 1;
    }
  }
  return minLength == Number.MAX_SAFE_INTEGER ? 0 : minLength;
};
