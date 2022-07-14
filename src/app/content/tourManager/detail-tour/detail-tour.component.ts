import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TourService} from '../../../service/tour-service/tour.service';
import {Tour} from '../../../model/Tour';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.scss']
})
export class DetailTourComponent implements OnInit {
tours:Tour;

  constructor(private actRout:ActivatedRoute,private tourService:TourService) { }

  ngOnInit(): void {
    this.actRout.paramMap.subscribe(productId=>{
      const id=+productId.get('id');
      this.tourService.getProductById(id).subscribe(result=>{
        this.tours=result;
      })
    })
  }

}
