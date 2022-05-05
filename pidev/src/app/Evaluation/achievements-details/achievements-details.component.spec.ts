import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsDetailsComponent } from './achievements-details.component';

describe('AchievementsDetailsComponent', () => {
  let component: AchievementsDetailsComponent;
  let fixture: ComponentFixture<AchievementsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
