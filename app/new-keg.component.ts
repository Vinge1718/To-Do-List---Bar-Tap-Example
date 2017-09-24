import { Component, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model";

@Component({
  selector:"new-tap",
  template:`
  <div class="col-md-4">
    <h4> Enter New Tap Details</h4>
    <p>Enter Keg Name: <input #newName></p>
    <p>Brand Dealer: <input #newBrand></p>
    <p>Price per Pint: Ksh.<input #newPrice></p>
    <p>Alcohol Content: <input #newAlcohol>%</p>
    <button (click)="
      addNewKegToTaps(newName.value, newBrand.value, newPrice.value, newAlcohol.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newAlcohol.value='';
    ">Add Another Keg Tap!</button>
    <hr>
  </div>
  `
})

export class NewKegComponent{
  @Output() newTapToSend = new EventEmitter();
  addNewKegToTaps(name: string, brand: string, price: number, alcohol: number){
    var newKegItemToAdd: Keg = new Keg(name, brand, price, alcohol)
    this.newTapToSend.emit(newKegItemToAdd);
  }
}
