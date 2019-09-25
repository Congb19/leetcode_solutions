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
        if (S[i]=='(') {
            l++;
        }
        else if(S[i]==')') r++;

        if (l>0 && l==r) {
            e=i;
            S[q]='d'; S[e]='d';
            q=i+1;
            d+=2;
            l=0;
            r=0;
        }
    }
//    cout<<"d="<<d<<endl;
    string k="";
//    stack<char> a;
//    for (int i = 0; i < S.length(); ++i) {
//        if (S[i]!='d') {
//            a.push(S[i]);
//        }
//    }
//    for (int j = S.length()-d; j > -1; --j) {
//        k+=a.top();
//        a.pop();
//    }
    for (int j = 0; j < S.length(); ++j) {
        if (S[j]=='d') continue;
        else k+=S[j];
    }


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