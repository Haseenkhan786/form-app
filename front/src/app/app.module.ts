import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PersondataComponent } from './persondata/persondata.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient} from '@angular/common/http';



import { Injectable } from '@angular/core';
import { Kpi3Component } from './kpi3/kpi3.component';
import { Kpi4Component } from './kpi4/kpi4.component';
import { Chart } from 'chart.js';
import { Kpi6Component } from './kpi6/kpi6.component';


@Injectable({
  providedIn: 'root'
})


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PersondataComponent,
    Kpi3Component,
    Kpi4Component,
    Kpi6Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
