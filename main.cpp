
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
ListNode* swapPairs(ListNode* head) {
    ListNode* res=head;
    while (head!=NULL&&head->next!=NULL) {
        cout<<head->val<<" "<<head->next->val<<" ";
        cout<<"swap"<<endl;
        ListNode temp1=*head, temp2=*(head->next);
        head=&temp2;
        head->next=&temp1;
        head=head->next;
        head->next=temp2.next;
        head=temp2.next;
    }
    return res;
}

int main() {
    ListNode *p=new ListNode(1), *l=p, *t=p;
    p->next=new ListNode(2);
    p=p->next;
    p->next=new ListNode(3);
    p=p->next;
    p->next=new ListNode(4);
//    p=p->next;
    while (t!=NULL) {
        cout<<"init,"<<t->val<<endl;
        t=t->next;
    }
    ListNode *res=swapPairs(l);
    while (res!=NULL) {
        cout<<res->val<<endl;
        res=res->next;
    }
//    cout<<generateParenthesis(3)<<endl;
    return 0;
}
