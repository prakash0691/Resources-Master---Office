import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMasterComponent } from './resources-master.component';

describe('ResourcesMasterComponent', () => {
  let component: ResourcesMasterComponent;
  let fixture: ComponentFixture<ResourcesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
