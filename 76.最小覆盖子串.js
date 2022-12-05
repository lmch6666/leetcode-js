/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let res= '';
  let maxlen = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let count = 0;
  let map = new Map();

  for(let i = 0; i < t.length; i++){
    map.set(t[i], (map.get(t[i]) || 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if(map.has(char)){
      if(map.get(char) > 0){
        count++
      }
      map.set(char, map.get(char) - 1)
    }

    while(count == t.length){
      let st = left
      let ed = i
      if(ed - st + 1 < maxlen){
        res = s.slice(st, ed + 1)
        maxlen = ed - st + 1
      }
      let char = s[left]
      if(map.has(char)){
        if(map.get(char) === 0){
          count--
        }
        map.set(char, (map.get(char) || 0) + 1)
      }
      left++
    }
  }
};
// @lc code=end

