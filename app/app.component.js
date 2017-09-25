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
var task_model_1 = require("./task.model");
var keg_model_1 = require("./keg.model");
var AppComponent = (function () {
    function AppComponent() {
        this.kegsOnTap = [
            new keg_model_1.Keg("Zcolsh", "EBAL", 600, 12.8),
            new keg_model_1.Keg("Kifabisch", "Kero", 750, 6.5),
            new keg_model_1.Keg("Nzstip", "BrewsBas", 450, 17.5),
            new keg_model_1.Keg("lamstout", "DTP", 300, 5.2)
        ];
        this.parentTasks = [
            new task_model_1.Task("Check emails", "High", "Work"),
            new task_model_1.Task("Attend Meetings", "High", "Work"),
            new task_model_1.Task("Organise workstation", "Low", "Work"),
            new task_model_1.Task("Watch something Funny", "Low", "Home"),
            new task_model_1.Task("Do laundry", "High", "Home"),
            new task_model_1.Task("Walk the Dog", "Medium", "Home"),
            new task_model_1.Task("Go for Run", "Medium", "Hobby"),
            new task_model_1.Task("Play video Game", "Low", "Hobby"),
            new task_model_1.Task("Cook Food", "High", "Home")
        ];
        this.clickedTask = null;
        this.clickedDrink = null;
    }
    AppComponent.prototype.editTask = function (selectedTask) {
        this.clickedTask = selectedTask;
    };
    AppComponent.prototype.doneEdittingTasks = function () {
        this.clickedTask = null;
    };
    AppComponent.prototype.newTasKAddition = function (newTask) {
        this.parentTasks.push(newTask);
    };
    AppComponent.prototype.editCurrentDrinks = function (selectedDrink) {
        this.clickedDrink = selectedDrink;
    };
    AppComponent.prototype.doneEdittingDrinks = function () {
        this.clickedDrink = null;
    };
    AppComponent.prototype.newTap = function (newKeg) {
        this.kegsOnTap.push(newKeg);
    };
    AppComponent.prototype.getBeer = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-apps',
            template: "\n  <div class=\"container\">\n    <h1 class=\"jumbotron\">Angular To_Do List</h1>\n    <div class=\"row\">\n      <div class=\"col-md-4\" id=\"editor\">\n        <task-list\n            [childTaskList]=\"parentTasks\"\n            (clickSender)=\"editTask($event)\"\n          ></task-list>\n      </div>\n      <new-task\n          (newTaskToSend)=\"newTasKAddition($event)\"\n        ></new-task>\n      <edit-task\n          [childClickedTask]=\"clickedTask\"\n          (doneEdittingChildTaskSender)=\"doneEdittingTasks($event)\"\n        ></edit-task>\n    </div>\n\n    <hr>\n\n    <h2 class=\"jumbotron\">Tap Room App</h2>\n    <div class=\"row\">\n      <h3>Keg Available on Tap!</h3>\n      <div class=\"col-md-4\">\n        <h4>Liqour on Tap!</h4>\n        <keg-list\n            [childKegList]=\"kegsOnTap\"\n            (kegClickSender)=\"editCurrentDrinks($event)\"\n          ></keg-list>\n      </div>\n      <new-tap\n          (newTapToSend)=\"newTap($event)\"\n        ></new-tap>\n      <edit-keg\n          [childClickedDrink]=\"clickedDrink\"\n          (doneEdittingChildKegSender)=\"doneEdittingDrinks($event)\"\n        ></edit-keg>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map