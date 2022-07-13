import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {UserAccount} from '../../../model/UserAccount';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
  totalElements: number = 0;
  categorys: Category[]=[];
  loading: boolean;
  searchText;
  isCheckUser;

  searchCategorys:Category[]=[];
  name;
  checkSearch=false;
  sizeSearch:number;
  constructor(private categoryService:CategoryService,
              private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getListRequest({page:0,size:5})
if (this.tokenService.getToken()){
  this.isCheckUser=true;
  if (!this.checkSearch){
    this.getListRequest({page:0,size:5});
  }
}
  }
  private getListRequest(request) {
    this.loading = true;
    this.categoryService.pageCategory(request).subscribe(data => {
      this.categorys = data['content'];
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

    this.getSearchRequest(request,this.name);
  }


  private getSearchRequest(request,name){
    this.loading=true;
    this.name=name;
    if (this.name==''){
      return;
    }
    this.categoryService.searchCategoryName(request,this.name).subscribe(data=>{
      this.searchCategorys=data['content'];
      this.totalElements=data['totalElements'];
      this.sizeSearch=this.totalElements;
      this.loading = false;
    },error => {
      this.loading=false;
    });

  }
  private onSearch(){
    this.checkSearch=true;
    if (this.name==''){
      this.checkSearch=false;
      return;
    }
    this.getSearchRequest({page:0,size:this.sizeSearch},this.name);
  }
}
