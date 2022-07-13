import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form:any={};
  status='Please fill name category in the form';
  animalControl = new FormControl('', Validators.required);
  category:Category[];
  checkAvatar=false;
  product:Product;
  error1:any={
    message:"no_nameProduct"
  }
  error2:any={
    message:"no_avatarProduct"
  }
  success:any={
    message:"create Product success!!!"
  }
  constructor(private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data=>{
      this.category=data;
      console.log('data======',this.category);
    })
  }
  ngSubmit(){
  this.product=new Product(
    this.form.nameProduct,
    this.form.description,
    this.form.avatarProduct,
    this.form.category
  )
    this.productService.createProduct(this.product).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status="please fill the Name Product "
      }
      if (JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status="Please upload avatar !!!"
      }
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="Create success Product!!!"
      }
    })
  }
  onChangeAvatar($event){
    this.form.avatarProduct=$event;
    this.checkAvatar=true;
  }
}

