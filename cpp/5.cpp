//
// Created by Congb on 2019/9/28.
//

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
    if (s.length()==1||(s.length()==2&&(s[0]==s[1]))||(s.length()==3&&(s[0]==s[2]))) return s;
    if (s.length()==0) return s;
//    cout<<s.length()<<endl;

    //��������ĳ���Ϊ����������ÿһ��iΪ���ģ�j��ɢ������¼��
//    if (s.length()%2==1)
    for (int i = 1; i < s.length()-1; ++i) {
        for (int j = 0; (i+j<s.length())&&(i-j>=0); ++j) {
//            cout<<"i="<<i<<" j="<<j<<endl;
            //���GG�ˣ���¼һ��
            if (s[i+j]!=s[i-j]) {
                ispd=0;
                l=2*j-1;
//                cout<<"stop. s"<<i+j<<"!=s"<<i-j<<", length="<<l<<endl;
            }
            else {
                l=2*j+1;
//                cout<<"gogo! s"<<i+j<<"==s"<<i-j<<", length="<<l<<endl;
                if (l>=max) {
//                    cout<<"updated! max="<<l<<"  maxi="<<maxi<<endl;
                    max = l;
                    maxi = i;
                }
            }
            //��һ��ij�ǲ��ǻ��ģ�������ǣ�j�����������ˣ�ֱ����һ��i��
            if(ispd==0) {
                l=1;
                ispd=1;

                break;
            }
            else {
                continue;
            }
        }
    }
    //��ż��������һ��һ��һ�Ե���ɢ������
//    else
    for (int i = 0; i < s.length()-1; ++i) {
        if (s[i]==s[i+1]) {
            for (int j = 0; i-j>=0 && j+1+i<s.length(); ++j) {
//                cout<<"i="<<i<<" j="<<j<<endl;
                //���GG�ˣ���¼һ��
                if (s[i+j+1]!=s[i-j]) {
                    ispd=0;
                    l=2*j;
//                    cout<<"stop. s"<<i+j+1<<"!=s"<<i-j<<", length="<<l<<endl;
                }
                else {
                    l=2*j+2;
//                    cout<<"gogo! s"<<i+j+1<<"==s"<<i-j<<", length="<<l<<endl;
                    if (l>=max) {
//                        cout<<"updated! max="<<l<<"  maxi="<<maxi<<endl;
                        max = l;
                        maxi = i;
                    }
                }
                //��һ��ij�ǲ��ǻ��ģ�������ǣ�j�����������ˣ�ֱ����һ��i��
                if(ispd==0) {
                    l=1;
                    ispd=1;
                    break;
                }
                else {
                    continue;
                }

            }
        }
    }

//    cout<<"maxi="<<maxi<<"; maxlength="<<max<<endl;
    int p = max/2;

    //����res
    if (max%2==1)
        for (int k = maxi-p; k <= maxi+p; ++k) {
            res+=s[k];
        }
    else
        for (int m = maxi-p+1; m <= maxi+p; ++m) {
            res+=s[m];
        }

    return res;
}

int main() {
    string s="dcbcadcbcdc";
    cout << longestPalindrome(s) << endl;
    return 0;
}
