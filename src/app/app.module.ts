import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }   from './app.routing';

import { CompanyComponent } from './components/company/company.component';
import { CompanyListComponent } from './components/companyList/companyList.component';


import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
