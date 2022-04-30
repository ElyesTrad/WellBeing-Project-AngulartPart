import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:'',
  };

  constructor(private _service:CategoryService, private _router:Router,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.category.title.trim()==''|| this.category.title==null){
    this._snack.open('Title Required !!','',{
      duration:3000,
    });
    return;
    }
    this._service.addCategory(this.category).subscribe((data:any)=>{
      this.category.title='';
      this.category.description='';
      Swal.fire('Succes !!','Category is added  successfuly','success');

    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Server Error','error');

    }
    );

  }
  //addCategory(f:any){
   // let data=f.value
    //console.log(data)
    //this._service.addCategory(data).subscribe(()=>this._router.navigateByUrl("/dashboardAdmin/category"));
  

}
