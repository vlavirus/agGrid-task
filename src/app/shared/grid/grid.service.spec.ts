import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GridService } from './grid.service';
import { SetOnToggleCheckboxState } from '../../store/core.actions';

describe('GridService', () => {
  let service: GridService;
  let mockStore: MockStore;

  const mockGridItem = {
    thumbnails: 'test',
    publishedAt: new Date(),
    title: 'test',
    description: 'test',
    videoId: 'test',
  };

  const mockParamsRowsEqual = {
    api: {
      getDisplayedRowCount: () => 50,
      getSelectedRows: () => new Array(50),
    },
  };

  const mockParamsRowsNotEqual = {
    api: {
      getDisplayedRowCount: () => 50,
      getSelectedRows: () => new Array(11),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GridService,
        provideMockStore({
          initialState: {
            toggleCheckboxView: true,
            gridItems: [mockGridItem],
            toggleCheckboxState: false,
          },
        }),
      ],
    });
    service = TestBed.inject(GridService);
    mockStore = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRowData() should return correct grid item from store', () => {
    const expectedObservable = service.getRowData();
    expectedObservable.subscribe((res) => {
      expect(res).toEqual([mockGridItem]);
    });
  });

  it('getToggleCheckboxView() should return correct Checkbox View', () => {
    const expectedObservable = service.getToggleCheckboxView();
    expectedObservable.subscribe((res) => {
      expect(res).toBeFalse();
    });
  });

  it('selectionChanged() should dispatch SetOnToggleCheckboxState(true) if rows equal', () => {
    const spyOnDispatch = spyOn(mockStore, 'dispatch');
    service.selectionChanged(mockParamsRowsEqual);

    expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(true));
  });

  it('selectionChanged() should dispatch SetOnToggleCheckboxState(false) if rows not equal', () => {
    const spyOnDispatch = spyOn(mockStore, 'dispatch');
    service.selectionChanged(mockParamsRowsNotEqual);

    expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(false));
  });
});
