//
// Created by Congb on 2019/9/27.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#define ture true

using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    double res;
    vector<int> r=nums1;
    r.insert(r.end(),nums2.begin(),nums2.end());
    sort(r.begin(),r.end(),less<int>());
    if (r.size()%2==1) {
        res=r[r.size()/2]/1.0;
    }
    else {
        res=(r[r.size()/2]+r[r.size()/2-1])/2.0;
    }

    return (double)res;
}

int main() {
    vector<int> n1={1,3};
    vector<int> n2={2};
    cout << findMedianSortedArrays(n1, n2) << endl;
    return 0;
}
