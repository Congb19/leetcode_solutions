function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let res = false;
  let dd = (node, n) => {
    // console.log(node, n);
    if (res) return;
    if (node !== null) {
      n += node.val;
      if (node.left == null && node.right == null) {
        if (n == sum) res = true;
      }
      if (node.left !== null) {
        dd(node.left, n);
      }
      if (node.right !== null) {
        dd(node.right, n);
      }
    } else {
      return;
    }
  };
  dd(root, 0);
  return res;
};
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
console.log(hasPathSum(p, 4));
