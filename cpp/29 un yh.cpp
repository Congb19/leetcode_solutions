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
int divide(int dividend, int divisor) {
    int res=0;
    if (dividend==0) return 0;
    if ((dividend>=0&&divisor>=0)||(dividend<=0&&divisor<=0)) {
        while ((dividend-divisor>=0&&divisor>=0)||(dividend-divisor<=0&&divisor<=0)) {
            dividend-=divisor;
            res++;
            if (res==2147483467) break;
        }
    }
    else {
        while ((dividend+divisor>=0&&divisor<=0)||(dividend+divisor<=0&&divisor>=0)) {
            dividend+=divisor;
            res--;
            if (res==-2147483468) break;
        }
    }
    return res;
}

int main() {
    vector<int> arr={1};
    int d=0;
    string hay="l", needle="ll";
    cout<<"\n"<<divide(6, 3);

    return 0;
}
