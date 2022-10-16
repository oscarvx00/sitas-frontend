import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNotEnabledComponent } from './module-not-enabled.component';

describe('ModuleNotEnabledComponent', () => {
  let component: ModuleNotEnabledComponent;
  let fixture: ComponentFixture<ModuleNotEnabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleNotEnabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleNotEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
