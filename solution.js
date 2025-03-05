/*
 * Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=problem-list-v2&envId=array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  var leftFound = binarySearch(nums, target, false);
  var rightFound = binarySearch(nums, target, true);

  return [leftFound, rightFound];
};

var binarySearch = function (nums, target, searchDirection) {
  /*
   *Search direction has value of false mean search sub array on the left
   *Otherwise search sub array on the right
   */
  var start = 0;
  var end = nums.length - 1;
  /* In the case target number can not be found, foundIndex holds value of -1 */
  var foundIndex = -1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);

    /* Value of mid position smaller than target, continue search on sub array from mid + 1 to end */
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      /* Value of mid position larger than target, continue search on sub array from start to mid - 1 */
      end = mid - 1;
    } else {
      /* Target number have been found at mid, continue use linear search on the left (or right) to find first and last position  */
      foundIndex = mid;
      if (searchDirection == false) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return foundIndex;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
