import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IRailService {
    private iRailUrl = "http://api.irail.be";
    private options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json'
        }),
        responseType: ResponseContentType.Json
    });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    /* This feature does not exist in api.irail.be but does in irail.be */
    /* "Access-Control-Allow-Origin: *" is missing from the ressource */
    /* Meaning this can't be used outside of iRail.be? There is probably a way around this? */
    /*getStations(query: string): Promise<any> {
        let url = 'http://irail.be';
        return this.http.get(`${url}/stations/NMBS?q=${query}`, this.options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }*/

    /* New way of getting the search array? */
    getStations(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getAllStations().then((data) => {
                resolve(data.station.filter((curr) => {
                    let names = [curr.standardname.toLowerCase(), curr.name.toLowerCase()];
                    query = query.toLowerCase();

                    return names[0].indexOf(query) > -1 || names[1].indexOf(query) > -1;
                }));
            }).catch(e => this.handleError(e));
        });
    }

    getAllStations(): Promise<any> {
        /* TODO: find a way to cache this for about a day? */
        return this.http.get(`${this.iRailUrl}/stations?format=json`, this.options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }

    getRoute(to:string, from:string,time:number, timeSel:string):Promise<any>{
      var params = new URLSearchParams();
      params.set("to", to);
      params.set("from", from);
      params.set("time",""+ time);
      params.set('timeSel', timeSel);
      var options = new RequestOptions();
      options.headers = this.options.headers;
      options.responseType = this.options.responseType;
      options.search = params;

      return this.http.get(`${this.iRailUrl}/connections?format=json`, options)
          .toPromise()
          .then((response)=>response.json())
          .catch(this.handleError);
    }
}
