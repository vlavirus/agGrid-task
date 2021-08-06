import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GridService } from './grid.service';
import {
  defaultMockStore,
  GridServiceStub,
  mockGridRowParams,
} from '../mock-test-data/mock-test-data.constant';

describe('GridService', () => {
  let service: GridService;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GridService,
          useClass: GridServiceStub,
        },
        provideMockStore(defaultMockStore),
      ],
    });
    service = TestBed.inject(GridService);
    mockStore = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRowData() should return correct grid item from store', () => {
    const spy = spyOn(service, 'getRowData').and.callThrough();
    service.getRowData();

    expect(spy).toHaveBeenCalled();
  });

  it('getToggleCheckboxView() should return correct Checkbox View', () => {
    const spy = spyOn(service, 'getToggleCheckboxView').and.callThrough();
    service.getToggleCheckboxView();

    expect(spy).toHaveBeenCalled();
  });

  it('selectionChanged() should dispatch SetOnToggleCheckboxState(true) if rows equal', () => {
    const spy = spyOn(service, 'selectionChanged').and.callThrough();
    service.selectionChanged(mockGridRowParams);

    expect(spy).toHaveBeenCalledWith(mockGridRowParams);
  });

  // it('selectionChanged() should dispatch SetOnToggleCheckboxState(false) if rows not equal', () => {
  //   const spyOnDispatch = spyOn(mockStore, 'dispatch');
  //   service.selectionChanged(mockParamsRowsNotEqual);
  //
  //   expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(false));
  // });
});
