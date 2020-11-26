import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountInformationComponent } from './customer-account-information.component';

describe('CustomerAccountInformationComponent', () => {
  let component: CustomerAccountInformationComponent;
  let fixture: ComponentFixture<CustomerAccountInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
