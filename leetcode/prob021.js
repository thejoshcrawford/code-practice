/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3 = null;
    var l3Pointer = null;
    
    while (l1 || l2) {
        if (!l3Pointer) {
            l3 = new ListNode(null);
            l3Pointer = l3;
        } else {
            l3Pointer.next = new ListNode(null);
            l3Pointer = l3Pointer.next;
        }
        
        if (!l1) {
            l3Pointer.val = l2.val;
            l2 = l2.next;
        } else if (!l2) {
            l3Pointer.val = l1.val;
            l1 = l1.next;
        } else if (l1.val > l2.val) {
            l3Pointer.val = l2.val;
            l2 = l2.next;
        } else if (l1.val <= l2.val) {
            l3Pointer.val = l1.val;
            l1 = l1.next;
        }
    }
    
    return l3;
};