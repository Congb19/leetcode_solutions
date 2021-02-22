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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var goodNodes = function (root) {
  let res = 0;
  let dd = (node, max) => {
    if (node == null) return;
    if (node.val >= max) {
      res++;
      dd(node.left, node.val);
      dd(node.right, node.val);
    } else {
      dd(node.left, max);
      dd(node.right, max);
    }
  };
  dd(root, -10001);
  return res;
};
let p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3);
console.log(goodNodes(p1));
