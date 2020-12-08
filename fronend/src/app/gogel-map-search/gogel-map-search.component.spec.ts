import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GogelMapSearchComponent } from './gogel-map-search.component';

describe('GogelMapSearchComponent', () => {
  let component: GogelMapSearchComponent;
  let fixture: ComponentFixture<GogelMapSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GogelMapSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GogelMapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
