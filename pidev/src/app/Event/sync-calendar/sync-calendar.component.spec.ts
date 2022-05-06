import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncCalendarComponent } from './sync-calendar.component';

describe('SyncCalendarComponent', () => {
  let component: SyncCalendarComponent;
  let fixture: ComponentFixture<SyncCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
