/*
  * Problem: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        if (head == nullptr) {
            return head;
        }

        ListNode* temp = head;
        while(temp->next != nullptr) {
            int gcd = this->gcd(temp->val, temp->next->val);
            ListNode* insertNode = new ListNode(gcd, temp->next);
            temp->next = insertNode;
            temp = insertNode->next;
        }
        return head;
    }

    int gcd( int a, int b) {
        int tmp;
        while(b != 0) {
            tmp = a % b;
            a = b;
            b = tmp;
        }
        return a;
    }
};