/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let res = -1
  let left = 0
  let right = nums.length - 1
  while(left <= right){
    let middle = Math.floor((left + right) / 2)
    if(nums[middle] === target){
      return res = middle
    }else if(nums[middle] < nums[right]){
      if(nums[middle] < target && target <= nums[right]){
        left = middle + 1
      }else{
        right = middle - 1
      }
    }else{
      if(nums[left] <= target && target < nums[middle]){
        right = middle - 1
      }else {
        left = middle + 1
      }
    }
  }
  return res
};
// @lc code=end

