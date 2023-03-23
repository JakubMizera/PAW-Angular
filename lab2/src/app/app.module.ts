import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallChartComponent } from './small-chart/small-chart.component';
import { MediumChartComponent } from './medium-chart/medium-chart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallChartComponent,
    MediumChartComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
