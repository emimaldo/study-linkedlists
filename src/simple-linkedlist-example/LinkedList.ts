// Linked list definition
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null; // At first, the list is empty
    }

    // Method to add a node to the end of the list
    append(value: number) {
        const newNode = new ListNode(value);

        // If the list is empty, the new node becomes the head
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Otherwise, iterates through the list to the last node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // Add the new node to the end
            current.next = newNode;
        }
    }

    // Method to print the linked list values
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to insert a node at the beginning of the list
    prepend(value: number) {
        const newNode = new ListNode(value);

        // The new node points to the current head
        newNode.next = this.head;
        // Now the new node becomes the head
        this.head = newNode;
    }

    // Method to remove a node with a specific value
    delete(value: number) {
        if (this.head === null) return;

        // If the node to remove is the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // Otherwise, find the node to delete
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        // If the node is found, it deletes it
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }
}
