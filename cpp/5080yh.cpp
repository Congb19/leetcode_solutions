//
// Created by Congb on 2019/10/5.
//


#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#include <sstream>
#define ture true
using namespace std;
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
vector<int> temp1, temp2;
void bl1(TreeNode *t) {
    if (t!=NULL) {
        temp1.push_back(t->val);
        bl1(t->left);
        bl1(t->right);
    }
}
void bl2(TreeNode *t) {
    if (t!=NULL) {
        temp2.push_back(t->val);
        bl2(t->left);
        bl2(t->right);
    }
}
bool twoSumBSTs(TreeNode* root1, TreeNode* root2, int target) {
    bool res=false;
    vector<int> p1, p2;
    bl1(root1);
    bl2(root2);
    p1=temp1;
    p2=temp2;
    for (int i = 0; i < p1.size(); ++i) {
        cout<<p1[i]<<endl;
    }
    for (int i = 0; i < p2.size(); ++i) {
        cout<<p2[i]<<endl;
    }
    sort(p1.begin(),p1.end());
    sort(p2.begin(),p2.end());
    for (int k = 0; k < p1.size(); ++k) {
        for (int l = 0; l < p2.size(); ++l) {
            if (p1[k]+p2[l]==target) res=true;
        }
    }
    return res;
}

int main() {
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    string k="237";
    int h=-59;


    return 0;
}
