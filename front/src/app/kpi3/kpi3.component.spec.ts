import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpi3Component } from './kpi3.component';

describe('Kpi3Component', () => {
  let component: Kpi3Component;
  let fixture: ComponentFixture<Kpi3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kpi3Component]
    });
    fixture = TestBed.createComponent(Kpi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
