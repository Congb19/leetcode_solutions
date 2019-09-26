//
// Created by Congb on 2019/9/26.
//
#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;


struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
    if (t1&&t2) {
        t1->val+=t2->val;
        t1->left=mergeTrees(t1->left, t2->left);
        t1->right=mergeTrees(t1->right, t2->right);
        return t1;
    }
    else if(t1==NULL) {
        return t2;
    }
    else return t1;
}

int main() {

    cout << "Ã»ÓÐ²âÊÔ" << endl;
    return 0;
}

