import {Component, OnInit} from '@angular/core';
//import {FormBuilder} from "@angular/forms";
import {EventService} from "../Service/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../Service/comment.service";
import {AuthentifService} from "../Service/authentif.service";
import {User} from "../Model/User";
import {FormBuilder} from "@angular/forms";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private eventService: EventService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
              private authService: AuthentifService) {
  }

  listCommment: any;
  user = new User;

  ngOnInit(): void {
    this.getUser();
    this.idUser = this.user.id;
    this.upData()
    console.log(this.event)
    this.getComment();
  }


  getUser() {
    this.authService.GetUser().subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }


  getComment() {
    this.commentService.getComments().subscribe(data => {
        (this.listCommment = data)
        console.log(data);
      }
    );
  }

  listeEvent: any;

  listEvent() {
    this.eventService.getEvent().subscribe((data) => {
      this.listeEvent = data;
      console.log(data);
    });
    this.router.navigate(["eventClient"]);

  }


  event: any;

  upData() {
    this.event = JSON.parse(<string>localStorage.getItem("eventDetails"));
    console.log(this.event);
  }

  comment = {
    description: null
  }
  idUser: any;

  addComment(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.commentService.addComment(this.comment, this.event.id, this.user.id).subscribe(
        (res) => {
          this.getComment()
          console.log('ress', res)
        },
        (error) => console.log('error', error)
      );
    }

  }

  elementType= NgxQrcodeElementTypes.URL
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
  value="test"

}
