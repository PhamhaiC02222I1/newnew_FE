import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/Product';
import {Company} from '../../../model/Company';
import {ProductService} from '../../../service/product-service/product.service';
import {TokenService} from '../../../service/token.service';
import {PageEvent} from '@angular/material/paginator';
import {CompanyService} from '../../../service/company-service/company.service';

@Component({
  selector: 'app-page-company',
  templateUrl: './page-company.component.html',
  styleUrls: ['./page-company.component.scss']
})
export class PageCompanyComponent implements OnInit {
  totalElements: number = 0;
  loading: boolean;
  searchText;
  isCheckUser;
  companys: Company[] = [];
  searchCompanys: Company[] = [];
  companyName;
  checkSearch = false;
  sizeSearch: number;

  constructor(private companyService: CompanyService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.getListRequest({page: 0, size: 5});
    if (this.tokenService.getToken()) {
      this.isCheckUser = true;
    }
    if (!this.isCheckUser) {
      this.getListRequest({page: 0, size: 5});
    }
  }

  private getListRequest(request) {
    this.loading = true;
    this.companyService.pageCompany(request).subscribe(data => {
      this.companys = data['content'];
      console.log('data[content]--------', data['content']);
      this.totalElements = data['totalElements'];
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    console.log('event=====', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);

    // this.getSearchRequest(request,this.name);
  }

  private getSearchRequest(request, companyName) {
    this.loading = true;
    this.companyName = companyName;
    if (this.companyName == '') {
      return;
    }
    this.companyService.searchNameCompany(request, this.companyName).subscribe(data => {
      this.searchCompanys = data['content'];
      this.totalElements = data['totalElements'];
      this.sizeSearch = this.totalElements;
      this.loading = false;
    }, error => {
      this.loading = false;
    });

  }

  private onSearch() {
    this.checkSearch = true;
    if (this.companyName == '') {
      this.checkSearch = false;
      return;
    }
    this.getSearchRequest({page: 0, size: this.sizeSearch}, this.companyName);
  }
}
