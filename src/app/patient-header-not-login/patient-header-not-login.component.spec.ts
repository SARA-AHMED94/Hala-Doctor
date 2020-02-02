import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHeaderNotLoginComponent } from './patient-header-not-login.component';

describe('PatientHeaderNotLoginComponent', () => {
  let component: PatientHeaderNotLoginComponent;
  let fixture: ComponentFixture<PatientHeaderNotLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientHeaderNotLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHeaderNotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
