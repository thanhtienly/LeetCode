/*
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        /* If one of the 2 LinkedList has null head, then return head of other*/
        while (list1 != nullptr && list2 != nullptr) {
            /* If value of head node of 2 LinkedLists are equal, 
            * move head of LL1 to head of LL2 
            * new head of LL1 will be next node of list1
            */
            if (list1->val == list2->val) {
                ListNode* next1 = list1->next;
                list1->next = list2;
                list2 = list1;
                list1 = next1;
            }

            /*
                * If val of head LL2 < val of head LL1
                * Move list2 to next node until it's larger or equal list1
                * Insert head of list1 to this position
                * New head of LL1 will be next node of list1
            */
            else if (list1->val > list2->val) {
                ListNode* next2 = list2;
                while (next2->next != nullptr && next2->next->val < list1->val) {
                    next2 = next2->next;
                }
                ListNode* next1 = list1->next;
                list1->next = next2->next;
                next2->next = list1;
                list1 = next1;
            }

            /*
                * If val of head LL1 < val of head LL2
                * Move list1 to next node until it's larger or equal list2
                * Insert head of list2 to this position
                * New head of LL2 will be next node of list2
            */
            else if (list2->val > list1->val) {
                ListNode* next1 = list1;
                while (next1->next != nullptr && next1->next->val < list2->val) {
                    next1 = next1->next;
                }
                ListNode* next2 = list2->next;
                list2->next = next1->next;
                next1->next = list2;
                list2 = next2;

                next2 = nullptr;
                delete next2;
            }
        } 

        /* If one of the 2 LinkedList has null head, then return head of other*/
        if (list1 == nullptr) {
            return list2;
        }
        return list1;
    }
};