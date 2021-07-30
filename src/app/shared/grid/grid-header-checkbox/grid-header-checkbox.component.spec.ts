import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeaderCheckboxComponent } from './grid-header-checkbox.component';

describe('GridHeaderCheckboxComponent', () => {
  let component: GridHeaderCheckboxComponent;
  let fixture: ComponentFixture<GridHeaderCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridHeaderCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeaderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
