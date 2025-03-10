/*
 * Problem: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  var x_points = [];
  for (let i = 0; i < points.length; i++) {
    x_points.push(points[i][0]);
  }
  x_points.sort((a, b) => a - b);

  var widest = 0;
  for (let i = 0; i < x_points.length - 1; i++) {
    if (x_points[i + 1] - x_points[i] > widest) {
      widest = x_points[i + 1] - x_points[i];
    }
  }

  return widest;
};
