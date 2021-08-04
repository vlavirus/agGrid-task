import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCountBarComponent } from './grid-count-bar.component';

describe('GridCountBarComponent', () => {
  let component: GridCountBarComponent;
  let fixture: ComponentFixture<GridCountBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridCountBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCountBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render visible', () => {
    const app = fixture.componentInstance;

    expect(app.visible).toBeTruthy();
  });

  it('should contain <p>', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').innerText).toBe('Selected records:');
  });
});
