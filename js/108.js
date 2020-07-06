/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	let bst = (left, right) => {
		if (left > right) return null;
		let p = Math.floor((left + right) / 2);
		let root = new TreeNode(nums[p]);
		root.left = bst(left, p - 1);
		root.right = bst(p + 1, right);
		return root;
	};
	bst(0, nums.length - 1);
};
