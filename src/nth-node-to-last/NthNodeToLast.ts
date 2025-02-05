import { ListNode } from "../ListNode.ts";

export class NthNodeToLast
{
    nodeToLast (head: ListNode | null, n: number) 
    {
        let p1 = head;
        let p2 = head;

        if (n === 0) {  
            while (p2 !== null && p2.next !== null) {
                p2 = p2.next;
            }
            
            return p2;
        }

        for (let i = 0; i < n; i++) {
            if (p1 === null) {
                return null;
            }

            p1 = p1.next;
        }

        while (p1 !== null) {
            p1 = p1.next;
            if (p2 === null) {
                return null;
            }
            p2 = p2.next;
        }

        return p2;
    }
}