/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.limit = capacity
  this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let item = this.cache.get(key)
  if (item) {
    this.cache.delete(key)
    this.cache.set(key, item)
    return item
  }else{
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let item = this.cache.get(key)
  if (item) {
    this.cache.delete(key)
  }
  this.cache.set(key, value)
  if (this.cache.size > this.limit) {
    let key = this.cache.keys().next().value
    this.cache.delete(key)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

