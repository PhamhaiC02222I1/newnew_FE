import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {UserAccount} from '../model/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
//API LOCAL
  private API_PAGE_USER_LIST=environment.API_LOCAL+'users/list';
 private API_PAGE_USER=environment.API_LOCAL+'users';
 private API_PAGE_USER_ID=environment.API_LOCAL+'users/findbyid';
 private API_PAGE_USER_SEARCH=environment.API_LOCAL+'users/search?username=';
  constructor(private http:HttpClient) { }
  pageUser(request){
    const params=request;
    return this.http.get(this.API_PAGE_USER_LIST,{params})
  }
  searchUsername(request,search){
    const params=request;
    const username=search;
    return this.http.get(this.API_PAGE_USER_SEARCH+username,{params});
  }
  getUserNameById(id:number):Observable<UserAccount>{
    return this.http.get<UserAccount>(`${this.API_PAGE_USER_ID}/${id}`)
  }
  deleteUser(id:number):Observable<UserAccount>{
    return this.http.delete<UserAccount>(`${this.API_PAGE_USER}/${id}`)
  }
}
