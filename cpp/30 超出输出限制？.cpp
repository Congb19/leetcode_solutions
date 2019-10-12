//
// Created by Congb on 2019/10/12.
//


#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#include <sstream>
#include <ctime>
#define ture true
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
int strStr(string haystack, string needle) {
    int res=-1;
    if (needle.length()>haystack.length()) return res;
    if (needle=="") return 0;
    bool p=true;
    for (int i = 0; i <= haystack.length()-needle.length(); ++i) {
        if (haystack[i]==needle[0]) {
            for (int j = 1; j < needle.length(); ++j) {
                if (haystack[i+j]!=needle[j]) {
                    p=false;
                }
            }
            if (p) {
                res=i;
                break;
            }
            else p=true;
        }
    }
    return res;
}
vector<int> findSubstring(string s, vector<string>& words) {
    sort(words.begin(),words.end());
    vector<int> res;
    vector<string> q;
    string t="";
    if(words.size()==0) return res;
    else if(words.size()==1) q.push_back(words[0]);
    else if (words.size()==2) {
        q.push_back(words[0]+words[1]);
        q.push_back(words[1]+words[0]);
    }
    else do{
            for (int i = 0; i < words.size(); ++i) {
                t+=words[i];
            }
            cout<<t<<endl;
            q.push_back(t);
            t.clear();
        }while(next_permutation(words.begin(),words.end()));
    string temp=s;
    for (int j = 0; j < q.size(); ++j) {
//        cout<<"j="<<j<<"  qj="<<q[j]<<endl;
        int t2=strStr(s,q[j]);
        if (t2!=-1) {
            res.push_back(t2);
//            cout<<t2<<endl;
            for (int i = t2+1; i < s.length(); i+=1) {
                temp=s.substr(i,s.length());
//                cout<<"temp:"<<temp<<endl;
                t2=strStr(temp,q[j]);
                if (t2==-1) break;
                else {
                    res.push_back(t2+i);
//                    cout<<t2+i<<endl;
                }
            }
        }
    }
    if (res.size()<=1) return res;
    sort(res.begin(),res.end());
    for (int k = 1; k < res.size(); ++k) {
        if (res[k]==res[k-1]) {
            res.erase(res.begin()+k);
            k--;
        }
    }
    for (int l = 0; l < res.size(); ++l) {
        cout<<res[l]<<endl;
    }
    return res;
}

int main() {
    vector<int> arr={1};
    int d=0;
    string hay="l", needle="ll";
    string s="aabbaabb";
    vector<string> words={"aa","bb"};
    findSubstring(s, words);
    return 0;
}
