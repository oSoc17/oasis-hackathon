import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class IRail {
    /* https://irail.be/stations/NMBS?q=gent - Station query */
    private iRailUrl = "https://irail.be/stations/NMBS";

    constructor(private http: Http) { }


}