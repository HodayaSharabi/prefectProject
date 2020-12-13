import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMapComponent } from './router-map.component';

describe('RouterMapComponent', () => {
  let component: RouterMapComponent;
  let fixture: ComponentFixture<RouterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
