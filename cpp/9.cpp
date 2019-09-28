//
// Created by Congb on 2019/9/28.
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

bool isPalindrome(int x) {
    bool res=true;
    string str;
    stringstream ss;
    ss<<x;
    ss>>str;
    for (int i = 0; i < str.length()/2; ++i) {
        if (str[i]!=str[str.length()-1-i]) res=false;
    }
    return res;
}

int main() {
    string s="  0000000000012345678";
    int k=123321;
    cout << isPalindrome(k) << endl;
    return 0;
}
