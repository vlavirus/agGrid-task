import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { GetContextMenuItemsParams } from '@ag-grid-community/core';
import { YoutubeApiService } from '../services/youtube-api.service';
import { GridComponent } from './grid.component';
import { columnDefsConst, statusBarConst } from './grid.constant';
import { GridService } from './grid.service';
import {
  defaultMockStore,
  GridServiceStub,
  mockApiContextActionMenuItems,
  mockApiContextMenuItems,
  mockGridContextMenu,
  mockGridContextWithActionMenu,
} from '../mock-test-data/mock-test-data.constant';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let gridService: GridService;

  const mockParamsRowsEqual = {
    api: {
      getDisplayedRowCount: () => 50,
      getSelectedRows: () => new Array(50),
    },
  };

  const mockGridItem = {
    thumbnails: 'test',
    publishedAt: new Date(),
    title: 'test',
    description: 'test',
    videoId: 'test',
  };

  const mockGridParams = {
    api: {
      api: () => 50,
      columnApi: () => new Array(50),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({}, {})],
      declarations: [GridComponent],
      providers: [
        YoutubeApiService,
        HttpClientTestingModule,
        {
          provide: GridService,
          useClass: GridServiceStub,
        },
        provideMockStore(defaultMockStore),
      ],
    }).overrideTemplate(GridComponent, `<div></div>`);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    gridService = TestBed.inject(GridService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rowSelection', () => {
    expect(component.rowSelection).toEqual('multiple');
  });

  it('should initialize columnDefs', () => {
    expect(component.columnDefs).toEqual(columnDefsConst);
  });

  it('should initialize statusBarConst', () => {
    expect(component.statusBar).toEqual(statusBarConst);
  });

  it('onGridReady() should init gridApi', () => {
    component.onGridReady(mockGridParams);

    expect(component.gridApi).toBeTruthy();
  });

  it('onSelectionChanged() should call selectionChanged from gridService', () => {
    const spy = spyOn(gridService, 'selectionChanged').and.callThrough();
    component.onSelectionChanged(mockParamsRowsEqual);
    gridService.selectionChanged(mockParamsRowsEqual);

    expect(spy).toHaveBeenCalled();
  });

  it('getContextMenuItems() should return default  items', () => {
    const expected = component.getContextMenuItems(
      mockGridContextMenu as unknown as GetContextMenuItemsParams,
    );

    expect(expected).toEqual(mockApiContextMenuItems);
  });

  it('getContextMenuItems() should return default items with action', () => {
    const expected = component.getContextMenuItems(
      mockGridContextWithActionMenu as unknown as GetContextMenuItemsParams,
    );

    expect(JSON.stringify(expected)).toEqual(JSON.stringify(mockApiContextActionMenuItems));
  });
});
