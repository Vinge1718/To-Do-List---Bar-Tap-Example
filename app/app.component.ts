import { Component } from "@angular/core";
import { Task } from "./task.model";
import { Keg } from "./keg.model";

@Component({
  selector: 'my-apps',
  template: `
  <div class="container">
    <h1 class="jumbotron">Angular To_Do List</h1>
    <div class="row">
      <div class="col-md-4" id="editor">
        <task-list
            [childTaskList]="parentTasks"
            (clickSender)="editTask($event)"
          ></task-list>
      </div>
      <new-task
          (newTaskToSend)="newTasKAddition($event)"
        ></new-task>
      <edit-task
          [childClickedTask]="clickedTask"
          (doneEdittingChildTaskSender)="doneEdittingTasks($event)"
        ></edit-task>
    </div>

    <hr>

    <h2 class="jumbotron">Tap Room App</h2>
    <div class="row">
      <h3>Keg Available on Tap!</h3>
      <div class="col-md-4">
        <h4>Liqour on Tap!</h4>
        <keg-list
            [childKegList]="kegsOnTap"
            (kegClickSender)="editCurrentDrinks($event)"
          ></keg-list>
      </div>
      <new-tap
          (newTapToSend)="newTap($event)"
        ></new-tap>
      <edit-keg
          [childClickedDrink]="clickedDrink"
          (doneEdittingChildKegSender)="doneEdittingDrinks($event)"
        ></edit-keg>
    </div>
  </div>
  `
})

export class AppComponent {
  public kegsOnTap: Keg[] = [
    new Keg("Zcolsh", "EBAL", 600, 4.8),
    new Keg("Kifabisch", "Kero", 750, 6.5),
    new Keg("Nzstip", "BrewsBas", 450, 6.5),
    new Keg("lamstout", "DTP", 300, 5.2)
  ];
  public parentTasks: Task[] = [
    new Task("Check emails", "High", "Work"),
    new Task("Attend Meetings", "High", "Work"),
    new Task("Organise workstation", "Low", "Work"),
    new Task("Watch something Funny", "Low", "Home"),
    new Task("Do laundry","High","Home"),
    new Task("Walk the Dog","Medium","Home"),
    new Task("Go for Run","Medium","Hobby"),
    new Task("Play video Game","Low","Hobby"),
    new Task("Cook Food","High","Home")
  ];

  clickedTask: Task = null;
  editTask(selectedTask: Task) {
    this.clickedTask = selectedTask;
  }
  doneEdittingTasks() {
    this.clickedTask = null;
  }
  newTasKAddition(newTask: Task){
    this.parentTasks.push(newTask);
  }

  clickedDrink: Keg = null;
  editCurrentDrinks(selectedDrink: Keg) {
    this.clickedDrink = selectedDrink;
  }
  doneEdittingDrinks() {
    this.clickedDrink = null;
  }
  newTap(newKeg: Keg){
    this.kegsOnTap.push(newKeg);
  }

  getBeer() {

  }
}
