//
// Created by Congb19 on 2020/3/5.
//

class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t ret = 0;
        for(int i = 31; i >= 0; i--) {
            ret = ret | (((n>>(31-i)) & 1) << i);
        }
        return ret;
    }
};