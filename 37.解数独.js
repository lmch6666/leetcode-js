/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let rowlen = board.length - 1;
  let collen = board.length - 1;
  function back() {
    for (let i = 0; i <= rowlen; i++) {
      for (let j = 0; j <= collen; j++) {
        if (board[i][j] === '') {
          for (let k = 1; k < 10; k++) {
            if (valid(board, i, j, k)) {
              board[i][j] = k
              let flag = back()
              if(flag){
                return true
              }
              board[i][j] = '.'
            }
          }
          return false
        }
      }
    }
    return true
  }
  back()
};



function valid(map, row, col, val) {
  for (let i = 0; i < map[row].length; i++) {
    if (map[row][i] == val) {
      return false
    }
  }

  for (let i = 0; i < map.length; i++) {
    if (map[i][col] == val) {
      return false
    }
  }

  let r3x3 = Math.floor(row / 3) * 3
  let c3x3 = Math.floor(col / 3) * 3

  for (let i = r3x3; i < r3x3 + 3; i++) {
    for (let j = c3x3; j < c3x3 + 3; j++) {
      if (map[i][j] == val) {
        return false
      }
    }
  }
  return true
}

// @lc code=end

