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
vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> res;
    vector<int> t;
    vector<int> ijkt;
    //˼·1 �����򣬴ӵ�һ��i��ʼ������ָ���ͷβ��ʼ��ӣ���û�м���������-i�ġ�������k--��С����j++��
    //���Ƿ������ݶ��� ����ᳬʱ զ����
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size(); ++i) {
        int j=0;
        int k=nums.size()-1;
        //�˴�����һЩʡʱ����ж�
        if (nums[i]+2*nums[0]>0) return res;
        if (nums.size()>2&&nums[i]+nums[k-1]+nums[k]<0) continue;
        int p=-nums[i];
        int cf=0;
        while (j<k) {
//            cout<<"i="<<i<<" j="<<j<<"; k="<<k<<endl;
            if (i==j||i==k) {
                j++; k--; continue;
            }
            if (nums[k]+nums[j]>p) k--;
            else if (nums[k]+nums[j]<p) j++;
            else {
                t.push_back(nums[i]);
                t.push_back(nums[j]);
                t.push_back(nums[k]);
                sort(t.begin(), t.end());
                j++; k--;
//                cout<<"go! "<<nums[i]<<"+"<<nums[j]<<"+"<<nums[k]<<"=0;\n";
                //�ж�һ���Ƿ��Ѿ�����
                for (int l = 0; l < res.size(); ++l) {
                    if(res[l]==t) {
                        cf=1;
                    }
                }
                if (!cf) {
                    res.push_back(t);
                }
                t.clear();
                cf=0;
            }
        }
    }
    return res;
}

int main() {
    vector<string> strs={"fl","f","ff"};
    string s="MCMXCIV";
    int k=58;
    vector<int> h={5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14,-12,12,6,-6,8,0,10,-11,-8,-2,-6,8,0,12,3,-9,-6,8,3,-15,0,-6,-1,3,9,-5,-5,4,2,-15,-3,5,13,-11,7,6,-4,2,11,-5,7,12,-11,-15,1,-1,-9,10,-8,1,2,8,11,-14,-4,-3,-12,-2,8,5,-1,-9,-4,-3,-13,-12,-12,-10,-3,6,1,12,3,-3,12,11,11,10};

    //cout << threeSum(h) << endl;
    vector<vector<int>> res=threeSum(h);
    for (int i = 0; i < res.size(); ++i) {
        for (int j = 0; j < 3; ++j) {
            cout<<res[i][j]<<"; ";
        }
        cout<<endl;
    }

    return 0;
}
