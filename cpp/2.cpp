//
// Created by Congb19 on 2019/9/27.
//
#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
//������Ǹ�λ������߿�ʼ���������λ�ˣ������ұ߽�һλ���Լ�-=10��
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

    //˼·1 �����
    //��Ҫ�жϣ����һ�θ���ʱ�Ƿ��н�λ�����û�У�ɾ������Ǹ��ڵ㣬����У�����ɾ��
    int plus = 0; int del = 1;
    ListNode *p = new ListNode(0);
    ListNode *p1 = p;
    while(l1||l2) {
        if (l1&&l2) {
            p->val=l1->val+l2->val+plus;
            plus=0;
            if (p->val>=10) {
                p->val-=10;
                plus=1;
            }
            if(!(l1->next||l2->next)) {
                if (plus==1) del = 0;
            }
            p->next=new ListNode(1);
            p=p->next;
            l1=l1->next;
            l2=l2->next;
        }
        else if(l1) {
            p->val=l1->val+plus;
            plus=0;
            if (p->val>=10) {
                p->val-=10;
                plus=1;
            }
            if (l1->next==NULL) {
                if (plus==1) del = 0;
            }
            p->next=new ListNode(1);
            p=p->next;
            l1=l1->next;
        }
        else if(l2) {
            p->val=l2->val+plus;
            plus=0;
            if (p->val>=10) {
                p->val-=10;
                plus=1;
            }
            if (l2->next==NULL) {
                if (plus==1) del = 0;
            }
            p->next=new ListNode(1);
            p=p->next;
            l2=l2->next;
        }



    }
    ListNode *p2 = p1;
    if (del==1) {
        while (p2->next->next!=NULL) {
            p2=p2->next;
        }
        p2->next=NULL;
    }
    //˼·2 ����������������±�
//    long long t = 1;
//    long long res=0, r1=0, r2=0;
//    while (l1!=NULL) {
//        r1+=t*(l1->val);
//        t*=10;
//        l1=l1->next;
//    }
//    t=1;
//    while (l2!=NULL) {
//        r2+=t*(l2->val);
//        t*=10;
//        l2=l2->next;
//    }
//    res=r1+r2;
//    t=res%10;
//    res/=10;
//    ListNode *p=new ListNode(t);
//    while (res>=10) {
//        t=res%10;
//        p->next = new ListNode(t);
//        res/=10;
//    }
//    p->next = new ListNode(res);

    return p1;
}

int main() {
//    vector<int> nu9
    cout << "no test" << endl;
    return 0;
}
