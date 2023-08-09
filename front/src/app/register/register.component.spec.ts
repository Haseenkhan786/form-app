
import { HttpClientTestingModule, HttpTestingController,provideHttpClientTesting } from '@angular/common/http/testing';

 import { HttpClient, HttpClientModule, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';

 import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { PersondataComponent } from '../persondata/persondata.component';
import { Validators } from '@angular/forms';
 import { RegisterComponent } from './register.component';
 import { RouterTestingModule } from '@angular/router/testing';
 import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RegisterComponent', () => {
 
  let fixture: ComponentFixture<RegisterComponent>;
  // fixture = TestBed.createComponent(RegisterComponent);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

  });

  

  it('addition is : 100 ', () => {
    expect(RegisterComponent.add()).toEqual(100)
  }
  )


 it('oddeven',() =>{
  expect(RegisterComponent.oddeven(9)).toBe('odd')
 }
 )

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



  it('can test POST', () => {
    const testData: any = {
    name: 'Test',
    gender:'male',
    fromDate:'15-08-2023' ,
    toDate:'23-08-2023',
    phone:'1234567890',
    selectedFile:new File([], 'test.pdf') ,
    email:'john.doe@example.com'

} ;
  
    // Make an HTTP post request
    httpClient.post<any>('http://localhost:8080/postemployees',testData)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );


      const req = httpTestingController.expectOne('http://localhost:8080/postemployees');
      
      // // Assert that the request is a GET.
       expect(req.request.method).toEqual('POST');
    
      // // Respond with mock data, causing Observable to resolve.
      // // Subscribe callback asserts that correct data was returned.
       req.flush(testData);
    
      // // Finally, assert that there are no outstanding requests.
       httpTestingController.verify();
      //  console.log(testData)


      })






      

});


