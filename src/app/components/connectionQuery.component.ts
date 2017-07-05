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

    constructor(
        private IRailService: IRailService
    ){}

    calcDuration() {
        console.log(`${this.depStation.selectedStation} to ${this.arrStation.selectedStation}`);
    }

    clickCalculate() {
        let arriveSt = this.arrStation.selectedStation;
        let departSt = this.depStation.selectedStation;
        if (arriveSt.id === departSt.id) {
            console.log("stations can't be the same.");
        } else {
            this.IRailService.getRouteReadable(arriveSt.id, departSt.id, this.depTime.selectedTime, 
                this.depDate.selectedDate, "arrive").then((data) => {
                    console.log(data);
                }).catch(e => console.log(e));
        }
    }
}