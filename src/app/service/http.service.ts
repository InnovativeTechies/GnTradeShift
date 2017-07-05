import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class HttpClient {
    public authtokenQ: string;
    

    constructor(private http: Http) {
        
    }

    Get(url: string, isAuthRequired: boolean = true, options?: RequestOptionsArgs): Observable<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        if (isAuthRequired)
            headers.append('authToken', this.authtokenQ);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.get(url, Object.assign({}, options, newOptions));

    }


    Post(url: string, body: any, isAuthRequired: boolean = true, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        if (isAuthRequired)
            // headers.append('authToken', '7dfefb22-d4c5-4154-86b5-5a09baebc310');
            headers.append('authToken', this.authtokenQ);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.post(url, body, Object.assign({}, options, newOptions));
    }

  

    Put(url: string, body: any, isAuthRequired: boolean = true, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        if (isAuthRequired)
            headers.append('authToken', this.authtokenQ);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.put(url, body, Object.assign({}, options, newOptions));
    }

    Delete(url: string, isAuthRequired: boolean = true, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        if (isAuthRequired)
            headers.append('authToken', this.authtokenQ);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.delete(url, Object.assign({}, options, newOptions));
    }

    
}
