/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  let depth = 0;
  let stack = [root]

  while(stack.length){
    let size = stack.length;
    depth++
    for (let i = 0; i < size; i++) {
      let node = stack.pop()

      if(node.left){
        stack.push(node.left)
      }
      if(node.right){
        stack.push(node.right)
      }

      if(node.left == null && node.right == null){
        return depth
      }
    }
  }
  return depth
};
// @lc code=end

