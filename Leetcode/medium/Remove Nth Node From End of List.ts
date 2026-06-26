/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
     val: number
      next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let flash = head 
    let reverseFlash = head 
    while (n > 0){
        flash = flash!.next 
        n--
    }
    if (flash === null) {
        return head!.next
    }
    while (flash.next != null){
        flash = flash.next 
        reverseFlash = reverseFlash!.next 
    }
    reverseFlash!.next = reverseFlash!.next!.next
    return head 
};