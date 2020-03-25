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
string intToRoman(int num) {
    string res="";
    vector<char> t;//倒过来存放
    int d=1;//表示阶数
    if (num>=1000) d=4;
    else if(num>=100) d=3;
    else if(num>=10) d=2;
    else d=1;
    char a[7]={'I','V','X','L','C','D','M'};
    // 思路1 直接除法，看末尾，分情况加字母即可
    for (int i = 0; i < d*2; i+=2) {
        if (num%10==9) {
            t.push_back(a[i+2]);
            t.push_back(a[i]);
        }
        else if (num%10==4) {
            t.push_back(a[i+1]);
            t.push_back(a[i]);
        }
        else if (num%10<4&&num%10>=0) {
            for (int j = 0; j < num%10; ++j) t.push_back(a[i]);
        }
        else {
            for (int j = 0; j < num%10-5; ++j) t.push_back(a[i]);
            t.push_back(a[i+1]);
        }
        num/=10;
    }
    while (t.size()>0) {
        res+=t.back();
        t.pop_back();
    }
    return res;
}

int main() {
    string s="ab";
    int k=58;
    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << intToRoman(k) << endl;
    return 0;
}
