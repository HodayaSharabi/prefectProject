import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSelectionComponent } from './shipping-selection.component';

describe('ShippingSelectionComponent', () => {
  let component: ShippingSelectionComponent;
  let fixture: ComponentFixture<ShippingSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingSelectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
