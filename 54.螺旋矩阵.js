/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = [];
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;

  while (left < right && top < bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }

    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }

    left++
    top++
    right--
    bottom--
  }

  if (left === right) {
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][left]);
    }
  }
  if (top == bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
  }
};
// @lc code=end

