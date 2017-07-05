import { Component , OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '../../service/http.service';
import { AppConstants } from '../../app.constants';


@Component({
  selector: 'company',
  templateUrl: './company.html',
  styleUrls: ['./company.scss'],
  providers:[HttpClient, AppConstants]
})
export class CompanyComponent implements OnInit {
  private companiesDetails:Object;

  constructor(private appservice:AppService){
  
  }

  ngOnInit(){
    if(this.appservice.selectedCompany){
         this.get_CompanyDetails(this.appservice.selectedCompany);
    }else{
      
    }
  }

   private get_CompanyDetails(company){
    this.appservice.getCompanyDetails(company).subscribe(
      response=>{
         this.companiesDetails = response;
      },
      error=>{

      }
    );
  };
}
