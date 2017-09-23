import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="jumbotron">JS Angular Intro</h1>
    <hr>
    <h2 class="jumbotron">Tap Room App</h2>
    <div class="row">
      <h3>Keg brands available</h3>
      <div class="col-md-6">
        <button>Add Brand to the List</button><hr>
      </div>
      <div class="col-md-6"></div>
    </div>
  </div>
  `
})

export class AppComponent {

}
