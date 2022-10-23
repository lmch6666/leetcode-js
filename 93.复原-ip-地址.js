/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = [];
  let slen = s.length;
  if(slen < 4 || slen > 12){
    return []
  }
  
  if(slen == 4){
    res.push(s.split('').join('.'));
    return res
  }

  function huisu(str, sidx, path) {
    if(path.length == 4 && sidx == slen){
      res.push(path.join('.'))
      return
    }
    for (let i = sidx + 1; i <= slen; i++) {
        let s = str.substring(sidx, i);
        if(vaildate(s)){
          path.push(s)
          huisu(str, i, path)
          path.pop()
        }
    }
  }

  function vaildate(str) {
    if(str.length > 1 && str[0] == '0' || str.length == 0){
      return false
    }
    let num = parseInt(str);
    if(isNaN(num)){
      return false
    }
    if(num > 255 || num < 0){
      return false
    }
    return true
  }

  huisu(0);
};



// @lc code=end

