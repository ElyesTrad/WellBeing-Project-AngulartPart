import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSideBarComponent } from './quiz-side-bar.component';

describe('QuizSideBarComponent', () => {
  let component: QuizSideBarComponent;
  let fixture: ComponentFixture<QuizSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
