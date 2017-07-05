import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from './service/http.service';
import { AppConstants } from './app.constants';
import {Router } from '@angular/router'


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  providers:[AppService , HttpClient, AppConstants]
})
export class AppComponent {
  title = 'app';
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
     this.route.navigate(['']);
  }
}
