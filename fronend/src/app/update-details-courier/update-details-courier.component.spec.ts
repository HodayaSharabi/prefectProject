import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsCourierComponent } from './update-details-courier.component';

describe('UpdateDetailsCourierComponent', () => {
  let component: UpdateDetailsCourierComponent;
  let fixture: ComponentFixture<UpdateDetailsCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailsCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailsCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
