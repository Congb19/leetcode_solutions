//
// Created by Congb on 2019/10/6.
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
bool pd(int x) {
    bool res=true;
    if (x<10) return true;
    while (x>=10) {
        int temp=x/10;
        if (abs(temp%10-x%10)!=1) return false;
        x/=10;
    }
    return res;
}
bool dz(int x) {
    bool res=true;
    if (x<10) return true;
    while (x>=10) {
        int temp=x/10;
        if (temp%10-x%10!=-1) return false;
        x/=10;
    }
    return res;
}
int ws(int x) {
    int res;
    string y;
    stringstream ss;
    ss<<x;
    ss>>y;
    res=y.length();
    return res;
}
vector<int> countSteppingNumbers(int low, int high) {
    vector<int> res;
    for (int i = low; i <=high ; ++i) {
//        cout<<i<<endl;
        if(pd(i)) {
//            cout<<"push "<<i<<endl;
            res.push_back(i);
            //试图优化一部分时间 大约优化到原本的七成


            if (i>=100&&dz(i)) {
                int t=8;
                for (int j = 1; j < ws(i)-1; ++j) {
                    t*=10;
                }
                i+=t;
//                cout<<"\ntrash!"<<endl;
            }
//            if (i>10) i++;
        }
    }
    return res;
}

int main() {
    clock_t now1=clock();
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    string k="237";
    int h=0, p=100000000;
    vector<int> t=countSteppingNumbers(h, p);
    for (int i = 0; i < t.size(); ++i) {
        cout<<t[i]<<" ";
    }
    clock_t now2=clock();
    cout<<now2-now1<<endl;
    return 0;
}
