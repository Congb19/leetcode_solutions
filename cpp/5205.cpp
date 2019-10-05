//
// Created by Congb on 2019/10/5.
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

bool uniqueOccurrences(vector<int>& arr) {
    bool res=true;
    if (arr.size()==1) return true;
    int k[2005]={0};
    for (int i = 0; i < arr.size(); ++i) {
        k[arr[i]+1000]++;
    }
    for (int j = 0; j < 2005; ++j) {
        if (k[j]==0) continue;
        for (int i = j+1; i < 2005; ++i) {
            if (k[i]==0) continue;
//            cout<<"i="<<i<<"; "<<"k[i]="<<k[i]<<"; k[j]="<<k[j]<<endl;
            if (k[j]==k[i]) res=false;
        }
    }
    return res;
}

int main() {
    vector<int> a={1,2,2,1,1,3};
    string k="237";
    int h=-59;
    uniqueOccurrences(a);

}
