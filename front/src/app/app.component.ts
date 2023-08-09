import { Component,OnInit } from '@angular/core';
import { FormsModule, NgControl, NgForm ,NgModel} from '@angular/forms';
import { HttpClient, HttpClientModule, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

import { ChartOptions, ChartType, ChartDataset} from 'chart.js';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  



sum(a: number, b: number): number {
  return a + b;
}

 minmax(a:number, b:number):number {
  
  if(a>b)
  {
   return  a;
  }
  else
  {
    return b;
  }
}






}

