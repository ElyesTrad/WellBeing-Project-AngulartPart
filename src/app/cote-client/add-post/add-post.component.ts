import { Component, OnInit } from '@angular/core';
import { CommentFil } from 'src/app/model/CommentFil';
import { PublicationFil } from 'src/app/model/PublicationFil';
import { CommentfilService } from 'src/app/service/commentfil.service';
import { PubfilService } from 'src/app/service/pubfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  Pubs:PublicationFil[];
  pub = new PublicationFil();
  Comments:CommentFil[];
 
 
  comment:CommentFil=new CommentFil();
  
  constructor(private _service:PubfilService,private _serviceCm:CommentfilService) { }

  ngOnInit(): void {
    this._service.getPubs().subscribe(
      (data: any)=>{
      this.Pubs=data;
      console.log(this.Pubs);
      console.log(this.Pubs[0].idph);
      
    },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error ||','Error in loadiing data','error');
      }
    );


    this._serviceCm.getComments().subscribe(
      (data: any)=>{
      this.Comments=data;
      console.log(this.Comments);
      console.log(this.comment.publics.likes)
    },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error ||','Error in loadiing data','error');
      }
    );
  

  



    }

}
