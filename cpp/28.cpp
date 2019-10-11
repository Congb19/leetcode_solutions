//
// Created by Congb19 on 2019/10/11.
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

int main() {
    vector<int> arr={1};
    int d=0;
    string hay="l", needle="ll";
    cout<<"\n"<<strStr(hay,needle);

    return 0;
}
