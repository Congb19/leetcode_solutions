//
// Created by Congb on 2019/9/25.
//
#include <iostream>
#include <string>
#include <stack>
#define ture true

using namespace std;
string removeOuterParentheses(string S) {
    int l=0, r=0;
    int q=0, e=0, d=0;
    for (int i = 0; i < S.length(); ++i) {
        if (l>0 && l==r) {
            e=i;
            S[q]='d'; S[e]='d';
            q=i+1;
            e=i+1;
            d+=2;
            l=0;
            r=0;
        }
        else {
            if (S[i]=='(') {
                l++;
            }
            else if(S[i]==')') r++;
        }
    }
    string k=S; int p=0;
    for (int j = 0; j < S.length()-d; ++j) {
        if (S[p]!='d') {
            k[j]=S[j+p];
        }
        else {
            p++;
            continue;
        }
    }
//    for (int m = S.length()-d; m < S.length(); ++m) {
//        k[m]='\0';
//    }
    return k;
}
int main() {
    string S;
    cin>>S;
    cout << removeOuterParentheses(S) << endl;
    return 0;
}

//0011
//1010
//1001
