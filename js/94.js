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
var inorderTraversal = function(root) {
    let res=[...Array()];
    let dd=(p)=> {
        if (p===null) return;
        dd(p.left);
        res.push(p.val);
        dd(p.right);
    }
    dd(root);
    return res;
};