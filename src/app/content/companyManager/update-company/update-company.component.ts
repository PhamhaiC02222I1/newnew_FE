import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/Company';
import {CompanyService} from '../../../service/company-service/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
  companys: Company;
  status = 'Please fill  in the form to edit company';
  checkAvatar=false;
  error1: any = {
    message: 'product name is existed'
  };
  error2: any = {
    message: 'website company is existed!Please try again'
  };
  success: any = {
    message: 'update success'
  };

  constructor(private companyService: CompanyService, private actRout: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.actRout.paramMap.subscribe(companyId => {
      const id = +companyId.get('id');
      this.companyService.getCompanyById(id).subscribe(data => {
        this.companys = data;
      });
    });
  }

  ngSubmit() {
    this.companyService.updateCompany(this.companys.id,this.companys).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'product name is existed';
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'website company is existed!Please try again';
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'update success';
      }
    });
  }
  onChangeAvatar($event){
    this.companys.image=$event;
    this.checkAvatar=true;
  }
}
