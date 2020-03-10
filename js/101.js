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
var isSymmetric = function(root) {
    let deep = (a, b) => {
        if (a === null && b === null) return true;
        if (a === null || b === null) return false;
        if (a.val===b.val&&deep(a.left, b.right)&&deep(a.right, b.left)) return true;
        return false;
    }
    return deep(root, root);
};