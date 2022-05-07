import { Pipe, PipeTransform } from "@angular/core";
import { achievements } from "../models/achievements";

@Pipe({
    name : "achievementsFilter"
})
export class achievementsFilterPipe implements PipeTransform {
    transform(achievements : achievements[], searchText:string) : achievements[]{
        if(!achievements || !searchText){
            return achievements ;
        }
        return achievements.
        filter(achievements => achievements.user.username.toLowerCase().indexOf(searchText.toLowerCase())!== -1);
    }
}