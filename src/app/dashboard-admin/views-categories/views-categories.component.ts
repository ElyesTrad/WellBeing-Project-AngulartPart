import { NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-views-categories',
  templateUrl: './views-categories.component.html',
  styleUrls: ['./views-categories.component.css']
})
export class ViewsCategoriesComponent implements OnInit {

  categories=[];
  dataArray: any;
   swal: any;

  constructor(private _service:CategoryService) { }


  ngOnInit(): void {
    this._service.getCategorys().subscribe(
      (data: any)=>{
      this.categories=data;
      console.log(this.categories);
    },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error ||','Error in loadiing data','error');
      }
    );
    

}
}