import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "task-list",
  template:`
  <div *ngFor="let allTasks of childTaskList" id="tasksDisplay" >
    <p>Task Description: {{allTasks.description}}</p>
    <p>Priority Level: {{allTasks.priority}}</p>
    <p>Task Categorisation: {{allTasks.category}}</p>
    <button (click)="editTask(allTasks)">Change Task</button>
    <hr>
  </div>
  `
})
export class TaskListComponent{
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editTask(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
