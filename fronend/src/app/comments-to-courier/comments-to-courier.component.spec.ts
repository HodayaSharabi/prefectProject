import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsToCourierComponent } from './comments-to-courier.component';

describe('CommentsToCourierComponent', () => {
  let component: CommentsToCourierComponent;
  let fixture: ComponentFixture<CommentsToCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsToCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsToCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
