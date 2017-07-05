/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './components/app.component';
import { StationList } from './components/stationList.component';
import { Graph } from './components/graph.component';
import { JourneyDetail } from './components/journeyDetail.component';
import { ConnectionQuery } from './components/connectionQuery.component';
import { GraphSection } from './components/graphSection.component';
import { DepartTime } from './components/departTime.component';
import { DepartDate } from './components/departDate.component';

/* Services */
import { IRailService } from './services/iRail.service'

@NgModule({
  declarations: [
    AppComponent,
    StationList,
    Graph,
    JourneyDetail,
    ConnectionQuery,
    GraphSection,
    DepartTime,
    DepartDate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ IRailService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
