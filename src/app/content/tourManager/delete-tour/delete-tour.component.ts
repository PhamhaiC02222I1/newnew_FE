import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../service/category-service/category.service';
import {TourService} from '../../../service/tour-service/tour.service';
import {Tour} from '../../../model/Tour';

@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-tour.component.html',
  styleUrls: ['./delete-tour.component.scss']
})
export class DeleteTourComponent implements OnInit {
  tour:Tour;
  status='Tour info';

  success:any={
    message:"delete success"
  }
  constructor(private actRouter:ActivatedRoute,private tourService:TourService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(tourId=>{
      const id=+tourId.get('id');
      this.tourService.getProductById(id).subscribe(result=>{
        this.tour=result;
      })
    })
  }
  ngSubmit(){
    this.tourService.deleteTour(this.tour.id).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status='Delete success!!'
      }
    })
  }
}
