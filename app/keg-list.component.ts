import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model"

 @Component({
   selector: "keg-list",
   template:`
   <select (change)="uponSelection($event.target.value)" class="filter">
    <option value="all">All Available Liquour on Tap</option>
    <option value="A/C above 10%">Alcohol Content exceeding 10%</option>
    <option value="A/C below 10%">Alcohol Content below 10%</option>
    <option value="Premium Liqour">Keg Priced above Ksh.500</option>
   </select>
   <hr>
   <div id="kegDisplay" *ngFor="let currentKeg of childKegList | alcoholFilter:selectedView">
     <p>Name of Drink: {{currentKeg.name}}</p>
     <p> Brew Brand: {{currentKeg.brand}}</p>
     <p>Price per pint: Ksh.{{currentKeg.price}}</p>
     <p>Alcohol Content: {{currentKeg.alcohol}}%</p>
     <p>Remaining pints: {{currentKeg.pintsContained}}</p>
     <input type="number" min="1" id="pouredBeer" #amountPoured.value>
     <button (click)="getBeer(amountPoured.value); amountPoured.value='';">Pour Some Beer</button><br><br>
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


  getBeer(pintsPoured: number){
  var beerPoured: number = pintsPoured;
  
  }

  public selectedView: string = "all";
  uponSelection(preferedView: string){
    this.selectedView = preferedView;
  }
 }
