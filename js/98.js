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
var isValidBST = function (root) {
  let res = true;
  //˼·1 ֱ�ӵݹ���
  // let dd=(p, l, r)=> {
  //     if (p===null) return;
  //     dd(p.left, l, p.val);
  //     if (p.left===null&&p.right===null) {
  //         res=res;
  //     }
  //     else if (p.left===null) {
  //         if (p.right.val<=p.val) res=false;
  //         if (p.right.val>=r) res=false;
  //     }
  //     else if (p.right===null) {
  //         if (p.left.val>=p.val) res=false;
  //         if (p.left.val<=l) res=false;
  //     }
  //     else {
  //         if (p.right.val<=p.val) res=false;
  //         if (p.right.val>=r) res=false;
  //         if (p.left.val>=p.val) res=false;
  //         if (p.left.val<=l) res=false;
  //     }
  //     dd(p.right, p.val, r);
  // }
  // dd(root, -9999999999999999999999, 9999999999999999999999);
  //˼·2 ��������������
  let arr = [...Array()];
  let dd = (p) => {
    if (p === null) return;
    dd(p.left);
    arr.push(p.val);
    dd(p.right);
  };
  dd(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }

  return res;
};
console.log(Number.MAX_VALUE, Number.MIN_VALUE);
