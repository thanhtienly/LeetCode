/*
 * Problem: https://leetcode.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var maxArea = 0;
  var i = 0;
  var j = height.length - 1;

  /* Use 2 pointers to improve time complexity from O(n^2) -> O(n) */
  while (i < j) {
    maxArea =
      maxArea < Math.min(height[i], height[j]) * (j - i)
        ? Math.min(height[i], height[j]) * (j - i)
        : maxArea;

    /* Keep the taller height, move shorter height to next height */
    if (height[j] >= height[i]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
