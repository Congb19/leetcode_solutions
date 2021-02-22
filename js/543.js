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
// ���Խ���������ֱ��ת��Ϊ���������� ÿ���ڵ�����������ĸ߶Ⱥ� �����ֵ��

var diameterOfBinaryTree = function (root) {
  let result = 0;
  deep(root);
  return result;

  function deep(root) {
    if (!root) return -1;
    let left = root.left ? deep(root.left) + 1 : 0;
    let right = root.right ? deep(root.right) + 1 : 0;

    result = Math.max(left + right, result);
    return Math.max(left, right);
  }
};
