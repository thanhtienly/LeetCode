/*
 * Problem: https://leetcode.com/problems/battleships-in-a-board/description/?envType=problem-list-v2&envId=array
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  var counter = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      /* If current cell is X */
      if (board[i][j] == "X") {
        /* Check if upcell of current cell is X or not, if it's X, we can join 2 point, don't increase counter */
        if (i == 0 || board[i - 1][j] == ".") {
          /* Check if leftcell of current cell is X or not, if it's X, we can join 2 point, don't increase counter */
          if (j == 0 || board[i][j - 1] == ".") {
            counter++;
          }
        }
      }
    }
  }
  return counter;
};
