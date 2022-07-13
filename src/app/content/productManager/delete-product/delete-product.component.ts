import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {Product} from '../../../model/Product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product-service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  products:Product;
  status='Product';
  success:any={
    message:"delete success"
  }
  constructor(private actRout:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.actRout.paramMap.subscribe(productId=>{
      const id=+productId.get('id');
      this.productService.getProductById(id).subscribe(result=>{
        this.products=result;
      })
    })
  }
  ngSubmit(){
    this.productService.deleteProduct(this.products.id).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status='Delete success!!'
      }
    })
  }
}
