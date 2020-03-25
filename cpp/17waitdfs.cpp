//
// Created by Congb19 on 2019/10/3.
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
vector<string> pipei(vector<string> tres) {
    vector<string> res;
    vector<int> zz(tres.size());
    string t="";
    for (int i = 0; i < tres.size(); ++i) {
        zz[i]=0;
    }
    //从最后一位开始，指针每指到最后了就“进位”。
    //第一位也进位到最大了的话，跳出。
    while (zz[0]!=tres[0].length()) {
        int j;
        for (j = 0; j < tres.size(); ++j) {
//            cout<<"j="<<j<<endl;
            t+=tres[j][zz[j]];
        }
//        cout<<"t="<<t<<endl;
        res.push_back(t);
        t="";
        zz[tres.size()-1]++;
        //进位。
        //如果某串的指针指到最后一位了 重置为0并进位
        for (j=tres.size()-1;  j>=0 ; j--) {
//            cout<<"j="<<j<<endl;
            //如果某一位该进位了
            if (zz[j] == tres[j].length() ) {
                //重置为0
//                cout<<"jinwei!\n";
                if (j!=0) zz[j] = 0;
                //进位，如果是第一串了则不用
                if (j != 0) zz[j - 1]++;
            }
        }
    }
    return res;
}
vector<string> letterCombinations(string digits) {
    vector<string> tres;
    vector<string> res;
    if (digits.length()==0) return res;
    string t="";
    vector<char> nums={'2','3','4','5','6','7','8','9'};
    vector<string> lets={"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    for (int i = 0; i < digits.length(); ++i) {
        for (int j = 0; j < nums.size(); ++j) {
//            cout<<"i="<<i<<" j="<<j<<endl;
            if (digits[i]==nums[j]) {
                tres.push_back(lets[j]);
            }
        }
    }
    for (int k = 0; k < tres.size(); ++k) {
//        cout<<tres[k]<<endl;
    }
    res=pipei(tres);
    for (int k = 0; k < res.size(); ++k) {
//        cout<<res[k]<<endl;
    }
    return res;
}

int main() {
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    string k="237";
    int h=-59;
//    cout << letterCombinations(k) << endl;
    letterCombinations(k);
    return 0;
}
