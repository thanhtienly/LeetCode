/*
 * Problem: https://leetcode.com/problems/find-center-of-star-graph/
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  var bucket = new Array(edges.length + 1).fill(0);

  for (let i = 0; i < edges.length; i++) {
    let points = edges[i];
    bucket[points[0] - 1] += 1;
    bucket[points[1] - 1] += 1;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] == edges.length) {
      return i + 1;
    }
  }

  return -1;
};
