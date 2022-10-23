/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let left = target - nums[i]
    let findidx = nums.findIndex(left)
    if(findidx !== left){
      ans.push([i, left])
    }
  }

  return ans
};
// @lc code=end

