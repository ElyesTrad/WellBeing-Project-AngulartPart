import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCategoriesComponent } from './views-categories.component';

describe('ViewsCategoriesComponent', () => {
  let component: ViewsCategoriesComponent;
  let fixture: ComponentFixture<ViewsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
