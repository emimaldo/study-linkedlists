import { TaskNode } from "./TaskNode";

export class TaskList {
    head: TaskNode | null = null;

    addTask(title: string): void {
        const newNode = new TaskNode(title);

        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
        
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    removeTask(title: string): void {
        if (!this.head) return;

        if (this.head.title === title) {
            this.head = this.head.next;
            return;
        } 

        let current = this.head;

        while (current.next) {
             //If the next node matchs the title, we remove it
            if (current.next.title === title) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }

    printTasks() {
        if (!this.head) {
            console.log ("No hay tareas en la lista");
        }

        let current = this.head;

        while (current) {
            console.log(current.title);
            current = current.next;
        }
    }
}