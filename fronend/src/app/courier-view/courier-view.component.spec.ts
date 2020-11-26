import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierViewComponent } from './courier-view.component';

describe('CourierViewComponent', () => {
  let component: CourierViewComponent;
  let fixture: ComponentFixture<CourierViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
