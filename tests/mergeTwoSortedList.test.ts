import { ListNode } from "../src/ListNode.ts";
import { MergeTwoSortedLists } from "../src/merge-two-sorted-lists/MergeTwoSortedLists.ts";

describe('MergeTwoSortedList', () => {
    let mergeTwoSortedList: MergeTwoSortedLists;

    beforeEach(() => {
        mergeTwoSortedList = new MergeTwoSortedLists();
    });
    test('should merge two sorted linked lists', () => {
        const l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        const l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        const result = mergeTwoSortedList.mergeTwoLists(l1, l2);

        expect(result).not.toBeNull();
        if (result) {
            expect(result.value).toBe(1);
            expect(result.next?.value).toBe(1);
            expect(result.next?.next?.value).toBe(2);
            expect(result.next?.next?.next?.value).toBe(3);
            expect(result.next?.next?.next?.next?.value).toBe(4);
            expect(result.next?.next?.next?.next?.next?.value).toBe(4);
            expect(result.next?.next?.next?.next?.next?.next).toBeNull();
        }
    });
    test('should handle empty lists', () => {
        const l1 = null;
        const l2 = null;

        const result = mergeTwoSortedList.mergeTwoLists(l1, l2);

        expect(result).toBeNull();
    });
    test('should handle one empty list', () => {
        const l1 = new ListNode(0);
        const l2 = null;

        const result = mergeTwoSortedList.mergeTwoLists(l1, l2);

        expect(result?.value).toBe(0);
        expect(result?.next).toBeNull();
    });
});