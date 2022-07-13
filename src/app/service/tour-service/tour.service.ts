import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {Product} from '../../model/Product';
import {Tour} from '../../model/Tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private API_TOUR=environment.API_LOCAL+'tour';
  constructor(private http:HttpClient) { }
  pageTour(request){
    const params=request;
    return this.http.get(this.API_TOUR,{params})
  }
  deleteTour(id:number):Observable<Tour>{
    return this.http.delete<Tour>(`${this.API_TOUR}/${id}`)
  }
  createTour(tour:Tour):Observable<Tour>{
    return this.http.post<Tour>(this.API_TOUR,tour);
  }
  updateTour(id:number,tour:Tour):Observable<Tour>{
    return this.http.put<Tour>(`${this.API_TOUR}/${id}`,tour);
  }
  getProductById(id:number):Observable<Tour>{
    return this.http.get<Tour>(`${this.API_TOUR}/${id}`)
  }
}
