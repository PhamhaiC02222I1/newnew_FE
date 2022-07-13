import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {Product} from '../../../model/Product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product-service/product.service';
import {FormControl, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category-service/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  // @ts-ignore
  products: Product = new Product();
  animalControl = new FormControl('', Validators.required);
  category:Category[];
  status = 'Please fill  in the form to edit product';
  error1: any = {
    message: 'product name is existed'
  };
  success: any = {
    message: 'update success'
  };
  form:any={};
  checkAvatar=false;
  constructor(private actRouter: ActivatedRoute,private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {

    this.actRouter.paramMap.subscribe(productId => {
      const id = +productId.get('id');
      this.productService.getProductById(id).subscribe(result => {
        this.products = result;

      });
    });
    this.categoryService.getListCategory().subscribe(data1=>{
      this.category=data1;
      console.log('data1======',this.category);
    })
  }
  ngSubmit() {
    // this.products=new Product(
    //   this.form.nameProduct,
    //   this.form.description,
    //   this.form.avatarProduct,
    //   this.form.category
    // )
    console.log('product============',this.products);
    this.productService.updateProduct(this.products.id, this.products).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'the Name Product is existed! please try again';
      }

      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Update success!!';
      }
    });
  }
  onChangeAvatar($event){
    this.products.avatarProduct=$event;
    this.checkAvatar=true;
  }
}
