import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {_getEventTarget} from '@angular/cdk/platform';
import {environment} from 'src/environments/environment';
import {User} from "../Model/User";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/event'

  addEvent(event: Event) {
    return this.http.post('http://localhost:8085' + '/event/addEvent', event);
  }

  getEvent() {
    return this.http.get<any>('http://localhost:8085' + '/event/listEvent')
  }

  deleteEvent(id: string) {

    return this.http.delete('http://localhost:8085' + '/event/' + id)
  }

  updateEvent(event: Object) {
    return this.http.put<Event>('http://localhost:8085' + '/event/updateEvent', event);
  }

  getEventById(id: string) {
    return this.http.get<Event>('http://localhost:8085' + '/event/eventById/' + id);
  }

  affectUserToEvent(idUser: any, idEvent: string) {
    return this.http.post('http://localhost:8085' + '/event/userToEvent/' + idUser + "/" + idEvent, {});
  }

  listParticipant(id: any) {
    return this.http.get<User>('http://localhost:8085' + '/event/ListParticipantEvent' + id)

  }

  getPdf(id: any) {
    return this.http.get('http://localhost:8085' + '/event/PDF/' + id)
  }
}
