import { ListNode } from './ListNode.ts';
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
    rl.question(
        'Choose an option:\n' +
        '1: Add two numbers\n' + 
        '2: Merge two sorted lists\n' +
        '3: Nth to last \n' +
        '4: Remove duplicated \n' +
        '5: Swap nodes in pairs \n', (answer) => {
        const option = parseInt(answer, 10);
        if (!isNaN(option) && option >= 1 && option <= 5) {
            switch (option) {
            case 1:
                rl.question('Enter a number to add: ', (num) => {
                const value = parseInt(num, 10);
                if (!isNaN(value)) {
                    insertNode(value);
                    printList(head);
                } else {
                    console.log('Please enter a valid number.');
                }
                promptUser();
                });
                break;
            case 2:
                // Implement merge two sorted lists functionality
                console.log('Merge two sorted lists functionality not implemented yet.');
                promptUser();
                break;
            case 3:
                // Implement Nth to last functionality
                console.log('Nth to last functionality not implemented yet.');
                promptUser();
                break;
            case 4:
                const removeDuplicated = new RemoveDuplicated();
                removeDuplicated.removeDuplicated(head!);
                console.log('List after removing duplicates:');
                printList(head);
                rl.close();
                break;
            case 5:
                // Implement swap nodes in pairs functionality
                console.log('Swap nodes in pairs functionality not implemented yet.');
                promptUser();
                break;
            }
        } else {
            console.log('The option is incorrect. Please choose a valid option between 1 and 5.');
            promptUser();
        }
    });
}

promptUser();