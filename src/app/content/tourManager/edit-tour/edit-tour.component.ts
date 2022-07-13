import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {Tour} from '../../../model/Tour';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../service/category-service/category.service';
import {TourService} from '../../../service/tour-service/tour.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {
  // @ts-ignore
  tours: Tour = new Tour();
  status = 'Please fill  in the form to edit category';
  error1: any = {
    message: 'tour name is existed'
  };
  success: any = {
    message: 'update success'
  };
  constructor(private actRouter: ActivatedRoute, private tourService: TourService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(tourId => {
      const id = +tourId.get('id');
      this.tourService.getProductById(id).subscribe(result => {
        this.tours = result;
      });
    });
  }
  ngSubmit() {
    this.tourService.updateTour(this.tours.id, this.tours).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'the Name Tour is existed! please try again';
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Update success!!';
      }
    });
  }
}
