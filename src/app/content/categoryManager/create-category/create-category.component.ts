import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
form:any={};
category:Category;
isCheckUser=false;
status='Please fill name category in the form';
error1:any={
  message:"no name category"
}
  success:any={
    message:"create success"
  }
  constructor(private categoryService:CategoryService,
              private tokenService:TokenService) { }
  ngSubmit(){
this.category=new Category(
  this.form.name
)
    this.categoryService.createCategory(this.category).subscribe(data=>{
if (JSON.stringify(data)==JSON.stringify(this.error1)){
  this.status="the name category is existed! please try again!!!"
}
if (JSON.stringify(data)==JSON.stringify(this.success)){
  this.status="Create success category!!!"
}
    })
  }
  ngOnInit(): void {
  if (this.tokenService.getToken()){
    this.isCheckUser=true;
  }
  }

}
