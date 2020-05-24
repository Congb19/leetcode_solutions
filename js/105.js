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
	if (preorder.length == 0) return null;
	let n = preorder.length;
	let res = new TreeNode(preorder[0]);
	let rootid = 0;
	for (let i = 0; i < n; i++) {
		if (inorder[i] == preorder[0]) {
			rootid = i;
			break;
		}
	}
	let prel = preorder.slice(1, rootid + 1);
	let inl = inorder.slice(0, rootid);
	let prer = preorder.slice(rootid + 1);
	let inr = inorder.slice(rootid + 1);
	// console.log(prel, inl, prer, inr);
	res.left = buildTree(prel, inl);
	res.right = buildTree(prer, inr);
	return res;
};
let preo = [3, 9, 20, 15, 7],
	ino = [9, 3, 15, 20, 7];
console.log(buildTree(preo, ino));
