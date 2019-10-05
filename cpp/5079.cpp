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

vector<int> arraysIntersection(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
    vector<int> res;
    if(arr1.size()==0||arr2.size()==0||arr3.size()==0) return res;
    int i=0,j=0,k=0;
    while (i<arr1.size()&&j<arr2.size()&&k<arr3.size()) {
//        cout<<"now is "<<arr1[i]<<" "<<arr2[j]<<" "<<arr3[k]<<endl;
        if (arr1[i]==arr2[j]&&arr1[i]==arr3[k]) {
//            cout<<"push: "<<arr1[i]<<endl;
            res.push_back(arr1[i]);
            i++;j++;k++;
        }
        else if(arr1[i]<=arr2[j]&&arr1[i]<=arr3[k]) {
//            cout<<"1xiaole"<<endl;
            i++;
        }
        else if(arr1[i]>=arr2[j]&&arr2[j]<=arr3[k]) {
//            cout<<"2xiaole"<<endl;
            j++;
        }
        else if(arr3[k]<=arr2[j]&&arr1[i]>=arr3[k]) {
//            cout<<"3xiaole"<<endl;
            k++;
        }
    }
    return res;
}

int main() {
    vector<int> a={1,2,4,5};
    vector<int> b={1,3,4,6};
    vector<int> c={1,3,4,7};
    int h=-59;
    vector<int> k=arraysIntersection(a,b,c);
    for (int i = 0; i < k.size(); ++i) {
        cout<<k[i]<<endl;
    }

    cout<<" "<<endl;
}
