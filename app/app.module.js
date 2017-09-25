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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var task_list_component_1 = require("./task-list.component");
var keg_list_component_1 = require("./keg-list.component");
var edit_task_component_1 = require("./edit-task.component");
var edit_keg_component_1 = require("./edit-keg.component");
var new_task_component_1 = require("./new-task.component");
var new_keg_component_1 = require("./new-keg.component");
var task_pipe_component_1 = require("./task-pipe.component");
var keg_pipe_component_1 = require("./keg-pipe.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                keg_list_component_1.KegListComponent,
                task_list_component_1.TaskListComponent,
                edit_task_component_1.EditTaskComponent,
                edit_keg_component_1.EditKegComponent,
                new_keg_component_1.NewKegComponent,
                new_task_component_1.NewTaskComponent,
                task_pipe_component_1.CompleteTaskComponent,
                keg_pipe_component_1.KegViewFilterComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map