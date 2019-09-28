//
// Created by Congb on 2019/9/27.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;

int lengthOfLongestSubstring(string s) {
    if (s=="") return 0;
    if (s.length()==1) return 1;
    long long q=0, e;//浮动窗口左右标记
    long long t=1,res=1;
    long long cf=0;
    for (q = 0; q < s.length()-1; ++q) {
        for (e = q+res; e < s.length(); ++e) {
            //如果后面要测的e-q+1小于已有的res，则不需要测了 没意义。
            if (e-q+1<=res) continue;
            //每一个从q到e的长度>2的子串是否存在出现重复？遍历一下
            for (long long i = q; i <= e-1; ++i) {
                for (long long j = i+1; j <= e; ++j) {
                    if (s[j]==s[i]) {
                        cf=1;
                        //重复，不行
//                        cout<<"i="<<i<<" j="<<j<<" cf="<<cf<<endl;
                    }
                }
            }
            if (cf==0) {
                //ok,记录t和res。
                t=e-q+1;
                res=res>t?res:t;
            }
            else {
                //滚粗，下一个
                cf=0;
            }
        }

    }
    return res;
}

int main() {
//    vector<long long> nu9
    string s="qqqqeeeewrqqqq";
    cout << lengthOfLongestSubstring(s) << endl;
    return 0;
}
