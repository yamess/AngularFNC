import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PredictionListComponent } from './components/prediction-list/prediction-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PredictNewComponent } from './components/predict-new/predict-new.component';
import {GaugeChartModule} from 'angular-gauge-chart';



@NgModule({
  declarations: [
    AppComponent,
    PredictionListComponent,
    PredictNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    GaugeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
