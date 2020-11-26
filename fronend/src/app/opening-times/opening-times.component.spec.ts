import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningTimesComponent } from './opening-times.component';

describe('OpeningTimesComponent', () => {
  let component: OpeningTimesComponent;
  let fixture: ComponentFixture<OpeningTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
