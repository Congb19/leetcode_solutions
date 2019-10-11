//
// Created by Congb19 on 2019/10/11.
//

int removeElement(vector<int>& nums, int val) {
    int res=0;
    if (nums.size()==0) return res;
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i]==val) {
            nums.erase(nums.begin()+i);
            i--;
        }
    }
    //    for (int j = 0; j < nums.size(); ++j) {
    //        cout<<nums[j]<<" ";
    //    }
    res=nums.size();
    return res;
}