/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 
 * 0 1 2 3 4 5 6 7 8 9 10
 * 单调栈保存数组索引 来计算 水位高度 以及 水位宽度
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let stack = [0];
  let result = 0;
  for (let i = 1; i < height.length; i++) {
    while(stack && height[i] > height[stack[stack.length - 1]]){
       let removeidx = stack.pop()
        if(stack.length){
          let waterHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[removeidx]
          let waterWidth = i - stack[stack.length - 1] - 1
          result += waterHeight * waterWidth
        }
    }
    stack.push(i)
  }

  return result
};
// @lc code=end

