//
// Created by Congb19 on 2019/9/29.
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
int maxArea(vector<int>& height) {
    int res;
    int t=0;
    int max=0;
    //˼·1 ����ѭ���˷������ֵ��n?
//    for (int i = 0; i < height.size()-1; ++i) {
//        for (int j = i+1; j < height.size(); ++j) {
//            t=min(height[i], height[j])*(j-i);
//            max=t>max?t:max;
//        }
//    }
//    res=max;
    //˼·2 �Ż�һ�£������࿪ʼ�ƶ����ܿ������������ٵķ�ʽ�����Ƕ�̬�滮��
    int q=0, e=height.size()-1;
    while (q<e) {
        t=min(height[q], height[e])*(e-q);
        max=t>max?t:max;
        if (height[q]>height[e]) e--;
        else q++;
    }
    res=max;
    return res;
}

int main() {
    string s="ab";
    string p=".*";

    string s1="aabbbbbbb";
    string s2="aab**.*";
    int k=123321;

    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << maxArea(h) << endl;
    return 0;
}
