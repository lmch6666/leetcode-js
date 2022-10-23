/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = s.slice(0, 1)
  let max = res.length
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        let splitt = s.slice(i, j)
        if(splitt.length > max ) {
          res = splitt
          max = splitt.length
        }
      }
    }
  }


  function isPalindrome(str) {
    return str === str.split('').reverse().join('')
  }

};
// @lc code=end

