import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWiseViewComponent } from './time-wise-view.component';

describe('TimeWiseViewComponent', () => {
  let component: TimeWiseViewComponent;
  let fixture: ComponentFixture<TimeWiseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeWiseViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeWiseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
