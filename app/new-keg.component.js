"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var keg_model_1 = require("./keg.model");
var NewKegComponent = (function () {
    function NewKegComponent() {
        this.newTapToSend = new core_1.EventEmitter();
    }
    NewKegComponent.prototype.addNewKegToTaps = function (name, brand, price, alcohol) {
        var newKegItemToAdd = new keg_model_1.Keg(name, brand, price, alcohol);
        this.newTapToSend.emit(newKegItemToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewKegComponent.prototype, "newTapToSend", void 0);
    NewKegComponent = __decorate([
        core_1.Component({
            selector: "new-tap",
            template: "\n  <div class=\"col-md-4\">\n    <h4> Enter New Tap Details</h4>\n    <p>Enter Keg Name: <input #newName></p>\n    <p>Brand Dealer: <input #newBrand></p>\n    <p>Price per Pint: Ksh.<input #newPrice></p>\n    <p>Alcohol Content: <input #newAlcohol>%</p>\n    <button (click)=\"\n      addNewKegToTaps(newName.value, newBrand.value, newPrice.value, newAlcohol.value);\n      newName.value='';\n      newBrand.value='';\n      newPrice.value='';\n      newAlcohol.value='';\n    \">Add Another Keg Tap!</button>\n    <hr>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewKegComponent);
    return NewKegComponent;
}());
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map