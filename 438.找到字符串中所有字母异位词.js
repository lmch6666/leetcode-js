/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let map = Array.from({length: 26}).fill(0)
  let ans = [];

  for (let i = 0; i < p.length; i++) {
    map[p[i].charCodeAt(0) - 97]++
  }
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    let strtoascii = s[i].charCodeAt(0) - 97
    if(map[strtoascii] > 0){
      map[strtoascii]--
    }else{
      while(map[strtoascii] <=0){
        map[s[left].charCodeAt() - 97]++
        left++
      }
      map[strtoascii]--
    }
    if(i - left + 1 === p.length){
      ans.push(left)
    }
  }

  return ans
};
// @lc code=end

