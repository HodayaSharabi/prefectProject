import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlightenmentAndCommentsComponent } from './enlightenment-and-comments.component';

describe('EnlightenmentAndCommentsComponent', () => {
  let component: EnlightenmentAndCommentsComponent;
  let fixture: ComponentFixture<EnlightenmentAndCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlightenmentAndCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlightenmentAndCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
