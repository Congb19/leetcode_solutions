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
    //��������ĳ���Ϊ����������ÿһ��iΪ���ģ�j��ɢ������¼��
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
    //��ż��������һ��һ��һ�Ե���ɢ������
    




    //����res
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
