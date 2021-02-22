/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A == null || B == null) return false;
  //1 强行递归 最后47/48
  // let res = false;
  // let check = (a, b) => {
  // 	let res1 = true,
  // 		res2 = true;
  // 	if (b == null) return true;
  // 	if (a == null) return false;
  // 	if (a.val == b.val) {
  // 		if (a.left == null && b.left !== null) return false;
  // 		if (a.right == null && b.right !== null) return false;
  // 		if (b.left == null && b.right == null) return true;
  // 		if (b.left !== null) res1 = check(a.left, b.left);
  // 		if (b.right !== null) res2 = check(a.right, b.right);
  // 		console.log(a.val, b.val, 1);
  // 		console.log("res: ", res1 && res2);
  // 		if (res1 && res2) res = true;
  // 		return res1 && res2;
  // 	} else {
  // 		res1 = check(a.left, B);
  // 		res2 = check(a.right, B);
  // 		console.log(a.val, b.val, 2);
  // 		console.log("res: ", res1 || res2);
  // 		if (res1 || res2) res = true;
  // 		return res1 || res2;
  // 	}
  // };
  // check(A, B);
  // return res;
  //2 帅气的递归
  let dd = (a, b) => {
    if (b == null) return true;
    if (a == null) return false;
    return a.val == b.val && dd(a.left, b.left) && dd(a.right, b.right);
  };
  return dd(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
  //3 先序遍历
  //如果A的先序遍历结果是A的任意子节点的先序遍历结果的子数组 则true
  //这个逻辑有问题。反例：A 10 12 6 8 3 11 B 10 12 6 8
  // let res = false;
  // //bl 先序遍历
  // let bl = (node) => {
  // 	let res = [...Array()];
  // 	res.push(node.val);
  // 	if (node.left !== null) res.push(...bl(node.left));
  // 	if (node.right !== null) res.push(...bl(node.right));
  // 	return res;
  // };
  // let bb = bl(B);
  // //cc 数组对比
  // let cc = (a1, a2) => {
  // 	for (let i = 0; i < a1.length; i++) if (a1[i] !== a2[i]) return false;
  // 	return true;
  // };
  // //check  检查是否子数组
  // let check = (aa, bb) => {
  // 	console.log(aa, bb);
  // 	for (let i = 0; i <= aa.length - bb.length; i++) {
  // 		console.log(aa.slice(i, i + bb.length), bb);
  // 		if (cc(aa.slice(i, i + bb.length), bb)) return true;
  // 	}
  // };
  // //dd 递归检查
  // let dd = (a) => {
  // 	if (res) return;
  // 	let aa = bl(a);
  // 	if (check(aa, bb)) res = true;
  // 	else {
  // 		if (a.left !== null) dd(a.left);
  // 		if (a.right !== null) dd(a.right);
  // 	}
  // };
  // dd(A);
  // return res;
};
