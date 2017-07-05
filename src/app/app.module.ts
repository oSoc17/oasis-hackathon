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

/* Services */
import { IRailService } from './services/iRail.service'

@NgModule({
  declarations: [
    AppComponent,
    StationList,
    Graph,
    JourneyDetail,
    ConnectionQuery,
    GraphSection
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
