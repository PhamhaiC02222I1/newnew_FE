import { Component, OnInit } from '@angular/core';
import {Company} from '../../../model/Company';
import {CompanyService} from '../../../service/company-service/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.scss']
})
export class DeleteCompanyComponent implements OnInit {
companys:Company;
status='Company detail'
  success:any={
    message:"delete success"
  }
  constructor(private companyService:CompanyService,private actRout:ActivatedRoute) { }

  ngOnInit(): void {
  this.actRout.paramMap.subscribe(companyId=>{
    const id = +companyId.get('id');
    this.companyService.getCompanyById(id).subscribe(result=>{
      this.companys=result;
    })
  })
  }
ngSubmit(){
  this.companyService.deleteCompany(this.companys.id).subscribe(data=>{
    if(JSON.stringify(data)==JSON.stringify(this.success)){
      this.status='Delete success!!';
    }
  })
}
}
