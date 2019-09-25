/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node -> val = node -> next -> val;
        node -> next = node -> next -> next;

        // ListNode* head = node;
        // while (head->next!=NULL) {
        //     if (head->val == k) {
        //         head->next = head->next->next;
        //         break;
        //     }
        //     head = head->next;
        // }
    }
};