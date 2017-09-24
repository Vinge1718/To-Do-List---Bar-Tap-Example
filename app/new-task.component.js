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
var NewTaskComponent = (function () {
    function NewTaskComponent() {
        this.newTaskToSend = new core_1.EventEmitter();
    }
    NewTaskComponent.prototype.addTaskToList = function (description, priority, category) {
        var newTaskToAdd = new task_model_1.Task(description, priority, category);
        this.newTaskToSend.emit(newTaskToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewTaskComponent.prototype, "newTaskToSend", void 0);
    NewTaskComponent = __decorate([
        core_1.Component({
            selector: "new-task",
            template: "\n  <div class=\"col-md-4\">\n    <h4>Create a New Task</h4>\n    <p>Task Description: <input #newDescription></p>\n    <p>Task Priority: <input #newPriority></p>\n    <p>Task Category: <input #newCategory></p>\n    <button (click)=\"\n      addTaskToList(newDescription.value, newPriority.value, newCategory.value);\n      newDescription.value='';\n      newPriority.value='';\n      newCategory.value='';\n    \">Add Task!</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=new-task.component.js.map