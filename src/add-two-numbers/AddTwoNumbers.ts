import { ListNode } from "../ListNode.ts";

export class AddTwoNumbers
{
    addTwoNumbers(list1: ListNode | null, list2: ListNode | null) 
    {
        let result: ListNode | null = new ListNode(0);
        let current = result;
        let carry = 0;

        while (list1 !== null || list2 !== null) {
            current.next = new ListNode(0);
            current = current.next;
            let digit = carry;

            if (list1 !== null) {
                digit += list1.value;
                list1 = list1.next;
            }

            if (list2 !== null) {
                digit += list2.value;
                list2 = list2.next;
            }

            carry = Math.floor(digit / 10);
            current.value = digit % 10;

            if (carry > 0) {
                current.next = new ListNode(carry);
            }

            return result.next;
        }

    }                     

}