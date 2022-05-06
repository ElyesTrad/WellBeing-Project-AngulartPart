import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../Service/event.service';
import {Event} from '../../Model/Event';
import {User} from "../../Model/User";
import {AuthentifService} from "../../Service/authentif.service";

@Component({
  selector: 'app-event-client',
  templateUrl: './event-client.component.html',
  styleUrls: ['./event-client.component.css'],
})
export class EventClientComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthentifService
  ) {
  }

  listEvent: any;
  event: any;
  idUser: any;
user= new User() ;
  ngOnInit(): void {
    this.getUser();
  this.idUser=this.user.id;

    this.event = new Event();
    this.eventService.getEvent().subscribe((data) => {
      this.listEvent = data;
      console.log(data);
    });
  }

  affectUserToEvent(idU: any, idE: string) {
    this.eventService.affectUserToEvent(idU, idE).subscribe();
  }
  getUser() {
    this.authService.GetUser().subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }

  ev: any;

  upData(event: any) {
      this.ev=localStorage.setItem("eventDetails",JSON.stringify(event))
    this.router.navigate(["detailEvent"]);
  }
}
