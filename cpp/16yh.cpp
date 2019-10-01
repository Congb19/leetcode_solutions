//
// Created by Congb19 on 2019/10/1.
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
int threeSumClosest(vector<int>& nums, int target) {

    vector<int> t;
    vector<vector<int>> tres;
    sort(nums.begin(), nums.end());
    int mincha=max(abs(3*nums[nums.size()-1]-target), abs(3*nums[0]-target));
    int tcha=mincha;
    int the;
    int res=max(abs(3*nums[nums.size()-1]), abs(3*nums[0]));

//    思路1 假定i<j<k。固定两个，剩下一个必然能组成i+j+k一个大于0一个小于0,记录这一组ijk。
//    for (int i = 0; i < nums.size()-2; ++i) {
//        for (int j = i+1; j < nums.size()-1; ++j) {
//            for (int k = j+1; k < nums.size(); ++k) {
////                cout<<"i="<<i<<" j="<<j<<" k="<<k<<endl;
//                if((nums[i]+nums[j]+nums[k]-target)==0) {
//                    return target;
//                }
//                if (k==nums.size()-1) {
//                    t.push_back(nums[i]);
//                    t.push_back(nums[j]);
//                    t.push_back(nums[k]);
//                    tres.push_back(t);
//                    t.clear();
//                    break;
//                }
//                if ((nums[i]+nums[j]+nums[k]-target)*(nums[i]+nums[j]+nums[k+1]-target)<0) {
//                    t.push_back(nums[i]);
//                    t.push_back(nums[j]);
//                    t.push_back(nums[k]);
//                    tres.push_back(t);
//                    t.clear();
//                    t.push_back(nums[i]);
//                    t.push_back(nums[j]);
//                    t.push_back(nums[k+1]);
//                    tres.push_back(t);
//                    t.clear();
//                }
//
//            }
//        }
//    }
//    for (int l = 0; l < tres.size(); ++l) {
//        tcha=abs(tres[l][0]+tres[l][1]+tres[l][2]-target);
//        the=tres[l][0]+tres[l][1]+tres[l][2];
//        cout<<tres[l][0]<<" "<<tres[l][1]<<" "<<tres[l][2]<<" tcha="<<tcha<<"\n";
//        if (tcha<mincha) {
//            mincha=tcha;
//            res=the;
//        }
//        cout<<"now res="<<res<<endl;
//    }
    //思路2 我热爱暴力。
    for (int i = 0; i < nums.size()-2; ++i) {
        for (int j = i+1; j < nums.size()-1; ++j) {
            for (int k = j+1; k < nums.size(); ++k) {
                if((nums[i]+nums[j]+nums[k]-target)==0) {
                    return target;
                }
                tcha=abs(nums[i]+nums[j]+nums[k]-target);
                the=nums[i]+nums[j]+nums[k];
                if (tcha<mincha) {
                    mincha=tcha;
                    res=the;
                }
            }
        }
    }
    return res;
}

int main() {
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    int h=-59;
    cout << threeSumClosest(a,h) << endl;

    return 0;
}
