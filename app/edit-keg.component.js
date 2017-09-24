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
var EditKegComponent = (function () {
    function EditKegComponent() {
        this.doneEdittingChildKegSender = new core_1.EventEmitter;
    }
    EditKegComponent.prototype.doneEdittingChildDrinks = function () {
        this.doneEdittingChildKegSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], EditKegComponent.prototype, "childClickedDrink", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditKegComponent.prototype, "doneEdittingChildKegSender", void 0);
    EditKegComponent = __decorate([
        core_1.Component({
            selector: "edit-keg",
            template: "\n  <div class=\"col-md-4\" id=\"drinksEditor\" *ngIf=\"childClickedDrink\">\n    <h4>Drinks Editor</h4>\n    <p>Drinks' Name: <input [(ngModel)]=\"childClickedDrink.name\"></p>\n    <p>Drinks' Brand: <input [(ngModel)]=\"childClickedDrink.brand\"></p>\n    <p>Drinks A/C(%): <input [(ngModel)]=\"childClickedDrink.alcohol\"></p>\n    <button (click)=\"doneEdittingChildDrinks()\">save</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditKegComponent);
    return EditKegComponent;
}());
exports.EditKegComponent = EditKegComponent;
//# sourceMappingURL=edit-keg.component.js.map