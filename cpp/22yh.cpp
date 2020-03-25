//
// Created by Congb on 2019/10/8.
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
vector<string> generateParenthesis(int n) {
    vector<string> res;
    //思路1 栈的思想？
//    for (int i = 1; i < 2*n; ++i) {
//
//    }
    //思路2 暴力生成，然后去掉无效的。
    //2.1 采用二进制数的思想来生成每一位。(=1,)=0.
    string t="";
    string temp="";
    int go=0;
    bool ok=true;
    for (int j = 0; j < pow(4,n); ++j) {
        int p=j;
        while (p>0){
            if (p%2==1) t+='(';
            else t+=')';
            p/=2;
        }
        while (t.size()<2*n) {
            t+=')';
        }
        for (int i = 0; i < 2*n; ++i) {
            if (t[i]==')') go--;
            else go++;
            if (go<0) {
                ok=false;
                break;
            }
        }
        if (go!=0) ok=false;
        if (ok) {
//            cout<<t<<endl;
            res.push_back(t);
        }
        go=0;
        t="";
        ok=true;
    }
    return res;
}


int main() {
    clock_t now1=clock();
    vector<int> a={2,2,2,3,3};
    string k="237";
    generateParenthesis(3);
//    cout<<generateParenthesis(3)<<endl;
    return 0;
}
