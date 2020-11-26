import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAndIlluminationsComponent } from './comments-and-illuminations.component';

describe('CommentsAndIlluminationsComponent', () => {
  let component: CommentsAndIlluminationsComponent;
  let fixture: ComponentFixture<CommentsAndIlluminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsAndIlluminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAndIlluminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
