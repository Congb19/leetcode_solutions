//
// Created by Congb on 2019/9/25.
//

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int k[100001]={}, i=0;

    void dg (TreeNode* p) {
        if(p==NULL) {
            return;
        }
        dg(p->left);

        k[i] = p->val;
        i++;

        dg(p->right);
    }

    int rangeSumBST(TreeNode* root, int L, int R) {
        int sum = 0;
        TreeNode *p = root;
        dg(p);
        int l = sizeof(k) / sizeof(k[0]);
        for(int j=0;j<l;j++) {
            if (k[j]>=L&&k[j]<=R) sum+=k[j];
        }

        return sum;
    }
};