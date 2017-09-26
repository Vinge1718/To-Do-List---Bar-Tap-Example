import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "task-list",
  template:`
  <select (change)="onSelection($event.target.value)" class="filter">
    <option value="all">All Tasks</option>
    <option value="incomplete">Due for Completion</option>
    <option value="complete">Completed Tasks</option>
  </select>
  <hr>
  <div *ngFor="let allTasks of childTaskList | finished:selectedViewOption">
    <p>Task Description: {{allTasks.description}}</p>
    <p>Priority Level: {{allTasks.priority}}</p>
    <p>Task Categorisation: {{allTasks.category}}</p>
    <button (click)="editTask(allTasks)">Change Task</button><br>
    <task-update [task]="allTasks"></task-update>
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

  public selectedViewOption: string = "incomplete";
  onSelection(taskViewSelected){
    this.selectedViewOption = taskViewSelected;
  }
}
