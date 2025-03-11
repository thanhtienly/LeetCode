/*
 *  Problem: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var minOfMax = Number.MIN_SAFE_INTEGER;
  /* To have sum of pair min -> Sum of min value & max value -> Sort nums in asc */
  nums.sort((a, b) => a - b);

  /* Find max pair sum */
  while (left < right) {
    var sum = nums[left] + nums[right];

    minOfMax = Math.max(minOfMax, sum);

    left++;
    right--;
  }

  return minOfMax;
};
