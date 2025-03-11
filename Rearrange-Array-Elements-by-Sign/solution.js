/*
 * Problem: https://leetcode.com/problems/rearrange-array-elements-by-sign/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  var result = new Array(nums.length).fill(0);
  var posIndex = 0;
  var negIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[posIndex] = nums[i];
      posIndex += 2;
    } else {
      result[negIndex] = nums[i];
      negIndex += 2;
    }
  }

  return result;
};
