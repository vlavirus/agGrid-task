import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridToggleButtonComponent } from './grid-toggle-button.component';

describe('GridToggleButtonComponent', () => {
  let component: GridToggleButtonComponent;
  let fixture: ComponentFixture<GridToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridToggleButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});