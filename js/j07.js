/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
	//同105
	let n = preorder.length;
	if (n == 0) return null;
	let res = new TreeNode(preorder[0]);
	if (n == 1) return res;
	let s = 0;
	for (let i = 0; i < n; i++) {
		if (inorder[i] == preorder[0]) {
			s = i;
			break;
		}
	}
	let lp = preorder.slice(1, s + 1),
		li = inorder.slice(0, s),
		rp = preorder.slice(s + 1, preorder.length),
		ri = inorder.slice(s + 1, inorder.length);
	res.left = buildTree(lp, li);
	res.right = buildTree(rp, ri);
	return res;
};
let preo = [3, 9, 20, 15, 7],
	ino = [9, 3, 15, 20, 7];
console.log(buildTree(preo, ino));
