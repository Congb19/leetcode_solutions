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
int longestSubsequence(vector<int>& arr, int difference) {
    int res=1;
    // 思路1 仍然是暴力
    // 超时了 进行优化，已经进入最长子序列的数给个标记（15000），就不必再从它开始了
    // 还超时 再优化，如果当前的数加dif超出范围了，就直接跳出好了
    // 还是超时
    vector<int> t;
    vector<int> k=arr;
    for (int i = 0; i < arr.size(); ++i) {
        if (k[i]==15000) continue;
        t.push_back(arr[i]);
        for (int j = i+1; j < arr.size(); ++j) {
            if (arr[j]==t.back()+difference) {
                t.push_back(arr[j]);
                k[j]=15000;
            }
            if (t.back()+difference>10000||t.back()+difference<-10000) break;
        }
        if (t.size()>res) res=t.size();
        t.clear();
    }
    return res;
}

int main() {
    vector<int> arr={1,2,3,4,1,2,3,4,5,6};
    int d=1;
    cout<<longestSubsequence(arr, d);

    return 0;
}
