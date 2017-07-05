import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { StationList } from './stationList.component';
import { DepartTime } from './departTime.component';
import { DepartDate } from './departDate.component';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(DepartTime) depTime: DepartTime;
    @ViewChild(DepartDate) depDate: DepartDate;

    calcDuration() {
        console.log(`${this.depStation.selectedStation} to ${this.arrStation.selectedStation}`);
    }

    clickCalculate() {
        console.log(`${this.depStation.selectedStation.standardname} to ${this.arrStation.selectedStation.standardname} at 
            ${this.depTime.selectedTime} - ${this.depDate.selectedDate}`);
        
    }
}