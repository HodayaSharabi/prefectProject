import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServicesComponent } from './company-services.component';

describe('CompanyServicesComponent', () => {
  let component: CompanyServicesComponent;
  let fixture: ComponentFixture<CompanyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
