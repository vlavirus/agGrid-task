import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { YoutubeApiService } from '../services/youtube-api.service';
import { GridComponent } from './grid.component';
import { columnDefsConst, statusBarConst } from './grid.constant';
import { GridService } from './grid.service';

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

  const mockGridService = jasmine.createSpyObj('gridService', [
    'getToggleCheckboxView',
    'getRowData',
    'selectionChanged',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({}, {})],
      declarations: [GridComponent],
      providers: [
        YoutubeApiService,
        HttpClientTestingModule,
        {
          provide: GridService,
          useValue: mockGridService,
        },
        provideMockStore({
          initialState: {
            toggleCheckboxView: true,
            gridItems: [mockGridItem],
            toggleCheckboxState: false,
          },
        }),
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
    gridService.selectionChanged(mockParamsRowsEqual);

    expect(gridService.selectionChanged).toHaveBeenCalled();
  });
});
