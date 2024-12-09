import { DoublyLinkedList } from "./double-linkedlist-example/DoublyLinkedList.js";

const doublyList = new DoublyLinkedList<string>();
doublyList.add("A");
doublyList.add("B");
doublyList.add("C");
doublyList.print();
doublyList.remove("B");
doublyList.printReverse();

import { TaskList } from "./tasks-example/TaskList.js";


const taskList = new TaskList();

// Agregar tareas
taskList.addTask("Comprar comida");
taskList.addTask("Llamar al doctor");
taskList.addTask("Estudiar TypeScript");

// Mostrar todas las tareas
console.log("Tareas actuales:");
taskList.printTasks();

// Eliminar una tarea
taskList.removeTask("Llamar al doctor");

// Mostrar tareas después de eliminar
console.log("\nTareas después de eliminar:");
taskList.printTasks();


