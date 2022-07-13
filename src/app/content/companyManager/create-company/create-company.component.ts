import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company-service/company.service';
import {Company} from '../../../model/Company';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
form:any={};
status='Please fill name company in the form';
companys:Company;
checkAvatar=false;
  // animalControl = new FormControl('', Validators.required);
  error1:any={
    message:"no name company"
  }
  error2:any={
    message:"name company is existed!Please try again"
  }
  error3:any={
    message:"no website company"
  }
  error4:any={
    message:"website company is existed!Please try again"
  }
  error5:any={
    message:"no image company"
  }
  error6:any={
    message:"no Establishment_date company"
  }
  success:any={
    message:"create company success!!!"
  }
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    // @ts-ignore
    this.companys=new Company(
      this.form.companyName,
      this.form.description,
      this.form.establishmentDate=new Date(),
      this.form.website,
      this.form.image
    )
    this.companyService.createCompany(this.companys).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status="please fill the Name Company "
      }
      if (JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status="name company is existed!Please try again "
      }
      if (JSON.stringify(data)==JSON.stringify(this.error3)){
        this.status="please fill the website company"
      }
      if (JSON.stringify(data)==JSON.stringify(this.error4)){
        this.status="website company is existed!Please try again"
      }
      if (JSON.stringify(data)==JSON.stringify(this.error5)){
        this.status="please choosse the image company"
      }
      if (JSON.stringify(data)==JSON.stringify(this.error6)){
        this.status="please chosse the Establishment_date company"
      }
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="create company success!"
      }
    })
  }
  onChangeAvatar($event){
    this.form.image=$event;
    this.checkAvatar=true;
  }
}
