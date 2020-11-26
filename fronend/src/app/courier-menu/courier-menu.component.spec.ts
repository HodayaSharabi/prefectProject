import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierMenuComponent } from './courier-menu.component';

describe('CourierMenuComponent', () => {
  let component: CourierMenuComponent;
  let fixture: ComponentFixture<CourierMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
