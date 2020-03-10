/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 可以将二叉树的直径转换为：二叉树的 每个节点的左右子树的高度和 的最大值。

var diameterOfBinaryTree = function(root) {
    let result=0;
    deep(root);
    return result;

    function deep(root){
        if(!root)return -1;
        let left=root.left?deep(root.left)+1:0;
        let right=root.right?deep(root.right)+1:0;

        result=Math.max(left+right,result);
        return Math.max(left,right);
    }
};