//
// Created by Congb19 on 2019/10/5.
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

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    if (l1==NULL) return l2;
    if (l2==NULL) return l1;
    //思路1 我疯了 为啥啊
//    ListNode *res(0);
//    if (l1->val<l2->val) {
//        cout<<"add "<<l1->val<<endl;
////        res->val=l2->val;
////        res->next=new ListNode(0);
//        res=l1;
//        l1=l1->next;
//        res=res->next;
//    }
//    else {
//        cout<<"add "<<l2->val<<endl;
////        res->val=l2->val;
////        res->next=new ListNode(0);
//        res=l2;
//        l2=l2->next;
//        res=res->next;
//    }
//    ListNode *ans = res;
//    cout<<"now l1 and l2 = "<<l1->val<<", "<<l2->val<<endl;
//    while (l1!=NULL&&l2!=NULL) {
//        cout<<"doubuwei 0 xunhuanduibi"<<endl;
//        if (l1->val<l2->val) {
//            cout<<"add "<<l1->val<<endl;
//            res->next=l1;
//            l1=l1->next;
//            res=res->next;
////            res->next->val=l1->val;
////            res=res->next;
////            l1=l1->next;
//        }
//        else {
//            cout<<"add "<<l2->val<<endl;
//            res->next=l2;
//            l2=l2->next;
//            res=res->next;
////            res->next->val=l2->val;
////            res=res->next;
////            l2=l2->next;
//        }
//        if (l1!=NULL&&l2!=NULL) cout<<"now l1 and l2 = "<<l1->val<<", "<<l2->val<<endl;
//    }
//    if (l1==NULL) {
//        if (l2!=NULL) {
//            res->next=l2;
//        }
//    }
//    if (l2==NULL) {
//        if (l1!=NULL) {
//            res->next=l1;
//        }
//    }
//    return ans;


    //思路2 存，取
    vector<int> t;
    while (l1!=NULL) {
        t.push_back(l1->val);
        l1=l1->next;
    }
    while (l2!=NULL) {
        t.push_back(l2->val);
        l2=l2->next;
    }
    sort(t.begin(),t.end());
    ListNode *res=new ListNode(0);
    ListNode *ans=res;
    for (int j = 0; j < t.size(); ++j) {
        cout<<t[j]<<", ";
    }
    cout<<endl;
    for (int i = 0; i < t.size()-1; ++i) {
        res->val=t[i];
        res->next=new ListNode(0);
        res=res->next;
    }
//    delete(res);
    res->val=t[t.size()-1];

    return ans;
}

int main() {
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    string k="237";
    int h=-59;

    ListNode *p1=new ListNode(2);
    ListNode *p3=p1;
    p1=p1->next;
    p1->next=new ListNode(6);p1=p1->next;
    p1->next=new ListNode(9);p1=p1->next;
    p1->next=new ListNode(10);

    ListNode *p2=new ListNode(1);
    ListNode *p4=p2;
    p2=p2->next;
    p2->next=new ListNode(7);p2=p2->next;
    p2->next=new ListNode(8);p2=p2->next;
    p2->next=new ListNode(11);

    ListNode *t=mergeTwoLists(p3, p4);

    while (p3!=NULL) {
        cout<<p3->val<<", ";
        p3=p3->next;
    }
    cout<<endl;
    while (p4!=NULL) {
        cout<<p4->val<<", ";
        p4=p4->next;
    }
    cout<<endl;

    while (t!=NULL) {
        cout<<t->val<<", ";
        t=t->next;
    }

    return 0;
}
