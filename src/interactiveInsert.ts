import { ListNode } from './remove-duplicated-item/ListNode.ts';
import { RemoveDuplicated } from './remove-duplicated-item/RemoveDuplicated.ts';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let head: ListNode | null = null;
let tail: ListNode | null = null;

function insertNode(value: number) {
    const newNode = new ListNode(value);
    if (head === null) {
        head = newNode;
        tail = newNode;
    } else {
        tail!.next = newNode;
        tail = newNode;
    }
}

function printList(head: ListNode | null) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log('Current List:', values.join(' -> '));
}

function promptUser() {
    rl.question('Enter a number to insert into the list (or type "done" to finish): ', (answer) => {
        if (answer.toLowerCase() === 'done') {
            printList(head);
            const removeDuplicated = new RemoveDuplicated();
            removeDuplicated.removeDuplicated(head!);
            console.log('List after removing duplicates:');
            printList(head);
            rl.close();
        } else {
            const value = parseInt(answer, 10);
            if (!isNaN(value)) {
                insertNode(value);
                printList(head);
            } else {
                console.log('Please enter a valid number.');
            }
            promptUser();
        }
    });
}

promptUser();