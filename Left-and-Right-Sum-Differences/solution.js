/*
 * Problem: https://leetcode.com/problems/left-and-right-sum-differences/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  var sum = 0;
  var leftSumArr = [0];
  for (let i = 0; i < nums.length; i++) {
    leftSumArr.push(leftSumArr[i] + nums[i]);
    sum += nums[i];
  }

  nums = nums.map((item, index) =>
    Math.abs(sum - item - 2 * leftSumArr[index])
  );
  return nums;
};
