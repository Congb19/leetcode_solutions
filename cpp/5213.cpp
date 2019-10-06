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
int minCostToMoveChips(vector<int>& chips) {
    int j=0, o=0;
    for (int i = 0; i < chips.size(); ++i) {
        if (chips[i]%2==1) o++;
        else j++;
    }
    return min(j,o);
}

int main() {
    clock_t now1=clock();
    vector<int> a={2,2,2,3,3};
    string k="237";

    cout<<minCostToMoveChips(a)<<endl;
    return 0;
}
