import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRemovalComponent } from './customer-removal.component';

describe('CustomerRemovalComponent', () => {
  let component: CustomerRemovalComponent;
  let fixture: ComponentFixture<CustomerRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
