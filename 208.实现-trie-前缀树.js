/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  // 字典树  节点部分属性构成
  // isend 表 是否是单词结尾
  // charlist 字符表  保存着每个 字符节点
  this.isend = false;
  this.charlist = [];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;
  for (let i = 0; i < word.length; i++) {
    if (node.charlist[word[i].charCodeAt() - 97] == null) {
      node.charlist[word[i].charCodeAt() - 97] = new Trie()
    }
    node = node.charlist[word[i].charCodeAt() - 97]
  }
  node.isend = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;
  for (let i = 0; i < word.length; i++) {
    node = node.charlist[word[i].charCodeAt() - 97]
    if (node == null) {
      return false
    }
  }
  return node.isend
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;
  for (let i = 0; i < prefix.length; i++) {
    node = node.charlist[prefix[i].charCodeAt() - 97]
    if (node === undefined) {
      return false
    }
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

