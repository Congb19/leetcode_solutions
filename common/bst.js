class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(key) {
		// 插入数据
		var newNode = new Node(key);
		if (this.root == null) {
			this.root = newNode;
		} else {
			var current = this.root;
			while (true) {
				if (key < current.key) {
					if (current.left) {
						current = current.left;
					} else {
						current.left = newNode;
						break;
					}
				} else if (key > current.key) {
					if (current.right) {
						current = current.right;
					} else {
						current.right = newNode;
						break;
					}
				}
			}
		}
	}

	centerSort(node, arr = []) {
		// 中序排列
		if (node) {
			this.centerSort(node.left, arr);
			arr.push(node.key);
			this.centerSort(node.right, arr);
		}
		return arr;
	}

	prevSort(node, arr = []) {
		// 前序排列
		if (node) {
			arr.push(node.key);
			this.prevSort(node.left, arr);
			this.prevSort(node.right, arr);
		}
		return arr;
	}

	nextSort(node, arr = []) {
		// 后续排列
		if (node) {
			this.nextSort(node.left, arr);
			this.nextSort(node.right, arr);
			arr.push(node.key);
		}
		return arr;
	}

	getMin(node) {
		// 获取二叉树的最小值
		node = node || this.root;
		while (node.left != null) {
			node = node.left;
		}
		return node.key;
	}

	getMax(node) {
		//获取二叉树最大值
		node = node || this.root;
		while (node.right != null) {
			node = node.right;
		}
		return node.key;
	}

	find(key) {
		// 查找 给定的值
		var node = this.root;
		while (node != null) {
			if (key < node.key) {
				node = node.left;
			} else if (key > node.key) {
				node = node.right;
			} else {
				return node;
			}
		}
		return null;
	}

	remove(key) {
		// 删除给定的值
		this.root = this.removeNode(this.root, key);
	}

	removeNode(node, key) {
		// 真正删除的函数
		if (node == null) {
			return null;
		}
		if (key < node.key) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left == null && node.right == null) {
				node = null;
				return node;
			} else if (node.left == null) {
				return node.right;
			} else if (node.right == null) {
				return node.left;
			} else {
				var minNode = this.getMin(node.right);
				node.key = minNode.key;
				node.count = minNode.count;
				node.right = this.removeNode(node.right, minNode.key);
				return node;
			}
		}
	}
}
