import { AppConstants } from './app.constants';
import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient } from './service/http.service';

@Injectable()
export class AppService {
    public selectedCompany:Object;

    constructor(
        private http: Http,
        private httpClient: HttpClient,
        private constants: AppConstants) {
    }

    public getSearchResult(searchTxt): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.getSearchResultUrl+'?searchTerm='+searchTxt;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

     public getCompanyDetails(company): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.getCompanyListUrl+'/'+company.company_number;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(errorr: any) {
        let errMsg = (errorr.message) ? errorr.message :
            errorr.status ? '' : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}