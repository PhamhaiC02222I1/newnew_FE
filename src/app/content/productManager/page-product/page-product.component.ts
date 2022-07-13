import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {ProductService} from '../../../service/product-service/product.service';
import {TokenService} from '../../../service/token.service';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit {
  totalElements: number = 0;
  loading: boolean;
  searchText;
  isCheckUser;
  products:Product[]=[];
searchProducts:Product[]=[];
  nameProduct;
  checkSearch=false;
  sizeSearch:number;
  constructor(private productService:ProductService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getListRequest({page:0,size:5})
    if (this.tokenService.getToken()){
      this.isCheckUser=true;
    }
    if (!this.isCheckUser){
      this.getListRequest({page:0,size:5})
    }
  }
  private getListRequest(request) {
    this.loading = true;
    this.productService.pageProduct(request).subscribe(data => {
      this.products = data['content'];
      console.log('data[content]--------', data['content']);
      this.totalElements = data['totalElements'];
      this.loading = false;
    },error => {
      this.loading=false;
    });
  }
  nextPage(event:PageEvent) {
    console.log('event=====', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);

    // this.getSearchRequest(request,this.name);
  }
  private getSearchRequest(request,nameProduct){
    this.loading=true;
    this.nameProduct=nameProduct;
    if (this.nameProduct==''){
      return;
    }
    this.productService.searchNameProduct(request,this.nameProduct).subscribe(data=>{
      this.searchProducts=data['content'];
      this.totalElements=data['totalElements'];
      this.sizeSearch=this.totalElements;
      this.loading = false;
    },error => {
      this.loading=false;
    });

  }
  private onSearch(){
    this.checkSearch=true;
    if (this.nameProduct==''){
      this.checkSearch=false;
      return;
    }
    this.getSearchRequest({page:0,size:this.sizeSearch},this.nameProduct);
  }
}
