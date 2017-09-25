import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task.model";

@Pipe ({
  name:"finished",
  pure:false
})

export class CompleteTaskComponent implements PipeTransform{
  transform(input: Task[]){
    var output: Task[] = [];
    for(var i = 0; i<input.length; i++){
      if(input[i].done === false){
        output.push(input[i]);
      }
    }
    return output;
  }
}
