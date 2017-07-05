import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '../../service/http.service';
import { AppConstants } from '../../app.constants';
import {Router } from '@angular/router'


@Component({
  selector: 'companylist',
  templateUrl: './companyList.html',
  styleUrls: ['./companyList.scss'],
  providers:[HttpClient, AppConstants]
})
export class CompanyListComponent {
  private companiesDetails:Object;
    private SearchTxt: string;
  private companiesList:Object;
  constructor(private appservice:AppService , private route:Router){

  }

  private searchResult(){
    this.appservice.getSearchResult(this.SearchTxt).subscribe(
      response=>{
         this.companiesList = response;
      },
      error=>{

      }
    );
  };

  private navToCompanyDetails(company){
     this.appservice.selectedCompany = company;
     this.route.navigate(['companydetails']);
  }
}
