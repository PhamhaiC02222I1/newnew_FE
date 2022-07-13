import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {Tour} from '../../../model/Tour';
import {TokenService} from '../../../service/token.service';
import {CategoryService} from '../../../service/category-service/category.service';
import {TourService} from '../../../service/tour-service/tour.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-tour',
  templateUrl: './page-tour.component.html',
  styleUrls: ['./page-tour.component.scss']
})
export class PageTourComponent implements OnInit {
  totalElements: number = 0;
  tour: Tour[]=[];
  loading: boolean;
  searchText;
  isCheckUser;

  searchTour:Tour[]=[];
  name;
  checkSearch=false;
  sizeSearch:number;
  constructor(private tokenService:TokenService,private tourService:TourService) { }

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
    this.tourService.pageTour(request).subscribe(data => {
      this.tour = data['content'];
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
  // private getSearchRequest(request,name){
  //   this.loading=true;
  //   this.name=name;
  //   if (this.name==''){
  //     return;
  //   }
  //   this.tourService.searchCategoryName(request,this.name).subscribe(data=>{
  //     this.searchCategorys=data['content'];
  //     this.totalElements=data['totalElements'];
  //     this.sizeSearch=this.totalElements;
  //     this.loading = false;
  //   },error => {
  //     this.loading=false;
  //   });
  //
  // }
}
