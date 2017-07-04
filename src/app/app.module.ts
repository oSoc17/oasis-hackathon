import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { StationList } from './components/stationList.component';

import { IRail } from './services/iRail.service'

@NgModule({
  declarations: [
    AppComponent,
    StationList
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ IRail ],
  bootstrap: [AppComponent]
})
export class AppModule { }
