import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpi4Component } from './kpi4.component';

describe('Kpi4Component', () => {
  let component: Kpi4Component;
  let fixture: ComponentFixture<Kpi4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kpi4Component]
    });
    fixture = TestBed.createComponent(Kpi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
