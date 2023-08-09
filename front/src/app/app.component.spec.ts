import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { RegisterComponent } from './register/register.component';
import { PersondataComponent } from './persondata/persondata.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('sum is :  ',() =>{
    expect(component.sum(70,20)).toEqual(90)
  }
  )
  it('minmax', () =>{
    expect(component.minmax(8,7)).toBe(8)
  }
  )
  

});

