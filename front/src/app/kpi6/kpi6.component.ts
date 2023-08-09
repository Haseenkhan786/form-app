import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-kpi6',
  templateUrl: './kpi6.component.html',
  styleUrls: ['./kpi6.component.css']
})
export class Kpi6Component {



constructor(private http: HttpClient,private router:Router ) { }

 
kpi4data: any[] = [];

fullname:any[]=[];
leaveduration:any[]=[];

ngOnInit(): void {
  this.getEmployees();
}

getEmployees() {

  this.http.get<any[]>('http://localhost:8080/getkpi4').subscribe(
    (data:any) => {
      this.kpi4data = data;
      if (this.kpi4data != null) {

        for (let i = 0; i < this.kpi4data.length; i++) {

          this.fullname.push(this.kpi4data[i].FullName);

          this.leaveduration.push(this.kpi4data[i].Leave_duration);

        }

      }
      this.myChart();
      console.log("get data from getmethod")
      console.log(data);
      
      
      
    },
    (error) => {
      console.error('Error fetching employee data:', error);
    }
  );
}





 myChart()
 {  console.log("chart data", this.fullname,this.leaveduration)
   new Chart("myChart", {

 

  type: 'pie',
  data: {
      labels: this.fullname,
      datasets: [{
          label: 'Bar Chart',
          data: this.leaveduration,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
 }

// ngOnInit(): void {
//   this.myChart();
// }


 
}
