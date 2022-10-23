/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let queue = [];
  let val = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(queue.length === k){
      pop(num)
      push(num)
      maxnum();
      result.push(val)
      continue
    }
    push(num)
  }

  function pop(num) {
    if(queue.length !== 0 && queue[0] == num){
      queue.shift()
    }
  }
  
  function push(val) {
    if(queue.length !== 0 && queue[0] < val){
      while(queue[0] < val){
        queue.pop()
      }
    }
    queue.push(val)
  }
  
  function maxnum() {
    return queue[0]
  }
  return result
};


// @lc code=end

