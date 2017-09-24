import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Task } from "./task.model"

@Component ({
  selector: "edit-task",
  template: `
  <div class="col-md-8" id="drinksEditor" *ngIf="childClickedTask">
    <h4>Task Editor</h4>
    <p>New Description: <input [(ngModel)]="childClickedTask.description"></p>
    <p>Priority Level: <input [(ngModel)]="childClickedTask.priority"></p>
    <p>Task Category: <input [(ngModel)]="childClickedTask.category"></p>
    <button (click)="doneEdittingChildTasks()">save</button>
  </div>
  `
})

export class EditTaskComponent{
@Input() childClickedTask: Task;
@Output() doneEdittingChildTaskSender = new EventEmitter();
doneEdittingChildTasks(){
  this.doneEdittingChildTaskSender.emit();
}
}
