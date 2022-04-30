import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzHomeComponent } from './quizz-home.component';

describe('QuizzHomeComponent', () => {
  let component: QuizzHomeComponent;
  let fixture: ComponentFixture<QuizzHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
