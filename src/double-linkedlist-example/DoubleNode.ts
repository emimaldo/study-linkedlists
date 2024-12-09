export class DoublyNode<T> {
    value: T;
    next: DoublyNode<T> | null = null;
    prev: DoublyNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }