import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {
  

    static myname ='hello';

  constructor(private http: HttpClient ) { }

 
  employees: any[] = [];
  
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {

    this.http.get<any[]>('http://localhost:8080/getemployeesdata').subscribe(
      (data:any) => {
        this.employees = data;
        console.log(data);
        
        
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }




}
