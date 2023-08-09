import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi3',
  templateUrl: './kpi3.component.html',
  styleUrls: ['./kpi3.component.css']
})
export class Kpi3Component {






  constructor(private http: HttpClient ) { }

 
  kpi3data: any[] = [];
  
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {

    this.http.get<any[]>('http://localhost:8080/getkpi3').subscribe(
      (data:any) => {
        this.kpi3data = data;
        console.log(data);
        
        
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

}
