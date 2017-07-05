import { Component, Input, OnInit } from '@angular/core';
import { Parser } from '../../../data/parser';

@Component({
    selector: 'graph',
    templateUrl: './templates/graph.component.html',
    styleUrls: ['./styles/graph.component.scss']
})
export class Graph {
    color = { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Travel time'},
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Travel time'},
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Travel time'}];
    public lineChartLabels:Array<any> = ["1494053400", "1494082200", "1494083340", "1494089400", "1494090540", "1494097740"];
    public lineChartColors:Array<any> = [this.color];
    private content = "";
    

    drawGraph(routes) {
        let parser = new Parser();
        let parsedData = parser.parseRaw(routes);
        console.log(parsedData.data.data);
        this.lineChartData = parsedData.data.data;
        console.log(parsedData.data.labels);
        this.lineChartLabels = parsedData.data.labels;
        console.log(parsedData);

        let res = [];
        for (let i = 0; i < parsedData.data.data.length; i++) {
            res.push(this.color);
        }
        this.lineChartColors = res;
    }

    public lineChartOptions:any = {
        responsive: true,
        elements: {
            line: {
                tension: 0
            }
        }
    };
  
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
