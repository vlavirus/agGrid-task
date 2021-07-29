import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImgComponent } from './grid-img.component';

describe('GridImgComponent', () => {
  let component: GridImgComponent;
  let fixture: ComponentFixture<GridImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridImgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
