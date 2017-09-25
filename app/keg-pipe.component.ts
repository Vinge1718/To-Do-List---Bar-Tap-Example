import { Pipe, PipeTransform } from "@angular/core";
import { Keg } from "./keg.model"

@Pipe({
  name:"alcoholFilter",
  pure:false
})

export class KegViewFilterComponent implements PipeTransform{
  transform(input: Keg[], kegFilters){
    var output: Keg[] = [];
    if(kegFilters === "A/C above 10%"){
      for(var i=0; i<input.length; i++){
        if(input[i].alcohol>=10){
          output.push(input[i]);
        }
      }
      return output;
    }else if(kegFilters==="A/C below 10%"){
      for (var i=0; i<input.length;i++){
        if(input[i].alcohol<10){
          output.push(input[i]);
        }
      }
      return output;
    }else if(kegFilters==="Premium Liqour)"){
      for (var i=0; i<input.length;i++){
        if(input[i].price>=500){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
