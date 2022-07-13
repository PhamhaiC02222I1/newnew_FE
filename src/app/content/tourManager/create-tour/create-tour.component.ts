import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {CategoryService} from '../../../service/category-service/category.service';
import {TourService} from '../../../service/tour-service/tour.service';
import {Tour} from '../../../model/Tour';
import {Category} from '../../../model/Category';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss']
})
export class CreateTourComponent implements OnInit {
  form:any={};
  isCheckUser=false;
  status='Please fill name category in the form';
  tours:Tour;
  success:any={
    message:"create success"
  }
  constructor(private tokenService:TokenService,private tourService:TourService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isCheckUser=true;
    }
  }
  ngSubmit(){
    this.tours=new Tour(
      this.form.name,

      this.form.price , this.form.desciption
    )
    this.tourService.createTour(this.tours).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="create tour success!"
      }
    })
  }
}
