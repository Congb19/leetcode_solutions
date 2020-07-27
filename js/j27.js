/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
	//递归 每个节点左右互换。
	let dd = (node) => {
		if (node == null) return;
		else {
			let t = node.left;
			node.left = node.right;
			node.right = t;
			dd(node.left);
			dd(node.right);
		}
	};
	dd(root);
	return root;
};
