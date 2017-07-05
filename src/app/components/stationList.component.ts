import { Component, Input, OnInit } from '@angular/core';

import { IRailService } from '../services/iRail.service';

let stationsDummy = require('../../dummydata/stations.json');

@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html',
    styleUrls: ['./styles/stationList.component.scss']
})
export class StationList implements OnInit {
    stations: object;
    currQuery: string;
    selectedStation: object;

    constructor(
        private IRailService: IRailService
    ) { }

    ngOnInit() {
        this.IRailService.getAllStations().then((d) => {
            this.stations = d.station;
            this.selectedStation = this.stations[0];
        }).catch(e => console.log(e));
        /* Dummy content */
        /*this.stations = stationsDummy.station;
        this.selectedStation = this.stations[0];
        */
    }

    getSuggestions() {
        this.IRailService.getStations(this.currQuery).then((d) => {
            this.stations = d;
        }).catch(e => console.log(e));
    }

    onSelect() {
        console.log(this.selectedStation)
    }
}