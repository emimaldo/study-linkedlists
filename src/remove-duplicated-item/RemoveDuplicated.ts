import { ListNode } from './ListNode.ts';

export class RemoveDuplicated {
    removeDuplicated(head: ListNode | null): void {
        if (head === null) {
            throw new Error('The list is empty');
        }

        const foundValues = new Set<number>();
        let current: ListNode | null = head;

        foundValues.add(current.value);

        while (current.next !== null) {
            if (foundValues.has(current.next.value)) {
                current.next = current.next.next;
            } else {
                foundValues.add(current.next.value);
                current = current.next;
            }
        }
    }
}
