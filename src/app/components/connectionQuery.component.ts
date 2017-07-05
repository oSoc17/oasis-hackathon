import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StationList } from './stationList.component';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;

    calcDuration() {
        console.log(`${this.depStation.selectedStation} to ${this.arrStation.selectedStation}`);
    }
}