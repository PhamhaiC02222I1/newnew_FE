import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../service/category-service/category.service';
import {Category} from '../../../model/Category';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  category:Category;
  status='Category';

  success:any={
    message:"delete success"
  }
  constructor(private actRouter:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(categoryId=>{
      const id=+categoryId.get('id');
      this.categoryService.getCategoryById(id).subscribe(result=>{
        this.category=result;
      })
    })
  }
  ngSubmit(){
    this.categoryService.deleteCategory(this.category.id).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status='Delete success!!'
      }
    })
  }
}
