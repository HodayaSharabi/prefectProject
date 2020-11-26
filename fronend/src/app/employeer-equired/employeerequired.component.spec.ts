import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerequiredComponent } from './employeerequired.component';

describe('EmployeerequiredComponent', () => {
  let component: EmployeerequiredComponent;
  let fixture: ComponentFixture<EmployeerequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
