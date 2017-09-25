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
var KegListComponent = (function () {
    function KegListComponent() {
        this.kegClickSender = new core_1.EventEmitter();
        this.selectedView = "all";
    }
    KegListComponent.prototype.editCurrentDrinks = function (clickedKeg) {
        this.kegClickSender.emit(clickedKeg);
    };
    KegListComponent.prototype.uponSelection = function (preferedView) {
        this.selectedView = preferedView;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], KegListComponent.prototype, "childKegList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], KegListComponent.prototype, "kegClickSender", void 0);
    KegListComponent = __decorate([
        core_1.Component({
            selector: "keg-list",
            template: "\n   <select (change)=\"uponSelection($event.target.value)\">\n    <option value=\"all\">All Available Liquour on Tap</option>\n    <option value=\"A/C above 10%\">Alcohol Content exceeding 10%</option>\n    <option value=\"A/C below 10%\">Alcohol Content below 10%</option>\n    <option value=\"Premium Liqour\">Keg Priced above Ksh.500</option>\n   </select>\n   <hr>\n   <div id=\"kegDisplay\" *ngFor=\"let currentKeg of childKegList | alcoholFilter:selectedView\">\n     <p>Name of Drink: {{currentKeg.name}}</p>\n     <p> Brew Brand: {{currentKeg.brand}}</p>\n     <p>Price per pint: Ksh.{{currentKeg.price}}</p>\n     <p>Alcohol Content: {{currentKeg.alcohol}}%</p>\n     <p>Remaining pints: {{currentKeg.pintsContained}}</p>\n     <input type=\"number\" min=\"1\" id=\"pouredBeer\">\n     <button (click)=\"getBeer()\">Pour Some Beer</button><br><br>\n     <button (click)=\"editCurrentDrinks(currentKeg)\">Edit Drink Details</button>\n     <hr>\n   </div>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], KegListComponent);
    return KegListComponent;
}());
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map