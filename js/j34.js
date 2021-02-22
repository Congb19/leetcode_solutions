/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [...Array()];
  if (root == null) return [...Array()];
  let dd = (node, t, s) => {
    if (node !== null) {
      t.push(node.val);
      if (node.left == null && node.right == null) {
        if (s + node.val == sum) res.push([...t]);
      } else {
        dd(node.left, t, s + node.val);
        dd(node.right, t, s + node.val);
      }
      t.pop();
    }
  };
  dd(root, [...Array()], 0);
  return res;
};
