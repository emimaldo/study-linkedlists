// Node definition from a Linked list
export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null; // Initially the next node is null
    }
}