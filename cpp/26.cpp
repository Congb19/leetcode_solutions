//
// Created by Congb19 on 2019/10/11.
//


#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#include <sstream>
#include <ctime>
#define ture true
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
int removeDuplicates(vector<int>& nums) {
    int res=1;
    if (nums.size()==1) return res;
    for (int i = 1; i < nums.size(); ++i) {
        if (nums[i]==nums[i-1]) {
            nums.erase(nums.begin()+i);
            i--;
        }
    }
//    for (int j = 0; j < nums.size(); ++j) {
//        cout<<nums[j]<<" ";
//    }
    res=nums.size();
    return res;
}

int main() {
    vector<int> arr={1,1,1,2,3,3,3,3,3,4,4,6};
    int d=1;
    cout<<"\n"<<removeDuplicates(arr);

    return 0;
}
