import { ListNode } from "../src/ListNode.ts";
import { NthNodeToLast } from "../src/nth-node-to-last/NthNodeToLast.ts";

describe('NthNodeToLast', () => {
    let nthNodeToLast: NthNodeToLast;

    beforeEach(() => {
        nthNodeToLast = new NthNodeToLast();
    });
    test('should return the nth node to last', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        const result = nthNodeToLast.nodeToLast(head, 2);
        expect(result?.value).toBe(4);
    });
    test('should return the nth node to last when the list has only one element', () => {
        const head = new ListNode(1);
        const result = nthNodeToLast.nodeToLast(head, 1);
        expect(result?.value).toBe(1);
    });
    test('should return null if the list is empty', () => {
        const result = nthNodeToLast.nodeToLast(null, 1);
        expect(result).toBeNull();
    });
    test('should return null if the list is shorter than n', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        const result = nthNodeToLast.nodeToLast(head, 3);
        expect(result).toBeNull();
    });
    test('should return the first element if n is 0', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        const result = nthNodeToLast.nodeToLast(head, 0);
        expect(result?.value).toBe(3);
    });
    test('should return the first element if n is 1', () => {     
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        const result = nthNodeToLast.nodeToLast(head, 1);
        expect(result?.value).toBe(3);
    }); 
    test('should return the second element if n is 2', () => {  
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        const result = nthNodeToLast.nodeToLast(head, 2);
        expect(result?.value).toBe(2);
    });
});