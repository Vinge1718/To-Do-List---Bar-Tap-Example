import { Component, Output, EventEmitter} from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "new-task",
  template:`
  <div class="col-md-4">
    <h4>Create a New Task</h4>
    <p>Task Description: <input #newDescription></p>
    <p>Task Priority: <input #newPriority></p>
    <p>Task Category: <input #newCategory></p>
    <button (click)="addTaskToList(newDescription.value, newPriority.value, newCategory.value)">Add Task!</button>
  </div>
  `
})

export class NewTaskComponent{
  @Output() newTaskToSend = new EventEmitter();
  addTaskToList(description: string, priority: string, category:string ){
    var newTaskToAdd: Task = new Task(description, priority, category);
    this.newTaskToSend.emit(newTaskToAdd);
  }
}
