#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#define ture true

using namespace std;

string longestPalindrome(string s) {
    string res="";
    int max=1, l=1, ispd=1, maxi=0;
    if (s.length()==1) return s;
    //假设最长回文长度为奇数，假设每一个i为中心，j扩散开来记录。
    for (int i = 1; i < s.length()-1; ++i) {
        for (int j = 1; (i+j<s.length())&&(i-j>=0); ++j) {
            if (s[i+j]!=s[i-j]) {
                ispd=0;
                l=2*j-1;
                if (l>max) {
                    max = l;
                    maxi = i;
                }
            }
            if(ispd==0) {
                l=1;
                ispd=1;
                break;
            }
        }
    }
    //是偶数，则找一下一对一对的扩散开来。
    




    //生成res
    int p = (max+1)/2-1;
    for (int k = s[maxi-p]; k <= s[maxi+p]; ++k) {
        res+=s[k];
    }

    return res;
}

int main() {
    string s="bcbca";
    cout << longestPalindrome(s) << endl;
    return 0;
}
