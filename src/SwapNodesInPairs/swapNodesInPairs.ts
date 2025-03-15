import { ListNode } from "../ListNode.ts";

export class SwapNodesInPairs {
    
    swapNodesInPairs(head: ListNode | null): ListNode | null {
        if (head === null || head.next === null) {
            return head;
        }

        let firstNode = head;
        let secondNode = head.next;

        firstNode.next = this.swapNodesInPairs(secondNode.next);
        secondNode.next = firstNode;

        return secondNode;
    }
}