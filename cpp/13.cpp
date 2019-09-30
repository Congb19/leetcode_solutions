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
int romanToInt(string s) {
    int res=0;
    vector<int> t;
    char a[7]={'I','V','X','L','C','D','M'};
    int b[7]={1,5,10,50,100,500,1000};
    for (int i = 0; i < s.length(); ++i) {
        for (int j = 0; j < 7; ++j) {
            if(s[i]==a[j]) t.push_back(b[j]);
        }
    }
    for (int k = 0; k < s.length(); ++k) {
        if (k+1<s.length()&&t[k]<t[k+1]) { //此处用了短路
            res+=t[k+1]-t[k];
            k++;
        }
        else res+=t[k];
    }
    return res;
}

int main() {
    string s="MCMXCIV";
    int k=58;
    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << romanToInt(s) << endl;
    return 0;
}
