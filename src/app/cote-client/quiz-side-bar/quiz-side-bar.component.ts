import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-quiz-side-bar',
  templateUrl: './quiz-side-bar.component.html',
  styleUrls: ['./quiz-side-bar.component.css']
})
export class QuizSideBarComponent implements OnInit {
categories;
  constructor(private _cat:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._cat.getCategorys().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        this._snack.open('Error in loading categories from server','',{
          duration:3000,
        });
      }
    );
  }

}
