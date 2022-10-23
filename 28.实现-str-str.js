/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let len = needle.length;
  let i = 0;
  let l = 0;
  let r = l;
  for(let j = 0; j < haystack.length; j++) {
    l = j
    r = j
    i = 0
    if(haystack[r] === needle[i]) {
      while(haystack[r] === needle[i++]){
        r++;
        if(i === len) {
          return l;
        }
      }
    } 
  }
  return -1;
};
// @lc code=end

