import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEventAdminComponent } from './model-event-admin.component';

describe('ModelEventAdminComponent', () => {
  let component: ModelEventAdminComponent;
  let fixture: ComponentFixture<ModelEventAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEventAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEventAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
