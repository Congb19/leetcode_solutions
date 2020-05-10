/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var lowestCommonAncestor = function (root, p, q) {
	let res = null,
		plist = [...Array()],
		qlist = [...Array()];
	let find = (node, tar, sw) => {
		let min = 0;
		if (node === tar) {
			// console.log("find!", sw, node.val);
			if (sw) plist.push(node);
			else qlist.push(node);
			return 1;
		} else if (node === null) {
			return 0;
		} else {
			// console.log("continue!", sw, node.val);
			if (sw) plist.push(node);
			else qlist.push(node);
			let fdl = find(node.left, tar, sw);
			let fdr = find(node.right, tar, sw);
			if (!fdl && !fdr) {
				if (sw) plist.pop();
				else qlist.pop();
			} else return 0;
		}
	};
	find(root, p, 1);
	find(root, q, 0);
	plist.reverse();
	qlist.reverse();
	// console.log("p", plist);
	// console.log("q", qlist);
	for (let i = 0; i < plist.length; i++) {
		for (let j = 0; j < qlist.length; j++) {
			if (plist[i].val == qlist[j].val) {
				console.log("go", plist[i].val);
				return plist[i];
			}
		}
	}
	return root;
};
let p1 = new TreeNode(1);
p1.left = new TreeNode(4);
p1.right = new TreeNode(5);
console.log(lowestCommonAncestor(p1, p1.left, p1.right));
