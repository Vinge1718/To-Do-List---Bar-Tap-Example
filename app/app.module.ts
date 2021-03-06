import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { TaskListComponent } from "./task-list.component";
import { KegListComponent } from "./keg-list.component";
import { EditTaskComponent} from "./edit-task.component";
import { EditKegComponent} from "./edit-keg.component";
import { NewTaskComponent } from "./new-task.component";
import { NewKegComponent } from "./new-keg.component";
import { CompleteTaskComponent } from "./task-pipe.component";
import { KegViewFilterComponent } from "./keg-pipe.component";
import { TaskCheckComponent } from "./task.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegListComponent,
    TaskListComponent,
    EditTaskComponent,
    EditKegComponent,
    NewKegComponent,
    NewTaskComponent,
    CompleteTaskComponent,
    KegViewFilterComponent,
    TaskCheckComponent
   ],
  bootstrap: [AppComponent]
})

export class AppModule { }
