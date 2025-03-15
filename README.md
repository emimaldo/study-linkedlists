# study-linkedlists

# Linked Lists

## Definition
A linked list is a collection of elements, called nodes, where each node contains data and a pointer (or reference) to the next node. This structure is dynamic, meaning it can grow or shrink during the program's execution.

### Advantages
- **Flexibility:** Easy to insert and remove items in any position.
- **Efficiency on some operations:** Insertion and deletion in the middle of the list are more efficient than in arrays.

### Disadvantages
- **Slow random access:** To access an element at a specific position, it is necessary to traverse the list from the beginning.
- **Requires more memory:** Each node stores an additional pointer.

---

## Practical Applications of a Simple Linked List
- **Task queues:** Maintains an order of tasks where items are removed from the beginning of the list and added to the end.
- **Queues implementation:** A linked list can be used like a stack (LIFO), especially when dynamic space is required.

---

## Example of a Simple Linked List in TypeScript
```typescript
// Linked list node definition
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null; // The next node is initially null
    }
}

// Linked list definition
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null; // Initially, the list is empty
    }

    // Method to add a node to the end of the list
    append(value: number) {
        const newNode = new ListNode(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to print the values of the linked list
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
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to delete a node with a specific value
    delete(value: number) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }
}

// Example of usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Prints 10, 20, 30

list.prepend(5);
list.print(); // Prints 5, 10, 20, 30

list.delete(20);
list.print(); // Prints 5, 10, 30
```

### Explanation of Important Parts
- **ListNode Class:** Represents each node in the linked list. Each node contains a value and a reference (`next`) to the next node (or null if there are no more nodes).
- **LinkedList Class:** This class represents the linked list itself.
- **append Method:** Adds a new node to the end of the list.
- **prepend Method:** Inserts a node at the beginning of the list.
- **delete Method:** Deletes a node that contains a specific value.
- **print Method:** Traverses the list and prints the values of the nodes.

---

## Doubly Linked List
This kind of linked list allows traversing the items both forward and backward. It is useful for cases like browsing history or playlists.

### Practical Applications of a Doubly Linked List
- **Browsing history:** You can move forward and backward in history.
- **Multimedia playlist:** Allows browsing through a song or video list, with the option to go forward and backward.

### Example of a Doubly Linked List in TypeScript
```typescript
class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;

  add(value: T): void {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  remove(value: T): void {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  printReverse(): void {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

// Example of usage:
const doublyList = new DoublyLinkedList<string>();
doublyList.add("A");
doublyList.add("B");
doublyList.add("C");
doublyList.print(); // Output: A, B, C
doublyList.remove("B");
doublyList.printReverse(); // Output: C, A
```

---

## Summary
Linked lists are ideal when you need to store data sequentially and perform insertion and deletion operations efficiently.

