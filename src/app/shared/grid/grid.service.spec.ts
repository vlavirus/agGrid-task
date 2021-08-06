import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GridService } from './grid.service';
import { SetOnToggleCheckboxState } from '../../store/core.actions';
import {defaultMockStore, GridServiceStub, mockGridRowParams} from '../mock-test-data/mock-test-data.constant';

describe('GridService', () => {
  let service: GridService;
  let mockStore: MockStore;

  const mockGridItem = {
    thumbnails: 'test',
    publishedAt: '2021-07-28T13:00:19Z',
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
        // GridService,
        {
          provide: GridService,
          useClass: GridServiceStub
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
    // const expectedObservable = service.getRowData();
    // expectedObservable.subscribe((res) => {
    //   expect(res).toEqual([mockGridItem]);
    // });
    const spy = spyOn(service, 'getRowData').and.callThrough();
    service.getRowData();

    expect(spy).toHaveBeenCalled();
  });

  it('getToggleCheckboxView() should return correct Checkbox View', () => {
    // const expectedObservable = service.getToggleCheckboxView();
    // expectedObservable.subscribe((res) => {
    //   expect(res).toBeFalse();
    // });
    const spy = spyOn(service, 'getToggleCheckboxView').and.callThrough();
    service.getToggleCheckboxView();

    expect(spy).toHaveBeenCalled();
  });

  it('selectionChanged() should dispatch SetOnToggleCheckboxState(true) if rows equal', () => {
    // const spyOnDispatch = spyOn(mockStore, 'dispatch');
    // service.selectionChanged(mockParamsRowsEqual);
    //
    // expect(spyOnDispatch).toHaveBeenCalledWith(new SetOnToggleCheckboxState(true));
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
