import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMadeComponent } from './orders-made.component';

describe('OrdersMadeComponent', () => {
  let component: OrdersMadeComponent;
  let fixture: ComponentFixture<OrdersMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
