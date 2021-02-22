/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [...Array()];
  let tower = [...Array()];
  if (root == null) return res;
  let dd = (node, d) => {
    if (node !== null) {
      while (tower.length <= d) tower.push([...Array()]);
      // console.log(tower);
      tower[d].push(node.val);
      dd(node.left, d + 1);
      dd(node.right, d + 1);
    } else return;
  };
  dd(root, 0);
  return tower;
};
