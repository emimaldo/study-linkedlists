export class TaskNode {
    title: string;
    next: TaskNode | null = null;

    constructor(title: string) {
        this.title = title;
    }
}