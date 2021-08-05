import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { GridToggleButtonComponent } from './grid-toggle-button.component';

describe('GridToggleButtonComponent', () => {
  let component: GridToggleButtonComponent;
  let fixture: ComponentFixture<GridToggleButtonComponent>;

  const mockGridItem = {
    thumbnails: 'test',
    publishedAt: new Date(),
    title: 'test',
    description: 'test',
    videoId: 'test',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridToggleButtonComponent],
      imports: [StoreModule.forRoot({}, {})],
      providers: [
        provideMockStore({
          initialState: {
            toggleCheckboxView: true,
            gridItems: [mockGridItem],
            toggleCheckboxState: false,
          },
        }),
      ],
    }).overrideTemplate(GridToggleButtonComponent, `<div></div>`);
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
