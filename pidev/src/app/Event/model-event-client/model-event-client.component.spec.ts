import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEventClientComponent } from './model-event-client.component';

describe('ModelEventClientComponent', () => {
  let component: ModelEventClientComponent;
  let fixture: ComponentFixture<ModelEventClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEventClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEventClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
