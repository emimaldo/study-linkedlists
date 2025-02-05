import { ListNode } from '../src/ListNode.ts';
import { RemoveDuplicated } from '../src/remove-duplicated-item/RemoveDuplicated.ts';

describe('RemoveDuplicated', () => {
    let removeDuplicated: RemoveDuplicated;
    beforeEach(() => {
        removeDuplicated = new RemoveDuplicated();
    });
    test('should remove duplicates from the linked list', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(3);
        removeDuplicated.removeDuplicated(head);
        expect(head.value).toBe(1);
        expect(head.next?.value).toBe(2);
        expect(head.next?.next?.value).toBe(3);
        expect(head.next?.next?.next).toBeNull();
    });
    test('should throw an error if the list is empty', () => {
        expect(() => removeDuplicated.removeDuplicated(null)).toThrow('The list is empty');
    });
    test('should handle a list with no duplicates', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        removeDuplicated.removeDuplicated(head);
        expect(head.value).toBe(1);
        expect(head.next?.value).toBe(2);
        expect(head.next?.next?.value).toBe(3);
        expect(head.next?.next?.next).toBeNull();
    });
});
