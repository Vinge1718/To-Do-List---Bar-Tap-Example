import { Component, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model";

@Component({
  selector:"new-tap",
  template:`
  <div class="col-md-4">
    <h4> Enter New Tap Details</h4>
    <p>Enter Keg Name: <input></p>
    <p>Brand Dealer: <input></p>
    <p>Price per Pint: <input></p>
    <p>Alcohol Content:<input></p>
    <button (click)="addKegToTaps()">Add Another Keg Tap!</button>
    <hr>
  </div>
  `
})

export class NewKegComponent{

}
