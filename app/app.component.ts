import { Component } from "@angular/core";

@Component({
  selector: 'my-apps',
  template: `
  <div class="container">
    <h1 class="jumbotron">JS Angular Intro</h1>
    <div class="row">
      <div class="col-md-6" id="editor">
        <div *ngFor="let allTasks of parentTasks" id="tasksDisplay">
          <p>Task Description: {{allTasks.description}}</p>
          <p>Priority Level: {{allTasks.priority}}</p>
          <p>Task Categorisation: {{allTasks.category}}</p>
          <button (click)="editTask(allTasks)">Change Task</button>
          <hr>
        </div>
      </div>
      <div class="col-md-6" id="drinksEditor" *ngIf="clickedTask">
        <h4>Task Editor</h4>
        <p>New Description: <input [(ngModel)]="clickedTask.description"></p>
        <p>Priority Level: <input [(ngModel)]="clickedTask.priority"></p>
        <p>Task Category: <input [(ngModel)]="clickedTask.category"></p>
        <button (click)="doneEdittingTasks()">save</button>
      </div>

    </div>
    <hr>


    <h2 class="jumbotron">Tap Room App</h2>
    <div class="row">
      <h3>Keg brands available</h3>
      <div class="col-md-6">
        <button (click)="addKegToTaps()">Add Brand to the List</button><hr>
        <h4>Liqour on Tap!</h4>
        <div id="kegDisplay" *ngFor="let currentKeg of kegsOnTap">
          <p>Name of Drink: {{currentKeg.name}}</p>
          <p> Brew Brand: {{currentKeg.brand}}</p>
          <p>Price per pint: Ksh.{{currentKeg.price}}</p>
          <p>Alcohol Content: {{currentKeg.alcohol}}%</p>
          <p>Remaining pints: {{currentKeg.pintsContained}}</p>
          <input type="number" min="1" id="pouredBeer">
          <button (click)="getBeer()">Pour Some Beer</button><br><br>
          <button (click)="editCurrentDrinks(currentKeg)">Edit Drink Details</button>
          <hr>
        </div>
      </div>
      <div class="col-md-6" id="drinksEditor" *ngIf="clickedDrink">
        <h4>Drinks Editor</h4>
        <p>Drinks' Name: <input [(ngModel)]="clickedDrink.name"></p>
        <p>Drinks' Brand: <input [(ngModel)]="clickedDrink.brand"></p>
        <p>Drinks A/C(%): <input [(ngModel)]="clickedDrink.alcohol"></p>
        <button (click)="doneEdittingDrinks()">save</button>
      </div>
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

  
  clickedDrink: Keg = null;
  editCurrentDrinks(selectedDrink: Keg) {
    this.clickedDrink = selectedDrink;
  }
  doneEdittingDrinks() {
    this.clickedDrink = null;
  }

  getBeer() {

  }
}

export class Keg {
  public pintsContained: number = 40;
  public value: boolean;
  constructor(public name: string, public brand: string, public price: number, public alcohol: number){}
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: string, public category: string){}
}
