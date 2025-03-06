/*
 * Problem: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  /* Deep copy nums to new variable sortArray */
  var sortArray = [...nums];

  /* Sort copy array in asc order  */
  sortArray = sortArray.sort((a, b) => a - b);
  /* Using to map each item as a key, and first index of it as a value */
  var numDict = {};
  var currNum = undefined;
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] != currNum) {
      currNum = sortArray[i];
      numDict[currNum] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    var index = numDict[nums[i]];
    nums[i] = index;
  }

  return nums;
};
