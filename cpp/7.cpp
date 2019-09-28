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

int reverse(int x) {

    long long t=x;
    if (abs(x)<10) return x;
    long long res=0;
    long long fs=0;

    if (x<0) {
        fs=1;
        t=-t;
    }

    vector<long long> a;
    while (t>0) {
        a.push_back(t%10);
        t/=10;
    }
    string tres="";
    for (long long i = 0; i < a.size(); ++i) {
//        cout<<a[i]<<endl;
        tres+=(char)('0'+a[i]);
    }
//    cout<<tres<<endl;
    stringstream ss;
    ss<<tres;
    ss>>res;
//    long long i=1;
//    while (a.size()>0) {
//        res+=i*a.back();
//        i*=10;
//        a.pop_back();
//    }
    if (fs) {
        res=-res;
    }
    if (res>2147483647||res<-2147483648) return 0;

    return res;
}

int main() {
    string s="LEETCODEISHIRING";
    int k=123;
    cout << reverse(k) << endl;
    return 0;
}
