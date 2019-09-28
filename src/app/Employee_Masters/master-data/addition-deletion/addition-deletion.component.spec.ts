import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionDeletionComponent } from './addition-deletion.component';

describe('AdditionDeletionComponent', () => {
  let component: AdditionDeletionComponent;
  let fixture: ComponentFixture<AdditionDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
