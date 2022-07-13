import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';
import {J} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
// @ts-ignore
  category: Category = new Category();
  status = 'Please fill  in the form to edit category';
  error1: any = {
    message: 'category is existed'
  };
  success: any = {
    message: 'update success'
  };

  constructor(private actRouter: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(categoryId => {
      const id = +categoryId.get('id');
      this.categoryService.getCategoryById(id).subscribe(result => {
        this.category = result;
      });
    });
  }

  ngSubmit() {
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'the Name Category is existed! please try again';
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Update success!!';
      }
    });
  }
}
