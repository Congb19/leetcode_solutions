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
    long long q=0, e;//�����������ұ��
    long long t=1,res=1;
    long long cf=0;
    for (q = 0; q < s.length()-1; ++q) {
        for (e = q+res; e < s.length(); ++e) {
            //�������Ҫ���e-q+1С�����е�res������Ҫ���� û���塣
            if (e-q+1<=res) continue;
            //ÿһ����q��e�ĳ���>2���Ӵ��Ƿ���ڳ����ظ�������һ��
            for (long long i = q; i <= e-1; ++i) {
                for (long long j = i+1; j <= e; ++j) {
                    if (s[j]==s[i]) {
                        cf=1;
                        //�ظ�������
//                        cout<<"i="<<i<<" j="<<j<<" cf="<<cf<<endl;
                    }
                }
            }
            if (cf==0) {
                //ok,��¼t��res��
                t=e-q+1;
                res=res>t?res:t;
            }
            else {
                //���֣���һ��
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
