import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model"

 @Component({
   selector: "keg-list",
   template:`
   <div id="kegDisplay" *ngFor="let currentKeg of childKegList">
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
   `
 })

 export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() kegClickSender = new EventEmitter();
  editCurrentDrinks(clickedKeg: Keg){
    this.kegClickSender.emit(clickedKeg);
  }
 }
