import {User} from "./User";
import {Event} from "./Event";

export class Commentaire {
  id:string;
  description: string;
  date: Date;
  isBlocked: boolean;
  user:User;

  event:Event
}
