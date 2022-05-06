import { Department } from "../Enum/department";
import { InterestCenter } from "../Enum/interest-center";
import { Office } from "../Enum/office";
import {Commentaire} from "./Commentaire";
import {User} from "./User";


export class Event {
  idEvent: string;
  name: string;
  nbrPlace: number;
  nbrParticipate: number;
  date: Date;
  finalDateRquest: Date;
  place: string;
  picture: string;
  recommandation: boolean;
  commentaires: Commentaire[];
  users: User[];
  department: Department;
  ineterestCenter: InterestCenter;
  office: Office;
}
