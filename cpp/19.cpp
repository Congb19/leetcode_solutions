//
// Created by Congb19 on 2019/10/4.
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
ListNode* removeNthFromEnd(ListNode* head, int n) {

    //˼·1  ���������� ʹ��˫ָ�롣
    ListNode *f=head, *s=head;
    for (int i = 0; i < n; ++i) {
        f=f->next;
//        cout<<"go"<<endl;
    }
    if (f==NULL) return head->next;

    while (f->next!=NULL) {
        s=s->next;
        f=f->next;
    }
    s->next=s->next->next;
    return head;
}

int main() {
    vector<int> a={13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6};
    string k="237";
    int h=-59;
    ListNode *p=new ListNode(0);
    ListNode *p2=p;
    for (int i = 1; i < 5; ++i) {
        p->next=new ListNode(i);
        p=p->next;
    }
    while(p!=NULL) {
//        cout<<"init. "<<p->val<<endl;
        p=p->next;
    }

    ListNode *q=removeNthFromEnd(p2, 5);

    while(q!=NULL) {
//        cout<<"cool. "<<q->val<<endl;
        q=q->next;
    }


//    cout << letterCombinations(k) << endl;



    return 0;
}
