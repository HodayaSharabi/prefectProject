import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewCustomerComponent } from './update-new-customer.component';

describe('UpdateNewCustomerComponent', () => {
  let component: UpdateNewCustomerComponent;
  let fixture: ComponentFixture<UpdateNewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
