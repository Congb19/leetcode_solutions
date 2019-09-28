//
// Created by Congb on 2019/9/28.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#define ture true

using namespace std;

string convert(string s, int numRows) {
    if (s.length()<3||s.length()<=numRows||numRows==1) return s;
    string res="";
    int gap=2*(numRows-1);
    int p=numRows-1;
    //row first
    for (int i = 0; i<s.length(); i+=gap) {
        res+=s[i];
    }
    //rows mid
    for (int i = 1; i<numRows-1; i+=1) { //µÚiÐÐ
        for (int j = i; j < s.length(); j+=gap) {
            res+=s[j];
//            cout<<"j="<<j<<" res+= "<<s[j]<<endl;
            if (j+gap-2*i<s.length()) {
                res+=s[j+gap-2*i];
//                cout<<"res+= "<<s[j+gap-2*i]<<endl;
            }
            else break;
        }
    }
    //row last
    for (int i = numRows-1; i<s.length(); i+=gap) {
        res+=s[i];
    }

    return res;
}

int main() {
    string s="LEETCODEISHIRING";
    int k=4;
    cout << convert(s, k) << endl;
    return 0;
}
