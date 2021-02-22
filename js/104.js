/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  let deep = (node, d) => {
    if (node !== null) {
      if (res < d + 1) res = d + 1;
      deep(node.left, d + 1);
      deep(node.right, d + 1);
    }
    return;
  };
  deep(root, 0);
  return res;
};
