import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTrackerComponent } from './movement-tracker.component';

describe('MovementTrackerComponent', () => {
  let component: MovementTrackerComponent;
  let fixture: ComponentFixture<MovementTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
