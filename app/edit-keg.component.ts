import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model";

@Component({
  selector: "edit-keg",
  template:`
  <div class="col-md-6" id="drinksEditor" *ngIf="childClickedDrink">
    <h4>Drinks Editor</h4>
    <p>Drinks' Name: <input [(ngModel)]="childClickedDrink.name"></p>
    <p>Drinks' Brand: <input [(ngModel)]="childClickedDrink.brand"></p>
    <p>Drinks A/C(%): <input [(ngModel)]="childClickedDrink.alcohol"></p>
    <button (click)="doneEdittingChildDrinks()">save</button>
  </div>
  `
})
export class EditKegComponent{
@Input() childClickedDrink: Keg;
@Output() doneEdittingChildKegSender = new EventEmitter;
doneEdittingChildDrinks(){
  this.doneEdittingChildKegSender.emit();
}
}
