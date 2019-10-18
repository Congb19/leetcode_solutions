//
// Created by Congb on 2019/10/18.
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
string countAndSay(int n) {
    string res;
    vector<string> t;
    string temp, box, cont;
    string cha;
    int ct=0;
    t.push_back("1");
    t.push_back("11");
    if (n==2) return "11";
    if (n==1) return "1";
    for (int i = 0; i < n-2; ++i) {
        int p=0;
        for (int j = 0; j < t.back().length(); ++j) {
            temp=t.back();
            if (temp[j+1]!=temp[j]||j==temp.length()-1) {
                //cout<<"butong."<<endl;
                for (int k = p; k <= j; ++k) {
                    ct+=1;
                }
                stringstream ss;
                ss<<ct;
                ss>>cha;
                cont+=cha;
                cont+=temp[j];
                p=j+1;
                ct=0;
            }
        }
        //cout<<"ok, now is "<<cont<<endl;
        t.push_back(cont);
        cont="";
    }
    res=t[n-1];
    return res;
}
int main() {
    vector<int> arr={1};
    int d=17;
    string hay="l", needle="ll";
    string s="aabbaabb";
    vector<string> words={"aa","bb"};
    vector<int> k={1,2,4,5,3};
    cout<<countAndSay(d);
    return 0;
}
