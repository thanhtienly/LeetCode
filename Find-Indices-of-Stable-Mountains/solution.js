/*
 * Problem: https://leetcode.com/problems/find-indices-of-stable-mountains
 */

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  var result = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      result.push(i);
    }
  }
  return result;
};
