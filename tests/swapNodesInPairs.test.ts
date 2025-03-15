import { ListNode } from '../src/ListNode.ts';
import { SwapNodesInPairs } from '../src/SwapNodesInPairs/swapNodesInPairs.ts';

describe('SwapNodesToPairs', () => {
    let swapNodesInPairs: SwapNodesInPairs;

    beforeEach(() => {
        swapNodesInPairs = new SwapNodesInPairs();
    });

    test('should return the nodes swapped in pairs', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(4);
        head.next.next.next = new ListNode(6);
        head.next.next.next.next = new ListNode(8);

        const newHead = swapNodesInPairs.swapNodesInPairs(head);

        expect(newHead?.value).toBe(2);
        expect(newHead?.next?.value).toBe(1);
        expect(newHead?.next?.next?.value).toBe(6);
        expect(newHead?.next?.next?.next?.value).toBe(4);
        expect(newHead?.next?.next?.next?.next?.value).toBe(8);
    });
    test('should return a null node', () => {
        const head = null;

        const newHead = swapNodesInPairs.swapNodesInPairs(head);

        expect(newHead).toBeNull();
    });
    test('should return the same node', () => {
        const head = new ListNode(1);

        const newHead = swapNodesInPairs.swapNodesInPairs(head);

        expect(newHead?.value).toBe(1);
    });
});