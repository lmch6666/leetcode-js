/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 *  利用 map来保存源节点 和新创建的普通节点
 *  根据父级节点关系来动态添加源节点对应的新创建的节点
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = new Map();
    let stack = [node];
    map.set(node, new Node(node.val, []))

    while(stack.length){
      let ele = stack.pop()
      let neighbors = ele.neighbors
      for (let i = 0; i < neighbors.length; i++) {
        let node = neighbors[i]
        if(!map.has(node)){
          map.set(node, new Node(node.val, []))
          stack.push(node)
        }
        map.get(ele).neighbors.push(map.get(node))
      }
    }

    return map.get(node)
};
// @lc code=end

