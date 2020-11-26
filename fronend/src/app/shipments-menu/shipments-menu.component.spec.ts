import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shipmentsMenuComponent } from './shipments-menu.component';

describe('couriersMenuComponent', () => {
  let component: shipmentsMenuComponent;
  let fixture: ComponentFixture<shipmentsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shipmentsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shipmentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
