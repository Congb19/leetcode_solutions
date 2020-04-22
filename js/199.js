/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) return [];
	let res = [...Array()];
	let tower = [...Array()];
	let dd = (node, d) => {
		if (d >= tower.length) {
			tower.push([]);
		}
		if (node.right) {
			dd(node.right, d + 1);
		}
		tower[d].push(node.val);
		if (node.left) {
			dd(node.left, d + 1);
		}
	};
	dd(root, 0);
	// console.log(tower);
	tower.forEach((element) => {
		if (element.length > 0) res.push(element[0]);
	});
	return res;
};
