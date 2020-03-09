//
// Created by Congb19 on 2019/9/27.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> res(2);
    for (int i = 0; i < nums.size()-1; ++i) {
        for (int j = i+1; j < nums.size(); ++j) {
            if (nums[j]+nums[i]==target) {
                res[0]=i;
                res[1]=j;
                cout<<i<<" "<<j<<endl;
                return res;
            }
        }
    }
    return res;
}

int main() {
    //string A[26] = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    vector<int> nums = {2,7,11,15};
    int target=9;
    twoSum(nums, target);
    return 0;
}
