import {Input,Component} from "@angular/core"
import {Task} from "./task.model"

@Component({
  selector:"task-update",
  template:`
    <div>
      <h5>Is this Task Done?</h5>
      <input type="checkbox" *ngIf="task.done===true" checked (click)="changeStatus(false)"/>
      <input type="checkbox" *ngIf="task.done===false" (click)="changeStatus(true)"/>
    </div>
  `
})

export class TaskCheckComponent{
  @Input() task: Task;
  changeStatus(TaskDoneStatus: boolean){
    this.task.done=TaskDoneStatus;
  }
}
