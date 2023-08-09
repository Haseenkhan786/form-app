import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { PersondataComponent } from './persondata.component';

// describe('PersondataComponent', () => {
// //   let component: PersondataComponent;
// //   let fixture: ComponentFixture<PersondataComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PersondataComponent]
//     });
//     // fixture = TestBed.createComponent(PersondataComponent);
//     // component = fixture.componentInstance;
//     // fixture.detectChanges();
//   });

//   it('myname', () => {
//     expect(PersondataComponent.myname).toEqual('hello');

//   });
// });



//Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';

describe('Person Data testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
  
      // Inject the http service and test controller for each test
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
    /// Tests begin ///


    it('can test HttpClient.get', () => {
        const testData: any = {name: 'Test',
        gender:'male',
        fromDate:'15-08-2023' ,
        toDate:'23-08-2023',
        phone:'1234567890',
        selectedFile:new File([], 'test.pdf') ,
        email:'john.doe@example.com'
    
    };
      
      //  Make an HTTP GET request
        httpClient.get<any>('http://localhost:8080/getemployees')
          .subscribe(data =>
            // When observable resolves, result should match test data
            expect(data).toEqual(testData)
          );
      
        // // The following `expectOne()` will match the request's URL.
        // // If no requests or multiple requests matched that URL
        // // `expectOne()` would throw.
        const req = httpTestingController.expectOne('http://localhost:8080/getemployees');
      
        // // Assert that the request is a GET.
         expect(req.request.method).toEqual('GET');
      
        // // Respond with mock data, causing Observable to resolve.
        // // Subscribe callback asserts that correct data was returned.
         req.flush(testData);
      
        // // Finally, assert that there are no outstanding requests.
         httpTestingController.verify();
        
      });

  });







// import { Injectable } from "@angular/core";

// import { HttpClient, HttpErrorResponse } from "@angular/common/http";
// import { catchError } from "rxjs/operators";
 
// import { Observable, throwError } from "rxjs";

// import { TestBed, inject } from "@angular/core/testing";
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from "@angular/common/http/testing";
//  import { AppComponent } from '../app.component';
// import { RegisterComponent } from '../register/register.component';


 
// describe("DataAccessService", () => {
//   let httpTestingController: HttpTestingController;
//   let dataAccessService: PersondataComponent;
//   let baseUrl = "http://localhost:8081/getemployees";
//   let traveller: RegisterComponent;
 
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });
 
//     httpTestingController = TestBed.get(HttpTestingController);
//     traveller = {
      
//       name: "John",
//       gender: "male",
//       fromDate:'15-08-2023' ,
//          toDate:'23-08-2023',
//         phone:'1234567890',
//       selectedFile:new File([], 'test.pdf') ,
//         email:'john.doe@example.com'
//     };
//   });
 
//   beforeEach(inject(
//     [PersondataComponent],
//     (service: PersondataComponent) => {
//       dataAccessService = service;
//     }
//   ));


//   it("should return data", () => {
//     let result: RegisterComponent[];
//     dataAccessService.getEmployees().subscribe(
//         (data:any)=> {
//       result = data;
//     });
//     const req = httpTestingController.expectOne({
//       method: "GET",
//       url: baseUrl
//     });
   
//     req.flush([traveller]);
   
//     expect(result[]).toEqual(traveller);
//   });
// });