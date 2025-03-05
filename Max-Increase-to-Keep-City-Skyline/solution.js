/*
 * Problem: https://leetcode.com/problems/max-increase-to-keep-city-skyline/?envType=problem-list-v2&envId=array
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  var totalIncrease = 0;
  var rowHeightArray = [];
  var colHeightArray = [];

  for (let i = 0; i < grid.length; i++) {
    var rowMaxHeight = findRowMaxHeight(grid, i);
    rowHeightArray.push(rowMaxHeight);
  }

  for (let i = 0; i < grid.length; i++) {
    var colMaxHeight = findColMaxHeight(grid, i);
    colHeightArray.push(colMaxHeight);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      /*
       * To keep the skyline, current building height should increase but not higher than its colMaxHeight or rowMaxHeight
       * So the increment is min(rowHeight, colHeight) - grid[i][j]
       */
      var increase =
        colHeightArray[j] > rowHeightArray[i]
          ? rowHeightArray[i] - grid[i][j]
          : colHeightArray[j] - grid[i][j];
      totalIncrease += increase;
    }
  }

  return totalIncrease;
};

/* Function to find max height of Row at colIndex*/
var findRowMaxHeight = function (grid, rowIndex) {
  var maxHeight = grid[rowIndex][0];
  for (let i = 1; i < grid.length; i++) {
    if (maxHeight < grid[rowIndex][i]) {
      maxHeight = grid[rowIndex][i];
    }
  }
  return maxHeight;
};

/* Function to find max height of Col at colIndex*/
var findColMaxHeight = function (grid, colIndex) {
  var maxHeight = grid[0][colIndex];
  for (let i = 1; i < grid.length; i++) {
    if (maxHeight < grid[i][colIndex]) {
      maxHeight = grid[i][colIndex];
    }
  }
  return maxHeight;
};
