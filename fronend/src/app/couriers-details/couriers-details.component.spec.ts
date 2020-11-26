import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouriersDetailsComponent } from './couriers-details.component';

describe('CouriersDetailsComponent', () => {
  let component: CouriersDetailsComponent;
  let fixture: ComponentFixture<CouriersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouriersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouriersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
