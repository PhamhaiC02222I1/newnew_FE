import {Component, OnInit} from '@angular/core';
import {UserAccount} from '../../../model/UserAccount';
import {AdminService} from '../../../service/admin.service';
import {PageEvent} from '@angular/material/paginator';
import {isFatalLinkerError} from '@angular/compiler-cli/linker';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {
  totalElements: number = 0;
  users: UserAccount;
  loading: boolean;
  searchText;
  isCheckUser;

  username;
  checkSearch=false;
  sizeSearch:number;
  userSearch:UserAccount[]=[];
  constructor(private adminService: AdminService,private tokenService:TokenService) {
  }

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
    this.adminService.pageUser(request).subscribe(data => {
      this.users = data['content'];
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
  }
  private getSearchRequest(request,username){
    this.loading=true;
    this.username=username;
    if (this.username==''){
      return;
    }
    this.adminService.searchUsername(request,this.username).subscribe(data=>{
      this.userSearch=data['content'];
      this.totalElements=data['totalElements'];
      this.sizeSearch=this.totalElements;
      this.loading = false;
    },error => {
      this.loading=false;
    });

  }
  private onSearch(){
    this.checkSearch=true;
    if (this.username==''){
      this.checkSearch=false;
      return;
    }
    this.getSearchRequest({page:0,size:this.sizeSearch},this.username);
  }
}
