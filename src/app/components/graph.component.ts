import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'graph',
    templateUrl: './templates/graph.component.html',
    styleUrls: ['./styles/graph.component.scss']
})
export class Graph {
    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Travel time'}
    ];
    public lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
    public lineChartOptions:any = {
        responsive: true
    };
    public lineChartColors:Array<any> = [
        { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
  
    // events
    public chartClicked(e:any):void {
        if (e.active[0] !== undefined) {
            console.log("Value at this point: " + this.lineChartData[0].data[parseInt(e.active[0]._index)]);
        }
    }
    
    public chartHovered(e:any):void {
        console.log(e);
    }
}