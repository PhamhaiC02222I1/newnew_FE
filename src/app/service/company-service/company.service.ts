import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Product} from '../../model/Product';
import {Observable} from 'rxjs';
import {Company} from '../../model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
private API_COMPANY=environment.API_LOCAL+'company';

  constructor(private http:HttpClient) { }
  pageCompany(request){
  const params = request;
  return  this.http.get(this.API_COMPANY,{params});
  }
  searchNameCompany(request,search){
    const params=request;
    const companyName=search;
    return this.http.get(this.API_COMPANY+'/search?companyName='+companyName,{params});
  }
  createCompany(company:Company):Observable<Company>{
    return this.http.post<Company>(this.API_COMPANY,company);
  }
  getCompanyById(id:number):Observable<Company>{
    return this.http.get<Company>(`${this.API_COMPANY}/${id}`)
  }
  deleteCompany(id:number):Observable<Company>{
    return this.http.delete<Company>(`${this.API_COMPANY}/${id}`);
  }
  updateCompany(id:number,company:Company):Observable<Company>{
    return this.http.put<Company>(`${this.API_COMPANY}/${id}`,company);
  }
}

