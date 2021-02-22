/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  //先序遍历结果数组对称即为true  192/195后发现逻辑有问题。
  // let bl = (node) => {
  // 	let res = [...Array()];
  // 	if (node !== null) {
  // 		if (node.left !== null) res.push(...bl(node.left));
  // 		else res.push(null);
  // 		res.push(node.val);
  // 		if (node.right !== null) res.push(...bl(node.right));
  // 		else res.push(null);
  // 	} else res.push(null);
  // 	return res;
  // };
  // let a = bl(root);
  // for (let i = 0; i < a.length / 2; i++) {
  // 	if (a[i] !== a[a.length - i - 1]) return false;
  // }
  // return true;
  //递归
  if (root == null) return true;
  let dd = (l, r) => {
    if (l == null && r == null) return true;
    if (l == null || r == null) return false;
    if (l.val !== r.val) return false;
    let res1 = dd(l.left, r.right);
    let res2 = dd(l.right, r.left);
    return res1 && res2;
  };
  return dd(root.left, root.right);
};
