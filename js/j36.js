/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
	if (root == null) return null;
	//思路1 每个节点的left要指向左子树的最大值 right反之
	//递归处理
	//啊  卡在45/50 不知道为啥
	// let nodes = [...Array()];
	// let save = (node) => {
	// 	if (node !== null) {
	// 		nodes.push(node);
	// 		if (node.left !== null) save(node.left);
	// 		if (node.right !== null) save(node.right);
	// 	}
	// };
	// save(root);
	// let dd = (node, lr) => {
	// 	if (node == null) return null;
	// 	else if (node.left == null && node.right == null) {
	// 		return node;
	// 	} else {
	// 		if (node.left !== null) node.left = dd(node.left, 1);
	// 		if (node.right !== null) node.right = dd(node.right, 2);
	// 		switch (lr) {
	// 			case 0:
	// 				break;
	// 			case 1:
	// 				if (node.right !== null) return dd(node.right, 1);
	// 				else return node;
	// 			case 2:
	// 				if (node.left !== null) return dd(node.left, 2);
	// 				else return node;
	// 		}
	// 	}
	// };
	// dd(root, 0);
	// for (let i = 0; i < nodes.length; i++) {
	// 	if (nodes[i].left !== null) nodes[i].left.right = nodes[i];
	// 	if (nodes[i].right !== null) nodes[i].right.left = nodes[i];
	// }
	// while (root.left !== null) {
	// 	root = root.left;
	// }
	// let p = root;
	// while (p.right !== null) {
	// 	p = p.right;
	// }
	// root.left = p;
	// p.right = root;
	// return root;
	//思路2 直接中序遍历
	let nodes = [...Array()];
	let dd = (node) => {
		if (node == null) return;
		dd(node.left);
		nodes.push(node);
		dd(node.right);
	};
	dd(root);
	for (let i = 0; i < nodes.length - 1; i++) {
		nodes[i].right = nodes[i + 1];
		nodes[i + 1].left = nodes[i];
	}
	nodes[0].left = nodes[nodes.length - 1];
	nodes[nodes.length - 1].right = nodes[0];
	return nodes[0];
};
