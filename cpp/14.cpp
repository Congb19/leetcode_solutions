//
// Created by Congb on 2019/9/30.
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
string longestCommonPrefix(vector<string>& strs) {
    if (strs.size()==0) return "";
    string res="";
    //˼·1 ����һλһλ�Ա� ������������ɨ�� n*min(m)
    char t=strs[0][0];
    int minl=strs[0].length();
    int brk=0;
    for (int k = 1; k < strs.size(); ++k) {
        if(strs[k].length()<minl) minl=strs[k].length();
    }
    int ws=minl;
    for (int i = 0; i < minl; ++i) { //i��ʾλ����
        t=strs[0][i];
        if(!brk)
            for (int j = 0; j < strs.size(); ++j) { //j����
                if (strs[j][i]!=t) {
                    ws=i<ws?i:ws;
                    brk=1;
                    break;
                }
            }
    }
    for (int l = 0; l < ws; ++l) {
        res+=strs[0][l];
    }
    //˼·2
    return res;
}

int main() {
    vector<string> strs={"fl","f","ff"};
    string s="MCMXCIV";
    int k=58;
    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << longestCommonPrefix(strs) << endl;
    return 0;
}
