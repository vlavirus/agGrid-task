import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
import { GridToggleButtonComponent } from './grid-toggle-button.component';
import { SetOnToggleCheckboxState, SetOnToggleCheckboxView } from '../../../store/core.actions';

describe('GridToggleButtonComponent', () => {
  let component: GridToggleButtonComponent;
  let fixture: ComponentFixture<GridToggleButtonComponent>;
  let mockStore: MockStore;
  const mockGridItem = {
    thumbnails: 'test',
    publishedAt: new Date(),
    title: 'test',
    description: 'test',
    videoId: 'test',
  };

  const mockParams = {
    api: {
      getDisplayedRowCount: () => 50,
      getSelectedRows: () => new Array(50),
    },
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
    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('agInit() should init params', () => {
    component.agInit(mockParams as IStatusPanelParams);

    expect(component['params']).toBeTruthy();
  });

  it('onClick() should dispatch SetOnToggleCheckboxView()', () => {
    const spyOnDispatch = spyOn(mockStore, 'dispatch');
    component.onClick();

    expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxView());
  });

  it('onToggleStyleProperty() should change styleProperty to false', () => {
    component.onToggleStyleProperty();

    expect(component.styleProperty).toBeFalse();
  });
});
