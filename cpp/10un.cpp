//
// Created by Congb19 on 2019/9/29.
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
bool match(string s, string p) {
    if (s==p) return true;
    //if (p==".*") return true;
    if (p==s+"*") return true;
    if (p.length()==0&&s.length()>0) return false;
    if (s.length()==0&&p.length()>0) {
        if (p[p.length()-1]!='*') return false;
        else return match(s, p.substr(0, p.length()-3));
    }
    //if (s.length()==2&&p.length()==2&&s[0]==p[0]==s[1]&&p[1]=='*') return true;

    //p���һλ��Ϊ*������£�
    if (p[p.length()-1]!='*') {
        //����p��ƥ��s ��p-1�϶�ƥ��s-1������϶��ԡ�-> p-1�����ƥ��s-1 ֱ��false
        if( match(s.substr(0, s.length()-2), p.substr(0, p.length()-2)) ) {
            if( p[p.length()-1]=='.' || p[p.length()-1]==s[s.length()-1]) {
                return true;
            }
            else return false;
        }
        else return false;
    }
    //p���һλΪ*
    else {
        //p���ڶ�λΪ.�Ļ�����sҲ��ȡ��p.length-2�ĳ��ȣ�����һ���������ж�
        if (p[p.length()-2]=='.'  && s.length()>=p.length()-2) {
            return match(s.substr(0, p.length()-3), p.substr(0, p.length()-3));
        }
        //����pǰһλ��x��һֱ��ǰ��s��p ֱ������xΪֹ��Ȼ������жϡ�
        int i=1, j=1;//i����sɾ����λ��j����pɾ����λ��
        char x=p[p.length()-2];
        for (i = 1;  i<s.length() ; i++) {
            if (s[s.length()-i]!=x) break;
        }
        for (j = 1;  j<p.length() ; j++) {
            if (p[p.length()-1-j]!=x) break;
        }
        return match(s.substr(0, s.length()-i), p.substr(0, p.length()-1-j));
    }
}
bool isMatch(string s, string p) {
    bool res=true;

    res=match(s,p);

    return res;
}

int main() {
    string s="abab";
    string p="abab.*";

    string s1="aabbbbbbb";
    string s2="aab**.*";
    int k=123321;
    cout << isMatch(s, p) << endl;
    return 0;
}
