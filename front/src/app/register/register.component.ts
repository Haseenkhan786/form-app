import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgControl, NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
// import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uploadedFile(uploadedFile: any) {
    throw new Error('Method not implemented.');
  }

  static rselectedFile: any = null;
  



  ngOnInit(): void {
  }

  constructor(private http: HttpClient, private router: Router) { }

 

  static add() {
    return 100;
  }

  static oddeven(a: number) {
    if (a % 2 == 0) {
      return 'even'
    }
    else {
      return 'odd'
    }
  }


  name: string = '';
  gender: string = '';
  fromDate: string = '';
  toDate: string = '';
  phone: string = '';
  selectedFile: any = null;
  email: string = '';


  tableData: boolean = true;
  tableBtn: boolean = true;

  showTable() {
    this.tableData = false;
    this.tableBtn = false;
    this.router.navigateByUrl('/persondata');


  }

    showkpi3() {
      this.tableData = false;
      this.tableBtn = false;
      this.router.navigateByUrl('/kpi3');
  
  
    }

    showkpi4() {
      this.tableData = false;
      this.tableBtn = false;
      this.router.navigateByUrl('/kpi4');
    
    
    }
      showkpi6() {
      this.tableData = false;
      this.tableBtn = false;
      this.router.navigateByUrl('/kpi6');
    
    
    }
    


  myFunction(): void {
    alert('Form Submitted Successfully!');
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // formData: any;
  @ViewChild('formData', { static: false }) formData: any;


  checkfromdate(fromDateInput: any) {
    if (this.fromDate) {
      const selectedDate = new Date(this.fromDate);
      const today = new Date();

      // Set the time component of today's date to 00:00:00 for accurate comparison
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        fromDateInput.control.setErrors({ pastDate: true });
      } else {
        fromDateInput.control.setErrors(null);
      }
    }
  }



  checkDateValidity(toDateInput: any) {
    if (this.fromDate && this.toDate) {
      const fromDate = new Date(this.fromDate);
      const toDate = new Date(this.toDate);

      const today = new Date();


      if (toDate < fromDate || toDate < today) {
        toDateInput.control.setErrors({ lessThanFromDate: true });
      } else {
        toDateInput.control.setErrors(null);
      }
    }
  }







  submitForm() {

    const formData = new FormData();

    formData.append('name', this.name);
    formData.append('gender', this.gender);
    formData.append('fromDate', this.fromDate);
    formData.append('toDate', this.toDate);
    formData.append('phone', this.phone);
    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    formData.append('email', this.email);


    if (this.formData.valid) {
      // Perform actions when the form is valid and submitted

      console.log('Form data is:');
      console.log('Name:', this.name);
      console.log('Gender:', this.gender);
      console.log('From Date:', this.fromDate);
      console.log('To Date:', this.toDate);
      console.log('Phone:', this.phone);
      console.log('selectedFile', this.selectedFile, this.selectedFile.name);
      console.log('Email:', this.email);




      this.http.post<any>('http://localhost:8080/postemployees', formData)
        .subscribe(
          (error) => {
            // Handle any errors that occur during the request
            console.log('Form submission failed', error);
          },
          (response) => {
            // Handle the response from the server
            console.log('Form submitted successfully', response);
          }




        );



    }

    else {
      // Handle form validation errors
      console.log('Form has validation errors');
    }




  }









}






