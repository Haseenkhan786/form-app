import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpi6Component } from './kpi6.component';

describe('Kpi6Component', () => {
  let component: Kpi6Component;
  let fixture: ComponentFixture<Kpi6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kpi6Component]
    });
    fixture = TestBed.createComponent(Kpi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
