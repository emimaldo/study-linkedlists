import { DoublyNode } from "./DoubleNode.js";

export class DoublyLinkedList<T> {
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
      
        let current: DoublyNode<T> | null = this.head;
      
        while (current !== null) { // Verificamos explícitamente que current no es null
          if (current.value === value) {
            // Si el nodo tiene un nodo anterior
            if (current.prev) {
              current.prev.next = current.next; // current.next es de tipo DoublyNode<T> | null
            } else {
              // Si no tiene nodo anterior, es el primer nodo
              this.head = current.next;
            }
      
            // Si el nodo tiene un nodo siguiente
            if (current.next) {
              current.next.prev = current.prev;
            } else {
              // Si no tiene nodo siguiente, es el último nodo
              this.tail = current.prev;
            }
      
            return;
          }
      
          // Ahora actualizamos current de forma segura
          current = current.next; // TypeScript ya sabe que current no es null debido a la verificación anterior
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
  