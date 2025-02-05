import { ListNode } from "./ListNode.ts";

export class MergeTwoSortedLists 
{
    public mergeTwoLists(list1: ListNode | null, list2: ListNode | null) : ListNode | null
    {
        let aux = new ListNode(-1);
        let current = aux;

        while (list1 != null && list2 != null) {
            if (list1.value < list2.value) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 == null) {
            current.next = list2;
        } else {
            current.next = list1;
        }

        return aux.next;
    
    }

}