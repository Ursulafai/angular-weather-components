import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { WeatherComponent } from './weather/weather.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TypeFilterPipe } from './type-filter.pipe';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    WeatherComponent,
    StatisticsComponent,
    TypeFilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
